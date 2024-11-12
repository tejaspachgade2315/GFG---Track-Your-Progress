const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));


// Model/Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    }
});
const GFGUsers = mongoose.model("GFGUsers", userSchema);
// Usernames to be inserted
// const users = [
//     { username: "rangeyraghav13" },
//     { username: "youtube_aryanc403" },
//     { username: "cipher007" },
//     { username: "v7fgg" },
//     { username: "coder_nandy" },
//     { username: "ambermishraam042003" },
//     { username: "daksh_02" },
//     { username: "dhruv_pasricha" },
//     { username: "vashutyqhpy" },
//     { username: "khiep94" },
//     { username: "duvvurisrinath" },
//     { username: "Ajay" },
//     { username: "Singh" },
//     { username: "Deopa" },
//     { username: "omhari" },
//     { username: "meetshaz26w" }
// ];

// Insert the usernames into the database
// GFGUsers.insertMany(users)
//     .then(res => {
//         console.log("Data successfully inserted:", res);
//         mongoose.connection.close();  // Close the connection once done
//     })
//     .catch(err => {
//         console.error("Error inserting data:", err);
//         mongoose.connection.close();
//     });

// Routes
app.post("/submit", async (req, res) => {
    const un = req.body.username;
    const existingUser = await GFGUsers.findOne({ username: un });
    if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
    }
    const newUserName = new GFGUsers({ username: req.body.username });
    try {
        if (!un) {
            return res.status(400).json({ message: "Username is required" });
        }

        const savedText = await newUserName.save();
        res.status(200).json(savedText);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.get("/", async (req, res) => {
    GFGUsers.find().then((users) => {
        res.send(users);
    }).catch((err) => {
        res.status(400).send(err);
    });
});

app.listen(port, () => {
    console.log("Listening on port ", port);
}) 