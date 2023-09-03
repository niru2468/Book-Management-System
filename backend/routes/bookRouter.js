const router = require('express').Router();
const db = require('../db/dbConnect');
const utils = require('../utils/utils');
const multer = require('multer');
const upload = multer({ dest: 'uploads' });

router.get('/', (req, res) => {
    const statement = `select * from book`;
    db.query(statement, (err, result) => {
        res.send(utils.createResult(err, result));
    });
});
router.get('/:id', (req, res) => {
    const statement = `select * from book where id=?`;
    const { id } = req.params;
    db.query(statement, [id], (err, result) => {
        res.send(utils.createResult(err, result));
    });
});
router.post('/add', upload.single('book_img'), (req, res) => {
    const statement = `insert into book (book_title, book_description, book_img) values(?,?,?)`;
    const { book_title, book_description } = req.body;
    const { filename } = req.file;
    db.query(statement, [book_title, book_description, filename], (err, result) => {
        res.send(utils.createResult(err, result));
    });
});
router.put('/update/:id', upload.single('book_img'), (req, res) => {
    const statement = ` update book set book_description=?, book_img=? where id=?`;
    const { book_description } = req.body;
    const { filename } = req.file;
    const { id } = req.params;
    db.query(statement, [book_description, filename, id], (err, result) => {
        res.send(utils.createResult(err, result));
    });
});
router.delete('/delete/:id', (req, res) => {
    const statement = `delete from book where id=?`;
    const { id } = req.params;
    db.query(statement, [id], (err, result) => {
        res.send(utils.createResult(err, result));
    });
});
module.exports = router;
