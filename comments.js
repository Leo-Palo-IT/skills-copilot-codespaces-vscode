//Create web server
//Create a new web server using the express module
const express = require('express');
const app = express();
//Use the express.static() method to serve static files
app.use(express.static('public'));
//Use the express.json() method to parse JSON data
app.use(express.json());
//Use the express.urlencoded() method to parse form data
app.use(express.urlencoded({ extended: true }));
//Use the app.get() method to send a GET request to the server
app.get('/', (req, res) => {
    res.send('Hello, Express.js!');
});
//Use the app.get() method to send a GET request to the server
app.get('/hello', (req, res) => {
    res.send('Hello, stranger!');
});
//Use the app.get() method to send a GET request to the server
app.get('/hello/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}!`);
});
//Use the app.post() method to send a POST request to the server
app.post('/sub', (req, res) => {
    const { name } = req.body;
    res.send(`Hello, ${name}!`);
});
//Use the app.post() method to send a POST request to the server
app.post('/json', (req, res) => {
    const { name } = req.body;
    if (name) {
        res.json({ message: `Hello, ${name}!` });
    } else {
        res.status(400).json({ message: 'Bad Request' });
    }
});
//Use the app.listen() method to start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
//Export the app object
module.exports = app;