function register() {
    let newLi = document.createElement("Li");
    let userName = document.querySelector("#userName");
    let newText = document.createTextNode(userName.value);
    newLi.appendChild(newText);

    let nameList = document.querySelector("#nameList");
    nameList.appendChild(newLi);
    userName.value = "";
}
