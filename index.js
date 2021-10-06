const express = require('express')
const app = express()
const mysql = require("mysql")
const bodyParser = require("body-parser")
const Cors = require("cors")
const db = mysql.createPool({


host: 'localhost',
user: 'root@localhost',
password: 'huhu123',
database:'test'


});


app.use(Cors())
app.use(express.json())

app.post("/api/insert",(req, res)=>{


    const namess = req.body.namess
    const msgss = req.body.msgss
    
    const sqladd ="INSERT INTO commentstable(userid, messages) VALUES(Rattenboy,Einfach klasse!);"
    db.query(sqladd, [namess, msgss])    

});


app.get("/api/get",(req, res)=>{


    
    const sqladds ="SELECT * FROM commentstable;"
    db.query(sqladds ,(err,result) =>{
        res.send(result);

        console.log(result)
    })    
  

});

app.listen(80, ()=> {

console.log("running on port 80");

});