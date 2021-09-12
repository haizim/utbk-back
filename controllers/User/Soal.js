import Soal from "../../models/soalModel.js";
// import Token from "../../models/tokenModel.js";

export const getSoal = async (req,res) => {
    try {
        const soal = await Soal.findAll({
            where: {
                id: req.params.id
            }
        });

        res.json({
            "token": req.params.token,
            "id": soal[0].id,
            "nama": soal[0].nama,
            "soal": soal[0]["soal_"+req.params.tes],
            // "tes": soal[0]
        });      
        
    } catch (error) {
        res.status(400)
        res.json({ message: error.message });
    }
    
}