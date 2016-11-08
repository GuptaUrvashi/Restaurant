var express                 = require("express"),
    app                     = express();

app.set("view engine", "ejs"); 
app.use(express.static(__dirname +"/public"));

app.get("/", function(req, res){
   res.render("landing"); 
});

app.get("/menu", function(req, res){
   res.render("menu"); 
});

app.get("/reservation", function(req, res) {
   res.render("reservation"); 
});

app.get("/news", function(req, res) {
   res.render("news"); 
});

app.get("/location", function(req, res) {
   res.render("location"); 
});

app.get("/signup", function(req, res) {
   res.render("signup"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started!");
});