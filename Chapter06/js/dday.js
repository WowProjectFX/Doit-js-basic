let now = new Date();

let firstDay = new Date("2017-03-28");

let toNow = now.getTime();

let toFirst = firstDay.getTime();

let passedTime = toNow - toFirst;

let passedDay = Math.round(passedTime/(1000*60*60*24));

document.querySelector('#accent').innerText = passedDay + "일";

