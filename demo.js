//先在node中安装

let express = require("express");

let app = express();

app.get("/", (request, response) => {

    let obj = requset.query;
    response.send("ok");
})
app.listen(3000, (err) => {

})