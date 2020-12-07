// server.js - applicatie voor het ophalen en
// opslaan van boeken in MongoDB
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const Boek = require('./models/boeken');

const app = express();

app.use(bodyParser.json());


// 1. Eenvoudige instructie
app.get('/api', function (req, res) {
	res.json({'Gebruik': 'voer een GET of POST-call uit naar /boeken'})
});

// 2. POST-endpoint: nieuw boek in de database plaatsen.
app.post('/api/boeken', function (req, res, next) {
	// 2a. nieuw boekobject maken.
	let boek = new Boek({
		titel : req.body.titel,
		auteur: req.body.auteur,
		isbn  : req.body.isbn
	});
	// 2b. Opslaan in database.
	boek.save(function (err, boek) {
		// indien error: teruggeven
		if (err) {
			return next(err);
		}
		// indien OK: status 201 (Created) en boekobject teruggeven
		res.status(201).json(boek);
	})
});
app.listen(3000, function () {
	console.log('server gestart op poort 3000');
});