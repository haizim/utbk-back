import Soal from "../../models/soalModel.js";

export const getAllSoal = async (req,res) => {
    try {
        const soalku = await Soal.findAll();
        res.json(soalku);
    } catch (error) {
        res.status(400)
        res.json({ message: error.message });
    }
    
}

export const createSoal = async (req,res) => {
    const kosongan = [
        {
            "jenis":"petunjuk",
            "isi":""
        },
        {
            "jenis":"soal",
            "soal":"",
            "a":"",
            "b":"",
            "c":"",
            "d":"",
            "e":"",
            "jawaban":""
        }
    ];
    const simpan = {
        "nama": req.body.nama,
        "soal_tps": kosongan,
        "soal_tpa": kosongan,
    }

    try {
        await Soal.create(simpan);
        res.json({
            "message": "Soal telah dibuat",
            "simpan": simpan,
        });
    } catch (error) {
        res.status(400)
        res.json({ message: error.message });
    }
    
}

export const getSoalById = async (req,res) => {
    try {
        const soal = await Soal.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json({
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

export const updateSoal = async (req,res) => {
    try {
        const soalnya = "soal_"+req.params.tes;
        const jawabannya = "jawaban_"+req.params.tes;
        // const isiSoal = JSON.stringify(req.body.soal) 
        const isiSoal = req.body.soal

        let jwb = isiSoal.filter(sl => sl.jenis == 'soal')

        let jawaban = [];
        
        jwb.forEach(j => {
            jawaban.push(j.jawaban.toLowerCase())
        });

        let simpan = {};
        simpan["nama"] = req.body.nama;
        simpan[soalnya] = isiSoal;
        simpan[jawabannya] = jawaban;

        const upd = await Soal.update(simpan,{
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Updated",
            "simpan": simpan,
            "jawaban": jawaban,
        });
    } catch (error) {
        res.status(400)
        res.json({ message: error.message });
    }
    
}

export const deleteSoal = async (req,res) => {
    try {
        await Soal.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Soal telah dihapus"
        });
    } catch (error) {
        res.status(400)
        res.json({ message: error.message });
    }
    
}