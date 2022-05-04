const data = require('./data')
const home = require('./home')

module.exports = function routes(app) {
    app.use('/data', data)
    app.use('/', home)
}