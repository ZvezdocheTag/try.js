(function () {
window.addEventListener('load', function () {
	var box1 = document.getElementById('box1');
	var statusdiv = document.getElementById('statusdiv');
	var startx = 0;
	var dist = 0;

box1.addEventListener('touchstart', function (e) {
	var touchobj = e.changedTouches[0];
	startx = parseInt(touchobj.clientX);
	statusdiv.innerHTML = 'Status: touch <br> start' + startx + 'px';
	e.preventDefault();
}, false);

box1.addEventListener('touchmove', function (e) {
	var touchobj = e.changedTouches[0];
	var dist = parseInt(touchobj.clientX) - startx;
	statusdiv.innerHTML = 'status: touchmove <br> horiz dist' + dist + 'px';
	e.preventDefault(e);

}, false);

box1.addEventListener('touchend', function (e) {
	var touchobj = e.changedTouches[0];
	statusdiv.innerHTML = "Status: touchend <br> is " + touchobj.clientX + "px";

	e.preventDefault(e);
}, false);
	


})
});

(function(){

	var touchFunc = {
// выводим элемент по которому происходит касание
	anyElem: document.body.addEventListener('touchstart', function(e){
				var touchobj = e.changedTouches[0];

				console.log(this.tagName);
				console.log(touchobj.target);
			}, false)
	}





});

(function(){

	window.addEventListener('load', function(){

		var box2 = document.getElementById("box2");
		var boxleft;
		var startx;
		var dist = 0;
		var touchobj = null;


		box2.addEventListener('touchstart', function(e){

			touchobj = e.changedTouches[0];
			boxleft = parseInt(box2.style.left);
			startx = parseInt(touchobj.clientX);

			e.preventDefault();

		}, false)

		box2.addEventListener('touchmove', function(e){

			touchobj = e.changedTouches[0];
			var dist = parseInt(touchobj.clientX) - startx;

			box2.style.left =  (( boxleft + dist > 450)
								 ? 450 : (boxleft + dist < 0)
								  ?  0 : boxleft + dist) + 'px';
			e.preventDefault();
		}, false)
	}, false)
})();