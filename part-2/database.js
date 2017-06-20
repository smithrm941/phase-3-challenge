let pgp = require('pg-promise')()
let connectionString = 'postgres://localhost:5432/grocery_store'
let db = pgp(connectionString)


//IDs, names, prices, and sections for all grocery items:
function allItems() {
  return db.any(`SELECT * FROM groceries.items`);
}

//IDs and names of all grocery items in the given section:
function itemsInSection(section){
  db.any(`SELECT product_id, name
    FROM groceries.items
    WHERE section = $1`, section);
}


//IDs and prices of all grocery items
//that cost less than $10.00
//ordered from lowest to highest price:
function cheapItems(){
  db.any(`SELECT product_id, price FROM groceries.items
    WHERE price < 10.00 ORDER BY price`);
}


//Count of all grocery items in the given section:
function countItemsInSection(section){
  db.result(`SELECT * FROM groceries.items WHERE section = $1`, section)
    .then(function(result) {
      return result.rowCount;
    });
}

//IDs and order dates for the 10 most recent orders:
function mostRecentOrders(){
  db.any(`SELECT order_number, order_date
    FROM groceries.orders
    GROUP BY order_number, order_date
    ORDER BY order_date DESC LIMIT 10`);
}

//Shopper's name who made the most recent order:
function lastShopperName() {
  db.one(`SELECT order_number, order_date, shopper_lastname, shopper_firstname
    FROM groceries.orders, groceries.shoppers
    WHERE orders.shopper = shoppers.shopper_id
    GROUP BY orders.order_number, orders.order_date, shoppers.shopper_lastname, shoppers.shopper_firstname
    ORDER BY orders.order_date DESC LIMIT 1`);
}

//Order total for a specific order:
function orderTotal(order_number){
  return db.one(`SELECT groceries.orders.order_number, order_date, SUM(groceries.items.price)
  FROM groceries.items, groceries.orders
  WHERE groceries.orders.item = groceries.items.product_id
  AND groceries.orders.order_number = $1 GROUP BY groceries.orders.order_number, groceries.orders.order_date`, order_number);
}
