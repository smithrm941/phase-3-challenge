DROP DATABASE grocery_store;

CREATE DATABASE grocery_store;

CREATE SCHEMA groceries;

CREATE TABLE groceries.items (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price NUMERIC NOT NULL,
  section TEXT NOT NULL
);

CREATE TABLE groceries.shoppers (
  id SERIAL PRIMARY KEY,
  shopper_lastname TEXT NOT NULL,
  shopper_firstname TEXT NOT NULL
);

CREATE TABLE groceries.orders (
  id SERIAL PRIMARY KEY,
  shopper INT REFERENCES groceries.shoppers(id) NOT NULL,
  order_date DATE NOT NULL,
  item1 INT REFERENCES groceries.items(id),
  item2 INT REFERENCES groceries.items(id),
  item3 INT REFERENCES groceries.items(id),
  item4 INT REFERENCES groceries.items(id),
  item5 INT REFERENCES groceries.items(id)
);
