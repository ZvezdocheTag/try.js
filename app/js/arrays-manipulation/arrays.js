const simpleArr = (function(){

	var arr = [1, 2, 3, 4, 5, 4, 23, 4, 5, 9, 6];
	var arrFunc = Array.from(arr); //преобразуем в массив

	
	var sum = arr.reduce((a,b) => a + (+b || 0), 0); // сумма всех элементов массива.
													 // c преобразование в строку не числового значения

	// Поиск в массиве и фильтрация массива

	var findElem = arr.find(e => e > 2); //Ищем в массиве первый элемент больше 2-х
	var findElemIndex = arr.findIndex(e => e > 2); //Ищем в массиве индекс первого элемент больше 2-х
	

	var filterArr = arr.filter(e => e > 2); // Фильтруем массив и возвращаем новый массив с элементами больше 2х

	var arrClone = arr.slice();

	arrClone = arr.sort((a,b) => a - b); // простая сортировака по возрастанию 
	arrClone = arr.sort((a,b) => b - a); // простая сортировака по убыванию 

	arrClone.sort((a, b) => (a < b && -1) || (a > b && 1) || 0); //по возрастанию ( + проверка типов)
	arrClone.sort((a, b) => (a < b && 1) || (a > b && -1) || 0); //по убыванию ( + проверка типов)

	console.log(arrClone);

});


// Сортировка массива объектов по их свойствам

const compareArrElem = (function(){

	
});




//https://habrahabr.ru/post/279867/