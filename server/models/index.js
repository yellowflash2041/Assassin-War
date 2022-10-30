const mongoose = require('mongoose');
const User = require('./user');
const Poll = require('./poll');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, ({ useNewUrlParser: true, useUnifiedTopology: true }));

module.exports = { User, Poll };
