/**
 * 不借助任何第三方库，搭建node原生的服务器
*/

// 1.创造一个“服务员”

//1.1 在node里面引入http模块
let http = require("http");

//引入一个内置模块，用于解析拿取到的url---key=value&key=value...形式的字符串为js中的对象
//形如：key=value&key=value...这形式叫做：查询字符串参数（请求地址里携带urlencoded编码形式的参数）
//引入的qs是一个对象，该对象身上有着很多有用的方法，最具代表性的：parse()
let qs = require("querystring");


//1.2创建服务员---创建服务对象
let server = http.createServer((Request, Response) => {
    //1.2 请求对象--request:里面包含客户端给服务器的“东西”
    //1.3 响应对象---response：里面包含着服务器要返回给客户端的“东西”


    //客户端发送请求：localhost:3000/?name=zhangsan&age=18，服务器收到作出相应
    ///?name=zhangsan&age=18
    
    //获取客户端携带过来的urlencoded编码形式的参数
    let params = Request.url.split("?")[1]; //name=zhangsan&age=18
    let objParams = qs.parse(params);
    console.log(objParams);// {name: "zhngsna", age: "18"}
    //响应结束
    Response.setHeader("content-type", "text/html;charset:utf-8"); //key~value类型
    Response.end("你好，我的名字是xxx,年龄yyy岁了")

    //获取请求方式
    console.log(Request.method);//GET or POST
});

//1.4 指定服务器运行的端口号（绑定端口监听）3000、4000、5000
server.listen(3000, (err) => {
    if(!err) console.log("服务器启动成功");
    else console.log(err);
})
// 不请求永远得不到响应
// 一次请求只得到一次响应
// 服务器修改了代码后必须立即重启服务器

// 出现错误的情况：
//      1. 返回的中文文字，可到了客户端页面时乱码的情况。需要把响应头加上字符集
//      2. 关闭webstrom前，必须关闭服务器，切记切记！！！！
//      3. 与服务器失联后，打开任务管理器，找到对应服务器把它关闭
//      
//2.让服务员开始干活，获取客人点的菜（连接服务器），联系后厨做菜（连接数据库）
