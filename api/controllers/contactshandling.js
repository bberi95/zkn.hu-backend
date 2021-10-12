const
    mongoose = require('mongoose'),
    Contact = mongoose.model('Contact')

module.exports.sendContact = function (req, res) {

    Contact.find({}).exec(function (err, result) {
        if (err) throw err
        let results = JSON.stringify(result)
        res.status(200)
        res.json(results)
    })
}

module.exports.saveContact = function (req, res) {

    console.log(req.body)
    const newContact = new Contact(req.body)
    newContact.save(function (err) {
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

module.exports.deleteContact = function (req, res) {

    const ContactData = req.body

    Contact.deleteOne(ContactData, err =>{
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

module.exports.updateContact = function (req, res) {

    const ContactData = req.body,
        filter = { name: ContactData.name },
        updated = {
            $set: {
                name: ContactData.name,
                address: ContactData.address,
                phone: ContactData.phone,
                mobile: ContactData.mobile,
                email: ContactData.email,
                openHours: ContactData.openHours,
                latitude: ContactData.latitude,
                longitude: ContactData.longitude,
                active: ContactData.active
            }
        }
        options = { upsert: true }

    Contact.updateOne(filter,updated, options, err =>{
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