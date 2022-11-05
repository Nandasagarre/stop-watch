
var timeInetrvalId; // stores interval id
var min = 0;        // global min var
var hr  =0;        // global hour var
var c = 0;        //global seconds variable


//will rest all conters
function resetCounters(){
	min = 0;
	hr  =0;
	c  =0;
}

// background sound player class
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("loop","");
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

//audio player object creation
var ticTocSound = new sound("./assets/tic-tac.mp3");


// func for hour
function startHourCount(){
	if(hr == 60){
		hr = 0;
	}
    hr++;
    document.getElementById("hr").innerText=hr;
}

//function for min
function startMincount(){
	if(min == 60){
		startHourCount();
		min = 0;
	}
	min++;
	document.getElementById("min").innerText=min;
}


// function for sec
//has set interval
function startClockCounting(){
    ticTocSound.play();
	document.getElementById("start").classList.add("disabled");
	timeInetrvalId = setInterval(function(){	
		if(c == 60){
			startMincount();
			c = 0;
		}
       c++;
       document.getElementById("sec").innerText=c;
	},250);}


//when stop btn clicked
function stopClockCounting(){
	ticTocSound.stop();

	document.getElementById("start").classList.remove("disabled");

    clearInterval(timeInetrvalId);
}

// when reset is cliked
function resetClockCounting(){
	resetCounters();
	document.getElementById("start").classList.remove("disabled");
	clearInterval(timeInetrvalId);
	ticTocSound.stop();
	document.getElementById("sec").innerText="00";
	document.getElementById("min").innerText="00";
	document.getElementById("hr").innerText="00";
}

//event listeners for buttons
document.getElementById("start").addEventListener("click", startClockCounting);
document.getElementById("stop").addEventListener("click", stopClockCounting);
document.getElementById("reset").addEventListener("click", resetClockCounting);