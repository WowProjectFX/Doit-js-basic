let now = new Date();
let firstDay = new Date("2017-03-28");
let toNow = now.getTime();
let toFirst = firstDay.getTime();
let passedTime = toNow - toFirst;
let passedDay = Math.round(passedTime/(1000*60*60*24));
document.querySelector('#accent').innerText = passedDay + "일";

function calcDate (days) {
    let future = toFirst + days * (24 * 60 * 60 * 1000);
    let someDay = new Date(future);
    let year = someDay.getFullYear();
    let month = someDay.getMonth() + 1;
    let date = someDay.getDate();
    document.querySelector('#date' + days).innerText = year + "년 " + month + "월 " + date + "일";
}


calcDate(100);
calcDate(200);
calcDate(365);
calcDate(1000);