// 创建一个对象文档模型（ODM）

let mongoose = require("mongoose");

let Schema = mongoose.Schema;

// 制定进去你家的规则
let userRule = new Schema({
    email:{
        type: String,
        required:true,//必填项
        unique:true //唯一性
    },
    nick_name:{
        type: String,
        required:true,//必填项
    },
    password:{
        type: String,
        required:true,//必填项
    },
    date:{
        type:Date,
        default:Date.now()
    },
    enable_flag:{
        type:String,
        default:"Y"
    }
})

// 告诉保安你的规则
let rule = mongoose.model("user", userRule);

module.exports = rule;