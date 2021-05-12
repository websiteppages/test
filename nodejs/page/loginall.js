const request = require('request'),
	nodeMailer = require('nodemailer'),
    db_connection = require("../config/database").promise();
	const strtotime = require('strtotime');
	const dateFormat = require('dateformat');
const { uuid } = require('uuidv4');
const transporter = nodeMailer.createTransport({
           sendmail: true,
		   newline: 'unix',
		   path: '/usr/sbin/sendmail'
      });
const dotenv = require('dotenv');
dotenv.config();
const fromemail= process.env.EmailFrom;
const CaptchaSecretKey= process.env.GoogleCaptchaSecretKey;
exports.Register = async (req, res, next) => {
  try {
	   let date_today = new Date();
		const [rows] = await db_connection.execute("SELECT * FROM register WHERE email = ?",[req.body.user_email]);
			if (rows.length > 0) {
			  return res.status(200).json({msg:"Email already in use.please sign in",});
			}
			else {				const [sql] =  await db_connection.execute("INSERT INTO register(`name`,`email`,`password`,`date`,`type`,`phone`,`ipaddress`,`subscribe`) VALUES(?,?, ?, ?, ?, ?, ?, ?)",[req.body.user_name,req.body.user_email,req.body.password,date_today,req.body.type,req.body.phone,'ip',req.body.subscribe]);				return res.status(200).json({success:1,});
                //get system ip address
            const ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
			//google recaptcha
				if(req.body.recaptcha_response === undefined || req.body.recaptcha_response=== '' || req.body.recaptcha_response === null){
					return res.json({"msg" : "something goes to wrong"});
				  }
				  const secretKey = CaptchaSecretKey;
				  const verificationURL = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body.recaptcha_response + "&remoteip=" + req.connection.remoteAddress;
				request(verificationURL,async function(error,response,body) {
					body = JSON.parse(body);
				//---------------------------------------
					if(body.success) {
					const [sql] =  await db_connection.execute("INSERT INTO register(`name`,`email`,`password`,`date`,`type`,`phone`,`ipaddress`,`subscribe`) VALUES(?,?, ?, ?, ?, ?, ?, ?)",[req.body.user_name,req.body.user_email,req.body.password,date_today,req.body.type,req.body.phone,ip,req.body.subscribe]);
					}				});			}
  } catch (err) {next(err);}
};
