const express = require("express");
const app = express();

// 如果在express中基于node搭建的服务器，使用ejs无需引入。
    // 1.让你的服务器知道你在用哪一个模板引擎----配置模板引擎
    app.set("view engine", "ejs");
    // 2.让你的服务器知道你的模板在哪个目录下，配置模板目录
    //在该参数1老版本是views,新版本是view
    //参考文件夹目录:person.ejs,模板准备好
    app.set("views", "/views");

// 前后端不分离的页面（前后端杂糅）----浏览器所看到的页面，是由服务器所渲染的




app.get("/show", (req, res) => {
    // 完整的流程：访问该服务器，用的是ejs模板引擎，模板目录在views下，去目录下找到person文件
    // 找到后把person.ejs加工成了.html,底层用sendFile()发送给浏览器
    //res.render(找到模板文件，{注入的信息对象})
    res.render("person", {
        data: "hello工程化"
    })
})



app.listen(3000, (err) => {
    if(!err) console.log("ok");
    else console.log(err);
})