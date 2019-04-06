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
  cost: 1e8,
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
var prestige = {
  pending: 1,
  mult: 1,
  reset: function(){
    if(this.pending > this.mult){
      money = 10
      g1.amount = 0
      g1.cost = 10
      g2.amount = 0
      g2.cost = 1000
      g3.amount = 0
      g3.cost = 100000
      g4.amount = 0
      g4.cost = 1e8
      g5.amount = 0
      g5.cost = 1e10
      this.mult = this.pending
    }
  }
}
function updateThings() {
  document.getElementById("money").textContent = "You have " + format(money) + " points, with " + format(g1.amount * prestige.mult) + "/s."
  document.getElementById("gen1Amount").textContent = "You have " + format(g1.amount) + " G1's, with " + format(g2.amount * prestige.mult) + "/s."
  document.getElementById("gen1Cost").textContent = "Cost: " + format(g1.cost)
  document.getElementById("gen2Amount").textContent = "You have " + format(g2.amount) + " G2's, with " + format(g3.amount * prestige.mult) + "/s."
  document.getElementById("gen2Cost").textContent = "Cost: " + format(g2.cost)
  document.getElementById("gen3Amount").textContent = "You have " + format(g3.amount) + " G3's, with " + format(g4.amount * prestige.mult) + "/s."
  document.getElementById("gen3Cost").textContent = "Cost: " + format(g3.cost)
  document.getElementById("gen4Amount").textContent = "You have " + format(g4.amount) + " G4's, with " + format(g5.amount * prestige.mult) + "/s."
  document.getElementById("gen4Cost").textContent = "Cost: " + format(g4.cost)
  document.getElementById("gen5Amount").textContent = "You have " + format(g5.amount) + " G5's."
  document.getElementById("gen5Cost").textContent = "Cost: " + format(g5.cost)
  if(prestige.pending < prestige.mult){
    document.getElementById("pendMult").innerHTML = "Watch out! You can't prestige yet!<br>You can prestige with " + format((Math.pow(prestige.mult,6))*1e10) + " points."
  } else if(prestige.pending < 1000){
    document.getElementById("pendMult").textContent = "Pending multiplier: " + prestige.pending.toFixed(2) + "x"
  } else {
    document.getElementById("pendMult").textContent = "Pending multiplier: " + format(prestige.pending) + "x"
  }
  if(prestige.mult < 1000){
    document.getElementById("prestMult").textContent = "Prestige multiplier: " + prestige.mult.toFixed(2) + "x"
  } else {
    document.getElementById("prestMult").textContent = "Prestige multiplier: " + format(prestige.mult) + "x"
  }
}
function format(num){
  let power = Math.floor(Math.log10(num))
  let mantissa = num/Math.pow(10,power)
  if(power < 8) return Math.round(num)
  if(power >= 8) return mantissa.toFixed(2) + " * 10^" + power
}
function tick(diff){
  money+=(g1.amount*diff)*prestige.mult
  g1.amount+=(g2.amount*diff)*prestige.mult
  g2.amount+=(g3.amount*diff)*prestige.mult
  g3.amount+=(g4.amount*diff)*prestige.mult
  g4.amount+=(g5.amount*diff)*prestige.mult
  prestige.pending=(Math.pow(money/1e10,0.166666))
}
function gameLoop(){
  tick(1/30)
  updateThings()
}
setInterval(gameLoop,33.3)
