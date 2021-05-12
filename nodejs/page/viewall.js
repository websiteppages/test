const db_connection = require("../config/database").promise();

exports.Rentsallsss = async (req, res, next) => {
try {
	  const page = req.params.pageNumber;
	  const stop = 20;
	  const [rows] = await db_connection.execute("SELECT a.*,b.*,c.* FROM register a left join property b on a.register_id = b.property_userid left join property_more c on c.property_m_get_id = b.property_id  where b.propertyDetails = ? order by b.date desc",['Rent/Lease']);
	  
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT a.*,b.*,c.* FROM register a left join property b on a.register_id = b.property_userid left join property_more c on c.property_m_get_id = b.property_id  where b.propertyDetails = ? order by b.date desc limit '+start+','+stop,['Rent/Lease']); 
			const jsonResult = {
					'page':page,
					'per_page':stop,
					'total':rows.length,
					'success':1,
					'Rentsviews':rowsresult
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end(); 
		}else{
			const jsonResult = {
					'page':page,
					'per_page':stop,
					'total':1,
					'success':1,
					'Rentsviews':''
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end();	
		}	
	} catch (err) {next(err);}
};
exports.allimgssslist = async (req, res, next) => {
  try {
		const [rows] = await db_connection.execute("SELECT * FROM  propertyimg where proprty_id_get = ?",[req.body.ids]);
		const [rowssql] = await db_connection.execute("SELECT * FROM  propertyimg where proprty_id_get = ? and defaults =? ",[req.body.ids,1]);
		if(rowssql.length > 0){
			return res.status(200).json({ success: 1, imgviews:rows, imgset:rowssql });	
		}else {
			return res.status(200).json({ success: 1, imgviews:rows, imgset:''});	
		}
  } catch (err) { console.log(err); next(err);} 
};
exports.viewallsssallsss = async (req, res, next) => {
  try {
		const [rows] = await db_connection.execute("SELECT a.*,b.* FROM  property a left join property_more b on a.property_id = b.property_m_get_id where a.property_id = ?",[req.body.ids]);
			return res.status(200).json({ success: 1, viewalllist:rows, });	
  } catch (err) { console.log(err); next(err);} 

};
exports.buysallsss = async (req, res, next) => {
try {
	  const page = req.params.pageNumber;
	  const stop = 20;
	  const [rows] = await db_connection.execute("SELECT a.*,b.*,c.* FROM register a left join property b on a.register_id = b.property_userid left join property_more c on c.property_m_get_id = b.property_id  where b.propertyDetails = ? order by b.date desc",['Sale']);
	  
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT a.*,b.*,c.* FROM register a left join property b on a.register_id = b.property_userid left join property_more c on c.property_m_get_id = b.property_id  where b.propertyDetails = ? order by b.date desc limit '+start+','+stop,['Sale']); 
			const jsonResult = {
					'page':page,
					'per_page':stop,
					'total':rows.length,
					'success':1,
					'buysssviews':rowsresult
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end(); 
		}else{
			const jsonResult = {
					'page':page,
					'per_page':stop,
					'total':1,
					'success':1,
					'buysssviews':''
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end();	
		}	
	} catch (err) {next(err);}
};
exports.homebuyallsss = async (req, res, next) => {
  try {
		const [rows] = await db_connection.execute("SELECT a.*,b.* FROM  property a left join property_more b on a.property_id = b.property_m_get_id where a.propertyDetails = ? order by date desc limit 6",['Sale']);
			return res.status(200).json({ success: 1, homebuylist:rows, });	
  } catch (err) { console.log(err); next(err);} 

};
exports.homerentallsss = async (req, res, next) => {
  try {
		const [rows] = await db_connection.execute("SELECT a.*,b.* FROM  property a left join property_more b on a.property_id = b.property_m_get_id where a.propertyDetails = ? order by date desc limit 6",['Rent/Lease']);
			return res.status(200).json({ success: 1, homerentlist:rows, });	
  } catch (err) { console.log(err); next(err);} 

};
exports.userlistallsss = async (req, res, next) => {
  try {
		const [rows] = await db_connection.execute("SELECT * FROM  register where register_id = ?",[req.body.ids]);
			return res.status(200).json({ success: 1, userlistviews:rows, });	
  } catch (err) { console.log(err); next(err);} 

};
exports.buysalladminsss = async (req, res, next) => {
try {
	  const page = req.params.pageNumber;
	  const pageId = req.params.pageId;
	  const stop = 20;
	  const [rows] = await db_connection.execute("SELECT a.*,b.*,c.* FROM register a left join property b on a.register_id = b.property_userid left join property_more c on c.property_m_get_id = b.property_id  where b.property_userid = ? order by b.date desc",[pageId]);
	  
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT a.*,b.*,c.* FROM register a left join property b on a.register_id = b.property_userid left join property_more c on c.property_m_get_id = b.property_id  where b.property_userid = ? order by b.date desc limit '+start+','+stop,[pageId]); 
			const jsonResult = {
					'page':page,
					'per_page':stop,
					'total':rows.length,
					'success':1,
					'buysssviews':rowsresult
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end(); 
		}else{
			const jsonResult = {
					'page':page,
					'per_page':stop,
					'total':1,
					'success':1,
					'buysssviews':''
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end();	
		}	
	} catch (err) {next(err);}
};
exports.Pgallsss = async (req, res, next) => {
try {
	  const page = req.params.pageNumber;
	  const stop = 20;
	  const [rows] = await db_connection.execute("SELECT a.*,b.* FROM register a left join propertypg b on a.register_id = b.pg_user_id where b.adminblock = 0 order by b.pg_id desc");
	  
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT a.*,b.* FROM register a left join propertypg b on a.register_id = b.pg_user_id where b.adminblock = 0 order by b.pg_id desc limit '+start+','+stop); 
			const jsonResult = {
					'page':page,
					'per_page':stop,
					'total':rows.length,
					'success':1,
					'pgsssviews':rowsresult
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end(); 
		}else{
			const jsonResult = {
					'page':page,
					'per_page':stop,
					'total':1,
					'success':1,
					'pgsssviews':''
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end();	
		}	
	} catch (err) {next(err);}
};
exports.allimgssspglist = async (req, res, next) => {
  try {
		const [rows] = await db_connection.execute("SELECT * FROM  propertypgimg where propertypgimg_get_id = ?",[req.body.ids]);
		const [rowssql] = await db_connection.execute("SELECT * FROM  propertypgimg where propertypgimg_get_id = ? and defaults =? ",[req.body.ids,1]);
		if(rowssql.length > 0){
			return res.status(200).json({ success: 1, imgviews:rows, imgset:rowssql });	
		}else {
			return res.status(200).json({ success: 1, imgviews:rows, imgset:''});	
		}	
  } catch (err) { console.log(err); next(err);} 
};
exports.allcategoriesssaaa = async (req, res, next) => {
  try {
		const [rows] = await db_connection.execute("SELECT * FROM  categories where categories_pg_id = ?",[req.body.ids]);
		const [rowsql] = await db_connection.execute("SELECT * FROM  facilities where facilities_pg_id = ?",[req.body.ids]);
		if(rows.length > 0 && rowsql.length > 0){
			return res.status(200).json({ success: 1, catviews:rows, facviews:rowsql,});
		}			
  } catch (err) { console.log(err); next(err);} 
};
exports.viewallsssallpgsss = async (req, res, next) => {
  try {
		const [rows] = await db_connection.execute("SELECT * FROM  propertypg where pg_id = ?",[req.body.ids]);
			return res.status(200).json({ success: 1, viewalllist:rows, });	
  } catch (err) { console.log(err); next(err);} 
};
exports.pgalladminsss = async (req, res, next) => {
try {
	  const page = req.params.pageNumber;
	  const pageId = req.params.pageId;
	  const stop = 20;
	  const [rows] = await db_connection.execute("SELECT a.*,b.* FROM register a left join propertypg b on a.register_id = b.pg_user_id where b.pg_user_id = ? order by b.pg_id desc",[pageId]);
	  
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT a.*,b.* FROM register a left join propertypg b on a.register_id = b.pg_user_id where b.pg_user_id = ? order by b.pg_id desc limit '+start+','+stop,[pageId]); 
			const jsonResult = {
					'page':page,
					'per_page':stop,
					'total':rows.length,
					'success':1,
					'pgsssviews':rowsresult
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end(); 
		}else{
			const jsonResult = {
					'page':page,
					'per_page':stop,
					'total':1,
					'success':1,
					'pgsssviews':''
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end();	
		}	
	} catch (err) {next(err);}
};
exports.imgorderallsss = async (req, res, next) => {
  try {
		const [rows] = await db_connection.execute("SELECT * FROM  propertyimg where proprty_id_get = ?",[req.body.ids]);
			return res.status(200).json({ success: 1, imgorderlist:rows, });	
  } catch (err) { console.log(err); next(err);} 
};
exports.imgorderallpgsss = async (req, res, next) => {
  try {
		const [rows] = await db_connection.execute("SELECT * FROM  propertypgimg where propertypgimg_get_id = ?",[req.body.ids]);
			return res.status(200).json({ success: 1, imgorderlistpg:rows, });	
  } catch (err) { console.log(err); next(err);} 
};


