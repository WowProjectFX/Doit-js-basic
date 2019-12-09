function Book(title, author, volume, price) {
    this.title = title
    this.author = author,
    this.volume = volume,
    this.price = price
}

let html = new Book("웹 표준의 정석", "Ko", "608", "28,000");
let youtube = new Book("유튜브 영상 만들기", "Lim", "368", "16,000");
let python = new Book("점프 투 파이썬", "Bang", "486", "18,000");

let bookList = [html, youtube, python];

document.write("<h1>책 제목으로 살펴보기</h1>");
for (let i = 0; i < bookList.length; i++) {
    document.write("<p>" + bookList[i].title + "\t" + bookList[i].price + "원 </p>");

}


