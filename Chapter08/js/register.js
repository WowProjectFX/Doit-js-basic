function register() {
    let newP = document.createElement("p");
    let userName = document.querySelector("#userName");
    let newText = document.createTextNode(userName.value);
    newP.appendChild(newText);

    let delBtn = document.createElement("span");
    let delText = document.createTextNode("X");
    delBtn.setAttribute("class", "del");
    delBtn.appendChild(delText);
    newP.appendChild(delBtn);

    let nameList = document.querySelector("#nameList");
    nameList.insertBefore(newP, nameList.children[0]);
    //nameList.appendChild(newLi);
    userName.value = "";

    let removeBttns = document.querySelectorAll(".del");

    for (let i = 0; i < removeBttns.length; i++) {
        removeBttns[i].addEventListener("click", function() {
            if(this.parentNode.parentNode)
                this.parentNode.parentNode.removeChild(this.parentNode);
        });
    }

}
