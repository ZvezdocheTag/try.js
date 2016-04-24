(function(){

	
	function f(a, b , c,d) {


		arguments.join = [].join;

		alert(arguments.join());

		var coptArr = [].slice.call(arguments);

		console.log(coptArr);
	}

	f(1,2,3, "sdfds");



	// заимствование методов
	var obj = {0: "a", 1: "b", length: 2, join: [].join};

	console.log(obj.join());

	var str = "Facilliate";

	var strResult = [].join.call(str, '+');

	console.log(strResult);


})();