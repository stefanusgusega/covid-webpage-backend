const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;
const db = require('./queries');
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.get('/', (request, response) => {
    response.json({
        info: 'Node.js, Express, and Postgres API'
    })
})

app.get('/first', db.getFirstTask);
app.get('/second', db.getSecondTask);
app.get('/third', db.getThirdTask);


app.listen(port, () => {
    console.log(`App running on port ${port}`)
})