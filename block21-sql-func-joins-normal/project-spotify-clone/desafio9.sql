SELECT 
 COUNT(history_table.user_id) AS quantidade_musicas_no_historico
 
FROM 
   reproductions AS history_table
   
   INNER JOIN
   users AS users_table
   ON history_table.user_id = users_table.user_id
   WHERE users_table.user_name = 'Bill';