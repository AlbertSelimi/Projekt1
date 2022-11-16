let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset')

let Hours = 00;
let Minutes = 00;
let Seconds = 00;
let Miliseconds = 00;

let interval = null;

let status = "stopped";

let laps = null;
let lapNow = null;

startBtn.addEventListener('click', () =>  {
	timer = true;
	stopWatch();
});
stopBtn.addEventListener('click', () =>  {
	timer = false;
});
resetBtn.addEventListener('click',  () => {
	timer = false;
	Miliseconds = 0;
	Seconds = 0;
	Minutes = 0;
	Hours = 0;

	document.getElementById('timerHours').innerHTML = "00";
	document.getElementById('timerMinutes').innerHTML = "00";
	document.getElementById('timerSeconds').innerHTML = "00";
	document.getElementById('timerMiliseconds').innerHTML = "00";
      	
});
function stopWatch() {
	if (timer) {
		Miliseconds++;
		if (Miliseconds == 100) {
			Seconds++;
			Miliseconds = 0;
		}
		if (Seconds == 60) {
			Minutes++;
			Seconds = 0;
		}
		if (Minutes == 60) {
			Hours++;
			Minutes = 0;
			Seconds = 0;
		}

		var HoursString = Hours;
		var MinutesString = Minutes;
		var SecondsString = Seconds;
		var MilisecondsString = Miliseconds;

		if (Hours < 10) {
			HoursString = "0" + HoursString;
		}
		if (Minutes < 10) {
			MinutesString = "0" + MinutesString;
		}
		if (Seconds < 10) {
			SecondsString = "0" + SecondsString;
		}
		if (Miliseconds < 10) {
			MilisecondsString = "0" + MilisecondsString;
		}
		 document.getElementById('Hours').innerHTML = HoursString;
		 document.getElementById('Minutes').innerHTML = MinutesString;
		 document.getElementById('Seconds').innerHTML = SecondsString;
		 document.getElementById('Miliseconds').innerHTML = MilisecondsString;
		 setTimeout(stopWatch, 10);


         function lap() {

			lapNow = Hours + " : " + Minutes + " : " + Seconds + " : " + Miliseconds; 
			laps = document.getElementById('lapRecord').innerHTML + lapNow;
	  
			document.getElementById('lapRecord').innerHTML = laps;
	
		}

	}
}