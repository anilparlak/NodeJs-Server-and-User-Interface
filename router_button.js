const express = require("express");
const router = express.Router();
const endNodeController = require("./controllers/button_controller");

router.get('/get', endNodeController.findAll);
router.get('/update', endNodeController.update);

router.get('/get2', endNodeController.findAll2);
router.get('/update2', endNodeController.update2);

router.get('/get3', endNodeController.findAll3);
router.get('/update3', endNodeController.update3);
module.exports = router;
