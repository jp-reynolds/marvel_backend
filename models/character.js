const express  = require ('express');
const mongoose = require ('mongoose'),
	Schema       = mongoose.Schema;

const characterSchema = new Schema ({
	supername: String,
	name: String, 
	origin: String, 
	abilities: String,
	summary: String,
	allies: String,
	foes: String,
	quote: String,
	organization: String,
	image: String
});

var Character = mongoose.model('Character', characterSchema);
module.exports = Character;