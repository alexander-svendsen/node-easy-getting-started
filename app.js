const express = require('express')
const sqlite3 = require('sqlite3').verbose();

const DATABASE_PATH = 'tmp.sqlite3'

//setup the express web framework
var app = express()

// example request where node answers with a string
app.get('/test', function (req, res) {
  res.send('Hello World')
})


// example request where node answers with json
app.get('/jsontest', function (req, res) {
  res.json({msg: 'Hello World'})
})


// example request where the database is accessed and json is returned
app.get('/guestlist', function (req, res) {
  let db = new sqlite3.Database(DATABASE_PATH);

  let sql = `SELECT * FROM guestlist`;

  db.all(sql, [], function(err, rows){
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close();
});


// Everything in the public folder will be served
// and localhost:8080/ will open public/index.html
// localhost:8080 is equal to localhost:8080/index.html
app.use(express.static('public'))

// When running this server locally the address is http://localhost:8080
console.log('Server running on port 8080.');
app.listen(8080) // start the server
