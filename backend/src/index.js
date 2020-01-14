const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();

// MongoDB (Banco de dados não reacional)

mongoose.connect('mongodb+srv://daniel:123@cluster0-1n0zh.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);