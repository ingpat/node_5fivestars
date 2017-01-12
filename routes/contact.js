var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send',(req,res,next)=>{
var transporter = nodemailer.createTransport({
	service:'Gmail',
	auth:{ 
		user:'ingpatrickls@gmail.com',
		pass:'!detty1Pat79'
	}
});
var mailOptions={
	from:'louis paatrick <ingpatrickls@gmail.com>',
	to:'ingpatrickls@gmail.com',
	subject:'goood to know',
	text:'youn have a new from your friend with the following details... Name: '+req.body.name+' Email: '+req.body.email+' Message: '+req.body.email,
	html:'<p>You have a new message</p><ul><li> Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.email+'</li></ul>'
};
transporter.sendMail(mailOptions,(error,info)=>{
	if(error){
		console.log(error)
		res.redirect('/');
	}else{
		console.log('Message sent: '+info.response)
		res.redirect('/');
	}
});
});

module.exports = router;
  