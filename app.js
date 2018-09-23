var express = require('express'),
    path = require('path'),
    config = require('./config/config'),
    layouts = require('express-ejs-layouts'),
    body = require('body-parser'),
    session = require('express-session'),
    app = express();

console.log(__dirname);
// view engine
app.use(layouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// body parser
app.use(body.urlencoded({ extended: false }));
app.use(body.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'KB15sxNuAFVEUzAx5B1uvTGVeoq4L2kK',
    resave: false,
    saveUninitialized: true,
    maxAge: (1000 * 60 * 15)
}));

// routing
require('./router/main-router.js')(app);

app.listen(config.server.port, () => {
    console.log("Server started on " + config.server.port);
});
