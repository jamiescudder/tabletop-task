const express = require('express')
const Axios = require('axios')

const app = express()

//Import Routes
const dvlaRoutes = require('./routes/dvla');
app.use('/dvla', dvlaRoutes)

// const index = require('./views/in');

//Routes
app.get('/', (req, res) => {
    // res.send('Home');
    res.sendFile(__dirname + '/index.html')
});

// getVehicle();

function getVehicle() { 
    var data = JSON.stringify({ registrationNumber: 'AA19AAA' });

    var config = {
    method: 'post',
    url:
        'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles',
    headers: {
        'x-api-key': 'qC6ujZ70hH2k8zxGLwA8H4LahgItWbyp6PzEZ6a7',
        'Content-Type': 'application/json',
    },
    data: data,
    };

    Axios(config)
        .then(function(response) {
        console.log(JSON.stringify(response.data));
    })
        .catch(function(error) {
        console.log(error);
    });
}


app.listen(3000);