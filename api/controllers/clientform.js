const
    nodemailer = require('nodemailer'),
    mailerHost = process.env.EMAIL_HOST,
    mailerUser = process.env.EMAIL_USER,
    mailerPwd = process.env.EMAIL_PASS,
    mailerAddress = process.env.EMAIL_RECIPIENT,
    transporter = nodemailer.createTransport({
        host: mailerHost,
        port: 465,
        secure: true, // upgrade later with STARTTLS
        auth: {
            user: mailerUser,
            pass: mailerPwd
        }
    });

module.exports.sendClientForm = (req, res) => {
    const
        form = req.body,
        mailOptions = {
            from: [form.clientAddress, { name: form.name, address: form.clientAddress }],
            to: mailerAddress,
            cc: form.clientAddress,
            subject: 'Lomtalanítási igény',
            html: `<p>Név: ${form.name}<br>Ügyfélkód: ${form.userID}<br>Cím: ${form.street} ${form.address}<br>Telefon: ${form.phone}<br>Hulladék jellege: ${form.type}<br>Megjegyzés: ${form.text}</p>`
        };

    transporter.sendMail(mailOptions, function (err, info) {
        res.status(200);
        if (err) {
            console.log(err)
            res.json({
                'sent': false,
                'message': err
            });
        } else {
            console.log('Email sent: ' + info.response);
            if (parseInt(info.response.substr(0, 3)) == 250) {
                res.json({
                    'sent': true,
                    'message': 'ok'
                });
            } else {
                res.json({
                    'sent': false,
                    'message': info
                });
            }
        }
    });
}

