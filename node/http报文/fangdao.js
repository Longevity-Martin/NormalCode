const express = require("express");
const app = express();

function use(req, res, next){
    if(req.get("Referer")){
        let a = req.get("Referer").split("/")[2];
        if(a === "localhost:63347"){
            next();
        }else{
            res.sendFile(__dirname + "/err.png")
        }
    }else{
        next();
    }
}

app.get("/picture", (req, res) => {
    res.sendFile(__dirname + "/public/demo.png")
})

app.listen(3000, (err) => {
    if(!err) console.log("ok");
    else console.log(err);
})