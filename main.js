var money = 10
var g1 = {
  amount: 0,
  cost: 0,
  :function buy() {
    if(money < g1.cost) return 0;
    if(money >= g1.cost) {
      money-=g1.cost
      g1.amount++
      g1.cost = Math.round(g1.cost*1.1)
    }
  }
}
function format(num){
  let power = Math.floor(Math.log10(num))
  let mantissa = amount/Math.pow(10,power)
  if(power < 8) return Math.round(amount)
  if(power > 8) return mantissa.toFixed(2) + " * 10^" + power
}

document.getElementById("money").textContent = "You have " + money + " points."
document.getElementById("gen1Amount").textContent = "You have " + g1.amount + " G1's."
document.getElementById("gen1Cost").textContent = "It costs " + g1.cost + " points to buy a G1."
