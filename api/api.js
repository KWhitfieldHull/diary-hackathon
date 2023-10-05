const express = require('express');
const cors = require('cors');

const diaryRouter = require('./routers/diary');

const api = express();

api.use(cors());
api.use(express.json());
api.use("/", diaryRouter)



module.exports = api;