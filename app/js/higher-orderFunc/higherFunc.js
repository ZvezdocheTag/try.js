
var higherFunc = (function(){

	function not(f){ //функция инвертирует результат  

		return function(){
			var result = f.apply(this, arguments); // вызываем функцию f
			
			return !result; 			

		}
	}

	var even = function(x){ // Функция определяющая четность числа
		return x % 2 === 0;
	}

	var odd = not(even);

	var functionRes = [1,1,3,5].every(odd); // вернет true, все элементы массива нечетные 

	console.log(functionRes);

});

higherFunc();