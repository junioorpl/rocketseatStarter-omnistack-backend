const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-2ayep.mongodb.net/semanaOmnistack?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  keepAlive: true,
})

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3001);