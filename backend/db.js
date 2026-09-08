const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "nagendra",
    database: process.env.DB_NAME || "class_projects_db",
    port: Number(process.env.DB_PORT) || 3306
});

connection.connect((error) => {
    if (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }

    console.log("Connected to MySQL!");
});

module.exports = connection;
