require("dotenv").config();          // reads secret settings from a .env file on your laptop
const mysql = require("mysql2");

const pool = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD,       // no password typed here anymore
    database: process.env.DB_NAME || "class_projects_db",
    port: Number(process.env.DB_PORT) || 3306,
    ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : undefined,
    waitForConnections: true,
    connectionLimit: 5
});

pool.getConnection((error, connection) => {
    if (error) {
        console.error("Database connection failed:", error.message);
        return;
    }
    console.log("Connected to MySQL!");
    connection.release();
});

module.exports = pool;
