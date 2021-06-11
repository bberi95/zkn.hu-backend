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

module.exports.sendActiveGarbages = function (req, res) {

    Garbage.find({active: true}).exec(function (err, result) {
        if (err) throw err
        let results = JSON.stringify(result)
        res.status(200)
        res.json(results)
    })
}

module.exports.updateGarbage = function (req, res) {

    const garbageData = req.body,
        filter = { name: garbageData.name },
        updated = {
            $set: {
                active: garbageData.active,
            }
        }
        options = { upsert: true }

    Garbage.updateOne(filter,updated, options, err =>{
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
                'message': 'updated'
            });
        }
    });
};

module.exports.deleteGarbage = function (req, res) {

    const garbageData = req.body

    Garbage.deleteOne(garbageData, err =>{
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
                'message': 'deleted'
            });
        }
    })
}

module.exports.saveGarbage = function (req, res) {

    console.log(req.body)
    const newGarbage = new Garbage(req.body)
    //kell valami index? nem 100% minden property értelme...
    newGarbage.save(function (err) {
        if (err) {
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
    })
}