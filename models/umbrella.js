const mongoose = require("mongoose")
const umbrellaSchema = mongoose.Schema({
umb_color:{type:String,maxLength:16},
umb_cost: {type:Number,max:150},
umb_size: String
})
module.exports = mongoose.model("umbrella",umbrellaSchema)
