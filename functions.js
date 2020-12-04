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

module.exports = getVehicle