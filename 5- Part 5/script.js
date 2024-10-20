const express=require('express');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 1 way of writing middlewares
app.use(function(req, res, next){
    console.log("Middleware running 1");
    next();  
});

app.use(function(req, res, next){
    console.log("Middleware running 2 ");
    next();  
});

// Creating routes  (e.g., facebook.com/profile)
app.get("/", function(req,res){
    res.send("champion mer chota anuj")
})

app.get("/about", function(req,res){
    res.send("about page")
})


app.get("/profile", function(req,res, next){
    return next(new Error("something wrong"));
    // res.send("profile page")
})

//Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something went wrong, we don't have any idea!!")
  })
  
app.listen(3000);
