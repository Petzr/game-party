const express = require('express')
const app = express()
const db = require('./database.js');
const md5 = require('md5')

// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


const HTTP_PORT = 5000;

// Root endpoint
app.get("/", (req, res) => {
    res.json({"message":"Ok"})
});


app.get("/api/users", (req, res, next) => {
    var sql = "select * from user"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }

        res.json({
            "message":"success",
            "data":rows
        })
      });
});

app.get("/api/user/:id", (req, res, next) => {
    var sql = "select * from user where id = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
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
app.use(function(req, res){
    res.status(404);
});

app.listen(HTTP_PORT, () => { console.log('Server is listening to port 5000') })