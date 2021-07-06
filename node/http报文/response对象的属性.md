### response对象（还有koa后端框架）
    1.response.download()和response.send()同时出现时（多个响应出现时候），以response.send()为主
    2.当出现两个response.send()时，会抛出个异常，以先出现的响应为主。

    3.什么叫做服务器给浏览器响应了？
        1.服务器给浏览器一段文字
        2.服务器给浏览器一个图片
        3.服务器给浏览器一个视频
        4.服务器告诉浏览器下载一个文件
        5.服务器告诉浏览器重定向
    4.一次请求对应一次响应

    5.response.sendFile():里面输入绝对地址
    6.response.download();里面可以相对地址或者绝对地址
    7.response.redirect():一个是往第三方网站跳转；另一个是往内部的网站跳转
        eg:response.redirect("https://www.baidu.com")
        eg:response.redirect("/demo/test")
    8.response.set(key, value);//注意符合响应头规范,该方法必须放在send()前面
    9.response.get(key);//该方法必须放在send()后面，发送完了再拿
        eg: Date用get拿不到
        