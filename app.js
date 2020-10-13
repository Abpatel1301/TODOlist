const express = require("express");
const bodyparser = require("body-parser");
const date = require(__dirname + "/date.js")

const app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"))

let items = ["kissing Suru's lips","playing with her golu-molu ","Fingring her Pussy",];
let worklitem = [];

app.set('view engine','ejs');
  
app.get("/",function(req, res){

  let day = date()
  res.render("list" , {listTittle: day , newItems: items});

})
app.post("/" , function(req , res){
let item = req.body.newItem;
if( req.body.list === "work"){
  worklitem.push(item);
  res.redirect("/work");
}else{
  items.push(item);
  res.redirect("/");
}
console.log(req.body);

})
app.get("/work",function(req , res){
  res.render("list" , {listTittle: "work List" , newItems: worklitem})

})
app.get("/about",function(req , res){
  res.render("about");

})

app.listen(3000 , function(req , res){
  console.log("server 3000 is runing");
})
