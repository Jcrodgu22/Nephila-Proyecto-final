const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema(
    {
        Name: { type: String, required: true},
        idNit: {type: Number, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        ubicación: {type: String, required: true},
        sector: {type: String, required: true},
        producción: {type: String, required: true},
        crédito: {type: String, required: true},
    }
    )