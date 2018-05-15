var db = require('../models');
var Place = db.place;

function placeIndex(req, res) {
  db.Place.find({}, function(err, places) {
    if (err) res.send(err);
    else res.json(places);
  });
}

function placeIndexID(req, res) {
  db.Place.findOne({place_id: req.params.place_id}, function(err, placeID) {
    if (err) res.send(err);
    else res.json(placeID);
  });
}

function placeCreate(req, res) {
	let newPlace = {
		name: req.body.name,
		where: req.body.where,
		summary: req.body.summary,
		events: req.body.events,
		image: req.body.image
	}
	db.Place.create(newPlace, function (err, newPlace) {
		if(err) res.send(err);
		res.json(newPlace);
	});
}


	function placeUpdate(req, res) {
		console.log(req.body);
		let id = req.body.id;

		db.Place.findOneAndUpdate(
			{_id: id},
			{$set: {
				name: req.body.name,
				where: req.body.where,
				summary: req.body.summary,
				events: req.body.events,
				image: req.body.image
				}
			},
			{new:true},
			function (err, doc) {
				if (err) {
					console.log("error updating place");
				} else {
					res.json(doc);
				}
			});
	}

function placeDestroy(req, res) {

}

module.exports.placeIndex = placeIndex;
module.exports.placeIndexID = placeIndexID;
module.exports.placeCreate = placeCreate;

module.exports.placeUpdate = placeUpdate;
module.exports.placeDestroy = placeDestroy;