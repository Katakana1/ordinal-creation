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
var g3 = {
  amount: 0,
  cost: 100000,
  buy: function() {
    if(money < this.cost) return 0;
    if(money >= this.cost) {
      money-=this.cost
      this.amount++
      this.cost = Math.round(this.cost*1.1)
    }
  }
}
var g4 = {
  amount: 0,
  cost: 100000001,
  buy: function() {
    if(money < this.cost) return 0;
    if(money >= this.cost) {
      money-=this.cost
      this.amount++
      this.cost = Math.round(this.cost*1.1)
    }
  }
}
var g5 = {
  amount: 0,
  cost: 1e10,
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
  document.getElementById("gen1Cost").textContent = "Cost: " + format(g1.cost)
  document.getElementById("gen2Amount").textContent = "You have " + format(g2.amount) + " G2's."
  document.getElementById("gen2Cost").textContent = "Cost: " + format(g2.cost)
  document.getElementById("gen3Amount").textContent = "You have " + format(g3.amount) + " G3's."
  document.getElementById("gen3Cost").textContent = "Cost: " + format(g3.cost)
  document.getElementById("gen4Amount").textContent = "You have " + format(g4.amount) + " G4's."
  document.getElementById("gen4Cost").textContent = "Cost: " + format(g4.cost)
  document.getElementById("gen5Amount").textContent = "You have " + format(g5.amount) + " G5's."
  document.getElementById("gen5Cost").textContent = "Cost: " + format(g5.cost)
}
function format(num){
  let power = Math.floor(Math.log10(num))
  let mantissa = num/Math.pow(10,power)
  if(power < 8) return Math.round(num)
  if(power >= 8) return mantissa.toFixed(2) + " * 10^" + power
}
function tick(diff){
  money+=(g1.amount*diff)
  g1.amount+=(g2.amount*diff)
  g2.amount+=(g3.amount*diff)
  g3.amount+=(g4.amount*diff)
  g4.amount+=(g5.amount*diff)
}
function gameLoop(){
  tick(1/30)
  updateThings()
}
setInterval(gameLoop,33.3)
