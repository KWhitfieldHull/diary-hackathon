const db = require("../database/connect")


class Diary {

    constructor({ entry_id, name, text, date, category }) {
        this.id = entry_id;
        this.name = name;
        this.text = text;
        this.date = date;
        this.category = category
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM diary ORDER BY entry_id;");
        if (response.rows.length === 0) {
            throw new Error("No diaries available.")
        }
        return response.rows.map(g => new Diary(g));
    }

    // static async getTopSnack() {
    //     const response = await db.query("SELECT * FROM diary ORDER BY votes DESC LIMIT 1;");
    //     if (response.rows.length != 1) {
    //         throw new Error("Unable to locate diary.")
    //     }
    //     return new Diary(response.rows[0]);
    // }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM diary WHERE entry_id = $1;", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate diary.")
        }
        return new Diary(response.rows[0]);
    }

    static async create(data) {
        const { name, text, date, category } = data;
        const response = await db.query('INSERT INTO diary (name, text, date, category) VALUES ($1, $2, NOW()::timestamp,$3) RETURNING *;', [name, text, category]);
        const diaryId = response.rows[0].entry_id;
        const newDiary = await Diary.getOneById(diaryId);
        return new Diary(newDiary)
    }

    // async update(data) {

    //     const response = await db.query("UPDATE diary SET votes = $1 WHERE snack_id = $2 RETURNING snack_id, votes;",
    //         [newVotes, this.id]);
    //     if (response.rows.length != 1) {
    //         throw new Error("Unable to update votes.")
    //     }
    //     return new Diary(response.rows[0]);
    // }

    async destroy() {
        const response = await db.query('DELETE FROM diary WHERE entry_id = $1 RETURNING *;', [this.id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to delete diary.")
        }
        return new Diary(response.rows[0]);
    }
}

module.exports = Diary;
