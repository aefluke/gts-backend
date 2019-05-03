const mongoose = require('mongoose');
const config = require('../config.json');

mongoose.connect(`mongodb://${config.user}:${config.password}@${config.server}/${config.database}`);

let TrackSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    preview_url: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Track', TrackSchema);