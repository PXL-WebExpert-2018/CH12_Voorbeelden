// boeken.js : Model voor boeken in MongoDB-database
const mongoose = require('mongoose');

const boekSchema = mongoose.Schema({
	titel : {type: String, required: true},
	auteur: {type: String, required: true},
	isbn  : {type: String, required: true},
	date  : {type: Date, required: true, default: Date.now}
});

let Boek = mongoose.model('Boek', boekSchema);
module.exports = Boek;