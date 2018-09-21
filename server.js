const express = require('express');
const bodyParser = require('body-parser');
const app = express();

class ApiClass{
    constructor(){
        this.initialSetup();
        this.setView();
        this.hitApi();
        this.publish();
    }

    initialSetup(){
        app.use(express.static('public'));
        app.use(bodyParser.urlencoded({ extended: true }));

    }
    setView(){
        app.set('view engine', 'ejs');
    }
    hitApi(){
        const cont1=require('./controller/WeatherController.js');
        app.get('/', cont1);
    }
    publish(){
        app.listen(3000, function () {
            console.log('Example app listening on port 3000!')
        });
    }

}
new ApiClass();