const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const aggregatePaginate = require('mongoose-aggregate-paginate-v2');


var Match = new Schema ({
    home : String,
    visitor : String,
    time:String,
    date:String
})

// Match.plugin(aggregatePaginate);

module.exports = mongoose.model('games', Match)