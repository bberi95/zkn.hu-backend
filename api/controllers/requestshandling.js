const
    mongoose = require('mongoose'),
    Request = mongoose.model('Request')

module.exports.saveRequests = function (req, res,) {

    console.log(req)

    const newRequests = new Request()
    newRequests.name = req.name
    newRequests.userID = re.userID
    newRequests.email = req.email
    newRequests.phone = req.phone
    newRequests.district = req.district
    newRequests.street = req.street
    newRequests.houseNumber = req.houseNumber
    newRequests.garbagesCont = req.garbagesCont
    newRequests.lomTextArea = req.lomTextArea

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

};