import express from "express";
import bodyParser from "body-parser";
const app=express();
const port=3000;

var task=["hello"];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.render("index.ejs",{ task:task});
    // res.send("HELLO");
})

app.post("/submit",(req,res)=>{
    var x=req.body["work"];
    task.push(x);
    res.render("index.ejs",{ task:task});
    // res.send("HELLO");
})


app.listen(port,()=>{
    console.log("server is running at server 3000!");
})