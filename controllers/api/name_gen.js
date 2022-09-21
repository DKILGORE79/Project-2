const express = require('express');
const path = require('path');
const data = require('../../seeds/mockData.json');

const app = express();
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'handlebars');
app.set(express.static('public'));

app.use('/random-name', (req, res) => {
  const { first_name } = data[Math.round(Math.random() * data.length)];
  return res.json({ first_name });
});

app.use('/', (req, res) => {
  return res.render('index');
});

app.listen(3001, () => console.log('App listening...'));
