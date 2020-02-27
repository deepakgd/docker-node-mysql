require('dotenv').config();

const express = require('express'),
    bodyParser = require('body-parser'),
    mysql = require('mysql');

const app = express();

var connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    port     : process.env.DB_PORT,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
});

console.log({
    host     : process.env.DB_HOST,
    port     : process.env.DB_PORT,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res)=>{
    res.send('hello world')
})

app.get('/data', (req, res) => {
    connection.query('SELECT * FROM students', function (error, results, fields) {
        if (error) {
            console.log(error)
            return res.send(error);
        }
        // connected!
        console.log('connected')
        return res.json(results)
    });
})

app.listen(3000, function(){
    console.log('APP listening in port 3000')
});