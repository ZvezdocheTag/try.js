var filterAr = (function (){


	// Мы можем отфильтровать пустые элементы 
	// из массива применив вот такую конструкцию


	var arr = ['',2,3,4,5,6,''].filter(Boolean);

	console.log(arr);


})();