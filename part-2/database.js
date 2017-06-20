let pgp = require('pg-promise')()
let connectionString = 'postgres://localhost:5432/grocery_store'
let db = pgp(connectionString)


//all items:
db.any(`SELECT * FROM groceries.items`)
      .then(function(data) {
          console.log(data);
      });

//all items from a section (dairy):
db.any('SELECT * FROM groceries.items WHERE section = $1', 'dairy')
    .then(function(data) {
        console.log(data);
    });

//cheap items (items < $10 from lowest to highest)
db.any(`SELECT * FROM groceries.items
  WHERE price < 10.00 ORDER BY price`)
    .then(function(data) {
        console.log(data);
    });

//count items in section (produce):
db.result('SELECT * FROM groceries.items WHERE section = $1', 'produce')
  .then(function(result) {
    console.log(result.rowCount);
  });

//id and order dates for 10 most recent orders:
db.any(`SELECT order_number, order_date
  FROM groceries.orders
  GROUP BY order_number, order_date
  ORDER BY order_date DESC LIMIT 10`)
  .then(function(data) {
    console.log(data);
  });

//shopper who made most recent order:
db.one(`SELECT groceries.orders.order_number, shopper_lastname, shopper_firstname
  FROM groceries.orders, groceries.shoppers
  WHERE groceries.orders.shopper = groceries.shoppers.shopper_id
  AND groceries.orders.order_number = 15
  GROUP BY groceries.orders.order_number, shoppers.shopper_lastname, shoppers.shopper_firstname`)
  .then(function(result) {
    console.log(result);
  })

//order total for a specific order:
db.one(`SELECT groceries.orders.order_number, order_date, SUM(groceries.items.price)
FROM groceries.items, groceries.orders
WHERE groceries.orders.item = groceries.items.product_id
AND groceries.orders.order_number = 9 GROUP BY groceries.orders.order_number, groceries.orders.order_date`)
  .then(function(result) {
    console.log(result);
  })
