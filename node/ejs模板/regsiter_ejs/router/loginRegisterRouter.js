// 此模块是 loginRegister路由器
const {Router} = require("express");
const router = new Router();


// 引入模型对象
let user = require("./../model/userModel");

// 用于处理用户的注册路由
router.post("/rgister", (req, res) => {

    // 1.获取用户的输入
    let {email, nick_name,password, re_password} = req.body;
    /*
        * 2.校验数据的合法性:
        *     2.1：校验成功
        *           -去数据库中查找该邮箱是否注册过
        *               2.1.1：注册过：提示用户邮箱已被占用。
        *               2.1.2：未注册：写入数据库
        *     2.2：校验失败
        *           -提示用户具体哪里输入的不正确
        * */
/*
几个小问题：
    1.ifelse~ifelse嵌套太多了
    2.注册成功重定向到登录界面
    3.网络错误返回页面错误信息
    4.改完注册和登录


public和views文件重复性太大：
    当删除public文件夹时，暴露的东西没有了怎么办
    
*/ 


    // 校验邮件的正则表达式
    const emailReg = /^[a-zA-Z0-9]{5,10}@[a-zA-Z0-9]\.com$/;
    // 校验昵称的正则表达式
    const nickNameReg = /[\u4e00-\u9fa5]/gm;
    // 校验密码的正则表达式
    const passwordReg = /[0-9]{5, 10}/;

    // 使用对象接受错误信息
    const errMes = {};
    // 使用正则去校验
    if(!emailReg.test(email)){
        // res.send('邮箱格式不合法');
        errMes.emailErr = "邮箱格式不合法";
    }
    if(!nickNameReg.test(nick_name)){
        // res.send('昵称格式不合法，必须为中文')
        errMes.nickNameErr = "昵称格式不合法，必须为中文";
    }
    if(!passwordReg.test(password)){
    //   res.send('密码格式不合法，必须6-20')
      errMes.passwordErr = "密码格式不合法，必须6";
    }
    if( password !== re_password){
    //   res.send('两次输入密码不一致')
      errMes.rePasswordErr = "两次输入密码不一致";
    }

    if(JSON.stringify(errMes) == "{}"){
        // 去数据库查询该邮箱是否注册过
        user.findOne({email}, (err, data) => {
            if(data){
                res.send("该邮箱已被注册过")
            }else{
                // 如果没被注册过
                //对象的简写
                user.create({email, nick_name,password}, (err, data) => {
                    if(err){
                        console.log(err);
                        res.send("您当前网络不太好")
                    }else{
                        res.send("恭喜您，注册成功");
                    }
                })
            }
        })
    }else{
        app.render("regsiter", {
            errMes
        })
    }
})

router.post("/login", (req, res) => {
    let {email, password} = req.body;

    // 准备好正则
    const emailReg = /^[a-zA-Z0-9]{5,10}@[a-zA-Z0-9]\.com$/;
    const passwordReg = /[0-9]{5, 10}/;

    if(!emailReg.test(email)){
        res.send("邮箱不合法")
    }else if(!passwordReg.test(password)){
        res.send('密码格式不合法')
    }else{
        // 去数据库里查找
        user.findOne({email,password}, (err,data) => {
            if(err){
                // 引入报警模块，当达到敏感阈值，触发报警
                console.log(err);
                res.send("网络不稳定，稍后重试")
                return;//结束函数
            }
            if(data){
                res.redirect("https://www.baidu.com");
                return;
            }
            res.send("用户名或者密码输入错误")
        })
    }

})


// 为了符合中间件的概念use(function(){})
module.exports = function(){
    return router;
};