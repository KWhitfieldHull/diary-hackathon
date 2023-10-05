require("dotenv").config()
const fs = require('fs');
const db = require("./connect_diary");

const sql = fs.readFileSync(__dirname+ '/setup_diary.sql').toString();
db.query(sql)
    .then(data => {
        db.end();
        console.log("Diary Setup complete");
    })
    .catch(error => console.log(error));