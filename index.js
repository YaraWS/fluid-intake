let belly = 0
let result = document.getElementById("result")
let water = 200

function drinkWater() {
  belly += 200
  result.textContent = belly + " ml"
}

function drinkTea() {
    belly += 500
    result.textContent = belly + " ml"
}

function drinkCoffee() {
    belly += 100
    result.textContent = belly + " ml"
}

function drinkWine() {
    belly += 200
    result.textContent = belly + " ml"
}
