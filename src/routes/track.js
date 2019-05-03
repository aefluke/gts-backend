const express = require('express');
const router = express.Router();
const TrackModel = require('../models/track.model');

router.post('/track',(req,res)=>{
    if(!req.body){
        return res.status(400).send('Request body is missing');
    }

    // let track = {
    //     title = 'Kuzu Kuzu',
    //     preview_url = "https://p.scdn.co/mp3-preview/278966ba033f489c92ae09898b7bac830e0036e7?cid=774b29d4f13844c495f206cafdad9c86"
    // }

    let model = new TrackModel(req.body);
    model.save()
    .then(doc=>{
        if(!doc || doc.length === 0){
            return res.status(500).send(doc);
        }
        res.status(201).send(doc);
    })
    .catch(err=>{
        res.status(500).json(err);
    });
});

router.get('/track', (req, res) => {
    res.send('track');
});

router.get('/error', (req, res) => {
    throw new Error('This is a forced error.');
});

module.exports = router;