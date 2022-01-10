USE northwind;

SELECT product_name FROM northwind.products;

SELECT * FROM northwind.products;

SELECT id FROM northwind.products;

SELECT COUNT(product_name) FROM northwind.products;

SELECT * FROM northwind.products LIMIT 10 OFFSET 3;

SELECT product_name, id FROM northwind.products ORDER BY product_name;

SELECT id FROM northwind.products ORDER BY id DESC LIMIT 5;

SELECT id FROM northwind.products ORDER BY id DESC LIMIT 5;

SELECT id FROM northwind.products ORDER BY id DESC LIMIT 5;

SELECT * FROM northwind.purchase_orders WHERE created_by >= 3 ORDER BY created_by DESC, id ASC;

SELECT notes FROM northwind.purchase_orders WHERE notes LIKE '%#3_';

SELECT submitted_date FROM northwind.purchase_orders WHERE DATE(submitted_date)='2006-04-26';

SELECT supplier_id FROM northwind.purchase_orders WHERE supplier_id = 1 OR supplier_id = 3;

SELECT supplier_id FROM northwind.purchase_orders WHERE supplier_id >= 1 AND supplier_id <= 3;

SELECT HOUR(submitted_date) AS submitted_hour FROM northwind.purchase_orders;

SELECT submitted_date FROM northwind.purchase_orders WHERE submitted_date BETWEEN '2006-01-26 00:00:00' AND '2006-03-31 23:59:59';

SELECT id, supplier_id FROM northwind.purchase_orders WHERE supplier_id IN (1, 3, 5, 7);

SELECT * FROM northwind.purchase_orders WHERE supplier_id = 3 AND status_id = 2;

SELECT COUNT(employee_id) AS orders_count
FROM northwind.orders
WHERE employee_id IN (5,6) AND shipper_id=2;

INSERT INTO northwind.order_details (order_id, product_id, quantity, unit_price, discount, status_id, date_allocated, purchase_order_id, inventory_id)
VALUES (69, 80, 15.0000, 15.0000, 0, 2, NULL, NULL, 129);

INSERT INTO northwind.order_details (order_id, product_id, quantity, unit_price, discount, status_id, date_allocated, purchase_order_id, inventory_id) 
VALUES
    (69, 80, 15.0000, 15.0000, 0, 2, NULL, NULL, 129),
    (69, 80, 15.0000, 15.0000, 0, 2, NULL, NULL, 129);

UPDATE northwind.order_details
SET discount = 15;

UPDATE northwind.order_details
SET discount = 30
WHERE unit_price < 10.000;

DELETE FROM northwind.order_details
WHERE unit_price < 10.000;

DELETE FROM northwind.order_details
WHERE unit_price > 10.000;

DELETE FROM northwind.order_details;