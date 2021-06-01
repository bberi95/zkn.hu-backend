const
    mongoose = require('mongoose'),
    Garbage = mongoose.model('Garbage')

module.exports.sendGarbages = function (req, res) {

    Garbage.find({}).exec(function (err, result) {
        if (err) throw err
        let results = JSON.stringify(result)
        res.status(200)
        res.json(results)
    })
}