import Token from "../../models/tokenModel.js";

export const getAllToken = async (req,res) => {
    try {
        const tokenku = await Token.findAll();
        res.json(tokenku);
    } catch (error) {
        res.status(400)
        res.json({ message: error.message });
    }
    
}

export const createToken = async (req,res) => {
    try {
        await Token.create(req.body);
        res.json({
            "message": "Token telah dibuat",
        });
    } catch (error) {
        res.status(400)
        res.json({ message: error.message });
    }
}

export const getTokenById = async (req,res) => {
    try {
        const token = await Token.findAll({
            where: {
                token: req.params.token
            }
        });
        if(token.length > 0){
            res.json(token[0]);
        }else{
            res.status(404);
            res.json({ message: "Token tidak ditemukan" });
        }
    } catch (error) {
        res.status(400)
        res.json({ message: error.message });
    }
    
}

export const updateToken = async (req,res) => {
    try {
        await Token.update(req.body,{
            where: {
                token: req.params.token
            }
        });
        res.json({
            "message": "Token Updated"
        });
    } catch (error) {
        res.status(400)
        res.json({ message: error.message });
    }
    
}

export const deleteToken = async (req,res) => {
    try {
        await Token.destroy({
            where: {
                token: req.params.token
            }
        });
        res.json({
            "message": "token Deleted"
        });
    } catch (error) {
        res.status(400)
        res.json({ message: error.message });
    }
    
}