var testJson = (function(){



	var number = "[1, 2, 3, 5, [2, 3, 5, 43] ]"

	var numberArr = JSON.parse(number);

	console.log(numberArr[4]);


	var user = {
		name: "Jana",
		age: 34,
		gender: "male",
		from: "Malayzia"

	}

	user = JSON.stringify(user, function(key, value){

		if(key === "from") return undefined; // Исключаем из массива from;

		return value;
	});

	console.log(user);






});