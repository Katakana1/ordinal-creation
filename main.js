var money = 10
var g1 = {
  amount: 0,
  cost: 0,
  buy: function() {
    if(money < this.cost) return 0;
    if(money >= this.cost) {
      money-=this.cost
      this.amount++
      this.cost = Math.round(this.cost*1.1)
      document.getElementById("money").textContent = "You have " + money + " points."
      document.getElementById("gen1Amount").textContent = "You have " + g1.amount + " G1's."
      document.getElementById("gen1Cost").textContent = "It costs " + g1.cost + " points to buy a G1."
    }
  }
}
function updateThings() {
  document.getElementById("money").textContent = "You have " + money + " points."
  document.getElementById("gen1Amount").textContent = "You have " + g1.amount + " G1's."
  document.getElementById("gen1Cost").textContent = "It costs " + g1.cost + " points to buy a G1."
}
function format(num){
  let power = Math.floor(Math.log10(num))
  let mantissa = amount/Math.pow(10,power)
  if(power < 8) return Math.round(amount)
  if(power > 8) return mantissa.toFixed(2) + " * 10^" + power
}
function tick(diff){
  money+=(g1.amount*diff)
}
function gameLoop(){
  tick(1/20)
  updateThings()
}
setInterval(gameLoop,50)
document.getElementById("money").textContent = "You have " + money + " points."
document.getElementById("gen1Amount").textContent = "You have " + g1.amount + " G1's."
document.getElementById("gen1Cost").textContent = "It costs " + g1.cost + " points to buy a G1."
