//:::::::::::::::::::VARIABLES::::::::::::::::::::
//""""FOR DATE PICKER"""
let datePick = document.getElementById('datePick');
let showDate = document.getElementById('showDOB');

//FOR """"DOB VALUE"""
let years = document.getElementById('years');
let months = document.getElementById('months');
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let seconds = document.getElementById('seconds');
let miliseconds = document.getElementById('miliseconds'); 


///::::::::::::::::LOGICS:::FUNCTIONS:::::::::::::::::::::::
datePick.addEventListener('change', function(){

  let options = {year: 'numeric', month: 'long', day: 'numeric'};  
  let selectdDate = new Date(this.value); 
  let  DOB = selectdDate.toLocaleDateString("en-US", options);
     
  showDate.innerHTML = DOB;

  let millisecs_DOB = Date.parse(DOB);
  let millisecs_today = Date.now();

  let ageInMilliSeconds = millisecs_today - millisecs_DOB;
 //console.log(ageInMilliSeconds);

 let milisecs = ageInMilliSeconds;
  let secs = 1000;
  let mints = secs*60;
  let hrs = mints*60;
  let day = hrs*24;
  let mon = day*30;
  let yrs = day*365;

  ///:::::::::::::::CALCULATION:::::::::::::::::::::
let yyy = Math.round(milisecs/yrs);
let mmm = yyy*12;
let ddd = yyy*365;
let hhh = Math.round(milisecs/hrs);
let sss = Math.round (milisecs/secs);
//::::::::::::::::FOR PRINTING:::::::::::::::::::::::
years.innerHTML = yyy;
months.innerHTML = mmm;
days.innerHTML = ddd;
hours.innerHTML = hhh;
seconds.innerHTML = sss;
miliseconds.innerHTML = milisecs;

})