import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize

const Hasil = db.define('hasil', {
    email: {
        type: DataTypes.STRING
    },
    token: {
        type: DataTypes.STRING
    },
    benar_tps: {
        type: DataTypes.JSON
    },
    jawaban_tps: {
        type: DataTypes.JSON
    },
    nilai_tps: {
        type: DataTypes.INTEGER
    },
    benar_tpa: {
        type: DataTypes.JSON
    },
    jawaban_tpa: {
        type: DataTypes.JSON
    },
    nilai_tpa: {
        type: DataTypes.INTEGER
    },
}, {
    freezeTableName: true
})

export default Hasil;