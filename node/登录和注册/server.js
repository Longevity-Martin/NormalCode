const express = require("express");
const app = express();

// 导入user模型对象
let user = require("./model/userModel");
// 导入db函数
let db = require("./db/db")

// 引入UI路由器
let UIRouter = require("./router/UIRouter");

// 引入登录注册业务路由器
let loginRegisterRouter = require("./router/loginRegisterRouter.js")

// 禁止服务器返回X-Powered-By,为了安全
app.disable("x-powered-by");

// 使用内置中间件暴露静态资源，不访问路由直接写文件名+后缀也能看页面
app.use(express.static(__dirname + "/public"));

// 使用中间件作用于解析post请求的请求体参数
app.use(express.urlencoded({extended:true}));


// 如果数据库连接成功，随后立即启动服务器，在整个过程里，无论请求多少次，数据库只连接一次
db(() => {

    // UI路由-start，无逻辑
        // 使用路由器中间件
        app.use(UIRouter())
    // UI路由-end

        
// 业务路由start 
    // 使用路由器中间件
    app.use(loginRegisterRouter());

// 业务路由end


    app.listen(3000, (err)=>{
        if(!err) console.log("OK");
        else console.log(err);
    })

}, (err) => {
    console.log("数据库连接失败", err);
})



