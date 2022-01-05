const Button = require("../models/button");
const ButtonNode2 = require("../models/button2");
const ButtonNode3 = require("../models/button3");

/*
  button-1 actions
*/
// Update Data
exports.update = (req, res) => {
  const query = {name: 'button'};
  const newData = {status: req.query.status}

  // Change the status of the data whose name is button in Buttons collection.
  Button.updateOne(query, newData, {upsert: true}, function (err, place) {
    // prints the result returned from the operation to the screen
    res.send(place);
  });
};

exports.findAll = (req, res) => {
  Button.find()
    .then((node) => {
      if(node[0].status) {
        // Return status as string with 201 code
        res.status(201).send(node[0].status+'');
      }else{
        res.status(202).send(node[0].status+'');
      }
      
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error Occured",
      });
    });
};

/*
  button-2 actions
*/
exports.update2 = (req, res) => {
  const query = {name: 'button'};
  const newData = {status: req.query.status}

  ButtonNode2.updateOne(query, newData, {upsert: true}, function (err, place) {
    res.send(place);
  });
};

exports.findAll2 = (req, res) => {
  ButtonNode2.find()
    .then((node) => {
      if(node[0].status) {
        res.status(201).send(node[0].status+'');
      }else{
        res.status(202).send(node[0].status+'');
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error Occured",
      });
    });
};

/*
  button-3 actions
*/
exports.update3 = (req, res) => {
  const query = {name: 'button'};
  const newData = {status: req.query.status}

  ButtonNode3.updateOne(query, newData, {upsert: true}, function (err, place) {
    res.send(place);
  });
};

exports.findAll3 = (req, res) => {
  ButtonNode3.find()
    .then((node) => {
      if(node[0].status) {
        res.status(201).send(node[0].status+'');
      }else{
        res.status(202).send(node[0].status+'');
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error Occured",
      });
    });
};