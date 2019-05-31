const express = require('express')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
const faker = require('faker');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/stats', (req, res) => {
  const r = [];
  for(let i = 0; i < 10; i++) {
    r.push({
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      count: faker.random.number()
    });
  }
  res.send(r);
});
app.use('/api/collections', (req, res) => {
  const r = [];
  for(let i = 0; i < 20; i++) {
    r.push({
      id: faker.random.uuid(),
      avatar: faker.image.avatar(),
      name: faker.name.title(),
      amount: faker.finance.amount(),
      createdAt: faker.date.recent()
    });
  }
  res.send(r);
});

module.exports = app;
