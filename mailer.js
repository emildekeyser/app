// require('dotenv').config();

// const domain = process.env.MAILGUN_DOMAIN;
// const apiKey = process.env.MAILGUN_APIKEY;

module.exports.mail = (to, subject, message, messageHtml) => {
	const mailOptions = {
		from: 'gmnodetest53q@gmail.com',
		to: to,
		subject: subject,
		text: message,
		html: messageHtml
	};

	var nodemailer = require('nodemailer');

	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'gmnodetest53q@gmail.com',
			pass: '53QYHf~{"xnSiWFa_&GNqa%CM'
		}
	});

	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	}); 
}
