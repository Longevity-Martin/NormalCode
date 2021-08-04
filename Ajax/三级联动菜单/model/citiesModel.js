
const mongoose = require("monoogse");

const Schema = mongoose.Schema;

const citiesRule = new Schema;

module.exports = mongoose.model("cities", citiesRule);