const router = require('express').Router();
const apiControl = require('../controllers/apiController');
const {
    uploadSingle
} = require('../middleware/multer');

router.get('/landing-page', apiControl.landingPage);
router.get('/detail-page/:id', apiControl.detailPage);
// router.post('/booking-page', uploadSingle, apiControl.bookingPage);

module.exports = router;