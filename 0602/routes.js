var express = require('express');
var router = express.Router();
var db = require('./db');
var Boek = require('./models/boeken');

router.get('/', (req, res) => {
    //TODO: uitleg gebruik API
    res.send('usage: send requests to /api/boeken');
});

router.get('/boeken', (req, res) => {
    Boek.find((err, boeken) => {
        if(err)
            res.send(err);
        
        res.json(boeken);
    });
});

router.get('/boeken/:id', (req, res) =>{
    Boek.findById(req.params.id, (err, boek) => {
        if(err)
            res.send(err);

        res.json(boek);
    });
});

router.post('/boeken', (req, res) => {
    let boek = new Boek({
        titel: req.body.titel,
        auteur: req.body.auteur,
        isbn: req.body.isbn
    });

    boek.save((err, boek) => {
        if(err)
            res.send(err);

        res.json(boek);
    });
});

router.delete('/boeken/:id', (req, res) => {
    Boek.remove({_id: req.params.id}, (err, removed) =>{
        if(err)
            res.send(err);
        
        res.json(removed);

    });
});

router.post('/boeken', (req, res) => {
    let boek = new Boek({
        titel: req.body.titel,
        auteur: req.body.auteur,
        isbn: req.body.isbn
    });

    boek.save((err, boek) => {
        if(err)
            res.send(err);

        res.json(boek);
    });
});

router.put('/boeken', (req, res) => {
    Boek.findById(req.body._id, (err, boek) =>{
        boek.titel = req.body.titel;
        boek.auteur = req.body.auteur;
        boek.isbn = req.body.isbn;
        boek.date = req.body.date;

        boek.save((saveErr, saveBoek) => {
            if(saveErr)
                res.send(saveErr);

            res.send(saveBoek);
        });
    });
});

module.exports = router;
