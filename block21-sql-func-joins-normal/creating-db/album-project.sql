CREATE SCHEMA IF NOT EXISTS albuns;

CREATE TABLE artista( 
    artist_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50)
) ENGINE=InnoDB



CREATE TABLE album( 
   album_id INT PRIMARY KEY AUTO_INCREMENT,
   artist_id INT NOT NULL,
   title VARCHAR(100) NOT NULL,
   price DECIMAL(5,2) NOT NULL,
   style_id INT NOT NULL,
   FOREIGN KEY (artist_id) REFERENCES artista(artist_id)
) ENGINE=InnoDB
