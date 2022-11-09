const mongoose = require("mongoose")
const umbrellaSchema = mongoose.Schema({
umb_color: String,
umb_cost: Number,
umb_size: String
})
module.exports = mongoose.model("umbrella",umbrellaSchema)