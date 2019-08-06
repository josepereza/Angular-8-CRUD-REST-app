var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Character = require('../models/Character.js');

// GET all characters
router.get('/', function (req, res, next) {
    Character.find(function (err, characters) {
        if (err) return next(err);
        res.json(characters);
    });
});

// GET one character by ID
router.get('/:id', function (req, res, next) {
    Character.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// PUT/Update character
router.put('/:id', function (req, res, next) {
    Character.findByIdAndUpdate(req.params.id, req.body,
        function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
});

// DELETE character
router.delete('/:id', function (req, res, next) {
    Character.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;