var express = require('express');
var router = express.Router();
var characterController = require('../controller/characters');
var placeController = require('../controller/places');

//CHARACTER ROUTES
router.get('/api/characters', characterController.characterIndex);
router.get('/api/characters/:character_id', characterController.characterIndexID);

//PLACES ROUTES
router.get('/api/places/', placeController.placeIndex);
router.get('/api/places/:place_id', placeController.placeIndexID);
module.exports = router;