import Hasil from "../../models/hasilModel.js";

export const getHasilTokens = async (req, res) => {
    try {
        const tokens = await Hasil.aggregate('token', 'DISTINCT', { plain: false })

        res.json(tokens)
    }catch (error) {
        res.status(400)
        res.json({ message: error.message });
    }
}

export const getHasilByToken = async (req, res) => {
    try {
        const nilai = await Hasil.findAll({
            where:{
                token: req.params.token
            }
        })
        // const nilaiSend = nilai.length>1 ? nilai : [nilai];
        res.json(nilai)
    } catch (error) {
        res.status(400)
        res.json({ message: error.message });
    }
}