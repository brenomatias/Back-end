
-- Show a list of all albums produced by each artist person, with the amount of followers they have, according to the following details. To do so, create a QUERY with the following columns:

-- 1) The first column should display the name of the person artist, with the alias "artist".

-- 2) The second column should display the name of the album, with the alias "album".

-- 3) The third column must display the number of followers that that artist person has and must have the alias "followers".


SELECT 
 artist_table.artist_name AS artista,
 album_table.album_name AS album,
 COUNT(followers_data.artist_id) AS seguidores
 
FROM 
   artists AS artist_table
   
   INNER JOIN
   albuns AS album_table
   ON album_table.artist_id = artist_table.artist_id
   
   INNER JOIN
   followers_data AS followers_data
   ON artist_table.artist_id = followers_data.artist_id

GROUP BY artista, album
ORDER BY seguidores DESC, artista, album;