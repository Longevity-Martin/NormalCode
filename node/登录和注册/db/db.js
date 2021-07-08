// 该模块主要用于连接数据库，且判断数据库的连接状态

// npm导入mongoose
let mongoose = require("mongoose");
mongoose.set('useCreateIndex',true);//使用一个新的索引创建器

const DB_NAME = "NormalTest"; //数据库名
const PORT = 27017; //端口号
const IP = "localhost"; //主机名（IP地址）

// 用于连接数据、并监测数据库状态的方法
function db(resolve, reject){
    // 1.连接数据库
    mongoose.connect(`nongodb://${IP}:${PORT}/${DB_NAME}`, {
        useNewUrlParser: true, //使用一个新的URL解析器，用于解决一些安全性问题。
        useUnifiedTopology: true //使用一个统一的新的拓扑结构。
    })
    // 2.绑定数据库连接的监听
    mongoose.connection.on("open", (err) => {
        if(err) {
            console.log("连接失败");
            //失败的回调
            reject();
        }else{
            console.log("数据库连接成功");
            //成功的回调
            resolve();
        }
    })
}

module.exports = db;
