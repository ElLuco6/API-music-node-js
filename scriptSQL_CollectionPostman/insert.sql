-- Insertion d'un profil ADMIN nécessaire pour Tester L'API /  MDP : ADMIN
INSERT INTO users (username,password,isadmin)VALUES ('ADMIN','$2b$10$uBH.r3mxlKTEbX6LGIcpTu1jREnRsUcf1LjVi3VwUSLhEEBafcu0a',true);
-- Insertion d'un profil USER pour Tester L'API /  MDP : USER
INSERT INTO users (username,password,isadmin)VALUES ('USER','$2b$10$gDL0FmUGJoUJXJDCCafB7up4pKbtncM0L0TBUFlbRwsp8KHylLmKa',false);
select * from users;

-- Des sons 
INSERT INTO tracks ( trackName,author,fromAlbum,realeaseDate)VALUES ('Big Poppa','The Notorious B.I.G','New Jack, vol. 2','20101006');
INSERT INTO tracks ( trackName,author,fromAlbum,realeaseDate)VALUES ('Don\'t Fuck With My Money','Mystery Skulls','Back To Life','20190419');
INSERT INTO tracks ( trackName,author,fromAlbum,realeaseDate)VALUES ('ATTENTION','Joji','BALLADS 1','20181026');
INSERT INTO tracks ( trackName,author,fromAlbum,realeaseDate)VALUES ('Good News','Mac Miller','Good News','20220109');
select * from tracks;