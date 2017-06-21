console.log("it's working!")

//Cart modal display:
let cartModal = document.getElementById("cartModal");
let cartButton = document.getElementById("cart-button")
cartButton.onclick = function() {
  cartModal.style.display = "block";
}

//Cart modal features:
let itemsInCart = document.getElementById('list-items-in-cart');
let totalCost = document.getElementById('total-cost');
totalCost.innerHTML = 0;
let closeModal = document.getElementById('close');
let clearCart = document.getElementById('clear');

closeModal.onclick = function () {
  cartModal.style.display = "none";
}

clearCart.onclick = function () {
  itemCount.innerHTML = 0
  itemsInCart.innerHTML = "";
}


//Add to Cart buttons functionality:
let itemCount = document.getElementById("cart-item-count")
itemCount.innerHTML = 0;

let addOnions = document.getElementById("onion-button");
addOnions.onclick = function() {
  itemCount.innerHTML ++
  itemsInCart.innerHTML += "<li>Onions $1.11</li>"
  totalCost.innerHTML += 1.11
}

let addTomatoes = document.getElementById("tomato-button");
addTomatoes.onclick = function() {
  itemCount.innerHTML ++
  itemsInCart.innerHTML += "<li>Tomatoes $1.56</li>"
  totalCost.innerHTML += 1.56
}

let addCarrots = document.getElementById("carrot-button");
addCarrots.onclick = function() {
  itemCount.innerHTML ++
  itemsInCart.innerHTML += "<li>Carrots $2.88</li>"
  totalCost.innerHTML += 2.88
}

let addColdCuts = document.getElementById("cold-cut-button");
addColdCuts.onclick = function() {
  itemCount.innerHTML ++
  itemsInCart.innerHTML += "<li>Cold Cuts $1.47</li>"
  totalCost.innerHTML += 1.47
}

let addOrangeJuice = document.getElementById("orange-juice-button");
addOrangeJuice.onclick = function() {
  itemCount.innerHTML ++
  itemsInCart.innerHTML += "<li>Orange Juice $2.52</li>"
  totalCost.innerHTML += 2.52
}

let addIceCream = document.getElementById("ice-cream-button");
addIceCream.onclick = function() {
  itemCount.innerHTML ++
  itemsInCart.innerHTML += "<li>Ice Cream $14.08</li>"
  totalCost.innerHTML += 14.08
}

let addPizza = document.getElementById("pizza-button");
addPizza.onclick = function() {
  itemCount.innerHTML ++
  itemsInCart.innerHTML += "<li>Pizza $16.61</li>"
  totalCost.innerHTML += 16.61
}
