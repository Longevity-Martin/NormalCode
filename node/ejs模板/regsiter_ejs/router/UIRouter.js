// 此模块是UI路由器


// 引入Router构造函数（expresss内置的）
const {Router} = require("express");

// 创建一个Router实例（路由器就是一个小型的app）
let router = new Router();

// 引入路径（path）模块----Node中内置的一个专门用于解决路径的库
let {resolve} = require("path");

// UI路由
router.get("/login", (req, res) => {
    //resolve(从哪里触发, 查找规则);
    let url = resolve(__dirname, "../public/");
    res.send(url);
})

router.get("/register", (req, res) => {
    let url = resolve(__dirname, "../public/");
    res.send(url);
})

// 为了符合中间件的概念use(function(){})
module.exports = function(){
    return router;
};