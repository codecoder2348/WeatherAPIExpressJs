const Weather =require("../weatherclass.js");
let request = require('request');

module.exports=function (req, res) {

    let url = 'https://api.darksky.net/forecast/c5a2155e69ea82ada5a3a167d494ae40/39.9526,-75.1652'
    request(url, function (err, response, body) {
        if(err){
            res.render('index', {weather: null, error: 'Error, please try again'});
        } else {
            let data = JSON.parse(body)

            weather = new Weather(data.currently.temperature,
                data.currently.humidity,
                data.currently.windSpeed,
                data.currently.visibility,
                data.currently.summary);
                res.render('index', weather);
          }
    });


}