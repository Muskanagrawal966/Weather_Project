const express=require("express");
const app=express();
const path=require("path");
const port=process.env.PORT || 1000;

const static_path=path.join(__dirname,"../public");
app.use(express.static(static_path));

app.set("view engine","hbs");

app.get("/",(req,res)=>
{
    res.render("index");
})

app.get("/about",(req,res)=>
{
    res.render("about");
})

app.get("/weather",(req,res)=>
{
    res.render("weather");
})

app.get("*",(req,res)=>
{
    res.render("404_error_page",{
        errorMsg:"Oops! Page Not Found"
    })
})

app.listen(port,()=>
{
    console.log(`listening to the port ${port}`);
})