-- Create a QUERY that displays three columns:

-- 1)The first column should display the total number of songs. Give this column the alias "songs".
-- 2)The second column should display the total amount of artists and should have the alias "artists".
-- 3)The third column should display the number of albums and should have the alias "albums".

SELECT 
 (SELECT COUNT(*) FROM songs) AS cancoes,
 (SELECT COUNT(*) FROM artists) AS artistas,
 (SELECT COUNT(*) FROM albuns) AS albuns;


--  https://stackoverflow.com/questions/12789396/how-to-get-multiple-counts-with-one-sql-query