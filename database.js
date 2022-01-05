const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/lora', {useNewUrlParser: true, useFindAndModify: false}, 
(err) => {
    if (!err) {
        console.log('Successfully Established Connection with MongoDB')
    }
    else {
        console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
    }
});

module.exports = mongoose;