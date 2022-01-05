const express = require("express"); 
const router = express.Router();
const chartController = require("./controllers/chart_controller");

router.get('/get_month',chartController.getMonthData);
router.get('/get_day',chartController.getDayData);
router.get('/get_hour',chartController.getHourData);

module.exports = router;