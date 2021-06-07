const
    mongoose = require('mongoose'),
    Street = mongoose.model('Street')

module.exports.sendAreas = function (req, res) {

    Street.find({}).sort({ area: 1 }).exec(function (err, result) {
        if (err) throw err
        let
            areas = result
                .reduce((a, s) => {
                    a.push(s.area)
                    return a
                }, [])
                .filter((elem, index, self) => {
                    return index === self.indexOf(elem)
                }),
            results = JSON.stringify(areas)
        res.status(200)
        res.json(results)
    })
}

module.exports.sendAreasWithDates = function (req,res) {
    Street.find({}).sort({ area: 1 }).exec(function (err, result) {
        if (err) throw err
        let results = JSON.stringify(result)
        res.status(200)
        res.json(results)
    })
}

//ezzel toltam bele az új dátum fieldet
module.exports.updateStreets = function (req, res) {

    const streetData = req.body,
        filter = { area: streetData.area },
        updated = { $set: { lomDate: streetData.lomDate } },
        options = { upsert: true }

    Street.updateMany(filter, updated, options, err => {
        res.status(200);
        if (err) {
            console.log(err)
            res.json({
                'saved': false,
                'message': err
            });
        } else {
            console.log('ok')
            res.json({
                'saved': true,
                'message': 'ok'
            });
        }
    })
}

module.exports.sendStreets = function (req, res) {

    const district = req.body.district

    Street.find({ area: district }).sort({ street: 1 }).exec(function (err, result) {
        if (err) throw err
        // let results = JSON.stringify(result)
        let
            streets = result
                .reduce((a, s) => {
                    a.push(s.street)
                    return a
                }, [])
                .filter((elem, index, self) => {
                    return index === self.indexOf(elem)
                }),
            results = JSON.stringify(streets)
        res.status(200)
        res.json(results)
    })
}