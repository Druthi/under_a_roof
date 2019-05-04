const express = require('express')
const app = express();
const port = 3000;
const path = require('path');
const morgan = require('morgan');

app.use(morgan());
app.use(express.static(__dirname + '/../public'));

// app.get('/', (req, res) => {res.send('Hello World!'); console.log(path.join(__dirname, '../public/index.html') )})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))