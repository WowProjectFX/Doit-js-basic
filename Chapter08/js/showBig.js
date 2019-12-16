let bigPic = document.querySelector("#cup");
let samllPics = document.querySelectorAll(".small");

for (let i = 0; i < samllPics.length; i++) {
    samllPics[i].addEventListener("click", chagePic);
    
}

function chagePic() {
    let newPic = this.src;
    bigPic.setAttribute("src", newPic);
}