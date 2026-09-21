const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "nagendra",
    database: "class_projects_db"
});

connection.connect((error) => {
    if (error) {
        console.error("Database connection failed:", error);
        return;
    }

    console.log("Connected to MySQL!");
});

module.exports = connection;