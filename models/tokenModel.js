import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize

const Token = db.define('token', {
    token: {
        type: DataTypes.STRING
    },
    instansi: {
        type: DataTypes.STRING
    },
    soal: {
        type: DataTypes.STRING
    },
    expired: {
        type: DataTypes.DATE
    }
}, {
    freezeTableName: true
})

export default Token;