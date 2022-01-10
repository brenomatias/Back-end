-- A self join is a regular join, but the table is joined with itself.
-- Self Join Syntax

SELECT column_name(s)
FROM table1 T1, table1 T2
WHERE condition;

-- T1 and T2 are different table aliases for the same table.
-- Os tipos de JOIN que você viu até agora precisam necessariamente que mais de uma tabela seja incluída em uma query para que um resultado possa ser gerado. O SELF JOIN não possui esse requisito. Vamos ver a seguir algumas das aplicações do SELF JOIN
-- É possível fazer pesquisas e comparações dentro da própria tabela através do SELF JOIN . Lembre-se dessa opção sempre que a informação que você precisa filtrar ou comparar para encontrar algo estiver em uma única tabela.




-- USING hr db

-- Exercício 1: Queremos saber o Nome das Pessoas Colaboradoras e de suas Gerências cujas gerências ( manager ) não são dos mesmos departamentos ( department ).

SELECT
    CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome Pessoa Colaboradora",
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente"
FROM
    employees AS Employee
INNER JOIN
    employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
WHERE
    Employee.DEPARTMENT_ID <> Manager.DEPARTMENT_ID;

-- Exercício 2: Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.
SELECT
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente",
    COUNT(*)
FROM
    employees AS Manager
INNER JOIN
    employees AS Employee ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
GROUP BY
    Manager.EMPLOYEE_ID;