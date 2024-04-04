const express = require('express');
const app = express();

let counter = 0;

app.post('/increment', (req, res) => {
    counter++;
    res.send({ counter });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
