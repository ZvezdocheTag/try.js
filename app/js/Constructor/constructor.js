var App = function(string) {
	this.status = string;
}; // создаем основной конструктоор


// создаем открытый метод и передаем все сс myApp в него

App.prototype.getString = function() {

	return this.status;
};

var workApp = new App("yes it some");

// console.log(workApp.getString());

var statusObj = {
  
  status: "OJ"

};

var status = App.prototype.getString.apply(statusObj);

// console.log(status);

// фннкция добавляющая данные


var sum = function(){

	var i , sum = 0;

	for(i = 0; i < arguments.length; i += 1 ) {

		sum += arguments[i];
	}

	return sum;
}


// console.log(sum(4,3,1,3,12,21,21));

var add = function(a, b){

	if(typeof a !== 'number' || typeof b !== 'number' ) {

		throw {
			name: "TypeError",
			message: "add needs number"
		}


	}



	return a + b;
};




var try_it = function() {

	try {
		add("seven");
	} catch (e) {
		console.log(e.name + ':' + e.message);
	}
}

try_it();
// console.log(add("fas",4));


var myObj = (function(){
	var value = 0;

	return {
		increment: function (inc) {
			value += typeof inc === 'number' ? inc : 1;
		},
		gerValue: function () {
			return value;
		}
	}
})();

// console.log(myObj.increment(3));
// console.log(myObj.gerValue());





var quo = function(status) {
	return {
		get_status: function( ) {
			return status;
		}
	};
};


var myQuo = quo("namaste");
document.writeln(myQuo.get_status());



















// function fullName() {

// 	return this.first + this.second;
// }

// var user = {
// 	first: "Donald",
// 	second: "Duck"
// };

// var shoeRes = fullName.call(user);

// console.log(shoeRes);

// var anotherUser = {
// 	first: "Vinni",
// 	second: "Puhh"

// };

// var vinni = fullName.call(anotherUser);


// console.log(vinni);



