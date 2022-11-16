let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
var ora = 00;
var min = 00;
var sek = 00;
var msek = 00;
startBtn.addEventListener('click', () =>  {
	timer = true;
	stopWatch();
});
stopBtn.addEventListener('click', () =>  {
	timer = false;
});
resetBtn.addEventListener('click',  () => {
	timer = false;
	ora = 0;
	min = 0;
	sek = 0;
	document.querySelectorAll('timer').innerHTML
});
function stopWatch() {
	if (timer) {
		msek++;
		if (msek == 100) {
			sek++;
			msek = 0;
		}
		if (sek == 60) {
			min++;
			sek = 0;
		}
		if (min == 60) {
			ora++;
			min = 0;
			sek = 0;
		}
		var oraString = ora;
		var minString = min;
		var sekString = sek;
		var msekString = msek;
		if (ora < 10) {
			oraString = "0" + oraString;
		}
		if (min < 10) {
			minString = "0" + minString;
		}
		if (sek < 10) {
			sekString = "0" + sekString;
		}
		if (msek < 10) {
			msekString = "0" + msekString;
		}
		
		 document.getElementById('ora').innerHTML = oraString;
		 document.getElementById('min').innerHTML = minString;
		 document.getElementById('sek').innerHTML = sekString;
		 document.getElementById('msek').innerHTML = msekString;
		setTimeout(stopWatch, 10);
	}
}
