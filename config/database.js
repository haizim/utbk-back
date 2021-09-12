import { Sequelize } from "sequelize";

const db = new Sequelize('utbk', 'haizim', 'esdfgh',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;