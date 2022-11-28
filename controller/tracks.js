const tracksService = require('../services/tracks');
const db = require('../models/index');
const createError = require('http-errors');
const apicache = require('apicache')

exports.getTracks = async (req, res, next) => {
   const tracks = await tracksService.getTracks();
   if (tracks && tracks.length != 0) {
      res.json({success: true, data: tracks});
   } else {
      next(createError(404, "no tracks in db"));
   }
}

exports.getTrackById = async (req, res, next) => {
   if (parseInt(req.params.id)){
      let trackId = parseInt(req.params.id); // We are sure here by using validator that we have a valid number, we can parseInt
      const tracks = await tracksService.getTrackById(trackId);
      if (tracks && tracks.length === 1) {
         res.json({success: true, data: tracks[0]});
      } else {
         next(createError(404, "no track found for this id"));
      }
   }else {
      next(createError(400, "Incorrect args"));
   }
}

exports.addTrack = async (req, res, next) => {
   if (req.body && req.body.trackName && req.body.author && req.body.fromAlbum && req.body.realeaseDate) {
      const trackCreated = await tracksService.addTrack(req.body.trackName, req.body.author, req.body.fromAlbum,req.body.realeaseDate);
      if (trackCreated) {
         res.status(201).json({success: true, trackId: trackCreated.trackId});
      } else {
         next(createError(400, "Error when creating this track, verify your args"));
      }
   } else {
      next(createError(400, "Cannot add this track, make sure all args have been sent"));
   }
}

exports.deleteTrackById = async (req, res, next) => {
   if (req.params.id) {
      if (parseInt(req.params.id)){
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
      }else {
         next(createError(400, "Incorrect args"));
      }
   } else {
      next(createError(400, "The trackId is required"));
   }
}

exports.updateTrack = async (req, res, next) => {
    if (req.params.id) {
      if (parseInt(req.params.id)){
         const trackId = parseInt(req.params.id);
         const tracks = await tracksService.getTrackById(trackId);
         if (tracks.length === 1) {
            const nbOfUpdate = await tracksService.updateTrack(trackId,req.body.trackName, req.body.author, req.body.fromAlbum,req.body.realeaseDate);
            if (nbOfUpdate == 1) {
               res.status(201).json({success: true});
            } else {
               next(createError(500, 'Unknown error when trying to update this track'));
            }
         } else {
            next(createError(404, `The track with id '${trackId}' doesn't exists, it cannot be updated`));
         }
      }else {
         next(createError(400, "Incorrect args"));
      }
   } else {
    next(createError(400, "The trackId is required"));
   }
 }

 exports.clearCache = async (req, res,next) => {
   if(apicache.clear("/tracks/")){
      res.json({success: true});
   }else{
     next(createError(400, "Failled to clear cache"))
   }
}