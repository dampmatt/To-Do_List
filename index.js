import express from "express";
import bodyParser from "body-parser";
const app=express();
const port=3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/",(req,res)=>{
    res.render("index.ejs");
    // res.send("HELLO");
})

app.listen(port,()=>{
    console.log("server is running at server 3000!");
})