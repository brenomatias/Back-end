-- Create a QUERY that should only have three columns:

-- 1)The first column must have the alias "user" and display the name of the user.
-- 2)The second column should have the alias "qtde_musicas_heard" and display the amount of songs listened to by the person based on their playback history.
-- 3)The third column must have the alias "total_minutos" and display the sum of minutes heard by the user based on their playback history.

-- The results must be grouped by the user's name and sorted in alphabetical order.

SELECT 
    user_table.user_name AS usuario,
    COUNT(*) AS qtde_musicas_ouvidas,
    ROUND(SUM(songs_table.duration) / 60, 2) AS total_minutos
FROM
    reproductions AS history_table
    
        INNER JOIN
        songs AS songs_table ON history_table.song_id = songs_table.song_id
    
	INNER JOIN
    users AS user_table ON history_table.user_id = user_table.user_id
    
GROUP BY usuario
ORDER BY usuario;

-- The INNER JOIN keyword selects records that have matching values in both tables.