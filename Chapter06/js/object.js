let toyRobot = {
  product: "123-12",
  name: "Robot",
  price: "25,000",
  madeIn: "korea",
  quantity: "10",
  showStock: function() {
    document.querySelector("#display").innerHTML =
      this.name + "제품은 " + this.quantity + "개 남았습니다.";
  },
  showPrice: function() {
    document.querySelector("#display2").innerHTML =
      this.name + "제품은 " + this.price + "원 입니다.";
  }
};

toyRobot.showStock();
toyRobot.showPrice();
