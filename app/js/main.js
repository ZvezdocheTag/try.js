// var user = {
// 	firstname: "Ввсилий",
// 	lastname: "Антипов",
// 	patronomic: "Петрович"
// }

// function alertName(first, second) {

// 	alert(this[first] + ' ' + this[second] + ' ');
// }


// alertName.call(user, 'firstname', 'lastname');
// alertName.call(user, 'firstname', 'patronomic');

// function AdminUser(firstname, lastname) {
// 	User.call(this, firstname, lastname);

// 	this.password = function() {
// 	alert("test pass");
// 	}
// }

// function User(firstname, lastname) {

// 	this.firstName = firstname;
// 	this.lastName = lastname;

// 	this.sayHi = function() {

// 		alert( this.firstName + ' ' + this.lastName);
// 	}
// }


// var aser = new User("Dagi", "Dodon");
// aser.sayHi();

// var admin = new AdminUser("CHilo", "Solari");

// admin.sayHi();
// admin.password();




var WEEKDAYS = ['пн', 'вт', "ср", "чт", "пт", "сб", "вс"];

function countDays(arr) {
	return WEEKDAYS[arr];
}

// Декоратор 
function wrapperDecorator(f, before, after) {
	return function() {
		return before + f.apply(this, arguments) + after; // универстальный метод обертки 
	}
}

var getDayInDiv = wrapperDecorator(countDays, '<div>', '</div>');

for(var i = 0; i <= 7; i++) {
	console.log(getDayInDiv(i));
}




function anotherDecorator(f) {

	return function() {
		return 2*f.apply(this, arguments);
	}
}

function multiply(a, b) {
	return a + b;
}


var multyResult = anotherDecorator(multiply);
console.log(multyResult(20,30));