import express from 'express';

// create a server
const app = express();
app.use(express.static('public'));

// start the server
let port = process.env.PORT || 3000;
app.listen(port);
console.log(`Listening on port ${port}`);
