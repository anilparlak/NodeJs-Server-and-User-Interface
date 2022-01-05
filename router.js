const express = require("express");
const router = express.Router();
const endNodeController = require("./controllers/end_node_contoller");

router.post('/save', endNodeController.create); // recording
router.post('/list', endNodeController.findAll); // fetch the whole list
router.post('/get', endNodeController.findOne); // fetch the data by id 
router.post('/get_last', endNodeController.findLastOne); // update last recording
router.get('/save', endNodeController.create);
router.get('/list', endNodeController.findAll);
router.get('/get', endNodeController.findOne);
router.get('/get_last', endNodeController.findLastOne);
router.get('/get_month', endNodeController.getMonthData)
router.get('/get_day', endNodeController.getDayData)
router.get('/get_hours', endNodeController.getHourData)

module.exports = router;
