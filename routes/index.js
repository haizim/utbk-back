import express from "express";

import {
    Register,
    Login,
    getUser
} from "../controllers/User.js";

import {
    getAllSoal,
    createSoal,
    getSoalById,
    updateSoal,
    deleteSoal
} from "../controllers/Admin/Soal.js";

import {
    getAllToken,
    createToken,
    getTokenById,
    updateToken,
    deleteToken
} from "../controllers/Admin/Token.js";

import {
    getHasilTokens,
    getHasilByToken,
} from "../controllers/Admin/Hasil.js";

import {
    getSoal,
} from "../controllers/User/Soal.js"

import {
    checkToken
} from "../controllers/User/Token.js"

import {
    buatHasil,
    updateHasil,
    getHasilByEmail,
} from "../controllers/User/Hasil.js"

const router = express.Router();

router.get('/', function(req, res) {
    res.send('BACK-END UTBK HAIZIM. DIBUAT DENGAN EXPRESS.JS DAN MYSQL SEBAGAI DB');     
});

router.post('/register', Register)
router.post('/login', Login)
router.get('/users', getUser)

router.get('/admin/soal', getAllSoal)
router.post('/admin/soal', createSoal)
router.get('/admin/soal/:id/:tes', getSoalById)
router.patch('/admin/soal/:id/:tes', updateSoal)
router.delete('/admin/soal/:id', deleteSoal)

router.get('/admin/token', getAllToken)
router.post('/admin/token', createToken)
router.get('/admin/token/:token', getTokenById)
router.patch('/admin/token/:token', updateToken)
router.delete('/admin/token/:token', deleteToken)

router.get('/admin/hasil', getHasilTokens)
router.get('/admin/hasil/:token', getHasilByToken)

router.get('/user/soal/:id/:tes', getSoal)

router.get('/user/token/:token', checkToken)

router.post('/user/hasil', buatHasil)
router.patch('/user/hasil/:email/:token', updateHasil)
router.get('/user/hasil/:email/', getHasilByEmail)

export default router;