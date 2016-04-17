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
})();