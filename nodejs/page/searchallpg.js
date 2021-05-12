const db_connection = require("../config/database").promise();

exports.seachlistallpgsss = async (req, res, next) => {
try {
	  const page = req.params.pageNumber;
	  const searchtype = req.params.type;
	  const searchlocation = req.params.locations;
	  const searchpgboys = req.params.pgboys;
	  const searchpggirls = req.params.pggirls;
	  const searchbudgetMin = req.params.budgetMin;
	  const searchbudgetMax = req.params.budgetMax;
	
	  const stop = 1;
	  console.log('searchbudgetMin',searchbudgetMin);
	  console.log('searchbudgetMax',searchbudgetMax);
	  
/* Male	 */
if(searchpgboys === 'Male' && searchpggirls !== 'Female'){
	// budget empty
	if(searchbudgetMin === 'null' && searchbudgetMax === 'null'){
	  const [rows] = await db_connection.execute('SELECT * FROM propertypg where genter like "%'+searchpgboys+'%" and locality like "%'+searchlocation+'%" order by date desc');
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT * FROM propertypg where genter like "%'+searchpgboys+'%" and locality like "%'+searchlocation+'%" order by date desc limit '+start+','+stop); 
			const jsonResult = {'page':page,'per_page':stop,'total':rows.length,'success':1,'seachlistviews':rowsresult
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end(); 
		}else{
			const jsonResult = {'page':page,'per_page':stop,'total':1,'success':1,'seachlistviews':''
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end();	
		}
	}// budget max empty
	if(searchbudgetMin !== 'null' && searchbudgetMax === 'null'){
		const [rows] = await db_connection.execute('SELECT a.*,b.* FROM propertypg a left join categories b on a.pg_id = b.categories_pg_id where a.genter like "%'+searchpgboys+'%" and a.locality like "%'+searchlocation+'%" and  b.smonthlyrent >= "'+searchbudgetMin+'" and b.roomtype = ? order by a.date desc',['Single']);
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT a.*,b.* FROM propertypg a left join categories b on a.pg_id = b.categories_pg_id where a.genter like "%'+searchpgboys+'%" and a.locality like "%'+searchlocation+'%" and  b.smonthlyrent >= "'+searchbudgetMin+'" and b.roomtype = ? order by a.date desc limit '+start+','+stop,['Single']); 
			const jsonResult = {'page':page,'per_page':stop,'total':rows.length,'success':1,'seachlistviews':rowsresult
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end(); 
		}else{
			const jsonResult = {'page':page,'per_page':stop,'total':1,'success':1,'seachlistviews':''
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end();	
		}
	}
	// budget min empty
	if(searchbudgetMin === 'null' && searchbudgetMax !== 'null'){
		const [rows] = await db_connection.execute('SELECT a.*,b.* FROM propertypg a left join categories b on a.pg_id = b.categories_pg_id where a.genter like "%'+searchpgboys+'%" and a.locality like "%'+searchlocation+'%" and  b.smonthlyrent <= "'+searchbudgetMax+'" and b.roomtype = ? order by a.date desc',['Single']);
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT a.*,b.* FROM propertypg a left join categories b on a.pg_id = b.categories_pg_id where a.genter like "%'+searchpgboys+'%" and a.locality like "%'+searchlocation+'%" and  b.smonthlyrent <= "'+searchbudgetMax+'" and b.roomtype = ? order by a.date desc limit '+start+','+stop,['Single']); 
			const jsonResult = {'page':page,'per_page':stop,'total':rows.length,'success':1,'seachlistviews':rowsresult
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end(); 
		}else{
			const jsonResult = {'page':page,'per_page':stop,'total':1,'success':1,'seachlistviews':''
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end();	
		}
	}
	// budget not empty
	if(searchbudgetMin !== 'null' && searchbudgetMax !== 'null'){
		const [rows] = await db_connection.execute('SELECT a.*,b.* FROM propertypg a left join categories b on a.pg_id = b.categories_pg_id where a.genter like "%'+searchpgboys+'%" and a.locality like "%'+searchlocation+'%" and (b.smonthlyrent >= "'+searchbudgetMin+'" and b.smonthlyrent <= "'+searchbudgetMax+'") and b.roomtype = ? order by a.date desc',['Single']);
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT a.*,b.* FROM propertypg a left join categories b on a.pg_id = b.categories_pg_id where a.genter like "%'+searchpgboys+'%" and a.locality like "%'+searchlocation+'%" and (b.smonthlyrent >= "'+searchbudgetMin+'" and b.smonthlyrent <= "'+searchbudgetMax+'") and b.roomtype = ? order by a.date desc limit '+start+','+stop,['Single']); 
			const jsonResult = {'page':page,'per_page':stop,'total':rows.length,'success':1,'seachlistviews':rowsresult
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end(); 
		}else{
			const jsonResult = {'page':page,'per_page':stop,'total':1,'success':1,'seachlistviews':''
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end();	
		}
		
		
	}

}
/* Female	 */
if(searchpgboys !== 'Male' && searchpggirls === 'Female'){
	// budget empty
	if(searchbudgetMin === 'null' && searchbudgetMax === 'null'){
	  const [rows] = await db_connection.execute('SELECT * FROM propertypg where genter like "%'+searchpggirls+'%" and locality like "%'+searchlocation+'%" order by date desc');
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT * FROM propertypg where genter like "%'+searchpggirls+'%" and locality like "%'+searchlocation+'%" order by date desc limit '+start+','+stop); 
			const jsonResult = {'page':page,'per_page':stop,'total':rows.length,'success':1,'seachlistviews':rowsresult
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end(); 
		}else{
			const jsonResult = {'page':page,'per_page':stop,'total':1,'success':1,'seachlistviews':''
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end();	
		}
	}// budget max empty
	if(searchbudgetMin !== 'null' && searchbudgetMax === 'null'){
		const [rows] = await db_connection.execute('SELECT a.*,b.* FROM propertypg a left join categories b on a.pg_id = b.categories_pg_id where a.genter like "%'+searchpggirls+'%" and a.locality like "%'+searchlocation+'%" and  b.smonthlyrent >= "'+searchbudgetMin+'" and b.roomtype = ? order by a.date desc',['Single']);
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT a.*,b.* FROM propertypg a left join categories b on a.pg_id = b.categories_pg_id where a.genter like "%'+searchpggirls+'%" and a.locality like "%'+searchlocation+'%" and  b.smonthlyrent >= "'+searchbudgetMin+'" and b.roomtype = ? order by a.date desc limit '+start+','+stop,['Single']); 
			const jsonResult = {'page':page,'per_page':stop,'total':rows.length,'success':1,'seachlistviews':rowsresult
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end(); 
		}else{
			const jsonResult = {'page':page,'per_page':stop,'total':1,'success':1,'seachlistviews':''
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end();	
		}
	}
	// budget min empty
	if(searchbudgetMin === 'null' && searchbudgetMax !== 'null'){
		const [rows] = await db_connection.execute('SELECT a.*,b.* FROM propertypg a left join categories b on a.pg_id = b.categories_pg_id where a.genter like "%'+searchpggirls+'%" and a.locality like "%'+searchlocation+'%" and  b.smonthlyrent <= "'+searchbudgetMax+'" and b.roomtype = ? order by a.date desc',['Single']);
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT a.*,b.* FROM propertypg a left join categories b on a.pg_id = b.categories_pg_id where a.genter like "%'+searchpggirls+'%" and a.locality like "%'+searchlocation+'%" and  b.smonthlyrent <= "'+searchbudgetMax+'" and b.roomtype = ? order by a.date desc limit '+start+','+stop,['Single']); 
			const jsonResult = {'page':page,'per_page':stop,'total':rows.length,'success':1,'seachlistviews':rowsresult
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end(); 
		}else{
			const jsonResult = {'page':page,'per_page':stop,'total':1,'success':1,'seachlistviews':''
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end();	
		}
	}
	// budget not empty
	if(searchbudgetMin !== 'null' && searchbudgetMax !== 'null'){
		const [rows] = await db_connection.execute('SELECT a.*,b.* FROM propertypg a left join categories b on a.pg_id = b.categories_pg_id where a.genter like "%'+searchpggirls+'%" and a.locality like "%'+searchlocation+'%" and (b.smonthlyrent >= "'+searchbudgetMin+'" and b.smonthlyrent <= "'+searchbudgetMax+'") and b.roomtype = ? order by a.date desc',['Single']);
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT a.*,b.* FROM propertypg a left join categories b on a.pg_id = b.categories_pg_id where a.genter like "%'+searchpggirls+'%" and a.locality like "%'+searchlocation+'%" and (b.smonthlyrent >= "'+searchbudgetMin+'" and b.smonthlyrent <= "'+searchbudgetMax+'") and b.roomtype = ? order by a.date desc limit '+start+','+stop,['Single']); 
			const jsonResult = {'page':page,'per_page':stop,'total':rows.length,'success':1,'seachlistviews':rowsresult
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end(); 
		}else{
			const jsonResult = {'page':page,'per_page':stop,'total':1,'success':1,'seachlistviews':''
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end();	
		}
	}
}
/* Male / Female	 */
if(searchpgboys === 'Male' && searchpggirls === 'Female'){
	// budget empty
	if(searchbudgetMin === 'null' && searchbudgetMax === 'null'){
	  const [rows] = await db_connection.execute('SELECT * FROM propertypg where (genter like "%'+searchpgboys+'%" or genter like "%'+searchpggirls+'%") and locality like "%'+searchlocation+'%" order by date desc');
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT * FROM propertypg where (genter like "%'+searchpgboys+'%" or genter like "%'+searchpggirls+'%") and locality like "%'+searchlocation+'%" order by date desc limit '+start+','+stop); 
			const jsonResult = {'page':page,'per_page':stop,'total':rows.length,'success':1,'seachlistviews':rowsresult
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end(); 
		}else{
			const jsonResult = {'page':page,'per_page':stop,'total':1,'success':1,'seachlistviews':''
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end();	
		}
	}// budget max empty
	if(searchbudgetMin !== 'null' && searchbudgetMax === 'null'){
		const [rows] = await db_connection.execute('SELECT a.*,b.* FROM propertypg a left join categories b on a.pg_id = b.categories_pg_id where (a.genter like "%'+searchpgboys+'%" or a.genter like "%'+searchpggirls+'%") and a.locality like "%'+searchlocation+'%" and  b.smonthlyrent >= "'+searchbudgetMin+'" and b.roomtype = ? order by a.date desc',['Single']);
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT a.*,b.* FROM propertypg a left join categories b on a.pg_id = b.categories_pg_id where (a.genter like "%'+searchpgboys+'%" or a.genter like "%'+searchpggirls+'%") and a.locality like "%'+searchlocation+'%" and  b.smonthlyrent >= "'+searchbudgetMin+'" and b.roomtype = ? order by a.date desc limit '+start+','+stop,['Single']); 
			const jsonResult = {'page':page,'per_page':stop,'total':rows.length,'success':1,'seachlistviews':rowsresult
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end(); 
		}else{
			const jsonResult = {'page':page,'per_page':stop,'total':1,'success':1,'seachlistviews':''
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end();	
		}
	}
	// budget min empty
	if(searchbudgetMin === 'null' && searchbudgetMax !== 'null'){
		const [rows] = await db_connection.execute('SELECT a.*,b.* FROM propertypg a left join categories b on a.pg_id = b.categories_pg_id where (a.genter like "%'+searchpgboys+'%" or a.genter like "%'+searchpggirls+'%") and a.locality like "%'+searchlocation+'%" and  b.smonthlyrent <= "'+searchbudgetMax+'" and b.roomtype = ? order by a.date desc',['Single']);
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT a.*,b.* FROM propertypg a left join categories b on a.pg_id = b.categories_pg_id where (a.genter like "%'+searchpgboys+'%" or a.genter like "%'+searchpggirls+'%") and a.locality like "%'+searchlocation+'%" and  b.smonthlyrent <= "'+searchbudgetMax+'" and b.roomtype = ? order by a.date desc limit '+start+','+stop,['Single']); 
			const jsonResult = {'page':page,'per_page':stop,'total':rows.length,'success':1,'seachlistviews':rowsresult
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end(); 
		}else{
			const jsonResult = {'page':page,'per_page':stop,'total':1,'success':1,'seachlistviews':''
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end();	
		}
	}
	// budget not empty
	if(searchbudgetMin !== 'null' && searchbudgetMax !== 'null'){
		const [rows] = await db_connection.execute('SELECT a.*,b.* FROM propertypg a left join categories b on a.pg_id = b.categories_pg_id where (a.genter like "%'+searchpgboys+'%" or a.genter like "%'+searchpggirls+'%") and a.locality like "%'+searchlocation+'%" and (b.smonthlyrent >= "'+searchbudgetMin+'" and b.smonthlyrent <= "'+searchbudgetMax+'") and b.roomtype = ? order by a.date desc',['Single']);
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT a.*,b.* FROM propertypg a left join categories b on a.pg_id = b.categories_pg_id where (a.genter like "%'+searchpgboys+'%" or a.genter like "%'+searchpggirls+'%") and a.locality like "%'+searchlocation+'%" and (b.smonthlyrent >= "'+searchbudgetMin+'" and b.smonthlyrent <= "'+searchbudgetMax+'") and b.roomtype = ? order by a.date desc limit '+start+','+stop,['Single']); 
			const jsonResult = {'page':page,'per_page':stop,'total':rows.length,'success':1,'seachlistviews':rowsresult
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end(); 
		}else{
			const jsonResult = {'page':page,'per_page':stop,'total':1,'success':1,'seachlistviews':''
			}
			 var myJsonString = JSON.parse(JSON.stringify(jsonResult));
				 return res.json(myJsonString);
				 res.end();	
		}
	}
}



















		
	} catch (err) {next(err);}
};