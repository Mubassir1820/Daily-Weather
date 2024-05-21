fetch('http://api.weatherapi.com/v1/current.json?key=75eed3fc01164f22b72135905242005&q=London&aqi=no')
    .then(response => {
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data received', data);
    })
    .catch(error => {
        console.error('There was a problem with fetch operation: ', error);
    });