CREATE DATABASE grocery_store;

CREATE SCHEMA groceries;

CREATE TABLE groceries.items (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price NUMERIC NOT NULL,
  section TEXT NOT NULL
);

CREATE TABLE grocery_store.shoppers (

);

CREATE TABLE grocery_store.orders (

);
