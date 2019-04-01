var money = 10
var g1 = {
  amount: 0,
  cost: 10,
  buy: function() {
    if(money < this.cost) return 0;
    if(money >= this.cost) {
      money-=this.cost
      this.amount++
      this.cost = Math.round(this.cost*1.1)
    }
  }
}
var g2 = {
  amount: 0,
  cost: 1000,
  buy: function() {
    if(money < this.cost) return 0;
    if(money >= this.cost) {
      money-=this.cost
      this.amount++
      this.cost = Math.round(this.cost*1.1)
    }
  }
}
function updateThings() {
  document.getElementById("money").textContent = "You have " + format(money) + " points."
  document.getElementById("gen1Amount").textContent = "You have " + format(g1.amount) + " G1's."
  document.getElementById("gen1Cost").textContent = "It costs " + format(g1.cost) + " points to buy a G1."
  document.getElementById("gen2Amount").textContent = "You have " + format(g2.amount) + " G2's."
  document.getElementById("gen2Cost").textContent = "It costs " + format(g2.cost) + " points to buy a G2."
}
function format(num){
  let power = Math.floor(Math.log10(num))
  let mantissa = num/Math.pow(10,power)
  if(power < 8) return Math.round(num)
  if(power > 8) return mantissa.toFixed(2) + " * 10^" + power
}
function tick(diff){
  money+=(g1.amount*diff)
  g1.amount+=(g2.amount*diff)
}
function gameLoop(){
  tick(1/20)
  updateThings()
}
setInterval(gameLoop,50)
