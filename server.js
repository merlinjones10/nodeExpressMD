const express = require('express');
const app = express();
const articleRouter = require('./routes/articles');

app.set('view engine', 'ejs');

app.use('/articles', articleRouter);

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

app.listen(5000);

//  https://www.youtube.com/watch?v=1NrHkjlWVhM&t=307s 24:00
