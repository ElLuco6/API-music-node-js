const tracksService = require('../services/tracks');
const createError = require('http-errors');

exports.getTracks = async (req, res) => {
   const track = await tracksService.getTracks();
   res.set('Cache-Control', 'max-age=30'); // Using client cache
   res.json({success: true, data: tracks});
}

exports.getTrackById = async (req, res, next) => {
   let trackId = parseInt(req.params.id); // We are sure here by using validator that we have a valid number, we can parseInt
   const tracks = await tracksService.getTrackById(trackId);
   if (tracks && tracks.length === 1) {
      res.json({success: true, data: tracks[0]});
   } else {
      next(createError(404, "no track found for this id"));
   }
}

exports.addTrack = async (req, res, next) => {
   if (req.body && req.body.title && req.body.date) {
      const trackCreated = await tracksService.addTrack(req.body.trackName, req.body.author, req.body.fromAlbum,req.body.realeaseDate);
      if (trackCreated) {
         res.status(201).json({success: true, trackId: trackCreated.id});
      } else {
         next(createError(400, "Error when creating this track, verify your args"));
      }
   } else {
      next(createError(400, "Cannot add this track, make sure all args has been sent"));
   }
}

exports.deleteTrackById = async (req, res, next) => {
   if (req.params.id) {
      const id = parseInt(req.params.id);
      const tracks = await tracksService.getTrackById(id);
      if (tracks.length === 1) {
         const nbOfDeletion = await tracksService.deleteTrackById(id);
         if (nbOfDeletion === 1) {
            res.json({success: true});
         } else {
            next(createError(500, 'Unknown error when trying to delete this track, maybe it\'s already deleted'));
         }
      } else {
         next(createError(404, `The track with id '${id}' doesn't exists, it cannot be deleted`));
      }
   } else {
      next(createError(400, "The trackId is required"));
   }
}

exports.updateTrack = async (req, res, next) => {
    if (req.params.id) {
       const id = parseInt(req.params.id);
       const tracks = await tracksService.getTrackById(id);
       if (tracks.length === 1) {
          const nbOfUpdate = await tracksService.updateTrack(id,req.body.trackName, req.body.author, req.body.fromAlbum,req.body.realeaseDate);
          if (nbOfUpdate === 1) {
             res.json({success: true});
          } else {
             next(createError(500, 'Unknown error when trying to update this track, maybe it\'s already deleted'));
          }
       } else {
          next(createError(404, `The track with id '${id}' doesn't exists, it cannot be deleted`));
       }
    } else {
       next(createError(400, "The trackId is required"));
    }
 }