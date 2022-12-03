const db = require('../models');

exports.getTracks = () => {
    return db.tracks.findAll();
}

exports.getTrackById = (trackId) => {
    return db.tracks.findAll({
        where: {
            trackId
        }
    });
}

exports.addTrack = (trackName, author, fromAlbum, realeaseDate) => {
    return db.tracks.create({trackName,author,fromAlbum,realeaseDate});
}

exports.updateTrack = (trackId, trackName, author, fromAlbum, realeaseDate) => {
    return db.tracks.update(
        {
            trackName: trackName,
            author: author,
            fromAlbum : fromAlbum,
            realeaseDate : realeaseDate
        },{
            where: { trackId: trackId },
        }
      );
}

exports.deleteTrackById = (trackId) => {
    return db.tracks.destroy({
        where: {
            trackId
        }
    });
}