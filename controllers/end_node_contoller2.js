const Endnode2 = require("../models/endnode2");
const moment = require('moment');  
const _ = require('lodash');

// Save Data
exports.create = (req, res) => {
  // Gets parameters from the request
  if (!req.query.temperature || !req.query.pressure || !req.query.humidity) {
    return res.status(400).send({
      message: "Required field can not be empty",
    });
  }

  if(req.query.temperature < -50 || req.query.temperature > 120) {
    return res.status(400).send({
      message: "Invalid request",
    });
  }

  if(req.query.pressure < 1000 || req.query.pressure > 130915) {
    return res.status(400).send({
      message: "Invalid request",
    });
  }

  if(req.query.humidity < 0 || req.query.humidity > 100) {
    return res.status(400).send({
      message: "Invalid request",
    });
  }

  const endnode = new Endnode2({
    temperature: req.query.temperature,
    pressure: req.query.pressure,
    humidity: req.query.humidity
  });

  endnode
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

// Get All Data
exports.findAll = (req, res) => {
  Endnode2.find()
    .sort({ name: -1 })
    .then((node) => {
      res.status(200).send(node);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error Occured",
      });
    });
};

// Get Data
exports.findOne = (req, res) => {
  Endnode2.findById(req.query.id)
    .then((node) => {
      if (!node) {
        return res.status(404).send({
          message: "Node not found with id " + req.query.id,
        });
      }
      res.status(200).send(node);
      console.log(node);
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error retrieving node with id " + req.params.id,
      });
    });
};

// Get Last Data
exports.findLastOne = (req, res) => {
  Endnode2.find()
  .sort({ _id: -1 })
  .then((node) => {
    res.status(200).send(node[0]);
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "Error Occured",
    });
  });
};

// GET Time data
exports.getMonthData = (req, res) => {
  Endnode2.find() 
  .sort({ createdAt: -1 }) 
  .limit(5000)
  .then((node) => {
    const data = node;
    data.find((item, key) => {
      //const name = moment(item.created_at, 'YYYY-MM-DD').format();
      const d = moment(item['createdAt']).format('MM-YYYY')
      Object.assign(data[key], {'date':d});
    })
    
    const arr = []
    const result = _.groupBy(data, 'date');
    Object.keys(result).map((item) => {
      const count = result[item].length
      let temperature = 0;
      result[item].map((x) => {
        //temperature+=x['temperature']
        temperature = parseInt(temperature) + parseInt(x['temperature'])
      })
      const total = temperature / count;
      arr.push({
        'month': item,
        'temperature': total.toFixed(2)
      });
    })

    res.status(200).send(arr);

    //console.log(monthName)

  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "Error Occured",
    });
  });
}
// get Time day
exports.getDayData = (req, res) => {
  Endnode2.find() 
  .sort({ createdAt: -1 }) 
  .limit(5000)
  .then((node) => {
    const data = node;
    data.find((item, key) => {
      const d = moment(item['createdAt']).format('DD-MM-YYYY')
      Object.assign(data[key], {'date':d});
    })
    


    const arr = []
    const result = _.groupBy(data, 'date');
    Object.keys(result).map((item) => {
      const count = result[item].length
      let temperature = 0;
      result[item].map((x) => {
        temperature = parseInt(temperature) + parseInt(x['temperature'])
      })
      const total = temperature / count;
      arr.push({
        'day': item,
        'temperature': total.toFixed(2)
      });
    })

    res.status(200).send(arr);

    //res.status(200).send([])

  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "Error Occured",
    });
  });
}

// get hOURS day
exports.getHourData = (req, res) => {
  Endnode2.find() 
  .sort({ createdAt: -1 }) 
  .limit(5000)
  .then((node) => {
    const data = node;
    data.find((item, key) => {
      const d = moment(item['createdAt']).format('DD-MM-YYYY HH')
      Object.assign(data[key], {'date':d});
    })
    
    const arr = []
    const result = _.groupBy(data, 'date');
    Object.keys(result).map((item) => {
      const count = result[item].length
      let temperature = 0;
      result[item].map((x) => {
        temperature = parseInt(temperature) + parseInt(x['temperature'])
      })
      const total = temperature / count;
      arr.push({
        'hours': item+':00',
        'temperature': total.toFixed(2)
      });
    })

    res.status(200).send(arr);

    //res.status(200).send([])

  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "Error Occured",
    });
  });
}