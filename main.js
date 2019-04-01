var money = 10
var g1 = {
  amount: 0,
  cost: 10,
  buy: function() {
    if(money < g1.cost) return 0;
    if(money >= g1.cost) {
      money-=g1.cost
      g1.amount++
      g1.cost = Math.round(g1.cost*1.1)
    }
  }
}
function updateThings() {
  document.getElementById("money").textContent = "You have " + format(money) + " points."
  document.getElementById("gen1Amount").textContent = "You have " + format(g1.amount) + " G1's."
  document.getElementById("gen1Cost").textContent = "It costs " + format(g1.cost) + " points to buy a G1."
}
function format(num){
  let power = Math.floor(Math.log10(num))
  let mantissa = num/Math.pow(10,power)
  if(power < 8) return Math.round(num)
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
