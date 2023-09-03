const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8085;
const bookRouter = require('./routes/bookRouter');
app.use(express.static("./uploads"));
app.use(cors("*"));
app.use(express.json());
app.use('/api/v1/book', bookRouter);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
