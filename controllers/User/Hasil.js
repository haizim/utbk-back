import Hasil from "../../models/hasilModel.js";
import Soal from "../../models/soalModel.js";

export const buatHasil = async (req,res) => {
    try {
        const adakah = await Hasil.findAll({
            where: {
                email: req.body.email,
                token: req.body.token,
            }
        });
        if(adakah.length == 0){
            const buat = await Hasil.create({
                "email": req.body.email,
                "token": req.body.token,
                "benar_tps": {},
                "jawaban_tps": {},
                "nilai_tps":0,
                "benar_tpa": {},
                "jawaban_tpa": {},
                "nilai_tpa":0,
            });
            res.json({
                "message": "Kolom hasil telah disiapkan",
                "buat": buat,
            });
        }else{
            res.status(409)
            res.json({
                "message": "Kolom hasil sudah ada"
            });
        }
        
    } catch (error) {
        res.status(400)
        res.json({ message: error.message });
    }
    
}

export const updateHasil = async (req,res) => {
    let jawaban = {};
    jawaban["jawaban_"+req.body.tes] = req.body.jawaban
    
    try {
        const soal = await Soal.findAll({
            where: {
                id: req.body.soal
            }
        })

        const kunci = JSON.parse(soal[0]["jawaban_"+req.body.tes]);

        let benar = [];

        for(let k = 0; k < kunci.length; k++){
            let b = 0;
            if(req.body.jawaban[k+1] != ""){
                b = req.body.jawaban[k+1] == kunci[k] ? 1 : -1 
            }    
            benar[k] = b;
        }

        jawaban["benar_"+req.body.tes] = benar;

        const bnr = benar.reduce((n, val) => {
            return n+( val === 1);
        }, 0);

        const slh = benar.reduce((n, val) => {
            return n+( val === -1);
        }, 0);

        const ksg = benar.reduce((n, val) => {
            return n+( val === 0);
        }, 0);

        const nilai = (bnr*4)-slh;

        jawaban["nilai_"+req.body.tes] = nilai;

        await Hasil.update(jawaban,{
            where: {
                email: req.params.email,
                token: req.params.token
            }
        });

        res.json({
            "message": "Hasil Updated",
            "kunci": kunci,
            "benar": benar,
            "bnr": bnr,
            "ksg": ksg,
            "slh": slh,
            "total": nilai,
        });
    } catch (error) {
        res.status(400)
        res.json({ message: error.message });
    }
    
}

export const getHasilByEmail = async (req,res) => {
    try {
        const hasil = await Hasil.findAll({
            where: {
                email: req.params.email
            }
        });
        res.json(hasil);
    } catch (error) {
        res.json({ message: error.message });
    }
    
}