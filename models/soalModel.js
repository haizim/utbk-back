import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize

const Soal = db.define('soal', {
    nama: {
        type: DataTypes.STRING
    },
    soal_tps: {
        type: DataTypes.JSON
    },
    jawaban_tps: {
        type: DataTypes.JSON
    },
    soal_tpa: {
        type: DataTypes.JSON
    },
    jawaban_tpa: {
        type: DataTypes.JSON
    }
}, {
    freezeTableName: true
})

export default Soal;