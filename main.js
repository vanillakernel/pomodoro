// We need 4 functions.
//
// 1: countDown(): begins countdown.
// 	This will be called via onclick, and will update
// 	the clock div until at 0, then animate for 10 seconds
// 	then reset.
//
// 2: plusTime(): adds 1 minute to timer. We may not block
// 	the clock from changing, as this is actually a more 
// 	useful use case, though it is very much anti-pomodoro :)
//
// 3: minusTime(): removes 1 minute from timer.
//
// 4: resetTimer(): Simply sets the clock to 25 minutes.
// 	this gets called when the #reset button is clicked
// 	and when the countdown = 0.
//

// FUNCTIONAL PROGRAMMING FTW. OOP is for nouns, this is all verbing.

var minutes = 25;
var seconds = 00;
var remaining = 0; 

function plusTime(){
	minutes+=1; //just add a minute. 
}

function minusTime(){
	minutes-=1; //just take a minute. 
}

function countDown()
{
	document.getElementById('clockDiv').innerHTML=minutes+":"+seconds+" remaining"
		seconds=seconds-1;
		remaining=setTimeout("countDown()", 1000)

	if (seconds == 0){
		seconds = 00;
	}		
	if (seconds<1)
	{ 
		minutes=minutes-1; seconds=59;
	}

	if (minutes<0)
	{
		reset();
	}
}

function reset()
{
	reset(remaining)
		document.getElementById('clockDiv').value="GAME OVER MAN. GAME OVER."
}
