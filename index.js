const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile('./view/home.html', { root: __dirname})
})

app.get('/about-us', (req, res) => {
    res.sendFile('./view/about-us.html', { root: __dirname})
})

app.get('/contact', (req, res) => {
    res.sendFile('./view/contact.html', { root: __dirname})
})

app.listen(3000, () => {
    console.log('Listening to port 3000...!')
})