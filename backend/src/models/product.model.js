
const mongoose = require("mongoose")

//schema -> colección


const { Schema } = mongoose
const productSchema = new Schema(
    {
        name: { type: String, required: true},
        price: { type: String, required: true},
        description: { type: String, required: true}, // las llaves de lacollecion
        image: { type: String, required: true},
        stock: { type: Number, default: 0},
        keyWords: { type: Array, default: []},
    },
    {
        versionKey: false, // que deseamos capturar cada que se inserte un dato
        timestamps: true
    }
)


module.exports = mongoose.model("product", productSchema)