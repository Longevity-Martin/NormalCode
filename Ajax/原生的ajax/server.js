const express =  require("express");

const app = express();

//暴露静态资源，以便于试验ajax同源交互
app.use(express.static(__dirname + "/public"));



app.get("/ahurcode", (req, res) => {
    let num = Math.random() * 8999 + 1000;
    console.log(num);
    setTimeout(() => {
        res.send(`${num}`);
    }, 3000)
})


app.listen(3000, (err) => {
    if(err) console.log(err);
    else console.log("OK");
})