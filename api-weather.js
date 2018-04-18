$(document).ready(function(){
    $("#search").on("click",function(){
        document.body.style.background = "white";
        var city = $("#city").val();
        console.log(city);
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&appid=b416f86b2ee1b6bd7f1466ba3f7e1e4a&units=imperial",
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function(result) {
                console.log(result);
                myFunction(result) },
            error: function() {
                failed();
            }
        });
    });
});
function myFunction(result) {
    for (var i = 0; i < 1; i++) {
        var humidity = result.main.humidity;
        var temp = result.main.temp;
        var windSpeed = result.wind.speed;
        var clouds = result.clouds.all;
        var city = result.name;
        temper = parseInt(temp);
        console.log(temper);
        background(temper);
        console.log(clouds);
        var weather = result.weather[0].main;
        console.log(weather);
        var iconCode = result.weather[0].icon;
        var icon = "http://openweathermap.org/img/w/" + iconCode + ".png";
        var img = "<img src='" + icon  + "'>"
    }
    document.getElementById("output").innerHTML = "<td></td><td>City</td><td>Weather</td><td>Temperature</td>" +
        "</tr><tr><td>"+ img +"</td><td>"+ city + "</td><td>" + weather +"</td>" + "<td> " + temp + "°F" +
        "<tr><div align='center'><button class='detail'>View More Details</button><div style='display:none' align='center' class='det'><br> Relative Humidity: " +
        humidity +"%<br>Wind Speed: " + windSpeed + " mph</div></tr>";
    $(".detail").on("click",function(){
        var det = $(this).parent().find(".det");
        console.log(det);
        det.slideToggle();
    })
}

function failed(){
    document.getElementById("output").innerHTML = "City Cannot Be Found!";
}
function background(temper){
    if(temper > 75){
        $('body').css({'background-image': "url('http://portugalresident.com/sites/default/files/styles/node-detail/public/field/image/istock_sunny_sky_with_grass_000005407896small.jpg?itok=flbPOoPg')",
            "backgroundRepeat": "no-repeat","backgroundSize": "cover"});
    }else if(temper <= 75 && temper > 55){
        $('body').css({'background-image': "url('https://dailypost.in/wp-content/uploads/2017/07/cl-1-768x466.jpg')",
            "backgroundRepeat":"no-repeat","backgroundSize":"cover"});

    }else if(temper <= 55 &&temper > 30){
        $('body').css({'background-image': "url('https://cdn.shopify.com/s/files/1/0300/3793/products/Shopify_Addon_PSPScript_RainyDay_1024x1024.jpg?v=1417744375')",
            "backgroundRepeat":"no-repeat","backgroundSize":"cover"});

    }
}