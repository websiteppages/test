const router = require('express').Router();

// Login User
router.post('/Register',loginall.Register);
router.post('/addimgpropertyall',imgupload.addimgpropertyall);
router.post('/addpropertyallsss',insertall.addpropertyallsss);
router.get('/Rentsallsss/:pageNumber',viewall.Rentsallsss);
router.get('/seachlistallsss/:pageNumber/:type/:locations/:property/:budgetMin/:budgetMax',searchall.seachlistallsss);
router.get('/seachlistallpgsss/:pageNumber/:type/:locations/:pgboys/:pggirls/:budgetMin/:budgetMax',searchallpg.seachlistallpgsss);
module.exports = router;