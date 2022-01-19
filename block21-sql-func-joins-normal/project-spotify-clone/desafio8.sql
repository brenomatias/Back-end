-- Show a list of albums produced by a specific artist, in this case "Walter Phoenix". For this, create a QUERY whose return should display the following columns:

-- 1)The name of the artist person, with the alias "artist".

-- 2)The name of the album, with the alias "album".

-- 3)Results should be sorted by album name in alphabetical order.

SELECT 
 artist_table.artist_name AS artista,
 album_table.album_name AS album
 
FROM 
   artists AS artist_table
   
   INNER JOIN
   albuns AS album_table
   ON album_table.artist_id = artist_table.artist_id
   WHERE artist_table.artist_name = 'Walter Phoenix'

ORDER BY album;