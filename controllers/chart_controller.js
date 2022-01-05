const Endnode = require("../models/endnode");
const Endnode2 = require("../models/endnode2");
const Endnode3 = require("../models/endnode3");
const moment = require('moment');
const _ = require('lodash'); //ready-made js-function abbreviations (groups data)

// For temperature
// GET Time data
exports.getMonthData = (req, res) => {
    // for Node 1
    Endnode.find()
        .sort({ createdAt: 1 }) // start sequence from last record
        .limit(5000)
        .then((node) => {
            const data = node;
            data.find((item, key) => {
                //const name = moment(item.created_at, 'YYYY-MM-DD').format();
                const d = moment(item['createdAt']).format('MM-YYYY')
                Object.assign(data[key], { 'date': d }); //add below the retrieved data add date information
            })

            var arr = []
            const result = _.groupBy(data, 'date');
            Object.keys(result).map((item) => {
                const count = result[item].length
                let temperature = 0;
                let pressure = 0;
                let humidity = 0;
                result[item].map((x) => {
                    //temperature+=x['temperature']
                    temperature = parseInt(temperature) + parseInt(x['temperature'])
                    pressure = parseInt(pressure) + parseInt(x['pressure'])
                    humidity = parseInt(humidity) + parseInt(x['humidity'])
                })
                const total = temperature / count;
                const pressureTotal = pressure / count;
                const humidityTotal = humidity / count;
                arr.push({
                    'month': item,
                    'temperature': total.toFixed(2),
                    'pressure': pressureTotal.toFixed(2),
                    'humidity': humidityTotal.toFixed(2)
                });
            })

            // node 2
            Endnode2.find()
                .sort({ createdAt: 1 }) // start sequence from last record
                .limit(5000)
                .then((node) => {
                    const data = node;
                    data.find((item, key) => {
                        //const name = moment(item.created_at, 'YYYY-MM-DD').format();
                        const d = moment(item['createdAt']).format('MM-YYYY')
                        Object.assign(data[key], { 'date': d });
                    })
                    var arr2 = []
                    const result = _.groupBy(data, 'date');
                    Object.keys(result).map((item) => {
                        const count = result[item].length
                        let temperature = 0;
                        let pressure = 0;
                        let humidity = 0;
                        result[item].map((x) => {
                            //temperature+=x['temperature']
                            temperature = parseInt(temperature) + parseInt(x['temperature'])
                            pressure = parseInt(pressure) + parseInt(x['pressure'])
                            humidity = parseInt(humidity) + parseInt(x['humidity'])
                        })
                        const total = temperature / count;
                        const pressureTotal = pressure / count;
                        const humidityTotal = humidity / count;

                        arr2.push({
                            'month': item,
                            'temperature': total.toFixed(2),
                            'pressure': pressureTotal.toFixed(2),
                            'humidity': humidityTotal.toFixed(2)
                        });
                    })


                    // Node 3
                    Endnode3.find()
                        .sort({ createdAt: 1 }) // start sequence from last record
                        .limit(5000)
                        .then((node) => {
                            const data = node;
                            data.find((item, key) => {
                                //const name = moment(item.created_at, 'YYYY-MM-DD').format();
                                const d = moment(item['createdAt']).format('MM-YYYY')
                                Object.assign(data[key], { 'date': d });
                            })
                            var arr3 = []
                            const result = _.groupBy(data, 'date');
                            Object.keys(result).map((item) => {
                                const count = result[item].length
                                let temperature = 0;
                                let pressure = 0;
                                let humidity = 0;
                                result[item].map((x) => {
                                    //temperature+=x['temperature']
                                    temperature = parseInt(temperature) + parseInt(x['temperature'])
                                    pressure = parseInt(pressure) + parseInt(x['pressure'])
                                    humidity = parseInt(humidity) + parseInt(x['humidity'])
                                })
                                const total = temperature / count;
                                const pressureTotal = pressure / count;
                                const humidityTotal = humidity / count;
                                arr3.push({
                                    'month': item,
                                    'temperature': total.toFixed(2),
                                    'pressure': pressureTotal.toFixed(2),
                                    'humidity': humidityTotal.toFixed(2)
                                });
                            })

                            res.status(200).send([{
                                'node1': arr,
                                'node2': arr2,
                                'node3': arr3
                            }]);
                            //console.log(monthName)

                        })
                        .catch((err) => {
                            res.status(500).send({
                                message: err.message || "Error Occured",
                            });
                        });
                    //console.log(monthName)

                })
                .catch((err) => {
                    res.status(500).send({
                        message: err.message || "Error Occured",
                    });
                });


        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Error Occured",
            });
        });
}

// get Time day
exports.getDayData = (req, res) => {
    Endnode.find()
        .sort({ createdAt: 1 }) // sıralamayı son kayıttan başlat
        .limit(5000)
        .then((node) => {
            const data = node;
            data.find((item, key) => {
                const d = moment(item['createdAt']).format('DD-MM-YYYY')
                Object.assign(data[key], { 'date': d });
            })

            var arr = []
            const result = _.groupBy(data, 'date');
            Object.keys(result).map((item) => {
                const count = result[item].length
                let temperature = 0;
                let pressure = 0;
                let humidity = 0;
                result[item].map((x) => {
                    temperature = parseInt(temperature) + parseInt(x['temperature'])
                    pressure = parseInt(pressure) + parseInt(x['pressure'])
                    humidity = parseInt(humidity) + parseInt(x['humidity'])
                })
                const total = temperature / count;
                const pressureTotal = pressure / count;
                const humidityTotal = humidity / count;
                arr.push({
                    'day': item,
                    'temperature': total.toFixed(2),
                    'pressure': pressureTotal.toFixed(2),
                    'humidity': humidityTotal.toFixed(2)
                });
            })

            Endnode2.find()
                .sort({ createdAt: 1 }) // sıralamayı son kayıttan başlat
                .limit(5000)
                .then((node) => {
                    const data = node;
                    data.find((item, key) => {
                        const d = moment(item['createdAt']).format('DD-MM-YYYY')
                        Object.assign(data[key], { 'date': d });
                    })


                    const arr2 = []
                    const result = _.groupBy(data, 'date');
                    Object.keys(result).map((item) => {
                        const count = result[item].length
                        let temperature = 0;
                        let pressure = 0;
                        let humidity = 0;
                        result[item].map((x) => {
                            temperature = parseInt(temperature) + parseInt(x['temperature'])
                            pressure = parseInt(pressure) + parseInt(x['pressure'])
                            humidity = parseInt(humidity) + parseInt(x['humidity'])
                        })
                        const total = temperature / count;
                        const pressureTotal = pressure / count;
                        const humidityTotal = humidity / count;
                        arr2.push({
                            'day': item,
                            'temperature': total.toFixed(2),
                            'pressure': pressureTotal.toFixed(2),
                            'humidity': humidityTotal.toFixed(2)
                        });
                    })

                    // Node 3
                    Endnode3.find()
                        .sort({ createdAt: 1 }) // sıralamayı son kayıttan başlat
                        .limit(5000)
                        .then((node) => {
                            const data = node;
                            data.find((item, key) => {
                                const d = moment(item['createdAt']).format('DD-MM-YYYY')
                                Object.assign(data[key], { 'date': d });
                            })


                            const arr3 = []
                            const result = _.groupBy(data, 'date');
                            Object.keys(result).map((item) => {
                                const count = result[item].length
                                let temperature = 0;
                                let pressure = 0;
                                let humidity = 0;
                                result[item].map((x) => {
                                    temperature = parseInt(temperature) + parseInt(x['temperature'])
                                    pressure = parseInt(pressure) + parseInt(x['pressure'])
                                    humidity = parseInt(humidity) + parseInt(x['humidity'])
                                })
                                const total = temperature / count;
                                const pressureTotal = pressure / count;
                                const humidityTotal = humidity / count;
                                arr3.push({
                                    'day': item,
                                    'temperature': total.toFixed(2),
                                    'pressure': pressureTotal.toFixed(2),
                                    'humidity': humidityTotal.toFixed(2)
                                });
                            })

                            res.status(200).send([{
                                'node1': arr,
                                'node2': arr2,
                                'node3': arr3
                            }]);

                            //res.status(200).send([])

                        })
                        .catch((err) => {
                            res.status(500).send({
                                message: err.message || "Error Occured",
                            });
                        });

                })
                .catch((err) => {
                    res.status(500).send({
                        message: err.message || "Error Occured",
                    });
                });

        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Error Occured",
            });
        });
}

// get hours 
exports.getHourData = (req, res) => {
    const today = moment();
    const yesterday = moment().add(-1, 'days')
    Endnode.find({ //query today up to tonight
        "createdAt": {
            $lt: today,
            $gte: yesterday
        }
    })
        .sort({ createdAt: 1 }) // start sequence from last record
        .then((node) => {
            const data = node;

            data.find((item, key) => {
                const d = moment(item['createdAt']).format('DD-MM-YYYY HH')
                Object.assign(data[key], { 'date': d });
            })

            var arr = []
            const result = _.groupBy(data, 'date');
            Object.keys(result).map((item) => {
                const count = result[item].length
                let temperature = 0;
                let pressure = 0;
                let humidity = 0;
                result[item].map((x) => {
                    temperature = parseInt(temperature) + parseInt(x['temperature'])
                    pressure = parseInt(temperature) + parseInt(x['pressure'])
                    humidity = parseInt(temperature) + parseInt(x['humidity'])
                })
                const total = temperature / count;
                const pressureTotal = pressure / count;
                const humidityTotal = humidity / count;
                arr.push({
                    'hours': item + ':00',
                    'temperature': total.toFixed(2),
                    'pressure': pressureTotal.toFixed(2),
                    'humidity': humidityTotal.toFixed(2),
                });
            })

            Endnode2.find({
                "createdAt": {
                    $lt: today,
                    $gte: yesterday
                }
            })
                .sort({ createdAt: 1 }) // start sequence from last record
                .then((node) => {
                    const data = node;
                    data.find((item, key) => {
                        const d = moment(item['createdAt']).format('DD-MM-YYYY HH')
                        Object.assign(data[key], { 'date': d });
                    })

                    var arr2 = []
                    const result = _.groupBy(data, 'date');
                    Object.keys(result).map((item) => {
                        const count = result[item].length
                        let temperature = 0;
                        let pressure = 0;
                        let humidity = 0;
                        result[item].map((x) => {
                            temperature = parseInt(temperature) + parseInt(x['temperature'])
                            pressure = parseInt(temperature) + parseInt(x['pressure'])
                            humidity = parseInt(temperature) + parseInt(x['humidity'])
                        })
                        const total = temperature / count;
                        const pressureTotal = pressure / count;
                        const humidityTotal = humidity / count;
                        arr2.push({
                            'hours': item + ':00',
                            'temperature': total.toFixed(2),
                            'pressure': pressureTotal.toFixed(2),
                            'humidity': humidityTotal.toFixed(2),
                        });
                    })

                    // node-3
                    Endnode3.find({
                        "createdAt" : { 
                            $lt: today, 
                            $gte: yesterday
                          } 
                    })
                        .sort({ createdAt: 1 }) // start sequence from last record
                        .then((node) => {
                            console.log(today)
                            console.log(yesterday)
                            console.log(node)
                            const data = node;
                            data.find((item, key) => {
                                const d = moment(item['createdAt']).format('DD-MM-YYYY HH')
                                Object.assign(data[key], { 'date': d });
                            })

                            var arr3 = []
                            const result = _.groupBy(data, 'date');
                            Object.keys(result).map((item) => {
                                const count = result[item].length
                                let temperature = 0;
                                result[item].map((x) => {
                                    temperature = parseInt(temperature) + parseInt(x['temperature']),
                                        pressure = parseInt(temperature) + parseInt(x['pressure'])
                                    humidity = parseInt(temperature) + parseInt(x['humidity'])
                                })
                                const total = temperature / count;
                                const pressureTotal = pressure / count;
                                const humidityTotal = humidity / count;
                                arr3.push({
                                    'hours': item + ':00',
                                    'temperature': total.toFixed(2),
                                    'pressure': pressureTotal.toFixed(2),
                                    'humidity': humidityTotal.toFixed(2),
                                });
                            })

                            res.status(200).send([{
                                'node1': arr,
                                'node2': arr2,
                                'node3': arr3
                            }]);

                            //res.status(200).send(arr);

                            //res.status(200).send([])

                        })
                        .catch((err) => {
                            res.status(500).send({
                                message: err.message || "Error Occured",
                            });
                        });


                })
                .catch((err) => {
                    res.status(500).send({
                        message: err.message || "Error Occured",
                    });
                });


        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Error Occured",
            });
        });
}

// get hOURS day
/*
exports.getHourData = (req, res) => {
    Endnode.find()
        .sort({ createdAt: 1 }) // sıralamayı son kayıttan başlat
        .limit(24)
        .then((node) => {
            const data = node;
            data.find((item, key) => {
                const d = moment(item['createdAt']).format('DD-MM-YYYY HH')
                Object.assign(data[key], { 'date': d });
            })

            var arr = []
            const result = _.groupBy(data, 'date');
            Object.keys(result).map((item) => {
                const count = result[item].length
                let temperature = 0;
                let pressure = 0;
                let humidity = 0;
                result[item].map((x) => {
                    temperature = parseInt(temperature) + parseInt(x['temperature'])
                    pressure = parseInt(pressure) + parseInt(x['pressure'])
                    humidity = parseInt(humidity) + parseInt(x['humidity'])
                })
                const total = temperature / count;
                const pressureTotal = pressure / count;
                const humidityTotal = humidity / count;
                arr.push({
                    'hours': item + ':00',
                    'temperature': total.toFixed(2),
                    'pressure': pressureTotal.toFixed(2),
                    'humidity': humidityTotal.toFixed(2),
                });
            })

            Endnode2.find()
                .sort({ createdAt: 1 }) // sıralamayı son kayıttan başlat
                .limit(24)
                .then((node) => {
                    const data = node;
                    data.find((item, key) => {
                        const d = moment(item['createdAt']).format('DD-MM-YYYY HH')
                        Object.assign(data[key], { 'date': d });
                    })

                    var arr2 = []
                    const result = _.groupBy(data, 'date');
                    Object.keys(result).map((item) => {
                        const count = result[item].length
                        let temperature = 0;
                        let pressure = 0;
                        let humidity = 0;
                        result[item].map((x) => {
                            temperature = parseInt(temperature) + parseInt(x['temperature'])
                            pressure = parseInt(pressure) + parseInt(x['pressure'])
                            humidity = parseInt(humidity) + parseInt(x['humidity'])
                        })
                        const total = temperature / count;
                        const pressureTotal = pressure / count;
                        const humidityTotal = humidity / count;
                        arr2.push({
                            'hours': item + ':00',
                            'temperature': total.toFixed(2),
                            'pressure': pressureTotal.toFixed(2),
                            'humidity': humidityTotal.toFixed(2),
                        });
                    })

                    // node 3
                    Endnode3.find()
                    .sort({ createdAt: 1 }) // sıralamayı son kayıttan başlat
                    .limit(24)
                    .then((node) => {
                        const data = node;
                        data.find((item, key) => {
                            const d = moment(item['createdAt']).format('DD-MM-YYYY HH')
                            Object.assign(data[key], { 'date': d });
                        })
    
                        var arr3 = []
                        const result = _.groupBy(data, 'date');
                        Object.keys(result).map((item) => {
                            const count = result[item].length
                            let temperature = 0;
                            let pressure = 0;
                            let humidity = 0;
                            result[item].map((x) => {
                                temperature = parseInt(temperature) + parseInt(x['temperature']),
                                pressure = parseInt(pressure) + parseInt(x['pressure'])
                                humidity = parseInt(humidity) + parseInt(x['humidity'])
                            })
                            const total = temperature / count;
                            const pressureTotal = pressure / count;
                            const humidityTotal = humidity / count;
                            arr3.push({
                                'hours': item + ':00',
                                'temperature': total.toFixed(2),
                                'pressure': pressureTotal.toFixed(2),
                                'humidity': humidityTotal.toFixed(2),
                            });
                        })
    
                        res.status(200).send([{
                            'node1': arr,
                            'node2': arr2,
                            'node3': arr3
                        }]);
    
                        //res.status(200).send(arr);
    
                        //res.status(200).send([])
    
                    })
                    .catch((err) => {
                        res.status(500).send({
                            message: err.message || "Error Occured",
                        });
                    });
    

                })
                .catch((err) => {
                    res.status(500).send({
                        message: err.message || "Error Occured",
                    });
                });


        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Error Occured",
            });
        });
}*/
