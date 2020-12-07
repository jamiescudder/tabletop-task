document.onreadystatechange = () => {

    // const Axios = require('axios')
    if (document.readyState === 'complete') {
        var submitbutton = document.getElementById('submit_button');
        console.log(submitbutton)
        submitbutton.onclick = function (e) {
            var regPlate = document.getElementById('regplate');
            var confirmed = confirm("Is this your vehicle?", + regPlate);
            if (confirmed != true) {
                // confirmForm();
                alert("Please enter your vehicle reg.")
                e.preventDefault();
                document.getElementById('regplate').value = "";
                document.getElementById("vehicle_info_table").style.display = "none";
            } else {
                if (document.getElementById('regplate').value.length > 0) {
                    alert("Searching for your vehicle information.")
                };
            };
        };
    };
};

// module.exports = getVehicle