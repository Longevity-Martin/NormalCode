const express = require("express");

const app = express();

app.get("/test", (req, res) => {
    const personArr = [{name: "oys", age: 27}, {name: "zj", age: "南昌大学"}, {name: "lhf", age: "kobe"}]
    /*
    res.send();----若发送的是数组或者对象，会自动调用自身的toString()进行返回
    */

    //cors的跨域解决问题
    res.setHeader("Access-Control-Allow-Origin", "http:localhost:63348")

    res.send(personArr)
})



app.listen(3000, (err) => {
    if(err) console.log(err);
    else{
        console.log("服务器启动成功了！！");
    }
})