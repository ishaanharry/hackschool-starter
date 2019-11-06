const axios = require('axios');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);

// Server will always find an open port.
const port = process.env.PORT || 3001;
server.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
});

// Needed to process body parameters for POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// TODO: Create an API endpoint using any of the APIs from the 
// https://github.com/public-apis/public-apis. Use this as an opportunity
// to learn how to use unfamiliar APIs (I'd recommend finding one that 
// does not reuqire an API key).


// TODO: Create an API endpoint called /bestmeme to grab the first meme given from the 
// get_memes endpoint for the api.imgflip.com host.
app.get('/bestmeme', (req, res) => {

});

/*
 * TODO: Create a POST request that will have the JSON body formatted like
 * {
 *   template_id: [id],
 *   photoURL: [url of image],
 *   memeTexts: [array of text for the meme],
 *   user: [string of your name]
 * }
 * and creates the meme image. Once the image has been created, store it
 * in the instance variable, meme.
 */
let meme;
app.post('/upload', (req, res) => {
    // HINT: First step is to understand the imgflip API and make an object
    // that will be inputted in the caption_image endpoint from imgflip.
    const url = 'https://api.imgflip.com/caption_image';

    
});
