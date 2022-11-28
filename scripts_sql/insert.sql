INSERT INTO users (username,password,isadmin)VALUES ('SCH','$2b$10$uBH.r3mxlKTEbX6LGIcpTu1jREnRsUcf1LjVi3VwUSLhEEBafcu0a',true);
INSERT INTO users (username,password,isadmin)VALUES ('LaFève','zaza',true);
INSERT INTO users (username,password,isadmin)VALUES ('RoiHeenok','38spécial',false);

INSERT INTO tracks (trackName,author,fromAlbum,realeaseDate)VALUES ('SEVRAN','Kaaris','orNoir',2014-11-11);
INSERT INTO tracks (trackName,author,fromAlbum,realeaseDate)VALUES ('ICARUS','HAARPER','zulu',2014-11-11);
INSERT INTO tracks (trackName,author,fromAlbum,realeaseDate)VALUES ('RIP','playboi CARTI','DIE LIT',2014-11-11);
select * from tracks

; trackId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        trackName: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING,
        },
        fromAlbum: {
            type: DataTypes.STRING,
        },
        realeaseDate: {
            type: DataTypes.DATE,
        }