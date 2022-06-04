let belly = 0
let result = document.getElementById("result")


function drinkWine() {
  belly += 200
  result.textContent = belly + " ml"
}

function drinkBeer() {
    belly += 500
    result.textContent = belly + " ml"
}

function drinkMartine() {
    belly += 100
    result.textContent = belly + " ml"
}

function drinkMojito() {
    belly += 200
    result.textContent = belly + " ml"
}
