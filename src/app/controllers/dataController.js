
class DataController {
    index(req, res) {
        res.send(req.body.bat || 'tat')
    }
}

module.exports = new DataController