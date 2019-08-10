var mongoose = require('mongoose');

var CharacterSchema = new mongoose.Schema({
    character_name: String,
    character_description: String,
    character_level: Number,
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Character', CharacterSchema);