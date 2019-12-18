let checkList = document.querySelectorAll(".check");

for (let i = 0; i < checkList.length; i++) {
    checkList[i].addEventListener("click", function() {
        this.parentNode.style.color="#ccc";
    });
    
}