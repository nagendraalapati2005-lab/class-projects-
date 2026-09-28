
const express = require("express");
const db = require("./db");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*");

    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );

    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
    );

    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }

    next();

});



const uploadDirectory = path.join(__dirname, "uploads-data");
fs.mkdirSync(uploadDirectory, { recursive: true });

const upload = multer({
    dest: uploadDirectory
});



app.use(
    "/uploads",
    express.static(uploadDirectory)
);


app.post("/signup", (req, res) => {

    const {
        first_name,
        last_name,
        email,
        password
    } = req.body;


    const sql =
        "INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)";


    db.query(
        sql,
        [
            first_name,
            last_name,
            email,
            password
        ],
        (err) => {

            if (err) {

                console.log(err);

                return res.status(500).json({
                    message: "Database error"
                });

            }


            res.status(200).json({
                message: "User registered successfully"
            });

        }
    );

});



app.post("/login", (req, res) => {

    const {
        email,
        password
    } = req.body;


    const sql =
        "SELECT * FROM users WHERE email = ?";


    db.query(
        sql,
        [email],
        (err, results) => {

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

        }
    );

});


app.post("/feedback", (req, res) => {

    const {
        firstName,
        lastName,
        email,
        dob,
        gender,
        country,
        rating,
        feedback
    } = req.body;


    if (
        !firstName ||
        !lastName ||
        !email ||
        !dob ||
        !gender ||
        !country ||
        !rating ||
        !feedback
    ) {

        return res.status(400).json({
            message: "Please fill in all fields"
        });

    }


    const sql = `
        INSERT INTO feedback
        (
            first_name,
            last_name,
            email,
            dob,
            gender,
            country,
            rating,
            feedback
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;


    db.query(
        sql,
        [
            firstName,
            lastName,
            email,
            dob,
            gender,
            country,
            rating,
            feedback
        ],
        (err) => {

            if (err) {

                console.log(err);

                return res.status(500).json({
                    message: "Database error"
                });

            }


            res.status(200).json({
                message: "Feedback submitted successfully"
            });

        }
    );

});


app.get("/feedback", (req, res) => {

    const sql =
        "SELECT * FROM feedback";


    db.query(
        sql,
        (err, results) => {

            if (err) {

                console.log(err);

                return res.status(500).json({
                    message: "Database error"
                });

            }


            res.status(200).json(results);

        }
    );

});


app.post(
    "/gallery",
    upload.array("images", 10),
    (req, res) => {

        if (
            !req.files ||
            req.files.length === 0
        ) {

            return res.status(400).json({
                message: "Please select an image"
            });

        }


        req.files.forEach((file) => {

            const sql = `
                INSERT INTO gallery
                (image_name, image_path)
                VALUES (?, ?)
            `;


            db.query(
                sql,
                [
                    file.originalname,
                    file.filename
                ],
                (err) => {

                    if (err) {
                        console.log(err);
                    }

                }
            );

        });


        res.status(200).json({
            message: "Images uploaded successfully"
        });

    }
);

app.get("/gallery", (req, res) => {

    const sql = `
        SELECT *
        FROM gallery
        ORDER BY id DESC
    `;


    db.query(
        sql,
        (err, results) => {

            if (err) {

                console.log(err);

                return res.status(500).json({
                    message: "Database error"
                });

            }


            res.status(200).json(results);

        }
    );

});


app.listen(PORT, () => {

    console.log(
        `Server running on http://localhost:${PORT}`
    );

});