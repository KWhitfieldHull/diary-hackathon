const express = require('express');
const cors = require('cors');

const diaryRouter = require('./routers/diary');
const userRouter = require('./routers/user');

const api = express();

api.use(cors());
api.use(express.json());
api.use("/", diaryRouter)

api.use("/users", userRouter);

module.exports = api;