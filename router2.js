const express = require("express");
const router = express.Router();
const endNodeController = require("./controllers/end_node_contoller2");

router.post('/save', endNodeController.create);
router.post('/list', endNodeController.findAll);
router.post('/get', endNodeController.findOne);
router.post('/get_last', endNodeController.findLastOne);
router.get('/save', endNodeController.create);
router.get('/list', endNodeController.findAll);
router.get('/get', endNodeController.findOne);
router.get('/get_last', endNodeController.findLastOne);
router.get('/get_month', endNodeController.getMonthData)
router.get('/get_day', endNodeController.getDayData)
router.get('/get_hours', endNodeController.getHourData)

module.exports = router;
