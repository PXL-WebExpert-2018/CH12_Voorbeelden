// server.js - app voor boeken in MongoDB
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

// configuratie van body-parser
app.use(express.json());

// nodig voor de toegang vanuit onze angular applicatie - CORS
app.use(function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
	next();
});

// koppelen van routes aan de Express applicatie
app.use('/api', routes);

app.listen(3000);
console.log('server gestart op poort 3000');