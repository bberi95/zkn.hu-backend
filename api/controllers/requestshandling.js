const
    mongoose = require('mongoose'),
    Request = mongoose.model('Request')

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

// async function setId() {
//     var requestsCount = 1
//     let dbContent
//     try {
//         dbContent = await Request.find()
//     } catch (err) {
//         console.log(err.message)
//     }
//     dbContent.forEach(elem =>{
//         requestsCount++
//     })
//     // if (requestsCount < 10) {
//     //     id = '0' + requestsCount
//     // } else {
//     //     //...
//     // }
//     return requestsCount
// }

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