//express使用

//1.node里面下载express
const express = requirre("express");



// 第三方中间件(npm包下载)
const bodyParser = require("body-parser");


//2.创建服务员---创建app服务对象
const app = express(); //服务员到位

//禁止服务器返回X-Powered-By
app.disabled("x-powered-by");
//或app.disable("x-powered-by");



// POST请求的第三方中间件
// 解析POST请求请求体中所携带的urlencoded编码形式的参数为一个对象，随后挂载到request对象上。
app.use(bodyParser.urlencoded({extended: true}))

//内置中间件
app.use(express.urlencoded({extended: true}))

// 使用内置中间件去暴露静态资源
// 把public里面的资源全部交出去了（加入有40个页面）
//在地址栏里输入url得加+ 后缀 .html;
// 放在最前面，紧随app之后的位置最好
app.use(express.static(__dirname+"/public"))

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
    //(4)url中的“meishi”的叫法？ （1）URI  （2）虚拟路径
    //(5)接口测试工具：postman
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

//参数路由
app.get("/meishi/:id", (request, response) => {
    //拿到id
    console.log(request.params);//{id: 32523523}
    let {id} = request.params;
    console.log(`返回id的商家`);
})





//如果想让post请求方式响应:比如form表单
//根路由
app.post("/", (request, response) => {

    //拿到POST请求的请求体参数(需要借助第三方中间件，如上)
    console.log(request.body);
    response.send("post方式请求")
})

//3.干活（获取客户端的东西，根据客户端的东西，决定返回什么内容）