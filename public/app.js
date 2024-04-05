const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', (req, res) => {
    const array1 = req.body.array1.split(',').map(Number);
    const array2 = req.body.array2.split(',').map(Number);
    const result = [];
    
    for (let i = 0; i < 3; i++) {
        const sum = array1[i] + array2[i];
        result.push(sum);
    }

    res.send(result);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server andando en puerto:  ${PORT}`);
});