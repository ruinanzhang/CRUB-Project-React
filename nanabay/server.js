//This is my server.js

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
// const bodyParser = require('bodyParser');
const mysql = require('mysql');


 var connection = mysql.createConnection({
   host: "localhost",
  	user: "root",
  	password: "0327",
  	database: "Nanabay"
 });

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

//This is a midleware help to process request easier:
// app.use(sbodyParser.urlencoded({extended:false}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


app.get("/", function(req, res) {
  res.send("go to /posts to see posts");
});



// app.get("/user", function(req, res) {
//   connection.query(`SELECT * FROM User WHERE user_id = 1`, function(
//     error,
//     results,
//     fields
//   ) {
//     if (error) throw error;
//     res.send(results);
//     console.log('User the data is ', results);
//   });
// });

app.get("/login", function(req, res) {
  connection.query(`SELECT distinct user_id
FROM User
WHERE user_name = '${req.query.username}' and password = '${req.query.password}'`, function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.send(results);
    console.log('Login id is  ', results);

  });
});
 

// 


// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});