const express = require("express")
const router = express.Router()

const User = require("../models/user.model")

router.post("/signup", async (req, res) => {

    let { email } = req.body
 
    email = email.toLowerCase()
    req.body.email = email

    let userExists = await User.find({email: {$eq: email}}) 
    console.log(userExists)

    if (userExists.length !== 0) {
        return res.status(400).json({msg: "El usuario ya existe"})
    }
    
    const newUser = new User(req.body)
    await newUser.save()

    return res.status(201).json({msg: "Usuario creado correctamente"})

})

module.exports = router
