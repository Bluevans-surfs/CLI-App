DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

USE bamazon;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("swim goggles", "sporting goods", 22.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("swim cap", "sporting goods", 12.75, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("large picture frame", "home goods", 32.25, 32);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("step stool", "home goods", 7.85, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pizza cutter", "kitchen goods", 5.95, 60);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("mixing bowl set", "kitchen goods", 18.75, 16);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("weed eater", "yard goods", 112.75, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("plastic rake", "yard goods", 18.35, 41);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("broom", "garage goods", 10.75, 28);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shop vac", "garage goods", 67.15, 29);


SELECT * FROM PRODUCTS;