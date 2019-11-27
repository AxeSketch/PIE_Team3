

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imaginePath: {type:String, required:true},
    titlu: {type:String, required:true},
    descriere: {type:String, required:true},
    pret: {type:Number, required:true}
});

module.exports = mongoose.model('Product', schema);