const router = require('express').Router();
const db = require('../db/dbConnect');
const utils = require('../utils/utils');
const multer = require('multer');
const upload = multer({ dest: "uploads" });

router.get('/', (req, res) => {
    const statement = `select * from book`;
    db.query(statement, (err, result) => {
        res.send(utils.createResult(err, result));
    });
});
router.post('/add', upload.single('book_img'), (req, res) => {
    const statement = `insert into book(book_title,book_description,book_img) values(?,?,?)`;
    const { book_title, book_description } = req.body;
    const { book_img } = req.file;
    db.query(statement, [book_title, book_description, book_img], (err, result) => {
        res.send(utils.createResult(err, result));
    });
});
module.exports = router;
