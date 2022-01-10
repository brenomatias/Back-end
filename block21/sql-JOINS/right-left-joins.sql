-- Left join
-- The LEFT JOIN keyword returns all records from the left table (table1), and the matching(dados iguais) records from the right table (table2). The result is 0 records from the right side, if there is no match.


SELECT c.customer_id, c.first_name, a.actor_id
FROM sakila.customer AS c 
LEFT JOIN sakila.actor AS a 
ON c.last_name = a.last_name;
-- tabela da esquerda é a base, ou seja, c.customer_id e 
-- c.first_name vem de uma unica tabela e estao do lado esquerdo
-- dos resultados, e depois compara com a tabela do lado direito 
-- que a.actor_id. o que existe na tabela da esquerda e na direita 
-- retorna em actor_id, o que nao existe retorna valor null


SELECT * FROM sakila.actor;SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer AS c
LEFT JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;



-- RIGHT JOIN - coloca como referencia a tabela da direita, ou seja, a tabela actor
-- o valor que last_name é igual nas duas colunas, actor_id é preenchido
SELECT c.customer_id, c.first_name, a.actor_id
FROM sakila.customer AS c 
RIGHT JOIN sakila.actor AS a 
ON c.last_name = a.last_name;

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer AS c
RIGHT JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;


-- INNER JOIN
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer AS c
INNER JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;