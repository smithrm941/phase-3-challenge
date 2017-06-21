# phase-3-challenge

to install dependencies:
```
  npm install
```
## Part 1: Calculations from URL

### The ```part-1``` folder contains a simple app to make calculations through URLs typed in a browser.

start the server with:

```
  npm start
  ```
example uses:

```
  URL: localhost:3000/zero
  renders: 0

  URL: localhost:3000/add?a=19&b=11
  renders: a + b = 30

  URL: localhost:3000/subtract?a=90&b=20
  renders a - b = 70

  URL: localhost:3000/double/49
  renders:49 times 2 is 98
```
## Part 2: Database for grocery store & tests

### The ```part-2``` folder contains data and queries to set up a grocery store database with tables for items, orders, and shoppers:

With postgres, use the queries from ```schema.sql``` to set up the database and ```load-data.sql``` to load the data from ```groceries.csv``` into the items table and insert data on shoppers and orders into those respective tables.

The ```database.js``` file contains functions that return the result of pg-promise queries on the grocery_store database.

The ```test``` folder contains Mocha + Chai tests of some pg-promise functions that query the database. Type ```npm test``` in the Terminal to run them.

## Part 3: Web Interface for grocery store

### The ```part-3``` folder contains HTML, CSS and JS files for a front-end only website where one can add grocery items into a cart that automatically sums the prices as items are added. Just open ```grocer.html``` in a browser to try it out.
