const express = require("express");
const app = express();

// 引入cookie-parser中间件
const cookieParser = require("cookie-parser");

// 使用该中间件
app.use(cookieParser())

// demo路由不对cookie进行任何操作
app.get("/demo", (req, res) => {
    res.send("我的新页面");
})

// 会话cookie，关闭浏览器即立刻消失
// demo1路由：负责给客户端“种”下一个会话cookie
app.get("/demo1", (req, res) => {
    // express中种下cookie不需要借助任何第三方库，必须写在send()方法前面，在会话时把cookie传过去
    let obj = {name:"oys", age: "18"}
    res.cookie("peiqi", JSON.stringify(obj));// 字符串--key-value的组合
    res.send("会话cookie");
})

// demo2路由：负责给客户端“种”下一个持久化cookie
app.get("/demo2", (req, res) => {
    // express中种下cookie不需要借助任何第三方库，必须写在send()方法前面，在会话时把cookie传过去
    let obj = {name:"oys", age: "18", {maxAge:1000 * 30}}
    res.cookie("peiqi", JSON.stringify(obj));// 字符串--key-value的组合
    res.send("持久化cookie");
})

// demo3路由：服务器读取客户端携带的cookie
app.get("/demo3", (req, res) => {
    // express中读取客户端携带的cookie需要借助一个库（中间件）：cookie-parser
    // 需要去全局安装cookie-parser库！！！
    console.log(req.cookies);//拿到种下的cookie {peizi: "{"name": "oys"}"}
    let {pezi} = req.cookies;
    let a = JSON.parse(peizi);
    console.log(a.name);
    res.cookie("peiqi", "keycvalue");// 字符串--key-value的组合
    res.send("读取客户端携带的cookie");
})

// demo4路由：种下7年之后的cookie怎么清楚？
// demo4路由：告诉客户端怎么删除cookie
app.get("/demo4", (req, res) => {
    // 删除cookie有两种方法：
    // 第一种
    res.cookie("peiqi", "", {maxAge:0})
    // 第二种
    res.clearCookie("peiqi");//兄弟，要删除peiqi的cookie 
    res.send("删除cookie")

})




app.listen(3000, (err) => {
    if(err) console.log(err);
    else console.log("KO");
})