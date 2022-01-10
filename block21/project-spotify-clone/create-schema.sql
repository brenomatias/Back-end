DROP DATABASE IF EXISTS SpotifyClone;

CREATE DATABASE SpotifyClone;

USE SpotifyClone;

CREATE TABLE plans(
    plan_id INT PRIMARY KEY AUTO_INCREMENT,
    plan_type VARCHAR(100) NOT NULL,
    plan_price DECIMAL(3,2) 
) engine = InnoDB;


CREATE TABLE users(
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(50) NOT NULL,
    user_age INT NOT NULL,
    sign_in DATE NOT NULL,
    plan_type INT,
    FOREIGN KEY (plan_type) REFERENCES plans(plan_id)
) engine = InnoDB;


CREATE TABLE artists(
    artist_id INT PRIMARY KEY AUTO_INCREMENT,
    artist_name VARCHAR(25) NOT NULL
) engine = InnoDB;


CREATE TABLE albuns(
    album_id INT PRIMARY KEY AUTO_INCREMENT,
    album_name VARCHAR(50) NOT NULL,
    launch_year YEAR NOT NULL,
    artist_id INT,
    FOREIGN KEY (artist_id) REFERENCES artists(artist_id)
) engine = InnoDB;

CREATE TABLE songs(
    song_id INT PRIMARY KEY AUTO_INCREMENT,
    artist_id INT,
    album_id INT,
    song_name VARCHAR(80),
    duration BIGINT,
    FOREIGN KEY (album_id) REFERENCES albuns(album_id),
    FOREIGN KEY (artist_id) REFERENCES artists(artist_id)
) engine = InnoDB;

CREATE TABLE listening_history(
    history_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    song_id INT,
    rep_date DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (song_id) REFERENCES songs(song_id)
) engine = InnoDB;



CREATE TABLE followers_data(
    follow_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    artist_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (artist_id) REFERENCES artists(artist_id)
) engine = InnoDB;


INSERT INTO plans (plan_type, plan_price)
VALUES
  ('gratuito', 0),
  ('familiar', 7.99),
  ('pessoal', 6.99),
  ('universitário',5.99);

INSERT INTO users (user_name, user_age, sign_in, plan_type)
VALUES
  ('Thati', 23, '2019-10-20', 1),
  ('Cintia', 35, '2017-12-30', 2),
  ('Bill', 20, '2019-06-05', 3),
  ('Roger', 45, '2020-05-13', 4 ),
  ('Norman', 58, '2017-02-17', 4),
  ('Patrick', 33, '2017-01-06', 2),
  ('Vivian', 26, '2018-01-05', 3),
  ('Carol', 19, '2018-02-14', 3),
  ('Angelina', 42, '2018-02-14', 2),
  ('Paul', 19, '2018-02-14', 2);

INSERT INTO artists (artist_name)
VALUES
  ('Waler Phoenix'),
  ('Peter Strong'),
  ('Lance Day'),
  ('Freddie Shannon'),
  ('Tyler Isle'),
  ('Fog');
  
INSERT INTO albuns(album_name, artist_id, launch_year)
VALUES
  ('Envious', 1, 1990),
  ('Exuberant', 1, 1993),
  ('Hallowed Steam', 2, 1995),
  ('Incandescent', 3, 1998),
  ('Temporary Culture', 4, 2001),
  ('Library of liberty', 4, 2001),
  ('Chained Down', 5, 2007),
  ('Cabinet of fools', 5, 2012),
  ('No guarantees', 5, 2015),
  ('Aparatus', 6, 2015);

INSERT INTO followers_data (user_id, artist_id)
VALUES
  (1, 1),
  (1, 4),
  (1 ,3),
  (2, 1),
  (2, 3),
  (3, 2),
  (3, 1),
  (4, 4),
  (5, 5),
  (5, 6),
  (6, 6),
  (6, 3),
  (6, 1),
  (7, 2),
  (7, 5),
  (8, 1),
  (8, 5),
  (9, 6),
  (9, 4),
  (9, 3),
  (10, 2),
  (10, 6);


INSERT INTO songs (artist_id, album_id, song_name, duration)
VALUES
    (1, 1, 'Soul For Us', 200),
    (1, 1, 'Reflections Of Magic', 1630),
    (1, 1, 'Dance With Her Own', 116),
    (1, 2, 'Troubles Of My Inner Fire', 203),
    (1, 2, 'Time Fireworks', 152),
    (2, 3, 'Magic Circus', 105),
    (2, 3, 'Honey, So Do I', 207),
    (2, 3, 'Sweetie, Let’s Go Wild', 139),
    (2, 3, 'She knows', 244),
    (3, 4, 'Fantasy For Me', 100),
    (3, 4, 'Celebration Of More', 146),
    (3, 4, 'Rock His Everything', 223),
    (3, 4, 'Home Forever', 231),
    (3, 4, 'Diamond Power' , 241),
    (3, 4, 'Let’s Be Silly', 132),
    (4, 5, 'Thang Of Thunder', 240),
    (4, 5, 'Words Of Her Life', 185),
    (4, 5, 'Without My Streets', 176),
    (4, 6, 'Need Of The Evening', 190),
    (4, 6, 'History Of My Roses', 222),
    (4, 6, 'Without My Love', 111),
    (4, 6, 'Walking And Game', 123),
    (4, 6, 'Young And Father', 197),
    (5, 7, 'Finding My Traditions', 179),
    (5, 7, 'Walking And Man', 229),
    (5, 7, 'Hard And Time', 135),
    (5, 7, 'Honey, I’m A Lone Wolf', 150),
    (5, 8, 'She Thinks I Won’t Stay Tonight', 166),
    (5, 8, 'He Hard You’re Bad For Me', 154),
    (5, 8, 'He Hopes We Can’t Stay', 210),
    (5, 8, 'I know I know', 117),
    (5, 9, 'He’s Walking Away', 159),
    (5, 9, 'He’s Trouble' , 138),
    (5, 9, 'I Heard I Want To Bo Alone', 120),
    (5, 9, 'I Ride Alone', 151),
    (6, 10, 'Honey', 79),
    (6, 10, 'You Cheated On Me', 95),
    (6, 10, 'Wouldn’t It Be Nice', 213),
    (6, 10, 'Baby', 136),
    (6, 10, 'You Make Me Feel So..', 83);


INSERT INTO listening_history (user_id, song_id, rep_date)
VALUES
  (1, 36, '2020-02-28 10:45:55'), 
  (1, 25, '2020-05-02 05:30:35'),
  (1, 23, '2020-03-06 11:22:33'),
  (1, 14, '2020-08-05 08:05:17'),
  (1, 15, '2020-09-14 16:32:22'),
  (2, 34, '2020-01-02 07:40:33'),
  (2, 24, '2020-05-16 06:16:22'),
  (2, 21, '2020-10-09 12:27:48'),
  (2, 39, '2020-09-21 13:14:46'),
  (3, 6, '2020-11-13 16:55:13'),
  (3, 3, '2020-12-05 18:38:30'),
  (3, 26, '2020-07-30 10:00:00'),
  (4, 2, '2021-08-15 17:10:10'),
  (4, 35, '2021-07-10 15:20:30'),
  (4, 27, '2021-01-09 01:44:33'),
  (5, 7, '2020-07-03 19:33:28'),
  (5, 12, '2017-02-24 21:14:22'),
  (5, 14, '2020-08-06 15:23:43'),
  (5, 1, '2020-11-10 13:52:27'),
  (6, 38, '2019-02-07 20:33:48'),
  (6, 29, '2017-01-24 00:31:17'),
  (6, 30, '2017-10-12 12:35:20'),
  (6, 22, '2018-05-29 14:56:41'),
  (7, 5, '2018-05-09 22:30:49'),
  (7, 4, '2020-07-27 12:52:58'),
  (7, 11, '2018-01-16 18:40:43'),
  (8, 39, '2018-03-21 16:56:40'),
  (8, 40, '2020-10-18 13:38:05'),
  (8, 32, '2019-05-25 08:14:03'),
  (8, 33, '2021-08-15 21:37:09'),
  (9, 16, '2021-05-24 17:23:45'),
  (9, 17, '2018-12-07 22:48:52'),
  (9, 8, '2021-03-14 06:14:26'),
  (9, 9, '2020-04-01 03:36:00'),
  (10, 20,'2017-02-06 08:21:34'),
  (10, 21,'2017-12-04 05:33:43'),
  (10, 12,'2017-07-27 05:24:49'),
  (10, 13, '2017-12-25 01:03:57');