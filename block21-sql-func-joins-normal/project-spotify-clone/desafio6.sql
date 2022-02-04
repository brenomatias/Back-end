-- join plans and users / inner join plan_type = plan_id
-- plan id
-- min 0 ou outro? com base nos testes = 0

-- Based on the value of the plans and the plan that each registered user has at the bank, we want some information about the company's billing. Create a QUERY that should display four pieces of data:

-- 1)The first column must have the alias "invoice_minimum" and display the lowest existing plan value for a user.

-- 2)The second column must have the alias "invoice_maximum" and display the highest existing plan value for a user.

-- 3)The third column must have the alias "invoice_medio" and display the average value of plans owned by users so far.

-- 4)Finally, the fourth column must have the alias "invoicing_total" and display the total value obtained with plans owned by users.

SELECT 
  MIN(plans_table.plan_price) AS faturamento_minimo,
  MAX(plans_table.plan_price) AS faturamento_maximo,
  ROUND(AVG(plans_table.plan_price), 2) AS faturamento_medio,
  SUM(plans_table.plan_price) AS faturamento_total
  
FROM users AS users_table
JOIN plans AS plans_table

ON users_table.plan_type = plans_table.plan_id;