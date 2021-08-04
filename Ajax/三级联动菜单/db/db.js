const mongoose = require("mongoose");
mongoose.set('useCreateIndex',true) //使用一个新的索引创建器


function connectMongo(scuess, fail){
    mongoose.connect("mongodb://localhost:27017", {
        useNewUrlParser: true, //使用一个新的URL解析器，用于解决一些安全性问题。
        useUnifiedTopology: true //使用一个统一的新的拓扑结构。
    })

    mongoose.connection.on("open", (err) => {
        if(err){
            console.log("数据库连接失败");
        }else{
            console.log("数据库连接成功");
            scuess();
        }
    })
}

module.exports = connectMongo;