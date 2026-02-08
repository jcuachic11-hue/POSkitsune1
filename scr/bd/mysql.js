// scr/db/mysql.js
const mysql = require('mysql2/promise');

// Configuración de la conexión
const pool = mysql.createPool({
     host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0



});

// Exporta directamente el pool
module.exports = pool;
