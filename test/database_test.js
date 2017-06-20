const expect = require ('chai').expect
let pgp = require('pg-promise')()
let connectionString = 'postgres://localhost:5432/grocery_store'
let db = pgp(connectionString)

//Testing function to get names of items from a specific section:
function itemsInSection(section) {
      return db.any(`SELECT name
        FROM groceries.items
        WHERE section = $1`, section)
}

it('returns the items "Flour", "Pasta", and "Rice"', function() {
  var result = itemsInSection('bulk');
  return result.then(function(result) {
    expect(result).to.deep.equal([{name: 'Flour'}, {name: 'Pasta'}, {name: 'Rice'}]);
  });
});

//Testing function to get names of items that cost <$10 in ascending price order:
function cheapItems() {
  return db.any(`SELECT name FROM groceries.items
    WHERE price < 10.00
    ORDER BY price`)
}

it('returns "Fish" first and "Honey" last', function() {
  var result = cheapItems();
  return result.then(function(result) {
    expect(result[0]).to.deep.equal({name: 'Fish'});
    expect(result[result.length - 1]).to.deep.equal({name: 'Honey'});
  });
});

//Testing function to get count of items in a specific section:
function countItemsInSection(section) {
   return db.result('SELECT * FROM groceries.items WHERE section = $1', section)
    .then(function(result) {
      return result.rowCount;
    })
}

it('returns 5', function() {
  var result = countItemsInSection('packaged');
  return result.then(function(result) {
    expect(result).to.equal(5);
  })
})
