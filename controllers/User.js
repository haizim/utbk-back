import User from "../models/userModel.js";
import bcrypt from "bcrypt";

// const bcrypt = require('bcrypt');
const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';


export const Register = async (req, res) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, saltRounds);
        req.body.password = hash;

        await User.create(req.body);
        // User.create(req.body);

        const ambil = await User.findAll({
            where:{
                email: req.body.email
            }
        })

        res.json({
            "message": "User registered successfully",
            "data": {
                "id" : ambil[0].id,
                "nama" : ambil[0].nama,
                "email" : ambil[0].email,
                "role" : ambil[0].role,
            },
            // "data": ambil[0]
        });
        
    } catch (error) {
        res.status(400)
        res.json({
            "message": error.message
        })
    }
}

export const Login = async (req, res) => {
    try {
        const ambil = await User.findAll({
            where:{
                email: req.body.email
            }
        })
        if(ambil.length == 1){
            bcrypt.compare(req.body.password, ambil[0].password, function(err, result) {
                if(result){
                    res.json({
                        "message": "Login Confirmed",
                        "data" : {
                            "id" : ambil[0].id,
                            "nama" : ambil[0].nama,
                            "email" : ambil[0].email,
                            "role" : ambil[0].role,
                        }
                    });
                }else{
                    res.status(401)
                    res.json({
                        "message": "Password dan email tidak cocok",
                    });
                }
                
            });
        }else{
            res.status(401)
            res.json({
                "message": "Email belum terdaftar",
            });
        }
        
    } catch (error) {
        res.status(400)
        res.json({
            "message": error.message
        })
    }
}

export const getUser = async (req,res) => {
    try {
        const users = await User.findAll();
        let kirim = [];

        users.forEach(u => {
            const usr = {
                "id": u.id,
                "nama": u.nama,
                "email": u.email,
            }
            kirim.push(usr)
        })
        res.json(kirim);
    } catch (error) {
        res.status(400)
        res.json({ message: error.message });
    }
    
}