const albumsService = require('../services/albums');
const createError = require('http-errors');

exports.getAlbums = async (req, res) => {
   const album = await albumsService.getAlbums();
   if (album && album.length != 0) {
      res.json({success: true, data: album});
   } else {
      next(createError(404, "no albums in db"));
   }
   
}

exports.getAlbumById = async (req, res, next) => {
   if (parseInt(req.params.id)){
      console.log(req.params.id);
      let albumId = parseInt(req.params.id); // We are sure here by using validator that we have a valid number, we can parseInt
      const album = await albumsService.getAlbumById(albumId);
      if (album && album.length === 1) {
         res.json({success: true, data: album[0]});
      } else {
         next(createError(404, "no album found for this id"));
      }
   }else {
      next(createError(400, "Incorrect args"));
   }
}


exports.addAlbum = async (req, res, next) => {
   if (req.body && req.body.albumName && req.body.author && req.body.realeaseDate) {
      const albumCreated = await albumsService.addAlbum(req.body.albumName, req.body.author, req.body.realeaseDate);
      if (albumCreated) {
         res.status(201).json({success: true, albumId: albumCreated.albumId});
      } else {
         next(createError(400, "Error when creating this album, verify your args"));
      }
   } else {
      next(createError(400, "Cannot add this album, make sure all args has been sent"));
   }
}

exports.deleteAlbumById = async (req, res, next) => {
   if (req.params.id) {
      if (parseInt(req.params.id)){
         const id = parseInt(req.params.id);
         const albums = await albumsService.getAlbumById(id);
         if (albums.length === 1) {
            const nbOfDeletion = await albumsService.deleteAlbumById(id);
            if (nbOfDeletion === 1) {
               res.json({success: true});
            } else {
               next(createError(500, 'Unknown error when trying to delete this album, maybe it\'s already deleted'));
            }
         } else {
            next(createError(404, `The album with id '${id}' doesn't exists, it cannot be deleted`));
         }
      }else {
         next(createError(400, "Incorrect args"));
      }
   } else {
      next(createError(400, "The albumsId is required"));
   }
}


exports.updateAlbum = async (req, res, next) => {
   if (req.params.id) {
      if (parseInt(req.params.id)){
         const albumId = parseInt(req.params.id);
         const albums = await albumsService.getAlbumById(albumId);
        
         if (albums.length === 1) {
            const nbOfUpdate = await albumsService.updateAlbum(albumId,req.body.albumName, req.body.author, req.body.realeaseDate);
            if (nbOfUpdate == 1) {
               res.status(201).json({success: true});
            } else {
               next(createError(500, 'Unknown error when trying to update this album'));
            }
         } else {
            next(createError(404, `The album with id '${albumId}' doesn't exists, it cannot be updated`));
         }
      }else {
         next(createError(400, "Incorrect args"));
      }
   } else {
    next(createError(400, "The albumId is required"));
   }
 }

 

 exports.clearCache = async (req, res,next) => {
   if(apicache.clear("/albums/")){
      res.json({success: true});
   }else{
     next(createError(400, "Failled to clear cache"))
   }
}

exports.clearCache = async (req, res,next) => {
   if(apicache.clear("/albums/")){
      res.json({success: true});
   }else{
     next(createError(400, "Failled to clear cache"))
   }
}