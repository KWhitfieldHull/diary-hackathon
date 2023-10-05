const Diary = require("../models/Diary.js");

async function index(req, res) {
    try {
        const diaries = await Diary.getAll();
        res.status(200).json(diaries);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

async function title(req, res) {
    res.json({
        title: "Diary Entries",
        description: "Create your own Diary!"
    })
}

async function show(req, res) {
    try {
        const id = parseInt(req.params.id);
        const diary = await Diary.getOneById(id);
        res.status(200).json(diary);
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}


// async function getTop(req, res) {
//     try {
//         const topDiary = await Diary.getTopDiary();
//         res.status(200).json(topDiary);
//     } catch (err) {
//         res.status(404).json({ "error": err.message })
//     }
// }

async function create(req, res) {
    try {
        const data = req.body
        const newDiary = await Diary.create(data);
        res.json(newDiary);
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}

async function update(req, res) {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;
        const diary = await Diary.getOneById(id)

        const result = await diary.update(data);

        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}

async function destroy(req, res) {
    try {
        const id = parseInt(req.params.id);
        const diary = await Diary.getOneById(id);
        const result = await diary.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}

module.exports = {
    index, show, create, destroy, update, title
}