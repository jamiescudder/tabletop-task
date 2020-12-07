const express = require('express')
const Axios = require('axios')
const bodyParser = require("body-parser");

const app = express()

//Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))

//Parse body
app.use(bodyParser.urlencoded({ extended: false }));

//CORS proxy
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    };
    next();
});

// Template engine
app.engine('html', require('ejs').renderFile)

//Set Views
app.set('views', './views')

//Import Routes
// const dvlaRoutes = require('./routes/dvla');
// app.use('/dvla', dvlaRoutes)

//Routes
app.get('/', (req, res) => {
    if (vehicle_data) {
        res.render('index.html', {
            vehicle_plate: vehicle_data.registrationNumber + " Information",
            vehicle_make: "Make: " + vehicle_data.make,
            vehicle_model: "Model: " + vehicle_data.typeApproval,
            vehicle_picture: "Picture: " + "N/A",
            vehicle_year: "Year: " + vehicle_data.yearOfManufacture,
            table_show: 'table'
        })
    } else {
        res.render('index.html', {
            vehicle_plate: "",
            vehicle_make: "",
            vehicle_model: "",
            vehicle_picture: "",
            vehicle_year: "",
            table_show: 'none'
        })
    };
    vehicle_data = null;
});

// testing reg plate: AA19AAA
var vehicle_data;
app.post('/search-reg', (req, res) => {
    const regplate = req.body.regplate;
    var data = JSON.stringify({ registrationNumber: regplate });

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

    Axios(config).then(function (response) {
        vehicle_data = response.data
        return res.redirect('/')
    }).catch(function (error) {
        return res.redirect('/')
    });
});

app.listen(3000);