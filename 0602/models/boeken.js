// boeken.js : Model voor boeken in MongoDB-database
var mongoose = require('mongoose');

const boekSchema = mongoose.Schema({
	titel : {type: String, required: true},
	auteur: {type: String, required: true},
	isbn  : {type: String, required: true},
	date  : {type: Date, required: true, default: Date.now}
});

var Boek = mongoose.model('Boek', boekSchema);
module.exports = Boek;