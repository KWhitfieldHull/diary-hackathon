const { Router } = require('express');

const diaryController = require('../controllers/diary.js');

const diaryRouter = Router();


diaryRouter.get("/diary", diaryController.index); 
diaryRouter.post("/diary", diaryController.create);
//diaryRouter.get("/diary/top", diaryController.getTop); 
diaryRouter.get("/:id", diaryController.show); 
//diaryRouter.patch("/:id", diaryController.update); 
diaryRouter.delete("/:id", diaryController.destroy); 


module.exports = diaryRouter;