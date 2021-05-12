const path = require('path'),
multer = require('multer'),
express = require('express'),
cors = require('cors'),
uuidv4 = require('uuid/v4'),
db_connection = require("../config/database").promise();

const randomid = uuidv4();

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../../public_html/', 'uploads'),
    filename: function (req, file, cb) {        
        // null as first argument means no error
        //cb(null, Date.now() + '-' + file.originalname )
		
        cb(null, Date.now() + '-' + randomid + '-' + '.png' )
    }
})

const uploadSingle = multer({ //multer settings
        storage: storage
    }).array('avatar',20);

exports.addimgpropertyall = async (req, res, next) => {
try {
	uploadSingle(req,res,async function(err){
		if(err){
			console.log(err);
			res.json({error_code:1,err_desc:err});
			return;
		}
		for (var i = 0; i < req.files.length; i++) {
			const [rowsallsss] = await db_connection.execute("INSERT INTO `propertyimg`(`proprty_id_get`,`property_image`,`phototype`) VALUES(?, ?, ?)",[req.body.ids,req.files[i].filename,req.files[i].mimetype,]);
		} 
		const [rows] = await db_connection.execute("INSERT INTO `property_more`(`property_m_get_id`,`parking_covered`,`parking_open`,`parking_none`,`parking_covered_no`,`parking_open_no`,`pool`,`garden`,`main`,`not`,`facing`,`mosaic`,`wooden`,`ceramic`,`marble`,`normal`,`granite`,`marbonite`,`vitrified`,`water`,`electricity`,`approved`,`ownership`,`address`,`displayaddress`,`message`,`description`,`landmarks`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[req.body.ids,req.body.parkingcovered,req.body.parkingopen,req.body.parkingnone,req.body.parkingcoveredno,req.body.parkingopenno,req.body.pool,req.body.garden,req.body.main,req.body.not,req.body.facing,req.body.mosaic,req.body.wooden,req.body.ceramic,req.body.marble,req.body.normal,req.body.granite,req.body.marbonite,req.body.vitrified,req.body.water,req.body.electricity,req.body.approved,req.body.ownership,req.body.address,req.body.displayaddress,req.body.message,req.body.description,req.body.landmarks]); 
		if (rows.affectedRows === 1) {
			return res.json({ success: 1});   
		}
	})
  } catch (err) {next(err);}
};
exports.addimgpropertyallpg = async (req, res, next) => {
try {
	uploadSingle(req,res,async function(err){
		if(err){
			console.log(err);
			res.json({error_code:1,err_desc:err});
			return;
		}
		for (var i = 0; i < req.files.length; i++) {
			const [rowsallsss] = await db_connection.execute("INSERT INTO `propertypgimg`(`propertypgimg_get_id`,`propertypgimg_img`) VALUES(?, ?)",[req.body.ids,req.files[i].filename]);
		} 
		
			return res.json({ success: 1});   
	})
  } catch (err) {next(err);}
};
exports.editimgpropertyall = async (req, res, next) => {
try {
	uploadSingle(req,res,async function(err){
		if(err){
			console.log(err);
			res.json({error_code:1,err_desc:err});
			return;
		}
		for (var i = 0; i < req.files.length; i++) {
			const [rowsallsss] = await db_connection.execute("INSERT INTO `propertyimg`(`proprty_id_get`,`property_image`,`phototype`) VALUES(?, ?, ?)",[req.body.ids,req.files[i].filename,req.files[i].mimetype,]);
		} 
		const [rows] = await db_connection.execute("UPDATE `property_more` SET `parking_covered`=?,`parking_open`=?,`parking_none`=?,`parking_covered_no`=?,`parking_open_no`=?,`pool`=?,`garden`=?,`main`=?,`not`=?,`facing`=?,`mosaic`=?,`wooden`=?,`ceramic`=?,`marble`=?,`normal`=?,`granite`=?,`marbonite`=?,`vitrified`=?,`water`=?,`electricity`=?,`approved`=?,`ownership`=?,`address`=?,`displayaddress`=?,`message`=?,`description`=?,`landmarks`=? where property_m_get_id = ? ",[req.body.parkingcovered,req.body.parkingopen,req.body.parkingnone,req.body.parkingcoveredno,req.body.parkingopenno,req.body.pool,req.body.garden,req.body.main,req.body.not,req.body.facing,req.body.mosaic,req.body.wooden,req.body.ceramic,req.body.marble,req.body.normal,req.body.granite,req.body.marbonite,req.body.vitrified,req.body.water,req.body.electricity,req.body.approved,req.body.ownership,req.body.address,req.body.displayaddress,req.body.message,req.body.description,req.body.landmarks,req.body.ids]); 
		if (rows.affectedRows === 1) {
			return res.json({ success: 1});   
		}
	})
  } catch (err) {next(err);}
};




