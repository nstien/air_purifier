const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const path = require('path')
const methodOverride = require('method-override')
const routes = require('./routes/index')

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// morgan
app.use(morgan('combined'))

// handlebar
app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//static files
app.use(express.static(path.join(__dirname, 'public')))

//method override
app.use(methodOverride('_method'))

// routes
routes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})