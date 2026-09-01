const express = require("express");
const db = require("./db");

const app = express();
const PORT = 3000;
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }

    next();
});

app.post("/signup", (req, res) => {

    const { first_name, last_name, email, password } = req.body;

    const sql =
        "INSERT INTO users (first_name,last_name, email, password) VALUES (?, ?, ?, ?)";

    db.query(sql, [first_name, last_name, email, password], (err) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Database error"
            });
        }

        res.status(200).json({
            message: "User registered successfully"
        });

    });

});

app.post("/login", (req, res) => {

    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, [email], (err, results) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Database error"
            });
        }

        if (results.length === 0) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const user = results[0];

        if (user.password !== password) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        res.status(200).json({
            message: "Login successful"
        });

    });

});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

