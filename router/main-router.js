var auth = require('./auth');

module.exports = function (app) {
    app.use('/auth', auth);
}
