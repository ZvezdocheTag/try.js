// Пока не тяну нужно разбираться с данной функцией

var halffunct = (function(){

	// Вычесление среднего значения и стандартного отклонения
	var data = [1,2,3,3,4,5,5];
	var partial = function(){};

	var sum = function(x,y){return x + y;};
	var product = function(x,y){return x * y;};
	var neg = partial(product, -1); // определение других функций 
	var square = partial(Math.pow, undefined, 2);
	var sqrt = partial(Math.pow, undefined, .5);
	var reciprocal = partial(Math.pow, undefined, -1);


	var mean = product(reduce(data,sum), reciprocal(data,length));
	var sttdv = sqrt(product(reduce(map(data,
										compose(square,
													partial(sum, neg(mean)))), 
													sum),
														reciprocal(sum(data,length, -1))));

	
});

// Фленаган, стр.219