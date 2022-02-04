-- join songs and listening_history

-- We are doing a study of the most played songs and we need to know which are the two most played songs at the moment. Create a QUERY that has two columns:

-- 1) The first column must have the alias "cancao" and display the name of the song.

-- 2) The second column must have the alias "reproducoes" and display the number of people who have already listened to the song in question.

-- Your result must be sorted in descending order, based on the number of plays. In case of a tie, sort the results by song name in alphabetical order. We just want the top 2 most played songs.

SELECT 
    songs_table.song_name AS cancao,
    COUNT(listening_history.song_id) AS reproducoes
FROM
	songs AS songs_table
        INNER JOIN
    reproductions AS listening_history ON songs_table.song_id = listening_history.song_id

GROUP BY song_name
ORDER BY reproducoes DESC, song_name
LIMIT 2;


-- SELECT 
--     songs_table.song_name,
--     COUNT(listening_history.song_id) AS song_reproductions
-- FROM
-- 	songs AS songs_table
--         INNER JOIN
--     listening_history AS listening_history ON songs_table.song_id = listening_history.song_id

-- GROUP BY song_name
-- ORDER BY song_reproductions DESC, song_name
-- LIMIT 2;
