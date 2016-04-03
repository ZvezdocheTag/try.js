var memoizeFunc = (function(){

	// Вычесляем факториал числа
	// Фленаган 8.4.1  стр.201

	function factorial(num){

		if(isFinite(num) && num > 0 && num === Math.round(num)) { //Только конечные положительные числа

			if(!(num in factorial)) { //Если не сохранялось ранее

				factorial[num] = num * factorial(num - 1);
			}
			return factorial[num];
		}
		else {return NaN;}

	}

	factorial[0] = 1; // Инициализация кэша базовым случаем
	factorial[1] = 1;

	// factorial[2] = 5;

	
	console.log(factorial(6));
	console.log(factorial[3]);

	// Требуеться задать как минимум два элемента в факториал чтобы функция работала


	// Возвращает мемоизованную версию функции f
	function memoize(f) {
		var cache = {}; // Кэш значений сохраняется в замыкании

		return function() {
			// Создаеть строковую версию массива
			//  для использования в качестве ключа кэша
		
			var key = arguments.length + Array.prototype.join.call(arguments, ", " );
			if(key in cache) {
				return cache[key];
			}
			else {
				return cache[key] = f.apply(this, arguments);
			}	
		};
	}

	// Возвращает наибольший общий делитель двух целых чисел
	function gcd(a,b) {
		var t; // Временная переменная для обмена 

		if( a <  b) { // убедиться что a > b 
			t = b, b = a, a = t;
		}

		while(b != 0) { // Алгоритм Эвклида помска НОД
			t = b,
			b = a%b,
			a = t;
			
		}
		return a;
	}

	var gcdemo = memoize(gcd);
	console.log(gcdemo(85, 187));




})();