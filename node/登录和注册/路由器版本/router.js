// 引入Router
const {Router} = require("express");
// 创建一个路由器实例  --- 小型的app(把app对象替换成router)
const router = new Router();
// 引入path模块---node内置了一个专门用于解决路劲问题的库
let path = require("path");
// let url = path.resolve(从哪里触发，查找规则);
// let url = path.resolve(__dirname，“../public/login/login.thml”);
// 暴露出模块
module.exports = router;


//作用
// 要符合中间件的理念
app.use(UIRouter());
app.use(LoginRegisterRouter());


