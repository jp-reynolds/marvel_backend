const express  = require ('express');
const mongoose = require ('mongoose'),
	Schema       = mongoose.Schema;

const PlaceSchema = new Schema ({
	name: String,
	where: String,
	summary: String,
	events: String,
	image: String
});

var Place = mongoose.model('Place', PlaceSchema);
module.exports = Place;