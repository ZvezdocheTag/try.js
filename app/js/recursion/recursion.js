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



	function addTo(value) {

		if (value === undefined || arguments.length == 0) {
			return initStr;
		}


		return initStr += value;
	};

	addTo.clear = function() {

		return initStr = " ";
	}

	return addTo;


	}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
// console.log( buffer() );

// console.log( buffer.clear() );

// console.log( buffer() );


// Сортировк 


	var users = [{
	  name: "Вася",
	  surname: 'Иванов',
	  age: 20
	  
	}, {
	  name: "Петя",
	  surname: 'Чапаев',
	  age: 25

	}, {
	  name: "Маша",
	  surname: 'Медведева',
	  age: 18
	}];


	function byField(field) {

		return function(a, b) {
			return a.field > b.field ? 1 : 1;
		}
	}

	users.sort(byField('name'));




		users.forEach(function(user) {

		  // alert( user.name );

		}); 

		users.sort(byField('age'));

		users.forEach(function(user) {

		  // alert( user.name );

}); 

// Фильтрация через функцию 

	var arr = [1, 2, 3, 4, 5, 6, 7];

	function filterArray(arr, func) {

		var initNewArr = [];

		for(var i = 0; i < arr.length; i++) {

			var val = arr[i];

			if(func(val)) {

				initNewArr.push(val);
			}
		}



		return initNewArr;

	}	


	// console.log(filterArray(arr, function(a){

	// 	return a % 2 == 0;
	// }));

	function inBetween(a,b) {

		return function(x) {
			return a <= x && b >= x;
		} 
	}

	// console.log(filterArray(arr, inBetween(2,5)));


	function inArray(arr) {

		return function(x) {
			return arr.indexOf(x) != -1;
		};

	}

	// console.log(arr, inArray([2,3,4]));




function makeArmy() {

  var shooters = [];

  for (var i = 0; i < 10; i++) {

    var shooter = (function(x) {

      return function() {
        alert( x );
      };

    })(i);

    shooters.push(shooter);
  }

  return shooters;
}

var army = makeArmy();

army[0](); 
army[5](); 

})();