const mongoose = require('mongoose')
const Intro = mongoose.model('Intro')

module.exports.sendIntro = function (req, res) {

    Intro.find({}).exec(function (err, result) {
        if (err) throw err
        let results = JSON.stringify(result)
        res.status(200)
        res.json(results)
    })

}

module.exports.updateIntro = function (req, res) {

    const introData = req.body,
        filter = { id: introData.id },
        updated = { $set: { id: introData.id, title: introData.title, text: introData.text, date: introData.date , sign: introData.sign, rank: introData.rank } },
        options = { upsert: true }

    Intro.updateOne(filter, updated, options, err => {
        res.status(200);
        if (err) {
            console.log(err)
            res.json({
                'saved': false,
                'message': err
            });
        } else {
            res.json({
                'saved': true,
                'message': 'ok'
            });
        }
    });

};