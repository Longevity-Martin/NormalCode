### cookie
    场景一：登陆了京东---> 个人中心 ----> 收藏个人中心，方便以后访问
    场景二：登陆了京东---> 个人中心 ----> 关闭了浏览器

    经过了3天，用户再次直接访问个人中心，发现依然能直接查看自己的个人中心

    经过了20天，用户再直接访问个人中心，发现要求你重新登录

    --->  HTTP知道你的身份！！！
一般谁生成：服务器
交给谁保管：客户端（浏览器）
什么用？解决http（无状态）
怎么用：后端在返回响应的同时“种”下。客户端下次请求自动携带
分类：会话cookie, 持久化cookie
如果key名相同，cookie的value值会覆盖以前的值。