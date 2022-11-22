const albumsService = require('../services/albums');
const createError = require('http-errors');

exports.getAlbums = async (req, res) => {
   const album = await albumsService.getAlbums();
   res.set('Cache-Control', 'max-age=30'); // Using client cache
   res.json({success: true, data: albums});
}

exports.getAlbumById = async (req, res, next) => {
   let albumId = parseInt(req.params.id); // We are sure here by using validator that we have a valid number, we can parseInt
   const albums = await albumsService.getAlbumById(albumId);
   if (albums && albums.length === 1) {
      res.json({success: true, data: albums[0]});
   } else {
      next(createError(404, "no album found for this id"));
   }
}

exports.addAlbum = async (req, res, next) => {
   if (req.body && req.body.title && req.body.date) {
      const albumCreated = await albumsService.addAlbum(req.body.albumName, req.body.author, req.body.realeaseDate);
      if (albumCreated) {
         res.status(201).json({success: true, albumId: albumCreated.id});
      } else {
         next(createError(400, "Error when creating this album, verify your args"));
      }
   } else {
      next(createError(400, "Cannot add this album, make sure all args has been sent"));
   }
}

exports.deleteAlbumById = async (req, res, next) => {
   if (req.params.id) {
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
   } else {
      next(createError(400, "The albumId is required"));
   }
}

exports.updateAlbums = async (req, res, next) => {
    if (req.params.id) {
       const id = parseInt(req.params.id);
       const albums = await albumsService.getAlbumById(id);
       if (albums.length === 1) {
          const nbOfUpdate = await albumsService.updateAlbums(id,req.body.albumName, req.body.author, req.body.realeaseDate);
          if (nbOfUpdate === 1) {
             res.json({success: true});
          } else {
             next(createError(500, 'Unknown error when trying to update this album, maybe it\'s already deleted'));
          }
       } else {
          next(createError(404, `The album with id '${id}' doesn't exists, it cannot be deleted`));
       }
    } else {
       next(createError(400, "The albumId is required"));
    }
 }