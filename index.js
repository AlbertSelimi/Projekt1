let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let ora = 00;
let min = 00;
let sek = 00;
let msek = 00;

{
	window.alert ("Pershendetje!")
}

startBtn.addEventListener('click', function () {
	timer = true;
	stopWatch();
});

stopBtn.addEventListener('click', function () {
	timer = false;
});

resetBtn.addEventListener('click', function () {
	timer = false;
	ora = 0;
	min = 0;
	sek = 0;
	document.getElementById('ora').innerHTML = "00";
	document.getElementById('min').innerHTML = "00";
	document.getElementById('sek').innerHTML = "00";
	document.getElementById('msek').innerHTML = "00";
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

		let oraString = ora;
		let minString = min;
		let sekString = sek;
		let msekString = msek;

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
