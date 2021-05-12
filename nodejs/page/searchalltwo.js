const db_connection = require("../config/database").promise();

exports.seachlistallsss = async (req, res, next) => {
try {
	const searchlocation = req.body.location;
    const searchtype = req.body.type;
    const searchpropertytype = req.body.property;
	
/* Flat	 */
if(searchpropertytype === 'Flat'){
	if(req.body.min !== '' && req.body.max === ''){
		console.log(req.body.min);
		const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= '+req.body.min+' and (propertytype = ? or propertytype = ? or propertytype = ? ) order by date desc',['Flat/ Apartment','Builder Floor Apartment','Studio Apartment']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.max !== '' && req.body.min === ''){
		console.log(req.body.max );
		 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= '+req.body.max+' and (propertytype = ? or propertytype = ? or propertytype = ? ) order by date desc',['Flat/ Apartment','Builder Floor Apartment','Studio Apartment']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.min !== '' && req.body.max !== ''){
		console.log(req.body.max,'min and max',req.body.max);
		 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  (monthlyrent >= '+req.body.min+' and monthlyrent <= '+req.body.max+')  and (propertytype = ? or propertytype = ? or propertytype = ? ) order by date desc',['Flat/ Apartment','Builder Floor Apartment','Studio Apartment']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.min === '' && req.body.max === ''){
		const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? or propertytype = ? or propertytype = ? order by date desc',['Flat/ Apartment','Builder Floor Apartment','Studio Apartment']);
	  return res.json({ success: 1, seachviews:rows});
	}
}
/* House/Villa	 */
if(searchpropertytype === 'House/Villa'){
	if(req.body.min !== '' && req.body.max === ''){
		console.log(req.body.min);
		const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= '+req.body.min+' and (propertytype = ? or propertytype = ? or propertytype = ?) order by date desc',['Residential House','Villa','Penthouse']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.max !== '' && req.body.min === ''){
		console.log(req.body.max );
		 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= '+req.body.max+' and (propertytype = ? or propertytype = ? or propertytype = ?) order by date desc',['Residential House','Villa','Penthouse']); 
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.min !== '' && req.body.max !== ''){
		console.log(req.body.max,'min and max',req.body.max);
		 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  (monthlyrent >= '+req.body.min+' and monthlyrent <= '+req.body.max+')  and (propertytype = ? or propertytype = ? or propertytype = ?) order by date desc',['Residential House','Villa','Penthouse']); 
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.min === '' && req.body.max === ''){
		const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? or propertytype = ? or propertytype = ? order by date desc',['Residential House','Villa','Penthouse']);
	  return res.json({ success: 1, seachviews:rows});
	}
		

}
/* plot	 */
if(searchpropertytype === 'Plot'){
	if(req.body.min !== '' && req.body.max === ''){
		console.log(req.body.min);
		const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= '+req.body.min+' and (propertytype = ?) order by date desc',['Residential Land/ Plot']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.max !== '' && req.body.min === ''){
		console.log(req.body.max );
		 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= '+req.body.max+' and (propertytype = ?) order by date desc',['Residential Land/ Plot']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.min !== '' && req.body.max !== ''){
		console.log(req.body.max,'min and max',req.body.max);
		 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  (monthlyrent >= '+req.body.min+' and monthlyrent <= '+req.body.max+')  and (propertytype = ?) order by date desc',['Residential Land/ Plot']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.min === '' && req.body.max === ''){
		const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? order by date desc',['Residential Land/ Plot']);
	  return res.json({ success: 1, seachviews:rows});
	}
		

}
/* Office Space	 */
if(searchpropertytype === 'Office Space'){
	if(req.body.min !== '' && req.body.max === ''){
		console.log(req.body.min);
		const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= '+req.body.min+' and (propertytype = ? or propertytype = ?) order by date desc',['Commercial Office Space','Office in IT Park/ SEZ']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.max !== '' && req.body.min === ''){
		console.log(req.body.max );
		 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= '+req.body.max+' and (propertytype = ? or propertytype = ?) order by date desc',['Commercial Office Space','Office in IT Park/ SEZ']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.min !== '' && req.body.max !== ''){
		console.log(req.body.max,'min and max',req.body.max);
		 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  (monthlyrent >= '+req.body.min+' and monthlyrent <= '+req.body.max+')  and (propertytype = ? or propertytype = ?) order by date desc',['Commercial Office Space','Office in IT Park/ SEZ']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.min === '' && req.body.max === ''){
		const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? or propertytype = ? order by date desc',['Commercial Office Space','Office in IT Park/ SEZ']);
	  return res.json({ success: 1, seachviews:rows});
	}
}
/* Shop/Showroom	 */
if(searchpropertytype === 'Shop/Showroom'){
	if(req.body.min !== '' && req.body.max === ''){
		console.log(req.body.min);
		const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= '+req.body.min+' and (propertytype = ? or propertytype = ? ) order by date desc',['Commercial Shop','Commercial Showroom']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.max !== '' && req.body.min === ''){
		console.log(req.body.max );
		 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= '+req.body.max+' and (propertytype = ? or propertytype = ? ) order by date desc',['Commercial Shop','Commercial Showroom']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.min !== '' && req.body.max !== ''){
		console.log(req.body.max,'min and max',req.body.max);
		 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  (monthlyrent >= '+req.body.min+' and monthlyrent <= '+req.body.max+')  and (propertytype = ? or propertytype = ? ) order by date desc',['Commercial Shop','Commercial Showroom']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.min === '' && req.body.max === ''){
		const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? or propertytype = ?  order by date desc',['Commercial Shop','Commercial Showroom']);
	  return res.json({ success: 1, seachviews:rows});
	}
}
/*Commercial Land	 */
if(searchpropertytype === 'Commercial Land'){
	if(req.body.min !== '' && req.body.max === ''){
		console.log(req.body.min);
		const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= '+req.body.min+' and (propertytype = ?) order by date desc',['Commercial Land']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.max !== '' && req.body.min === ''){
		console.log(req.body.max );
		 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= '+req.body.max+' and (propertytype = ?) order by date desc',['Commercial Land']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.min !== '' && req.body.max !== ''){
		console.log(req.body.max,'min and max',req.body.max);
		 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  (monthlyrent >= '+req.body.min+' and monthlyrent <= '+req.body.max+')  and (propertytype = ?) order by date desc',['Commercial Land']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.min === '' && req.body.max === ''){
		const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? order by date desc',['Commercial Land']);
	  return res.json({ success: 1, seachviews:rows});
	}
}
/* Warehouse/Godown	 */
if(searchpropertytype === 'Warehouse/Godown'){
	if(req.body.min !== '' && req.body.max === ''){
		console.log(req.body.min);
		const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= '+req.body.min+' and (propertytype = ?) order by date desc',['Warehouse/Godown']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.max !== '' && req.body.min === ''){
		console.log(req.body.max );
		 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= '+req.body.max+' and (propertytype = ?) order by date desc',['Warehouse/Godown']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.min !== '' && req.body.max !== ''){
		console.log(req.body.max,'min and max',req.body.max);
		 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  (monthlyrent >= '+req.body.min+' and monthlyrent <= '+req.body.max+')  and (propertytype = ?) order by date desc',['Warehouse/Godown']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.min === '' && req.body.max === ''){
		const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? order by date desc',['Warehouse/Godown']);
	  return res.json({ success: 1, seachviews:rows});
	}
}
/* Industrial Building	 */
if(searchpropertytype === 'Industrial Building'){
	if(req.body.min !== '' && req.body.max === ''){
		console.log(req.body.min);
		const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= '+req.body.min+' and (propertytype = ?) order by date desc',['Industrial Building']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.max !== '' && req.body.min === ''){
		console.log(req.body.max );
		 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= '+req.body.max+' and (propertytype = ?) order by date desc',['Industrial Building']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.min !== '' && req.body.max !== ''){
		console.log(req.body.max,'min and max',req.body.max);
		 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  (monthlyrent >= '+req.body.min+' and monthlyrent <= '+req.body.max+')  and (propertytype = ?) order by date desc',['Industrial Building']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.min === '' && req.body.max === ''){
		const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? order by date desc',['Industrial Building']);
	  return res.json({ success: 1, seachviews:rows});
	}
}
/* Industrial Shed	 */
if(searchpropertytype === 'Industrial Shed'){
	if(req.body.min !== '' && req.body.max === ''){
		console.log(req.body.min);
		const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= '+req.body.min+' and (propertytype = ?) order by date desc',['Industrial Shed']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.max !== '' && req.body.min === ''){
		console.log(req.body.max );
		 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= '+req.body.max+' and (propertytype = ?) order by date desc',['Industrial Shed']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.min !== '' && req.body.max !== ''){
		console.log(req.body.max,'min and max',req.body.max);
		 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  (monthlyrent >= '+req.body.min+' and monthlyrent <= '+req.body.max+')  and (propertytype = ?) order by date desc',['Industrial Shed']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.min === '' && req.body.max === ''){
		const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? order by date desc',['Industrial Shed']);
	  return res.json({ success: 1, seachviews:rows});
	}
}
/* Agricultural Land	 */
if(searchpropertytype === 'Agricultural Land'){
	if(req.body.min !== '' && req.body.max === ''){
		console.log(req.body.min);
		const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= '+req.body.min+' and (propertytype = ?) order by date desc',['Agricultural Land']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.max !== '' && req.body.min === ''){
		console.log(req.body.max );
		 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= '+req.body.max+' and (propertytype = ? ) order by date desc',['Agricultural Land']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.min !== '' && req.body.max !== ''){
		console.log(req.body.max,'min and max',req.body.max);
		 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  (monthlyrent >= '+req.body.min+' and monthlyrent <= '+req.body.max+')  and (propertytype = ? ) order by date desc',['Agricultural Land']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.min === '' && req.body.max === ''){
		const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? order by date desc',['Agricultural Land']);
	  return res.json({ success: 1, seachviews:rows});
	}
}
/* Farm House */
if(searchpropertytype === 'Farm House'){
	if(req.body.min !== '' && req.body.max === ''){
		console.log(req.body.min);
		const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent >= '+req.body.min+' and (propertytype = ? ) order by date desc',['Farm House']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.max !== '' && req.body.min === ''){
		console.log(req.body.max );
		 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  monthlyrent <= '+req.body.max+' and (propertytype = ?) order by date desc',['Farm House']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.min !== '' && req.body.max !== ''){
		console.log(req.body.max,'min and max',req.body.max);
		 const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and  (monthlyrent >= '+req.body.min+' and monthlyrent <= '+req.body.max+')  and (propertytype = ?) order by date desc',['Farm House']);
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.min === '' && req.body.max === ''){
		const [rows] = await db_connection.execute('SELECT * FROM property where propertyDetails like "%'+searchtype+'%" and City like "%'+searchlocation+'%" and propertytype = ? order by date desc',['Farm House']);
	  return res.json({ success: 1, seachviews:rows});
	}
}
  
		
	const pgboys = req.body.pgboys;			
	const pggirls = req.body.pggirls;			
	const privateroom = req.body.privateroom;			
	const tworoom = req.body.tworoom;			
	const twoplusroom = req.body.twoplusroom;			
				
/* Male */
if(pgboys === 'Male' && pggirls !== 'Female' && privateroom !== 'privateroom' && tworoom !== 'tworoom' && twoplusroom !== 'twoplusroom'){
	console.log(req.body.pgboys);
	
	  if(req.body.min !== '' && req.body.max === ''){
		console.log(req.body.min);
		/* const [rows] = await db_connection.execute('SELECT a.*,b.* FROM propertypg a inner join categories b on a.pg_id = b.categories_pg_id where a.genter like "%'+pgboys+'%" and a.locality like "%'+searchlocation+'%" and  (b.smonthlyrent >= '+req.body.min+' or b.dmonthlyrent >= '+req.body.min+' or b.tmonthlyrent >= '+req.body.min+' or b.fmonthlyrent >= '+req.body.min+' or b.omonthlyrent >= '+req.body.min+')  order by a.date desc'); */
		
		const [rows] = await db_connection.execute('SELECT a.*,b.* FROM propertypg a inner join categories b on a.pg_id = b.categories_pg_id where a.genter like "%'+pgboys+'%" and a.locality like "%'+searchlocation+'%" and  b.smonthlyrent >= '+req.body.min+' order by a.date desc');
		if(rows.length > 0){
			return res.json({ success: 1, seachviews:rows});
		}else {
			console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
			const [rowsd] = await db_connection.execute('SELECT a.*,b.* FROM propertypg a inner join categories b on a.pg_id = b.categories_pg_id where a.genter like "%'+pgboys+'%" and a.locality like "%'+searchlocation+'%" and  b.dmonthlyrent >= '+req.body.min+' order by a.date desc');
			if(rowsd.length > 0){
				return res.json({ success: 1, seachviews:rowsd});
			}
		}
	}
	if(req.body.max !== '' && req.body.min === ''){
		console.log(req.body.max );
		 const [rows] = await db_connection.execute('SELECT a.*,b.* FROM propertypg a left join categories b on a.pg_id = b.categories_pg_id where a.genter like "%'+pgboys+'%" and a.locality like "%'+searchlocation+'%" and  b.monthlyrent <= '+req.body.max+' order by a.date desc');
	  return res.json({ success: 1, seachviews:rows});
	}
	if(req.body.min !== '' && req.body.max !== ''){
		console.log(req.body.max,'min and max',req.body.max);
		 const [rows] = await db_connection.execute('SELECT a.*,b.* FROM propertypg a left join categories b on a.pg_id = b.categories_pg_id where a.genter like "%'+pgboys+'%" and a.locality like "%'+searchlocation+'%" and  (b.monthlyrent >= '+req.body.min+' and b.monthlyrent <= '+req.body.max+') order by a.date desc');
	  return res.json({ success: 1, seachviews:rows});
	}  
	if(req.body.min === '' && req.body.max === ''){
		const [rows] = await db_connection.execute('SELECT * FROM  propertypg where genter like "%'+pgboys+'%" and locality like "%'+searchlocation+'%"  order by date desc');
	  return res.json({ success: 1, seachviews:rows});
	}
}
  
	} catch (err) {next(err);}
};


/* 
const [rows] = await db_connection.execute('SELECT a.*,b.* FROM  propertypg a left join categories b on a.pg_id = b.categories_pg_id where a.genter like "%'+searchpropertytype+'%" and a.locality like "%'+searchlocation+'%"  order by a.date desc');
 */