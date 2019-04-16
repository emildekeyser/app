require('dotenv').config();

const emailAddress = process.env.EMAILADDRESS ;
const emailPassword = process.env.EMAILPASSWORD ;

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
			user: emailAddress,
			pass: emailPassword
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
