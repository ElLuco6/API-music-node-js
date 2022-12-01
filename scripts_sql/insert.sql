INSERT INTO users (username,password,isadmin)VALUES ('SCH','$2b$10$uBH.r3mxlKTEbX6LGIcpTu1jREnRsUcf1LjVi3VwUSLhEEBafcu0a',true);
INSERT INTO users (username,password,isadmin)VALUES ('LaFève','zaza',true);
INSERT INTO users (username,password,isadmin)VALUES ('RoiHeenok','38spécial',false);

INSERT INTO tracks (trackName,author,fromAlbum,realeaseDate)VALUES ('SEVRAN','Kaaris','orNoir',2014-11-11);
INSERT INTO tracks (trackName,author,fromAlbum,realeaseDate)VALUES ('ICARUS','HAARPER','zulu',2014-11-11);
INSERT INTO tracks (trackName,author,fromAlbum,realeaseDate)VALUES ('RIP','playboi CARTI','DIE LIT',2014-11-11);

INSERT INTO album (albumName,author,realeaseDate)VALUES ('orNoir','Kaaris',2014-11-11);
INSERT INTO album (albumName,author,realeaseDate)VALUES ('zulu','HAARPER',2014-11-11);
INSERT INTO album (albumName,author,realeaseDate)VALUES ('DIE LIT','playboi CARTI',2014-11-11);

select * from album

   return instance.define('album', {
        albumId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        albumName: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING,
        },
        realeaseDate: {
            type: DataTypes.DATE,
        }
    }, {
        timestamps: false
    });
}