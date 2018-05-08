var db = require('../models');
var Character = db.character;

function characterIndex(req, res) {
  db.Character.find({}, function(err, characters) {
    if (err) res.send(err);
    else res.json(characters);
  });
}

function characterIndexID(req, res) {
  db.Character.findOne({_id: req.params.character_id}, function(err, characterID) {
    if (err) res.send(err);
    else res.json(characterID);
  });
}

function characterCreate(req, res) {
  
}

function characterShow(req, res) {

}

function characterUpdate(req, res) {

}

function characterDestroy(req, res) {

}

module.exports.characterIndex = characterIndex;
module.exports.characterIndexID = characterIndexID;
module.exports.characterCreate = characterCreate;
module.exports.characterShow = characterShow;
module.exports.characterUpdate = characterUpdate;
module.exports.characterDestroy = characterDestroy;