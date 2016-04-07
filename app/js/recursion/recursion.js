var recursionFunct = (function(){




	var list = {

		value: 1,
		next: {
			value: 2,
			next: {
				value: 3,
				next: {
					value: 4,
					next: null
				}
			}
		}
	};

	function walkByList(list) {

		var result = [];

		function doPushList(list) {

			if(!list) return null;

			doPushList(list.next);

			console.log(list.value);

			result.push(list.value);
			
			return result;


		}

		doPushList(list);
		return result;
	}


console.log(walkByList(list));






});



var closureFunc = (function(){


// Push some result in array
var i;
var arr = [];

for(i = 0; i < 5; i++) {

	var newArr = i;

	arr.push(newArr);
	
}

console.log(arr);


// alert  greeting
	function alertName(fitst, last) {

		 console.log("Hello " + concatName());

		 function concatName() {

		 	return fitst + " " + last;
		 }

	}


	alertName("Jony", "Docer");




// Счетчик с возвращением значений через методы

		function counter() {
			var count = 0;

			return {

				run: function() {
					return count++;
				},

				set: function(value) {
					return count = value;
				},

				reset: function() {
					return count = 0;
				}
			};
		}

		var res = counter();


		// console.log(res.run());
		// console.log(res.run());
		// console.log(res.run());
		// console.log(res.run());
		// console.log(res.reset());
		// console.log(res.run());
		// console.log(res.run());
		// console.log(res.set(8));
		// console.log(res.run());



//Сумма через замыкание задача 
	

	function sum(a) {

		if(a !== undefined || a !== null) {

			return function nextAr(b) {

			return a + b;

		}

		}

		

	}

	var resSum = sum(3)(10);

	console.log(resSum);


// Строковый буфер 

function makeBuffer() { 

	var initStr = "";

	return function addTo(value) {

			if (value === undefined || arguments.length == 0) {
				return initStr;
			}


			return initStr += value;
		}
	}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
console.log( buffer() );


})();