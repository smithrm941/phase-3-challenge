//Cart modal display:
let cartModal = document.getElementById("cartModal");
let cartButton = document.getElementById("cart-button")
cartButton.onclick = function() {
  cartModal.style.display = "block";
}

//Cart modal features:
let totalCost = 0
document.getElementById('total-cost').innerHTML = totalCost.toFixed(2);


let itemsInCart = document.getElementById('list-items-in-cart');
let closeModal = document.getElementById('close');
let clearCart = document.getElementById('clear');

closeModal.onclick = function () {
  cartModal.style.display = "none";
}

clearCart.onclick = function () {
  itemCount.innerHTML = 0
  itemsInCart.innerHTML = "";
  totalCost = 0;
  updateTotalCost();
}


//Add to Cart buttons functionality:
let itemCount = document.getElementById("cart-item-count")
itemCount.innerHTML = 0;
function updateTotalCost () {
  document.getElementById('total-cost').innerHTML = totalCost.toFixed(2);
}

let addOnions = document.getElementById("onion-button");
addOnions.onclick = function() {
  itemCount.innerHTML ++
  itemsInCart.innerHTML += "<li>Onions $1.11</li>"
  totalCost+= 1.11;
  updateTotalCost();
}

let addTomatoes = document.getElementById("tomato-button");
addTomatoes.onclick = function() {
  itemCount.innerHTML ++
  itemsInCart.innerHTML += "<li>Tomatoes $1.56</li>"
  totalCost += 1.56;
  updateTotalCost();
}

let addCarrots = document.getElementById("carrot-button");
addCarrots.onclick = function() {
  itemCount.innerHTML ++
  itemsInCart.innerHTML += "<li>Carrots $2.88</li>"
  totalCost += 2.88
  updateTotalCost();
}

let addColdCuts = document.getElementById("cold-cut-button");
addColdCuts.onclick = function() {
  itemCount.innerHTML ++
  itemsInCart.innerHTML += "<li>Cold Cuts $1.47</li>"
  totalCost += 1.47
  updateTotalCost();
}

let addOrangeJuice = document.getElementById("orange-juice-button");
addOrangeJuice.onclick = function() {
  itemCount.innerHTML ++
  itemsInCart.innerHTML += "<li>Orange Juice $2.52</li>"
  totalCost += 2.52
  updateTotalCost();
}

let addIceCream = document.getElementById("ice-cream-button");
addIceCream.onclick = function() {
  itemCount.innerHTML ++
  itemsInCart.innerHTML += "<li>Ice Cream $14.08</li>"
  totalCost += 14.08
  updateTotalCost();
}

let addPizza = document.getElementById("pizza-button");
addPizza.onclick = function() {
  itemCount.innerHTML ++
  itemsInCart.innerHTML += "<li>Pizza $16.61</li>"
  totalCost += 16.61
  updateTotalCost();
}
