let isOpen = false;

let bigPic = document.querySelector('#cup');
let smallPic = document.querySelectorAll('.small');

for (let i = 0; i < smallPic.length; i++) {
    smallPic[i].addEventListener("click", function() {
        bigPic.src = this.src;
    });
}

let view = document.querySelector("#view");
view.addEventListener("click", function() {
    
    if(isOpen === false) {
        document.querySelector("#detail").style.display = "block";
        view.innerText = "상세 설명 닫기";
        isOpen = true;
    }else{
        document.querySelector("#detail").style.display = "none";
        view.innerText = "상세 설명 열기";
        isOpen = false;
    }

});