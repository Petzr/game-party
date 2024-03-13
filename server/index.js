const db = require('./database.js');
const md5 = require('md5')

const express = require('express')
const { createServer } = require('node:http')
const { Server } = require('socket.io')


// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


const HTTP_PORT = 5000;

const app = express()
const server = createServer(app)
const io = new Server(server)

// Root endpoint
app.get("/", (req, res) => {
    res.json({ "message": "Ok" })
});

io.on('connection', (socket) => {
    console.log('user ' + socket.id + ' connected');
});

app.get("/api/users", (req, res, next) => {
    var sql = "select * from user"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }

        res.json({
            "message": "success",
            "data": rows
        })
    });
});

app.get("/api/user/:id", (req, res, next) => {
    var sql = "select * from user where id = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": row
        })
    });
});

app.get('/api', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    let data = {
        "users": [
            'user1',
            'user2',
            'petur'
        ]
    }
    res.json(data)
})

// Default response for any other request
app.use(function (req, res) {
    res.status(404);
});

server.listen(HTTP_PORT, () => {
    console.log('Server running at http://localhost:' + HTTP_PORT);
});