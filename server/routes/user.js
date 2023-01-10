const express = require('express')
var fs = require('fs');
const router = express.Router()
const bcrypt = require('bcrypt');
const users = require('../model/user')
const { body, validationResult } = require('express-validator')
const { validateToken } = require("../middleware/auth");
var jwt = require('jsonwebtoken');
router.use(express.json())

router.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        const data = await users.findOne({ email: email })
        if (!data) {
            return res.status(400).json({ message: "USER NOT REGISTERED" })
        } else {
            bcrypt.compare(password, data.password, async function (err, result) {
                if (err) {
                    return res.status(500).json({ message: err.message })
                }
                if (result) {
                    const token = jwt.sign({
                        exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60),
                        data: data._id
                    }, process.env.SECRET);

                    return res.status(200).json({ message: "Success", token })
                } else {
                    res.json({ message: "Incorrect Password" })

                }
            });
        }

    } catch (err) {
        res.status(500).json({
            status: "failed",
            message: err.message
        })
    }
})



router.post('/register', body('email').isEmail(), body('password').isLength(min = 6, max = 16), async (req, res) => {
    const { email, password } = req.body
    try {
        const error = validationResult(req)
        if (!error.isEmpty()) {
            res.status(500).json({ message: error.array() })
        }
        const data = await users.findOne({ email: email })
        if (data) {
            return res.status(500).json({
                message: "email is already registered"
            })
        }
        bcrypt.hash(password, 10, async function (err, hash) {
            if (err) {
                return res.status(400).json({ message: err.message })
            }

            const data = await users.create({
                email,
                password: hash
            })
            res.status(200).json({
                status: "success",
                message: "Registeration successfull"
            })
        });
    } catch (err) {
        res.status(500).json({
            status: "failed",
            message: err.message
        })
    }

})
router.get('/home',validateToken,async(req,res)=>{
    try {
        res.status(201).json('Welcome in our page')
    } catch (err) {
        
    }
})
router.get('/getUsers', function(req, res){
    fs.readFile("users.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data); // you can also use res.send()
    });
})
module.exports = router;