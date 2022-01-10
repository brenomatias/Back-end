USE hr;

SELECT JOB_ID from employees
ORDER BY JOB_ID;

--1) select the maximum salary in the table
SELECT MAX(salary) FROM hr.employees;
-- 2) diference betwenn max and min salaries;
SELECT MAX(salary) - Min(salary) FROM hr.employees;

-- 3) Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.
SELECT  JOB_ID, AVG(SALARY) AS 'average_salary'
FROM hr.employees
GROUP BY JOB_ID
ORDER BY `average_salary` DESC;

--4) Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT SUM(SALARY)
FROM hr.employees;

--5) Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT MAX(salary), MIN(salary), SUM(salary), ROUND(AVG(salary), 2) from employees;

-- 6) Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).
SELECT JOB_ID , COUNT(*) AS 'total'
FROM hr.employees
WHERE JOB_ID = "IT_PROG";

-- quantar a quantidade de profissionais do tipo(JOB_ID)
SELECT JOB_ID , COUNT(*) AS 'total'
FROM hr.employees
GROUP BY JOB_ID;


-- 7) Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ).
SELECT JOB_ID, SUM(SALARY)
FROM hr.employees
GROUP BY JOB_ID;

-- 8) Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).
SELECT JOB_ID, SUM(SALARY)
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = "IT_PROG";

--9) Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).
SELECT job_id, AVG(salary) 'average_salary'
FROM hr.employees
WHERE job_id <> 'IT_PROG'
GROUP BY job_id
ORDER BY `average_salary` DESC;

--10) Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .
SELECT DEPARTMENT_ID, COUNT(*) AS 'number_of_employee', SUM(SALARY) 'average_salary'
FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING COUNT(*) > 10;

-- 11) Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777 .
UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
SELECT *
FROM hr.employees
WHERE LENGTH(first_name) >= 8;

-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e ano no qual foi contratado (exiba somente o ano).
SELECT employee_id, first_name,
    YEAR(hire_date) 'hire_year'
FROM hr.employees;
-- OR
SELECT employee_id, first_name,
    LEFT(hire_date, 4) 'hire_year'
FROM hr.employees;
-- OR
SELECT employee_id, first_name,
    MID(hire_date, 1, 4) 'hire_year'
FROM hr.employees;

-- 14) Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e dia do mês no qual foi contratado (exiba somente o dia
SELECT employee_id, first_name,
    RIGHT(hire_date, 2) 'hire_day'
FROM hr.employees;
-- OR
SELECT employee_id, first_name,
    MID(hire_date, 9, 2) 'hire_day'
FROM hr.employees;
-- OR
SELECT employee_id, first_name,
    DAY(hire_date) 'hire_day'
FROM hr.employees;