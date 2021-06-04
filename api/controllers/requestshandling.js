const
    mongoose = require('mongoose'),
    Request = mongoose.model('Request')

module.exports.sendRequests = function (req, res) {

    Request.find({ deleted: false }).sort({ date: -1 }).exec(function (err, result) {
        if (err) throw err
        let results = JSON.stringify(result)
        res.status(200)
        res.json(results)
    })
}

module.exports.updateRequests = function (req, res) {

    //módosítom a deletedet true-ra, ezzel szűröm az adatokat, mintha törölve lenne
    console.log(req.body)
    console.log('anything')
    const requestData = req.body,
        filter = { id: requestData.id },
        updated = { 
            $set: { 
                deleted: requestData.deleted,
                id: requestData.id,
                date: requestData.date,
            } },
        options = { upsert: true }

    Request.updateOne(filter, updated, options, err => {
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
    });

};

module.exports.saveRequests = function (req, res,) {

    setId().then (id =>{
        const newRequests = new Request(req.body)
        newRequests.id = id
        newRequests.date = new Date()
    
        newRequests.save(function (err) {
            res.status(200);
            if (err) {
                res.json({
                    'Save status': err
                });
            } else {
                res.json({
                    'Save status': 'ok!'
                });
            }
        });
    })



};

async function setId() {

    let id
    var requestsCount = 1
    let now = new Date()
    let year = now.getFullYear().toString()
    let month = now.getMonth() + 1
    if (month < 10) {
        month = '0' + month
    } else {
        month = month.toString()
    }
    let day = now.getDate()
    if (day < 10) {
        day = '0' + day
    } else {
        day = day.toString()
    }
    let today = year + month + day
    let todayForm = `${year}-${month}-${day}`

    let dbContent
    try {
        dbContent = await Request.find({ date: { $gt: new Date(todayForm) } })
    } catch (err) {
        console.log(err.message)
    }

    dbContent.forEach(elem => {
        requestsCount++
    })
    if (requestsCount < 10) {
        id = today + '_0' + requestsCount
    } else {
        id = today + '_' + requestsCount
    }
    return id
}