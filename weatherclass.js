module.exports= class Weather {

    constructor (temperature, humidity, windSpeed, visibility, summary) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.visibility = visibility;
        this.summary = summary;
    }
};