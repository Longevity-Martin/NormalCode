const express = require("exress");
const app = express();

// 禁止服务器返回X-Poweed-By,为了安全、
app.disable("x-power-by");

// s使用中间件暴露静态资源，不访问路由直接写文件名+后缀也能看页面
app.use(express.static(__dirname + "/public"));

// 配置模板引擎
app.set("view engine", "ejs");
app.set("views", "./views");

// 引入数据库的db模块，用于连接数据库
let db = require("./db/db");
// 使用内置的中间件解析post请求的urlencoded参数

app.use(express.)





app.listen(3000, (err) => {
    if(err) console.log(err);
    else console.log("OK");
})