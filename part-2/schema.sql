DROP DATABASE grocery_store;

CREATE DATABASE grocery_store;

CREATE SCHEMA groceries;

CREATE TABLE groceries.items (
  product_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price NUMERIC NOT NULL,
  section TEXT NOT NULL
);

CREATE TABLE groceries.shoppers (
  shopper_id SERIAL PRIMARY KEY,
  shopper_lastname TEXT NOT NULL,
  shopper_firstname TEXT NOT NULL
);

CREATE TABLE groceries.orders (
  order_number INT NOT NULL,
  shopper INT REFERENCES groceries.shoppers(shopper_id) NOT NULL,
  order_date DATE NOT NULL,
  item INT REFERENCES groceries.items(product_id)
);
