const db_connection = require("../config/database").promise();

exports.addpropertyallsss = async (req, res, next) => {
try {
	let date_today = new Date();
		const [rows] = await db_connection.execute("INSERT INTO `property`(`propertyDetails`,`propertytype`,`City`,`Society`,`Locality`,`Bedrooms`,`Balconies`,`FloorNo`,`FurnishedStatus`,`Bathrooms`,`Carpet`,	`Super`,`Carpetsq`,`Supersq`,`TransactionType`,`Month`,`Year`,`Age`,`ExpectedPrice`,`TokenAmount`,`date`,`totalfloor`,`opensides`,`roadwidth`,`anyconstruction`,`boundarywall`,`gatedcolony`,`landzone`,`washrooms`,`personalwashroom`,`pantry`,`leasedout`,`assuredreturns`,`floorscommoffice`,`cornershop`,`ismainroadfacing`,`widthofentrance`,`widthqqq`,`plot`,`plotq`,`plotlength`,`plotbreadth`,`cornerplot`,`selectedideal`,`availablefrom`,`datevalues`,`monthlyrent`,`securityamount`,`maintenancecharges`,`per`,`willing`,`lock`,`rentout`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[req.body.propertyDetails,req.body.propertytype,req.body.City,req.body.Society,req.body.Locality,req.body.Bedrooms,req.body.Balconies,req.body.FloorNo,req.body.FurnishedStatus,req.body.Bathrooms,req.body.Carpet,req.body.Super,req.body.Carpetsq,req.body.Supersq,req.body.TransactionType,req.body.Month,req.body.Year,req.body.Age,req.body.ExpectedPrice,req.body.TokenAmount,date_today,req.body.totalfloor,req.body.opensides,req.body.roadwidth,req.body.anyconstruction,req.body.boundarywall,req.body.gatedcolony,req.body.landzone,req.body.washrooms,req.body.personalwashroom,req.body.pantry,req.body.leasedout,req.body.assuredreturns,req.body.floorscommoffice,req.body.cornershop,req.body.ismainroadfacing,req.body.widthofentrance,req.body.widthqqq,req.body.plot,req.body.plotq,req.body.plotlength,req.body.plotbreadth,req.body.cornerplot,req.body.selectedideal.length,req.body.availablefrom,req.body.datevalues,req.body.monthlyrent,req.body.securityamount,req.body.maintenancecharges,req.body.per,req.body.willing,req.body.lock,req.body.rentout]);
		if(req.body.selectedideal.length > 0){
			console.log(req.body.selectedideal[0].value);
			for (var i = 0; i < req.body.selectedideal.length; i++) {
				const [rowssql] = await db_connection.execute("INSERT INTO `propertyideal`(`property_id_ideal`,`selectedidealsss`) VALUES(?,?)",[rows.insertId,req.body.selectedideal[i].value]);
			}
			return res.json({ success: 1, postids:rows.insertId})
		}else{
			return res.json({ success: 1, postids:rows.insertId})
		}
		
	
	} catch (err) {next(err);}
};
exports.addpropertyallpgsss = async (req, res, next) => {
try {
	let date_today = new Date();
	const [rows] = await db_connection.execute("INSERT INTO `propertypg`(`pg_user_id`,`locality`,`address`,`pincode`,`landmark`,`pgoperationalsince`,`pgpresent`,`propertypg`,`genter`,`veg`,`smoking`,`alcohol`,`oppositeender`,`guardian`,`notice`,`gateclosing`,`laundry`,`roomcleaning`,`warden`,`kitchen`,`ro`,`fridge`,`microwave`,`lift`,`gymnasium`,`powerbackup`,`wifi`,`tvs`,`wheeler`,`carparking`,`both`,`description`,`pgname`,`date`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",['',req.body.Locality,req.body.address,req.body.Pincode,req.body.Landmark,req.body.PGoperationalsince,req.body.PGpresent,req.body.propertyPg,req.body.genter,req.body.Veg,req.body.Smoking,req.body.alcohol,req.body.oppositeender,req.body.Guardian,req.body.Notice,req.body.GateClosing,req.body.Laundry,req.body.RoomCleaning,req.body.Warden,req.body.Kitchen,req.body.RO,req.body.Fridge,req.body.Microwave,req.body.Lift,req.body.Gymnasium,req.body.PowerBackup,req.body.WiFi,req.body.TVs,req.body.Wheeler,req.body.CarParking,req.body.Both,req.body.description,req.body.pgname,date_today]);
		
	if(req.body.Single === 'yes'){
		const [rowssingle] = await db_connection.execute("INSERT INTO `categories`(`categories_pg_id`,`roomtype`,`sroomno`,`smonthlyrent`,`ssecuritydeposit`) VALUES(?,?,?,?,?)",[rows.insertId,'Single',req.body.sroomno,req.body.sMonthlyrent,req.body.sSecurityDeposit]);
		const [rowssinglefac] = await db_connection.execute("INSERT INTO `facilities`(`facilities_pg_id`,`washrooms`,`cupboard`,`tv`,`ac`,`cot`,`mattress`,`sidetable`,`aircooler`,`facili_type`) VALUES(?,?,?,?,?,?,?,?,?,?)",[rows.insertId,req.body.sWashrooms,req.body.sCupboard,req.body.sTV,req.body.sAC,req.body.sCot,req.body.sMattress,req.body.sSideTable,req.body.sAirCooler,'Single']);
	}
	if(req.body.Double === 'yes'){
		const [rowsDouble] = await db_connection.execute("INSERT INTO `categories`(`categories_pg_id`,`roomtype`,`droomno`,`dmonthlyrent`,`dsecuritydeposit`) VALUES(?,?,?,?,?)",[rows.insertId,'Double',req.body.droomno,req.body.dMonthlyrent,req.body.dSecurityDeposit]);
		const [rowsDoublefac] = await db_connection.execute("INSERT INTO `facilities`(`facilities_pg_id`,`washrooms`,`cupboard`,`tv`,`ac`,`cot`,`mattress`,`sidetable`,`aircooler`,`facili_type`) VALUES(?,?,?,?,?,?,?,?,?,?)",[rows.insertId,req.body.dWashrooms,req.body.dCupboard,req.body.dTV,req.body.dAC,req.body.dCot,req.body.dMattress,req.body.dSideTable,req.body.dAirCooler,'Double']);
	}
	if(req.body.Triple === 'yes'){
		console.log(req.body.Triple);
		const [rowsTriple] = await db_connection.execute("INSERT INTO `categories`(`categories_pg_id`,`roomtype`,`troomno`,`tmonthlyrent`,`tsecuritydeposit`) VALUES(?,?,?,?,?)",[rows.insertId,'Triple',req.body.troomno,req.body.tMonthlyrent,req.body.tSecurityDeposit]);
		const [rowsTriplefac] = await db_connection.execute("INSERT INTO `facilities`(`facilities_pg_id`,`washrooms`,`cupboard`,`tv`,`ac`,`cot`,`mattress`,`sidetable`,`aircooler`,`facili_type`) VALUES(?,?,?,?,?,?,?,?,?,?)",[rows.insertId,req.body.tWashrooms,req.body.tCupboard,req.body.tTV,req.body.tAC,req.body.tCot,req.body.tMattress,req.body.tSideTable,req.body.tAirCooler,'Triple']);
	}
	if(req.body.Four === 'yes'){
		const [rowsFour] = await db_connection.execute("INSERT INTO `categories`(`categories_pg_id`,`roomtype`,`froomno`,`fmonthlyrent`,`fsecuritydeposit`) VALUES(?,?,?,?,?)",[rows.insertId,'Four',req.body.froomno,req.body.fMonthlyrent,req.body.fSecurityDeposit]);
		const [rowsFourfac] = await db_connection.execute("INSERT INTO `facilities`(`facilities_pg_id`,`washrooms`,`cupboard`,`tv`,`ac`,`cot`,`mattress`,`sidetable`,`aircooler`,`facili_type`) VALUES(?,?,?,?,?,?,?,?,?,?)",[rows.insertId,req.body.fWashrooms,req.body.fCupboard,req.body.fTV,req.body.fAC,req.body.fCot,req.body.fMattress,req.body.fSideTable,req.body.fAirCooler,'Four']);
	}
	if(req.body.Other === 'yes'){
		const [rowsOther] = await db_connection.execute("INSERT INTO `categories`(`categories_pg_id`,`roomtype`,`oroomno`,`oroomnobed`,`omonthlyrent`,`osecuritydeposit`) VALUES(?,?,?,?,?,?)",[rows.insertId,'Other',req.body.oroomno,req.body.oroomnobed,req.body.oMonthlyrent,req.body.oSecurityDeposit]);
		const [rowsOtherfac] = await db_connection.execute("INSERT INTO `facilities`(`facilities_pg_id`,`washrooms`,`cupboard`,`tv`,`ac`,`cot`,`mattress`,`sidetable`,`aircooler`,`facili_type`) VALUES(?,?,?,?,?,?,?,?,?,?)",[rows.insertId,req.body.oWashrooms,req.body.oCupboard,req.body.oTV,req.body.oAC,req.body.oCot,req.body.oMattress,req.body.oSideTable,req.body.oAirCooler,'Other']);
	}
	
		
			return res.json({ success: 1, postids:rows.insertId})
		
	} catch (err) {next(err);}
};
exports.deletevideolistsss = async (req, res, next) => {
  try {
		const [rows] = await db_connection.execute("delete FROM  propertyimg where propertyimg_id = ?",[req.body.ids]);
			return res.status(200).json({ success: 1, });	
  } catch (err) { console.log(err); next(err);} 
};
exports.deletevideolistpgsss = async (req, res, next) => {
  try {
		const [rows] = await db_connection.execute("delete FROM propertypgimg where propertypgimg_id = ?",[req.body.ids]);
			return res.status(200).json({ success: 1, });	
  } catch (err) { console.log(err); next(err);} 
};

