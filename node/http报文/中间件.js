let express = require("express");
let app = express();

//app.use存放的位置有很大关系
// 紧随app之后：应用级（全局）中间件---- 所有请求的第一扇门
// 在监听之前（路由最后）：应用级（全局）中间件---- 所有请求的最后一扇门
app.use((req, res, next) => {
    //res.send("我是中间件路由");

    //作用：1.过滤一些非法的请求（例如手写一个图片防盗链）
    if(合法){
        next();//放行
    }else{
        res.send("禁止访问")
    }
})


app.get("/", (req, res) => {
    res.send("这是我的网页")
})



app.listen(3000, (err) => {
    if(!err) console.log("ok");
    else console.log(err);
})