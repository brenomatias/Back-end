-- Create a QUERY that should show users who were active in the year 2021 based on the most recent date in the playback history.

-- 1)The first column must have the alias "user" and display the name of the user.

-- 2)The second column must have the alias "condicao_usuario" and display whether the user is active or inactive.

SELECT u.user_name AS usuario,
IF(MAX(YEAR(reproducoes.date_reproductions)) = 2021, 'Usuário ativo', 'Usuário inativo')
AS condicao_usuario
FROM users AS u
INNER JOIN reproductions AS reproducoes
ON u.user_id = reproducoes.user_id
GROUP BY usuario
ORDER BY usuario;
