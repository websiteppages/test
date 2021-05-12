const db_connection = require("../config/database").promise();

exports.seachlistallsss = async (req, res, next) => {
try {
	  const page = req.params.pageNumber;
	  const searchtype = req.params.type;
	  const searchlocation = req.params.locations;
	  const searchpropertytype = req.params.property;
	  const searchbudgetMin = req.params.budgetMin;
	  const searchbudgetMax = req.params.budgetMax;
	
	  const stop = 1;
	  console.log('searchbudgetMin',searchbudgetMin);
	  console.log('searchbudgetMax',searchbudgetMax);
	  
/* Flat	 */
if(searchpropertytype === 'Flat'){
	// budget empty
	if(searchbudgetMin === 'null' && searchbudgetMax === 'null'){
	  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? or propertytype = ? or propertytype = ? order by date desc',['Flat/ Apartment','Builder Floor Apartment','Studio Apartment']);
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? or propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Flat/ Apartment','Builder Floor Apartment','Studio Apartment']); 
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
	// budget max empty
	if(searchbudgetMin !== 'null' && searchbudgetMax === 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice >= "'+searchbudgetMin+'" and propertytype = ? or propertytype = ? or propertytype = ? order by date desc',['Flat/ Apartment','Builder Floor Apartment','Studio Apartment']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice >= "'+searchbudgetMin+'" and propertytype = ? or propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Flat/ Apartment','Builder Floor Apartment','Studio Apartment']); 
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= "'+searchbudgetMin+'" and propertytype = ? or propertytype = ? or propertytype = ? order by date desc',['Flat/ Apartment','Builder Floor Apartment','Studio Apartment']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= "'+searchbudgetMin+'" and propertytype = ? or propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Flat/ Apartment','Builder Floor Apartment','Studio Apartment']); 
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
	// budget min empty
	if(searchbudgetMin === 'null' && searchbudgetMax !== 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice <= "'+searchbudgetMax+'" and propertytype = ? or propertytype = ? or propertytype = ? order by date desc',['Flat/ Apartment','Builder Floor Apartment','Studio Apartment']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice <= "'+searchbudgetMax+'" and propertytype = ? or propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Flat/ Apartment','Builder Floor Apartment','Studio Apartment']); 
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= "'+searchbudgetMin+'" and propertytype = ? or propertytype = ? or propertytype = ? order by date desc',['Flat/ Apartment','Builder Floor Apartment','Studio Apartment']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= "'+searchbudgetMin+'" and propertytype = ? or propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Flat/ Apartment','Builder Floor Apartment','Studio Apartment']); 
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
	// budget not empty
	if(searchbudgetMin !== 'null' && searchbudgetMax !== 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (ExpectedPrice >= "'+searchbudgetMin+'" and ExpectedPrice <= "'+searchbudgetMax+'") and propertytype = ? or propertytype = ? or propertytype = ? order by date desc',['Flat/ Apartment','Builder Floor Apartment','Studio Apartment']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  (ExpectedPrice >= "'+searchbudgetMin+'" and ExpectedPrice <= "'+searchbudgetMax+'") and propertytype = ? or propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Flat/ Apartment','Builder Floor Apartment','Studio Apartment']); 
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (monthlyrent >= "'+searchbudgetMin+'" and monthlyrent <= "'+searchbudgetMax+'") and propertytype = ? or propertytype = ? or propertytype = ? order by date desc',['Flat/ Apartment','Builder Floor Apartment','Studio Apartment']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (monthlyrent >= "'+searchbudgetMin+'" and monthlyrent <= "'+searchbudgetMax+'") and propertytype = ? or propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Flat/ Apartment','Builder Floor Apartment','Studio Apartment']); 
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
}
/* House/Villa	 */
if(searchpropertytype === 'Villa'){
	// budget empty
	if(searchbudgetMin === 'null' && searchbudgetMax === 'null'){
	  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? or propertytype = ? or propertytype = ? order by date desc',['Residential House','Villa','Penthouse']);
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? or propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Residential House','Villa','Penthouse']); 
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
	// budget max empty
	if(searchbudgetMin !== 'null' && searchbudgetMax === 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice >= "'+searchbudgetMin+'" and propertytype = ? or propertytype = ? or propertytype = ? order by date desc',['Residential House','Villa','Penthouse']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice >= "'+searchbudgetMin+'" and propertytype = ? or propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Residential House','Villa','Penthouse']); 
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= "'+searchbudgetMin+'" and propertytype = ? or propertytype = ? or propertytype = ? order by date desc',['Residential House','Villa','Penthouse']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= "'+searchbudgetMin+'" and propertytype = ? or propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Residential House','Villa','Penthouse']); 
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
	// budget min empty
	if(searchbudgetMin === 'null' && searchbudgetMax !== 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice <= "'+searchbudgetMax+'" and propertytype = ? or propertytype = ? or propertytype = ? order by date desc',['Residential House','Villa','Penthouse']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice <= "'+searchbudgetMax+'" and propertytype = ? or propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Residential House','Villa','Penthouse']); 
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= "'+searchbudgetMin+'" and propertytype = ? or propertytype = ? or propertytype = ? order by date desc',['Residential House','Villa','Penthouse']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= "'+searchbudgetMin+'" and propertytype = ? or propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Residential House','Villa','Penthouse']); 
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
	// budget not empty
	if(searchbudgetMin !== 'null' && searchbudgetMax !== 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (ExpectedPrice >= "'+searchbudgetMin+'" and ExpectedPrice <= "'+searchbudgetMax+'") and propertytype = ? or propertytype = ? or propertytype = ? order by date desc',['Residential House','Villa','Penthouse']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  (ExpectedPrice >= "'+searchbudgetMin+'" and ExpectedPrice <= "'+searchbudgetMax+'") and propertytype = ? or propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Residential House','Villa','Penthouse']); 
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (monthlyrent >= "'+searchbudgetMin+'" and monthlyrent <= "'+searchbudgetMax+'") and propertytype = ? or propertytype = ? or propertytype = ? order by date desc',['Residential House','Villa','Penthouse']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (monthlyrent >= "'+searchbudgetMin+'" and monthlyrent <= "'+searchbudgetMax+'") and propertytype = ? or propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Residential House','Villa','Penthouse']); 
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
}

/* plot	 */
if(searchpropertytype === 'plot'){
// budget empty
	if(searchbudgetMin === 'null' && searchbudgetMax === 'null'){
	  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? order by date desc',['Residential Land/ Plot']);
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? order by date desc limit '+start+','+stop,['Residential Land/ Plot']); 
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
	// budget max empty
	if(searchbudgetMin !== 'null' && searchbudgetMax === 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice >= "'+searchbudgetMin+'" and propertytype = ? order by date desc',['Residential Land/ Plot']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice >= "'+searchbudgetMin+'" and propertytype = ? order by date desc limit '+start+','+stop,['Residential Land/ Plot']); 
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= "'+searchbudgetMin+'" and propertytype = ? order by date desc',['Residential Land/ Plot']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= "'+searchbudgetMin+'" and propertytype = ? order by date desc limit '+start+','+stop,['Residential Land/ Plot']); 
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
	// budget min empty
	if(searchbudgetMin === 'null' && searchbudgetMax !== 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice <= "'+searchbudgetMax+'" and propertytype = ? order by date desc',['Residential Land/ Plot']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice <= "'+searchbudgetMax+'" and propertytype = ? order by date desc limit '+start+','+stop,['Residential Land/ Plot']); 
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= "'+searchbudgetMin+'" and propertytype = ? order by date desc',['Residential Land/ Plot']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= "'+searchbudgetMin+'" and propertytype = ? order by date desc limit '+start+','+stop,['Residential Land/ Plot']); 
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
	// budget not empty
	if(searchbudgetMin !== 'null' && searchbudgetMax !== 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (ExpectedPrice >= "'+searchbudgetMin+'" and ExpectedPrice <= "'+searchbudgetMax+'") and propertytype = ? order by date desc',['Residential Land/ Plot']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  (ExpectedPrice >= "'+searchbudgetMin+'" and ExpectedPrice <= "'+searchbudgetMax+'") and propertytype = ? order by date desc limit '+start+','+stop,['Residential Land/ Plot']); 
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (monthlyrent >= "'+searchbudgetMin+'" and monthlyrent <= "'+searchbudgetMax+'") and propertytype = ? order by date desc',['Residential Land/ Plot']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (monthlyrent >= "'+searchbudgetMin+'" and monthlyrent <= "'+searchbudgetMax+'") and propertytype = ? order by date desc limit '+start+','+stop,['Residential Land/ Plot']); 
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

}
/* Office Space	 */
if(searchpropertytype === 'Office Space'){
// budget empty
	if(searchbudgetMin === 'null' && searchbudgetMax === 'null'){
	  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? or propertytype = ? order by date desc',['Commercial Office Space','Office in IT Park/ SEZ']);
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Commercial Office Space','Office in IT Park/ SEZ']); 
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
	// budget max empty
	if(searchbudgetMin !== 'null' && searchbudgetMax === 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice >= "'+searchbudgetMin+'" and propertytype = ? or propertytype = ? order by date desc',['Commercial Office Space','Office in IT Park/ SEZ']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice >= "'+searchbudgetMin+'" and propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Commercial Office Space','Office in IT Park/ SEZ']); 
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= "'+searchbudgetMin+'" and propertytype = ? or propertytype = ? order by date desc',['Commercial Office Space','Office in IT Park/ SEZ']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= "'+searchbudgetMin+'" and propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Commercial Office Space','Office in IT Park/ SEZ']); 
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
	// budget min empty
	if(searchbudgetMin === 'null' && searchbudgetMax !== 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice <= "'+searchbudgetMax+'" and propertytype = ? or propertytype = ? order by date desc',['Commercial Office Space','Office in IT Park/ SEZ']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice <= "'+searchbudgetMax+'" and propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Commercial Office Space','Office in IT Park/ SEZ']); 
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= "'+searchbudgetMin+'" and propertytype = ? or propertytype = ? order by date desc',['Commercial Office Space','Office in IT Park/ SEZ']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= "'+searchbudgetMin+'" and propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Commercial Office Space','Office in IT Park/ SEZ']); 
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
	// budget not empty
	if(searchbudgetMin !== 'null' && searchbudgetMax !== 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (ExpectedPrice >= "'+searchbudgetMin+'" and ExpectedPrice <= "'+searchbudgetMax+'") and propertytype = ? or propertytype = ? order by date desc',['Commercial Office Space','Office in IT Park/ SEZ']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  (ExpectedPrice >= "'+searchbudgetMin+'" and ExpectedPrice <= "'+searchbudgetMax+'") and propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Commercial Office Space','Office in IT Park/ SEZ']); 
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (monthlyrent >= "'+searchbudgetMin+'" and monthlyrent <= "'+searchbudgetMax+'") and propertytype = ? or propertytype = ? order by date desc',['Commercial Office Space','Office in IT Park/ SEZ']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (monthlyrent >= "'+searchbudgetMin+'" and monthlyrent <= "'+searchbudgetMax+'") and propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Commercial Office Space','Office in IT Park/ SEZ']); 
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


}
/*Shop/Showroom	 */
if(searchpropertytype === 'Shop/Showroom'){
// budget empty
	if(searchbudgetMin === 'null' && searchbudgetMax === 'null'){
	  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? or propertytype = ? order by date desc',['Commercial Shop','Commercial Showroom']);
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Commercial Shop','Commercial Showroom']);
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
	// budget max empty
	if(searchbudgetMin !== 'null' && searchbudgetMax === 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice >= "'+searchbudgetMin+'" and propertytype = ? or propertytype = ? order by date desc',['Commercial Shop','Commercial Showroom']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice >= "'+searchbudgetMin+'" and propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Commercial Shop','Commercial Showroom']);
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= "'+searchbudgetMin+'" and propertytype = ? or propertytype = ? order by date desc',['Commercial Shop','Commercial Showroom']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= "'+searchbudgetMin+'" and propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Commercial Shop','Commercial Showroom']);
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
	// budget min empty
	if(searchbudgetMin === 'null' && searchbudgetMax !== 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice <= "'+searchbudgetMax+'" and propertytype = ? or propertytype = ? order by date desc',['Commercial Shop','Commercial Showroom']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice <= "'+searchbudgetMax+'" and propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Commercial Shop','Commercial Showroom']);
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= "'+searchbudgetMin+'" and propertytype = ? or propertytype = ? order by date desc',['Commercial Shop','Commercial Showroom']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= "'+searchbudgetMin+'" and propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Commercial Shop','Commercial Showroom']);
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
	// budget not empty
	if(searchbudgetMin !== 'null' && searchbudgetMax !== 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (ExpectedPrice >= "'+searchbudgetMin+'" and ExpectedPrice <= "'+searchbudgetMax+'") and propertytype = ? or propertytype = ? order by date desc',['Commercial Shop','Commercial Showroom']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  (ExpectedPrice >= "'+searchbudgetMin+'" and ExpectedPrice <= "'+searchbudgetMax+'") and propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Commercial Shop','Commercial Showroom']);
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (monthlyrent >= "'+searchbudgetMin+'" and monthlyrent <= "'+searchbudgetMax+'") and propertytype = ? or propertytype = ? order by date desc',['Commercial Shop','Commercial Showroom']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (monthlyrent >= "'+searchbudgetMin+'" and monthlyrent <= "'+searchbudgetMax+'") and propertytype = ? or propertytype = ? order by date desc limit '+start+','+stop,['Commercial Shop','Commercial Showroom']);
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


	}
	
/* Commercial Land	 */
if(searchpropertytype === 'Commercial Land'){

// budget empty
	if(searchbudgetMin === 'null' && searchbudgetMax === 'null'){
	  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? order by date desc',['Commercial Land']);
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? order by date desc limit '+start+','+stop,['Commercial Land']);
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
	// budget max empty
	if(searchbudgetMin !== 'null' && searchbudgetMax === 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice >= "'+searchbudgetMin+'" and propertytype = ? order by date desc',['Commercial Land']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice >= "'+searchbudgetMin+'" and propertytype = ? order by date desc limit '+start+','+stop,['Commercial Land']);
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= "'+searchbudgetMin+'" and propertytype = ? order by date desc',['Commercial Land']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= "'+searchbudgetMin+'" and propertytype = ? order by date desc limit '+start+','+stop,['Commercial Land']);
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
	// budget min empty
	if(searchbudgetMin === 'null' && searchbudgetMax !== 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice <= "'+searchbudgetMax+'" and propertytype = ? order by date desc',['Commercial Land']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice <= "'+searchbudgetMax+'" and propertytype = ? order by date desc limit '+start+','+stop,['Commercial Land']);
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= "'+searchbudgetMin+'" and propertytype = ? order by date desc',['Commercial Land']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= "'+searchbudgetMin+'" and propertytype = ? order by date desc limit '+start+','+stop,['Commercial Land']);
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
	// budget not empty
	if(searchbudgetMin !== 'null' && searchbudgetMax !== 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (ExpectedPrice >= "'+searchbudgetMin+'" and ExpectedPrice <= "'+searchbudgetMax+'") and propertytype = ? order by date desc',['Commercial Land']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  (ExpectedPrice >= "'+searchbudgetMin+'" and ExpectedPrice <= "'+searchbudgetMax+'") and propertytype = ? order by date desc limit '+start+','+stop,['Commercial Land']); 
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (monthlyrent >= "'+searchbudgetMin+'" and monthlyrent <= "'+searchbudgetMax+'") and propertytype = ? order by date desc',['Commercial Land']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (monthlyrent >= "'+searchbudgetMin+'" and monthlyrent <= "'+searchbudgetMax+'") and propertytype = ? order by date desc limit '+start+','+stop,['Commercial Land']);
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


	}
	
/* Warehouse/Godown	 */
if(searchpropertytype === 'Warehouse/Godown'){

// budget empty
	if(searchbudgetMin === 'null' && searchbudgetMax === 'null'){
	  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? order by date desc',['Warehouse/Godown']);
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? order by date desc limit '+start+','+stop,['Warehouse/Godown']);
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
	// budget max empty
	if(searchbudgetMin !== 'null' && searchbudgetMax === 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice >= "'+searchbudgetMin+'" and propertytype = ? order by date desc',['Warehouse/Godown']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice >= "'+searchbudgetMin+'" and propertytype = ? order by date desc limit '+start+','+stop,['Warehouse/Godown']);
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= "'+searchbudgetMin+'" and propertytype = ? order by date desc',['Warehouse/Godown']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= "'+searchbudgetMin+'" and propertytype = ? order by date desc limit '+start+','+stop,['Warehouse/Godown']);
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
	// budget min empty
	if(searchbudgetMin === 'null' && searchbudgetMax !== 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice <= "'+searchbudgetMax+'" and propertytype = ? order by date desc',['Warehouse/Godown']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice <= "'+searchbudgetMax+'" and propertytype = ? order by date desc limit '+start+','+stop,['Warehouse/Godown']);
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= "'+searchbudgetMin+'" and propertytype = ? order by date desc',['Warehouse/Godown']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= "'+searchbudgetMin+'" and propertytype = ? order by date desc limit '+start+','+stop,['Warehouse/Godown']);
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
	// budget not empty
	if(searchbudgetMin !== 'null' && searchbudgetMax !== 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (ExpectedPrice >= "'+searchbudgetMin+'" and ExpectedPrice <= "'+searchbudgetMax+'") and propertytype = ? order by date desc',['Warehouse/Godown']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  (ExpectedPrice >= "'+searchbudgetMin+'" and ExpectedPrice <= "'+searchbudgetMax+'") and propertytype = ? order by date desc limit '+start+','+stop,['Warehouse/Godown']);
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (monthlyrent >= "'+searchbudgetMin+'" and monthlyrent <= "'+searchbudgetMax+'") and propertytype = ? order by date desc',['Warehouse/Godown']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (monthlyrent >= "'+searchbudgetMin+'" and monthlyrent <= "'+searchbudgetMax+'") and propertytype = ? order by date desc limit '+start+','+stop,['Warehouse/Godown']);
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

	}
	
/* Industrial Building	 */
if(searchpropertytype === 'Industrial Building'){

// budget empty
	if(searchbudgetMin === 'null' && searchbudgetMax === 'null'){
	  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? order by date desc',['Industrial Building']);
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? order by date desc limit '+start+','+stop,['Industrial Building']);
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
	// budget max empty
	if(searchbudgetMin !== 'null' && searchbudgetMax === 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice >= "'+searchbudgetMin+'" and propertytype = ? order by date desc',['Industrial Building']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice >= "'+searchbudgetMin+'" and propertytype = ? order by date desc limit '+start+','+stop,['Industrial Building']);
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= "'+searchbudgetMin+'" and propertytype = ? order by date desc',['Industrial Building']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= "'+searchbudgetMin+'" and propertytype = ? order by date desc limit '+start+','+stop,['Industrial Building']);
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
	// budget min empty
	if(searchbudgetMin === 'null' && searchbudgetMax !== 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice <= "'+searchbudgetMax+'" and propertytype = ? order by date desc',['Industrial Building']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice <= "'+searchbudgetMax+'" and propertytype = ? order by date desc limit '+start+','+stop,['Industrial Building']);
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= "'+searchbudgetMin+'" and propertytype = ? order by date desc',['Industrial Building']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= "'+searchbudgetMin+'" and propertytype = ? order by date desc limit '+start+','+stop,['Industrial Building']);
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
	// budget not empty
	if(searchbudgetMin !== 'null' && searchbudgetMax !== 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (ExpectedPrice >= "'+searchbudgetMin+'" and ExpectedPrice <= "'+searchbudgetMax+'") and propertytype = ? order by date desc',['Industrial Building']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  (ExpectedPrice >= "'+searchbudgetMin+'" and ExpectedPrice <= "'+searchbudgetMax+'") and propertytype = ? order by date desc limit '+start+','+stop,['Industrial Building']);
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (monthlyrent >= "'+searchbudgetMin+'" and monthlyrent <= "'+searchbudgetMax+'") and propertytype = ? order by date desc',['Industrial Building']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (monthlyrent >= "'+searchbudgetMin+'" and monthlyrent <= "'+searchbudgetMax+'") and propertytype = ? order by date desc limit '+start+','+stop,['Industrial Building']);
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

	}
	
/* Industrial Shed	 */
if(searchpropertytype === 'Industrial Shed'){

// budget empty
	if(searchbudgetMin === 'null' && searchbudgetMax === 'null'){
	  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? order by date desc',['Industrial Shed']);
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? order by date desc limit '+start+','+stop,['Industrial Shed']);
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
	// budget max empty
	if(searchbudgetMin !== 'null' && searchbudgetMax === 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice >= "'+searchbudgetMin+'" and propertytype = ? order by date desc',['Industrial Shed']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice >= "'+searchbudgetMin+'" and propertytype = ? order by date desc limit '+start+','+stop,['Industrial Shed']);
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= "'+searchbudgetMin+'" and propertytype = ? order by date desc',['Industrial Shed']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= "'+searchbudgetMin+'" and propertytype = ? order by date desc limit '+start+','+stop,['Industrial Shed']);
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
	// budget min empty
	if(searchbudgetMin === 'null' && searchbudgetMax !== 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice <= "'+searchbudgetMax+'" and propertytype = ? order by date desc',['Industrial Shed']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice <= "'+searchbudgetMax+'" and propertytype = ? order by date desc limit '+start+','+stop,['Industrial Shed']);
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= "'+searchbudgetMin+'" and propertytype = ? order by date desc',['Industrial Shed']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= "'+searchbudgetMin+'" and propertytype = ? order by date desc limit '+start+','+stop,['Industrial Shed']);
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
	// budget not empty
	if(searchbudgetMin !== 'null' && searchbudgetMax !== 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (ExpectedPrice >= "'+searchbudgetMin+'" and ExpectedPrice <= "'+searchbudgetMax+'") and propertytype = ? order by date desc',['Industrial Shed']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  (ExpectedPrice >= "'+searchbudgetMin+'" and ExpectedPrice <= "'+searchbudgetMax+'") and propertytype = ? order by date desc limit '+start+','+stop,['Industrial Shed']);
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (monthlyrent >= "'+searchbudgetMin+'" and monthlyrent <= "'+searchbudgetMax+'") and propertytype = ? order by date desc',['Industrial Shed']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (monthlyrent >= "'+searchbudgetMin+'" and monthlyrent <= "'+searchbudgetMax+'") and propertytype = ? order by date desc limit '+start+','+stop,['Industrial Shed']);
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

	}
	
/* Agricultural Land	 */
if(searchpropertytype === 'Agricultural Land'){

// budget empty
	if(searchbudgetMin === 'null' && searchbudgetMax === 'null'){
	  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? order by date desc',['Agricultural Land']);
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? order by date desc limit '+start+','+stop,['Agricultural Land']);
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
	// budget max empty
	if(searchbudgetMin !== 'null' && searchbudgetMax === 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice >= "'+searchbudgetMin+'" and propertytype = ? order by date desc',['Agricultural Land']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice >= "'+searchbudgetMin+'" and propertytype = ? order by date desc limit '+start+','+stop,['Agricultural Land']);
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= "'+searchbudgetMin+'" and propertytype = ? order by date desc',['Agricultural Land']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= "'+searchbudgetMin+'" and propertytype = ? order by date desc limit '+start+','+stop,['Agricultural Land']);
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
	// budget min empty
	if(searchbudgetMin === 'null' && searchbudgetMax !== 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice <= "'+searchbudgetMax+'" and propertytype = ? order by date desc',['Agricultural Land']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice <= "'+searchbudgetMax+'" and propertytype = ? order by date desc limit '+start+','+stop,['Agricultural Land']);
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= "'+searchbudgetMin+'" and propertytype = ? order by date desc',['Agricultural Land']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= "'+searchbudgetMin+'" and propertytype = ? order by date desc limit '+start+','+stop,['Agricultural Land']);
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
	// budget not empty
	if(searchbudgetMin !== 'null' && searchbudgetMax !== 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (ExpectedPrice >= "'+searchbudgetMin+'" and ExpectedPrice <= "'+searchbudgetMax+'") and propertytype = ? order by date desc',['Agricultural Land']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  (ExpectedPrice >= "'+searchbudgetMin+'" and ExpectedPrice <= "'+searchbudgetMax+'") and propertytype = ? order by date desc limit '+start+','+stop,['Agricultural Land']);
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (monthlyrent >= "'+searchbudgetMin+'" and monthlyrent <= "'+searchbudgetMax+'") and propertytype = ? order by date desc',['Agricultural Land']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (monthlyrent >= "'+searchbudgetMin+'" and monthlyrent <= "'+searchbudgetMax+'") and propertytype = ? order by date desc limit '+start+','+stop,['Agricultural Land']);
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

	}
	
/* Farm House	 */
if(searchpropertytype === 'Farm House'){

// budget empty
	if(searchbudgetMin === 'null' && searchbudgetMax === 'null'){
	  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? order by date desc',['Farm House']);
		if(page <= rows.length){	
			const start = (page - 1) * stop; 
			const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? order by date desc limit '+start+','+stop,['Farm House']);
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
	// budget max empty
	if(searchbudgetMin !== 'null' && searchbudgetMax === 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice >= "'+searchbudgetMin+'" and propertytype = ? order by date desc',['Farm House']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice >= "'+searchbudgetMin+'" and propertytype = ? order by date desc limit '+start+','+stop,['Farm House']);
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= "'+searchbudgetMin+'" and propertytype = ? order by date desc',['Farm House']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= "'+searchbudgetMin+'" and propertytype = ? order by date desc limit '+start+','+stop,['Farm House']);
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
	// budget min empty
	if(searchbudgetMin === 'null' && searchbudgetMax !== 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice <= "'+searchbudgetMax+'" and propertytype = ? order by date desc',['Farm House']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  ExpectedPrice <= "'+searchbudgetMax+'" and propertytype = ? order by date desc limit '+start+','+stop,['Farm House']);
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= "'+searchbudgetMin+'" and propertytype = ? order by date desc',['Farm House']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= "'+searchbudgetMin+'" and propertytype = ? order by date desc limit '+start+','+stop,['Farm House']);
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
	// budget not empty
	if(searchbudgetMin !== 'null' && searchbudgetMax !== 'null'){
		if(searchtype === 'Buy'){
		  const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (ExpectedPrice >= "'+searchbudgetMin+'" and ExpectedPrice <= "'+searchbudgetMax+'") and propertytype = ? order by date desc',['Farm House']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  (ExpectedPrice >= "'+searchbudgetMin+'" and ExpectedPrice <= "'+searchbudgetMax+'") and propertytype = ? order by date desc limit '+start+','+stop,['Farm House']); 
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
		if(searchtype === 'Rent'){
			 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (monthlyrent >= "'+searchbudgetMin+'" and monthlyrent <= "'+searchbudgetMax+'") and propertytype = ? order by date desc',['Farm House']);
			if(page <= rows.length){	
				const start = (page - 1) * stop; 
				const [rowsresult] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and (monthlyrent >= "'+searchbudgetMin+'" and monthlyrent <= "'+searchbudgetMax+'") and propertytype = ? order by date desc limit '+start+','+stop,['Farm House']); 
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

	}
	












		
	} catch (err) {next(err);}
};