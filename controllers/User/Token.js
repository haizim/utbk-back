import Token from "../../models/tokenModel.js";

export const checkToken = async (req,res) => {
    try {
        const token = await Token.findAll({
            where: {
                token: req.params.token,
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