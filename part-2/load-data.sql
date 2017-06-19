COPY groceries.items (name, price, section) FROM 'full/path/to/groceries.csv' DELIMITER ',' CSV HEADER;

INSERT INTO groceries.shoppers (shopper_lastname, shopper_firstname) VALUES
  ('Smith', 'Rhonda'),
  ('John', 'Public'),
  ('Solomon', 'Tom'),
  ('Solomon', 'Dick'),
  ('Solomon', 'Harry'),
  ('Solomon', 'Sally');

INSERT INTO groceries.orders (shopper, order_date, item1, item2, item3, item4, item5) VALUES
  (),
  (),
  (),
  (),
  (),
  (),
  (),
  (),
  (),
  (),
  (),
  (),
  (),
  (),
  (),
  (),
  (),
  (),
  (),
  ();
