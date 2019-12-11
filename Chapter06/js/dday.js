let now = new Date();
let firstDay = new Date("2017-03-28");
let toNow = now.getTime();
let toFirst = firstDay.getTime();
let passedTime = toNow - toFirst;
let passedDay = Math.round(passedTime/(1000*60*60*24));
let future = toFirst + 100 * (24 * 60 * 60 * 1000);
let someDay = new Date(future);

function SomeDay () {
    this.set
}

let year = someDay.getFullYear();
let month = someDay.getMonth();
let date = someDay.getDate();

document.querySelector('#accent').innerText = passedDay + "일";
document.querySelector('#date100').innerText = year + "년 " + month + "월 " + date + "일";

