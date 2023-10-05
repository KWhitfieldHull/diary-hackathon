const { Router } = require('express');

const authenticator = require("../middleware/authenticator")
const diaryController = require('../controllers/diary.js');

const diaryRouter = Router();

diaryRouter.get("/", diaryController.title); 
diaryRouter.get("/diary", authenticator, diaryController.index); 
diaryRouter.post("/diary", authenticator, diaryController.create);
diaryRouter.get("/:id", authenticator, diaryController.show); 
diaryRouter.patch("/:id", authenticator, diaryController.update); 
diaryRouter.delete("/:id", authenticator, diaryController.destroy); 


module.exports = diaryRouter;