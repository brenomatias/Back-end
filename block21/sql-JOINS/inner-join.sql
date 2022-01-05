SELECT city.city, city.country_id, country
FROM sakila.city AS city_with_country

-- como country vem de outra table="country", é preciso fazer
-- join para ter acesso a esta outra tabela


SELECT city.city, city.country_id, country_added.country
FROM sakila.city AS city
INNER JOIN sakila.country AS country_added
ON city.country_id = country_added.country_id;
-- INNER JOIN sakila.country (de onde vai vir o inner)
-- ON (campo em comum de relação entre as duas tabelas) preciso disso para fazer a relaçao

-- 1) TO FIX Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor .
SELECT actor.actor_id, actor.first_name, film_actor.film_id
FROM sakila.actor AS actor
INNER JOIN sakila.film_actor AS film_actor
ON actor.actor_id = film_actor.actor_id;

SELECT A.actor_id, A.first_name, F.film_id
FROM sakila.actor AS A
INNER JOIN sakila.film_actor AS F ON A.actor_id = F.actor_id;


-- 2) Exercício 2: Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address .
SELECT Sta.first_name, Sta.last_name, Ad.address
FROM sakila.staff AS Sta 
INNER JOIN sakila.address AS Ad ON Sta.address_id = Ad.address_id;


-- 3) Exiba o id , nome e email das primeiras 100 pessoas clientes, ordenados alfabeticamente pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde mora. Essas informações podem ser encontradas nas tabelas customer e address .

SELECT
    Customer_table.customer_id,
    Customer_table.first_name,
    Customer_table.email,
    Customer_table.address_id,
    Address_table.address
FROM sakila.customer AS Customer_table
INNER JOIN sakila.address AS Address_table 
ON Customer_table.address_id = Address_table.address_id
ORDER BY Customer_table.first_name DESC
LIMIT 100;

-- 'address_id' é a chave em comum 


--4) Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer .
SELECT
    C.first_name, C.email, C.address_id, A.address, A.district
FROM
    sakila.customer AS C
        INNER JOIN
    sakila.address AS A ON C.address_id = A.address_id
WHERE
    A.district = 'California'
        AND C.first_name LIKE '%rene%';

-- 6) Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.

SELECT
    stf.first_name,
    stf.last_name,
    AVG(pay.amount) AS `Média de pagamento`
FROM
    sakila.staff AS stf
INNER JOIN
    sakila.payment pay ON stf.staff_id = pay.staff_id
WHERE
    YEAR(pay.payment_date) = 2006
GROUP BY stf.staff_id;        

--7) Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as tabelas actor , film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query .