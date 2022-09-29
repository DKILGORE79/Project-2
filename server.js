require('dotenv').config();
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const cors = require('cors');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 8080;

const IS_PROD = process.env.NODE_ENV === 'prod';

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use(cors());
// Inform Express.js on which template engine to use
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.engine);

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: !IS_PROD }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
});



//  Random name Generator
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.set(express.static('public'));

app.use('/random-name', (req, res) => {
  const { dog_name } = data[Math.round(Math.random() * data.length)];
  return res.json({ dog_name });
});

// app.listen(3001, () => console.log('App listening...'));


