const express = require('express')
const app = express()
const mysql = require("mysql")
const bodyParser = require("body-parser")
const Cors = require("cors")
const db = mysql.createPool({


host: 'localhost',
user: 'root',
password: '',
database:'prodb'


});


app.use(Cors())
app.use(express.json())

app.post("/api/insert",(req, res)=>{


    const namess = req.body.namess
    const msgss = req.body.msgss
    
    const sqladd ="INSERT INTO commentary(userid, usertext) VALUES(?,?);"
    db.query(sqladd, [namess, msgss])    

});


app.get("/api/get",(req, res)=>{


    
    const sqladds ="SELECT * FROM commentary;"
    db.query(sqladds ,(err,result) =>{
        res.send(result);

        console.log(result)
    })    
  

});

app.listen(process.env.PORT || Port, ()=> {

console.log("running on port 3001");

});