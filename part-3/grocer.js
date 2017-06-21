console.log("it's working!")

//Cart modal display:
let cartModal = document.getElementById("cartModal");
let cartButton = document.getElementById("cart-button")
cartButton.onclick = function() {
  cartModal.style.display = "block";
}

//cart modal functionality
let closeModal = document.getElementById('close');
closeModal.onclick = function () {
  cartModal.style.display = "none";
}

let clearCart = document.getElementById('clear');
clearCart.onclick = function () {
  itemCount.innerHTML = 0
}

//add to cart buttons functionality:
let itemCount = document.getElementById("cart-item-count")
itemCount.innerHTML = 0;

let addOnions = document.getElementById("onion-button");
addOnions.onclick = function() {
  itemCount.innerHTML ++
}

let addTomatoes = document.getElementById("tomato-button");
addTomatoes.onclick = function() {
  itemCount.innerHTML ++
}

let addCarrots = document.getElementById("carrot-button");
addCarrots.onclick = function() {
  itemCount.innerHTML ++
}

let addColdCuts = document.getElementById("cold-cut-button");
addColdCuts.onclick = function() {
  itemCount.innerHTML ++
}

let addOrangeJuice = document.getElementById("orange-juice-button");
addOrangeJuice.onclick = function() {
  itemCount.innerHTML ++
}

let addIceCream = document.getElementById("ice-cream-button");
addIceCream.onclick = function() {
  itemCount.innerHTML ++
}

let addPizza = document.getElementById("pizza-button");
addPizza.onclick = function() {
  itemCount.innerHTML ++
}
