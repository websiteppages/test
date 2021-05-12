const db_connection = require("../config/database").promise();

exports.editpropertyallsss = async (req, res, next) => {
try {
	let date_today = new Date();
		const [rows] = await db_connection.execute("UPDATE `property` SET `propertyDetails`=?,`propertytype`=?,`City`=?,`Society`=?,`Locality`=?,`Bedrooms`=?,`Balconies`=?,`FloorNo`=?,`FurnishedStatus`=?,`Bathrooms`=?,`Carpet`=?,	`Super`=?,`Carpetsq`=?,`Supersq`=?,`TransactionType`=?,`Month`=?,`Year`=?,`Age`=?,`ExpectedPrice`=?,`TokenAmount`=?,`date`=?,`totalfloor`=?,`opensides`=?,`roadwidth`=?,`anyconstruction`=?,`boundarywall`=?,`gatedcolony`=?,`landzone`=?,`washrooms`=?,`personalwashroom`=?,`pantry`=?,`leasedout`=?,`assuredreturns`=?,`floorscommoffice`=?,`cornershop`=?,`ismainroadfacing`=?,`widthofentrance`=?,`widthqqq`=?,`plot`=?,`plotq`=?,`plotlength`=?,`plotbreadth`=?,`cornerplot`=?,`selectedideal`=?,`availablefrom`=?,`datevalues`=?,`monthlyrent`=?,`securityamount`=?,`maintenancecharges`=?,`per`=?,`willing`=?,`lock`=?,`rentout`=? WHERE property_id = ? ",[req.body.propertyDetails,req.body.propertytype,req.body.City,req.body.Society,req.body.Locality,req.body.Bedrooms,req.body.Balconies,req.body.FloorNo,req.body.FurnishedStatus,req.body.Bathrooms,req.body.Carpet,req.body.Super,req.body.Carpetsq,req.body.Supersq,req.body.TransactionType,req.body.Month,req.body.Year,req.body.Age,req.body.ExpectedPrice,req.body.TokenAmount,date_today,req.body.totalfloor,req.body.opensides,req.body.roadwidth,req.body.anyconstruction,req.body.boundarywall,req.body.gatedcolony,req.body.landzone,req.body.washrooms,req.body.personalwashroom,req.body.pantry,req.body.leasedout,req.body.assuredreturns,req.body.floorscommoffice,req.body.cornershop,req.body.ismainroadfacing,req.body.widthofentrance,req.body.widthqqq,req.body.plot,req.body.plotq,req.body.plotlength,req.body.plotbreadth,req.body.cornerplot,req.body.selectedideal.length,req.body.availablefrom,req.body.datevalues,req.body.monthlyrent,req.body.securityamount,req.body.maintenancecharges,req.body.per,req.body.willing,req.body.lock,req.body.rentout,req.body.propertyids]);
		if(req.body.selectedideal.length > 0){
			const [rowslistsss] = await db_connection.execute("delete from `property` where property_id = ?",[req.body.propertyids]);
			if(rowslistsss.length > 0){
				console.log(req.body.selectedideal[0].value);
				for (var i = 0; i < req.body.selectedideal.length; i++) {
					const [rowssql] = await db_connection.execute("INSERT INTO `propertyideal`(`property_id_ideal`,`selectedidealsss`) VALUES(?,?)",[req.body.propertyids,req.body.selectedideal[i].value]);
				}
				return res.json({ success: 1, postids:req.body.propertyids})
			}
		}else{
			return res.json({ success: 1, postids:req.body.propertyids})
		}
		
	
	} catch (err) {next(err);}
};
exports.editpropertyallpgsss = async (req, res, next) => {
try {
		const [rows] = await db_connection.execute("UPDATE `propertypg` SET `locality`=?,`address`=?,`pincode`=?,`landmark`=?,`pgoperationalsince`=?,`pgpresent`=?,`propertypg`=?,`genter`=?,`veg`=?,`smoking`=?,`alcohol`=?,`oppositeender`=?,`guardian`=?,`notice`=?,`gateclosing`=?,`laundry`=?,`roomcleaning`=?,`warden`=?,`kitchen`=?,`ro`=?,`fridge`=?,`microwave`=?,`lift`=?,`gymnasium`=?,`powerbackup`=?,`wifi`=?,`tvs`=?,`wheeler`=?,`carparking`=?,`both`=?,`description`=?,`pgname`=? WHERE pg_id = ? ",[req.body.Locality,req.body.address,req.body.Pincode,req.body.Landmark,req.body.PGoperationalsince,req.body.PGpresent,req.body.propertyPg,req.body.genter,req.body.Veg,req.body.Smoking,req.body.alcohol,req.body.oppositeender,req.body.Guardian,req.body.Notice,req.body.GateClosing,req.body.Laundry,req.body.RoomCleaning,req.body.Warden,req.body.Kitchen,req.body.RO,req.body.Fridge,req.body.Microwave,req.body.Lift,req.body.Gymnasium,req.body.PowerBackup,req.body.WiFi,req.body.TVs,req.body.Wheeler,req.body.CarParking,req.body.Both,req.body.description,req.body.pgname,req.body.pgids]);
		
	if(req.body.Single === 'yes'){
		const [rowssingle] = await db_connection.execute("UPDATE `categories` SET `sroomno`=?,`smonthlyrent`=?,`ssecuritydeposit`=? where categories_pg_id=? and roomtype = ?",[req.body.sroomno,req.body.sMonthlyrent,req.body.sSecurityDeposit,req.body.pgids,'Single']);
		
		const [rowssinglefac] = await db_connection.execute("UPDATE `facilities` SET `washrooms`=?,`cupboard`=?,`tv`=?,`ac`=?,`cot`=?,`mattress`=?,`sidetable`=?,`aircooler`=? where facilities_pg_id=? and facili_type = ?",[req.body.sWashrooms,req.body.sCupboard,req.body.sTV,req.body.sAC,req.body.sCot,req.body.sMattress,req.body.sSideTable,req.body.sAirCooler,req.body.pgids,'Single']);
	}
	if(req.body.Double === 'yes'){
		const [rowsDouble] = await db_connection.execute("UPDATE `categories` SET `droomno`=?,`dmonthlyrent`=?,`dsecuritydeposit`=? where categories_pg_id=? and roomtype = ?",[req.body.droomno,req.body.dMonthlyrent,req.body.dSecurityDeposit,req.body.pgids,'Double']);
		
		const [rowsDoublefac] = await db_connection.execute("UPDATE `facilities` SET `washrooms`=?,`cupboard`=?,`tv`=?,`ac`=?,`cot`=?,`mattress`=?,`sidetable`=?,`aircooler`=? where facilities_pg_id=? and facili_type = ?",[req.body.dWashrooms,req.body.dCupboard,req.body.dTV,req.body.dAC,req.body.dCot,req.body.dMattress,req.body.dSideTable,req.body.dAirCooler,req.body.pgids,'Double']);
	}
	if(req.body.Triple === 'yes'){
		console.log(req.body.Triple);
		const [rowsTriple] = await db_connection.execute("UPDATE `categories` SET `troomno`=?,`tmonthlyrent`=?,`tsecuritydeposit`=? where categories_pg_id=? and roomtype = ?",[req.body.troomno,req.body.tMonthlyrent,req.body.tSecurityDeposit,req.body.pgids,'Triple']);
		
		const [rowsTriplefac] = await db_connection.execute("UPDATE `facilities` SET `washrooms`=?,`cupboard`=?,`tv`=?,`ac`=?,`cot`=?,`mattress`=?,`sidetable`=?,`aircooler`=? where facilities_pg_id=? and facili_type = ?",[req.body.tWashrooms,req.body.tCupboard,req.body.tTV,req.body.tAC,req.body.tCot,req.body.tMattress,req.body.tSideTable,req.body.tAirCooler,req.body.pgids,'Triple']);
	}
	if(req.body.Four === 'yes'){
		const [rowsFour] = await db_connection.execute("UPDATE `categories` SET `froomno`=?,`fmonthlyrent`=?,`fsecuritydeposit`=? where categories_pg_id=? and roomtype = ?",[req.body.froomno,req.body.fMonthlyrent,req.body.fSecurityDeposit,req.body.pgids,'Four']);
		
		const [rowsFourfac] = await db_connection.execute("UPDATE `facilities` SET `washrooms`=?,`cupboard`=?,`tv`=?,`ac`=?,`cot`=?,`mattress`=?,`sidetable`=?,`aircooler`=? where facilities_pg_id=? and facili_type = ?",[req.body.fWashrooms,req.body.fCupboard,req.body.fTV,req.body.fAC,req.body.fCot,req.body.fMattress,req.body.fSideTable,req.body.fAirCooler,req.body.pgids,'Four']);
	}
	if(req.body.Other === 'yes'){
		const [rowsOther] = await db_connection.execute("UPDATE `categories` SET `oroomno`=?,`oroomnobed`=?,`omonthlyrent`=?,`osecuritydeposit`=? where categories_pg_id=? and roomtype = ?",[req.body.oroomno,req.body.oroomnobed,req.body.oMonthlyrent,req.body.oSecurityDeposit,req.body.pgids,'Other']);
		
		const [rowsOtherfac] = await db_connection.execute("UPDATE `facilities` SET `washrooms`=?,`cupboard`=?,`tv`=?,`ac`=?,`cot`=?,`mattress`=?,`sidetable`=?,`aircooler`=? where facilities_pg_id=? and facili_type = ?",[req.body.oWashrooms,req.body.oCupboard,req.body.oTV,req.body.oAC,req.body.oCot,req.body.oMattress,req.body.oSideTable,req.body.oAirCooler,req.body.pgids,'Other']);
	}
	
		
			return res.json({ success: 1, })
		
	
	} catch (err) {next(err);}
};
exports.savesallsss = async (req, res, next) => {
  try {
		const [rowssql] = await db_connection.execute("SELECT * FROM  propertyimg where proprty_id_get = ? and defaults =? ",[req.body.propertyids,1]);
			if(rowssql.length > 0){
				const [rowswww] = await db_connection.execute("UPDATE propertyimg SET defaults = ? where proprty_id_get = ?",[0,req.body.propertyids]);
				
				const [rows] = await db_connection.execute("UPDATE propertyimg SET defaults = ? where propertyimg_id = ?",[1,req.body.ids]);
					return res.status(200).json({ success: 1, });	
				
			}else{
				const [rows] = await db_connection.execute("UPDATE propertyimg SET defaults = ? where propertyimg_id = ?",[1,req.body.ids]);
					return res.status(200).json({ success: 1, });	
				
			}
  } catch (err) { console.log(err); next(err);} 
};

exports.savesallpgsss = async (req, res, next) => {
  try {
		const [rowssql] = await db_connection.execute("SELECT * FROM   propertypgimg where propertypgimg_get_id = ? and defaults =? ",[req.body.propertyids,1]);
			if(rowssql.length > 0){
				const [rowswww] = await db_connection.execute("UPDATE  propertypgimg SET defaults = ? where propertypgimg_get_id = ?",[0,req.body.propertyids]);
				
				const [rows] = await db_connection.execute("UPDATE  propertypgimg SET defaults = ? where propertypgimg_id = ?",[1,req.body.ids]);
					return res.status(200).json({ success: 1, });	
				
			}else{
				const [rows] = await db_connection.execute("UPDATE  propertypgimg SET defaults = ? where propertypgimg_id = ?",[1,req.body.ids]);
					return res.status(200).json({ success: 1, });	
				
			}
  } catch (err) { console.log(err); next(err);} 
};






