const express = require('express')
const app = express()
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const fs = require('fs');



// ------- https redirect code -------------


//-----------------------------------------------------------------------



    app.use(cors())



    app.use(bodyParser.json() );  



    app.use(bodyParser.urlencoded({extended:true}));




// ------------------ React redirect code -------------------------



   app.use(express.static(path.join(__dirname, '../public_html/build')));

    app.get('*', function(req, res) {

    	res.sendFile(path.join(__dirname, '../public_html/build', 'index.html'));

   });

   



// Handling Errors



app.use((err, req, res, next) => {



  // console.log(err);



  err.statusCode = err.statusCode || 500;



  err.message = err.message || "Internal Server Error";



  res.status(err.statusCode).json({



    message: err.message,



  });



});











//---------------- Folder Path --------------------------



    app.get('/ping', function (req, res) {



     return res.send(path.join(__dirname));



    });







//-----------------------------------------------------------------



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
