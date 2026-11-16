import express from 'express';
import fs from 'fs';

const app = express();

const bookData = JSON.parse(
    fs.readFileSync('./books.json', 'utf8')
);

app.get('/api/v1/books', (req, res) => {
    console.log('API REQUEST RECEIVED');

    res.json({
        status: 'success',
        data: {
            books: bookData
        }
    });
});

app.listen(8000, () => {
    console.log('MY NEW SERVER IS RUNNING ON PORT 3000');
});
