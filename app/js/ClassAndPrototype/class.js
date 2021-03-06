var classTest = (function(){


// Создания нового объекта наследующего прототип
	function inherit(p){

		if (p == null) {
			throw TypeError();
		}

		if(Object.create) {

			return Object.create(p);
		}

		var t = typeof p;

		if(t !== "object" && t !== "function") {
			throw TypeError();
		}

		function f() {};

		f.prototype = p;

		return new f();
	}


// Простой класс JavaScript представляющий диапазон значений 

	function range(from , to) {

		var r = inherit(range.methods);

		r.from = from;
		r.to = to;

		return r;

	}

	range.methods = {

		includes: function(x) {
			return this.from <= x && x <= this.to;
		},

		// foreach: function(f) {
		// 	for(var x = Math.ceil(this.from); x <= this.to; x++) f(x);

		// },
		// Возвращаем строковое представление диапазона
		toString: function() {return "(" + this.from + "..." + this.to + ")"; }
	}

	var r = range(1,12);

	console.log(r.includes(3));
	

	console.log(r.toString());


});

var classTestConstructor = (function(){

// Инициализируем объект 

function Range(from, to) {

	this.from = from;
	this.to = to;


}

Range.prototype = {

	includes: function(x) {
		return this.from <= x && x <= this.to;

	},

	foreach: function(f) {
		for(var x = Math.ceil(this.from); x <= this.to; x++) f(x);
	},

	toString: function() { return "(" + this.from + "..." + this.to + ")";}
}

var r = new Range(1,5);


console.log(r.includes(3));
	
console.log(r.toString());

console.log(r instanceof Range);
});

var constructorDef = (function(){

	var F = function(){};
	var p = F.prototype; // объект прототип связанный с ней
	var c = p.constructor; // функция связанная с прототипом
	console.log(c === F );

	// var n = 3;
	// n.times(function(n) {console.log(n + " привет"); });
	// Number.prototype.times = function(f, context) {
	// 	var n = Number(this);
	// 	for(var i = 0; i < n; i++) f.call(context, i);
	
	// }



	// Определения класса с помощью конструктора


	function typeAndValue(x) {
		if(x == null) return ""; // значения null undefined не имеют конструктора
		switch(x.constructor) {
			case Number: return "Number: " + x;
			case String: return "String: '" + x + "'";
			case Date: return "Date: " + x;
			case RegExp: return "RegExp: " + x;
			case Complex: return "Complex: " + x;
		}
	}

	var res = typeAndValue("Bo ob");
	console.log(res);
})();

