const express = require('express');
const app = express();
const articleRouter = require('./routes/articles');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('Connected successfully');
});

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  const articles = [
    {
      title: 'test article',
      createdAt: new Date(),
      description: 'Test description',
    },
  ];
  res.render('articles/index', { articles: articles });
});

app.use('/articles', articleRouter);
app.listen(5000, () => {
  console.log('listening on port 5000');
});

//  https://www.youtube.com/watch?v=1NrHkjlWVhM&t=307s 24:00
