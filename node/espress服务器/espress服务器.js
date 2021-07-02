//express使用

//1.node里面下载express
const express = requirre("express");
//2.创建服务员---创建app服务对象
const app = express(); //服务员到位

// 指定端口号，启动服务
app.listen(3000, (err) => {
    if(!err) console.log("运行成功");
    else console.log(err);
})

//原生服务器得区分请求方式，espress如下：
    //配置路由---对请求的Url进行分类，服务器根据分类决定交给谁去处理
    //(1)在NOde.js课程中，我们所有说的“路由”，默认都是指后端路由
    //(2)路由可以理解为：一组组key-value的组合
            //key: 请求方式 + URI路劲
            //value：回调函数
    //(3)根据写代码的顺序，如果一级路由重复，先写的路由生效，后写的路由无效(放入一个类似数组的结构)
// 根路由
app.get("/", (request, response) => {


    /**
     * 问题：的是什么样的请求，能交给这个回调函数处理？
     *      1.请求方式必须是GET
     *      2.请求的URI必须为“/”
     * */ 
    response.send("我是主页");//访问localhost:3000

    //拿出请求参数
    console.log(request.query);// {name: "kobe", age: "18"}
})
// 一级路由   
app.get("/meishi", (request, response) => {

    /**
     * 问题：的是什么样的请求，能交给这个回调函数处理？
     *      1.请求方式必须是GET
     *      2.请求的URI必须为“/meishi”
     * */ 
    response.send("我是美食页面");//访问localhost:3000/meishi
})
// 二级路由  
app.get("/meishi/c17", (request, response) => {

    /**
     * 问题：的是什么样的请求，能交给这个回调函数处理？
     *      1.请求方式必须是GET
     *      2.请求的URI必须为“/meishi”
     * */ 
    response.send("我是美食页面-火锅页面");//访问localhost:3000/meishi
})


//如果想让post请求方式响应:比如form表单
//根路由
app.post("/", (request, response) => {
    response.send("post方式请求")
})

//3.干活（获取客户端的东西，根据客户端的东西，决定返回什么内容）