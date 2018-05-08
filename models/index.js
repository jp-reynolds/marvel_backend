var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Marvel");

module.exports.Character = require("./character.js");
module.exports.Place = require("./place.js");
