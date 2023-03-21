"use script"


const url = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&APPID=b4c2ff958707416e034ac70770bc1001"

$.ajax ({
    url: url,
    success: function (result){
        console.log(result);
        console.log(result.name);

        $("#location").text(result.name);

        let F = Math.round(result.main.temp * (9/5) - 459.67);
        let Fahrenheit = F.toString();
        $("#temp").text(Fahrenheit);

        let windSpeed = Math.round(result.wind.speed / .44704);
        let wind = windSpeed.toString();
        $("#wind").text(wind);

        $("#sky").text(result.weather[0].description);
    }
})
