
        $(document).ready(function(){
            
            getPosition();

          $.getJSON('https://api.ipify.org?format=json', function(data){
            var ipAddress = data.ip;
              
            $.ajax({
            url: 'http://freegeoip.net/json/' + ipAddress,
            datatype: 'jsonp', 
            success: function(data){
            var lat = data.latitude;
            var lon = data.longitude;
            var city = data.city;
            var country = data.country_name;
            $('.info1').html('<p><span class="wwwhite">' + city + ', ' + country + '</span></p><p><span class="ggreen">Lat:</span><span class="wwhite"> ' + lat + '</span></p><p><span class="ggreen">Lon:</span><span class="wwhite"> ' + lon + '</span></p>');
                
            $.ajax({
            url: 'http://api.worldweatheronline.com/premium/v1/marine.ashx?key=074804943e3d4576a8482946170407&format=JSON&q=' + lat + ',' + lon,
            datatype: 'json',
            success: function(data){
            var maxTemp = data.data.weather[0].maxtempC;
            var minTemp = data.data.weather[0].mintempC;
            var sunrise = data.data.weather[0].astronomy[0].sunrise;
            var sunset = data.data.weather[0].astronomy[0].sunset;
            var moonrise = data.data.weather[0].astronomy[0].moonrise;
            var moonset = data.data.weather[0].astronomy[0].moonset;
            var windDirection = data.data.weather[0].hourly[0].winddir16Point;
            
                
            //flex5 variables
            //12am
            var weatherDescImg = data.data.weather[0].hourly[0].weatherIconUrl[0].value;
            var ttime = data.data.weather[0].hourly[0].time;
            var ttempC = data.data.weather[0].hourly[0].tempC;
            var windsp = data.data.weather[0].hourly[0].windspeedKmph;
            var precipitation = data.data.weather[0].hourly[0].precipMM;
            var hhumidity = data.data.weather[0].hourly[0].humidity;
            var vvisibility = data.data.weather[0].hourly[0].visibility;
            var ppressure = data.data.weather[0].hourly[0].pressure;
            var ccloudcover = data.data.weather[0].hourly[0].cloudcover;
            var ddewpointc = data.data.weather[0].hourly[0].DewPointC;
            var wwindchill = data.data.weather[0].hourly[0].WindChillC;
            var wwindgust = data.data.weather[0].hourly[0].WindGustKmph;
            var ssigheight = data.data.weather[0].hourly[0].sigHeight_m;
            var sswellheight = data.data.weather[0].hourly[0].swellHeight_m;
            var sswelldir = data.data.weather[0].hourly[0].swellDir;
            var sswelldirpoint = data.data.weather[0].hourly[0].swellDir16Point;
            var sswellperiodsec = data.data.weather[0].hourly[0].swellPeriod_secs;
            var wwatertemp = data.data.weather[0].hourly[0].waterTemp_C;
                
            //6am
            var weatherDescImg6 = data.data.weather[0].hourly[2].weatherIconUrl[0].value;
            var ttime6 = data.data.weather[0].hourly[2].time;
            var ttempC6 = data.data.weather[0].hourly[2].tempC;
            var windsp6 = data.data.weather[0].hourly[2].windspeedKmph;
            var precipitation6 = data.data.weather[0].hourly[2].precipMM;
            var hhumidity6 = data.data.weather[0].hourly[2].humidity;
            var vvisibility6 = data.data.weather[0].hourly[2].visibility;
            var ppressure6 = data.data.weather[0].hourly[2].pressure;
            var ccloudcover6 = data.data.weather[0].hourly[2].cloudcover;
            var ddewpointc6 = data.data.weather[0].hourly[2].DewPointC;
            var wwindchill6 = data.data.weather[0].hourly[2].WindChillC;
            var wwindgust6 = data.data.weather[0].hourly[2].WindGustKmph;
            var ssigheight6 = data.data.weather[0].hourly[2].sigHeight_m;
            var sswellheight6 = data.data.weather[0].hourly[2].swellHeight_m;
            var sswelldir6 = data.data.weather[0].hourly[2].swellDir;
            var sswelldirpoint6 = data.data.weather[0].hourly[2].swellDir16Point;
            var sswellperiodsec6 = data.data.weather[0].hourly[2].swellPeriod_secs;
            var wwatertemp6 = data.data.weather[0].hourly[2].waterTemp_C;
                
            //12pm
            var weatherDescImg12 = data.data.weather[0].hourly[4].weatherIconUrl[0].value;
            var ttime12 = data.data.weather[0].hourly[4].time;
            var ttempC12 = data.data.weather[0].hourly[4].tempC;
            var windsp12 = data.data.weather[0].hourly[4].windspeedKmph;
            var precipitation12 = data.data.weather[0].hourly[4].precipMM;
            var hhumidity12 = data.data.weather[0].hourly[4].humidity;
            var vvisibility12 = data.data.weather[0].hourly[4].visibility;
            var ppressure12 = data.data.weather[0].hourly[4].pressure;
            var ccloudcover12 = data.data.weather[0].hourly[4].cloudcover;
            var ddewpointc12 = data.data.weather[0].hourly[4].DewPointC;
            var wwindchill12 = data.data.weather[0].hourly[4].WindChillC;
            var wwindgust12 = data.data.weather[0].hourly[4].WindGustKmph;
            var ssigheight12 = data.data.weather[0].hourly[4].sigHeight_m;
            var sswellheight12 = data.data.weather[0].hourly[4].swellHeight_m;
            var sswelldir12 = data.data.weather[0].hourly[4].swellDir;
            var sswelldirpoint12 = data.data.weather[0].hourly[4].swellDir16Point;
            var sswellperiodsec12 = data.data.weather[0].hourly[4].swellPeriod_secs;
            var wwatertemp12 = data.data.weather[0].hourly[4].waterTemp_C;
                
            //6pm
            var weatherDescImg66 = data.data.weather[0].hourly[6].weatherIconUrl[0].value;
            var ttime66 = data.data.weather[0].hourly[6].time;
            var ttempC66 = data.data.weather[0].hourly[6].tempC;
            var windsp66 = data.data.weather[0].hourly[6].windspeedKmph;
            var precipitation66 = data.data.weather[0].hourly[6].precipMM;
            var hhumidity66 = data.data.weather[0].hourly[6].humidity;
            var vvisibility66 = data.data.weather[0].hourly[6].visibility;
            var ppressure66 = data.data.weather[0].hourly[6].pressure;
            var ccloudcover66 = data.data.weather[0].hourly[6].cloudcover;
            var ddewpointc66 = data.data.weather[0].hourly[6].DewPointC;
            var wwindchill66 = data.data.weather[0].hourly[6].WindChillC;
            var wwindgust66 = data.data.weather[0].hourly[6].WindGustKmph;
            var ssigheight66 = data.data.weather[0].hourly[6].sigHeight_m;
            var sswellheight66 = data.data.weather[0].hourly[6].swellHeight_m;
            var sswelldir66 = data.data.weather[0].hourly[6].swellDir;
            var sswelldirpoint66 = data.data.weather[0].hourly[6].swellDir16Point;
            var sswellperiodsec66 = data.data.weather[0].hourly[6].swellPeriod_secs;
            var wwatertemp66 = data.data.weather[0].hourly[6].waterTemp_C;
            
            
            

            $('.info2').html('<p><span class="ggreen">Sunrise:</span><span class="wwhite"> ' + sunrise + '</span></p><p><span class="ggreen">Sunset:</span><span class="wwhite"> ' + sunset + '</span></p><p><span class="ggreen">Moonrise:</span><span class="wwhite"> ' + moonrise + '</span></p><p><span class="ggreen">Moonset:</span><span class="wwhite"> ' + moonset + '</span>');  
            $('.info3').html('<p><span class="ggreen">Max Temp:</span><span class="wwhite"> ' + maxTemp + '</span></p><p><span class="ggreen">Min Temp:</span><span class="wwhite"> ' + minTemp + '</span></p>');
                
//            $('.info4').html(
//                
//            '<p style="text-align:center">00:00' +
//            '<p>Celsius Temp: ' + ttempC + '</p>' +
//            '<p>Windspeed: ' + windsp + '</p>' +
//            '<p>Precipitation: ' + precipitation + '</p>' +
//            '<p>Humidity: ' + hhumidity + '</p>' +
//            '<p>Visibility: ' + vvisibility + '</p>' +
//            '<p>Pressure: ' + ppressure + '</p>' +
//            '<p>Cloud Cover: ' + ccloudcover + '</p>' +
//            '<p>Dew Point: ' + ddewpointc + '</p>' +
//            '<p>Wind Chill: ' + wwindchill + '</p>' +
//            '<p>Wind Gust: ' + wwindgust + '</p>' +
//            '<p>Sig Height: ' + ssigheight + '</p>' +
//            '<p>Swell Height: ' + sswellheight + '</p>' +
//            '<p>Swell Dir: ' + sswelldir + '</p>' +
//            '<p>Swell Point: ' + sswelldirpoint + '</p>' +
//            '<p>Swell Period: ' + sswellperiodsec + '</p>' +
//            '<p>Water Temperature: ' + wwatertemp + '</p>'
//            
//            );
//       
//            $('.info5').html(
//            
//            '<p style="text-align:center">06:00' +
//            '<p>Celsius Temp: ' + ttempC6 + '</p>' +
//            '<p>Windspeed: ' + windsp6 + '</p>' +
//            '<p>Precipitation: ' + precipitation6 + '</p>' +
//            '<p>Humidity: ' + hhumidity6 + '</p>' +
//            '<p>Visibility: ' + vvisibility6 + '</p>' +
//            '<p>Pressure: ' + ppressure6 + '</p>' +
//            '<p>Cloud Cover: ' + ccloudcover6 + '</p>' +
//            '<p>Dew Point: ' + ddewpointc6 + '</p>' +
//            '<p>Wind Chill: ' + wwindchill6 + '</p>' +
//            '<p>Wind Gust: ' + wwindgust6 + '</p>' +
//            '<p>Sig Height: ' + ssigheight6 + '</p>' +
//            '<p>Swell Height: ' + sswellheight6 + '</p>' +
//            '<p>Swell Dir: ' + sswelldir6 + '</p>' +
//            '<p>Swell Point: ' + sswelldirpoint6 + '</p>' +
//            '<p>Swell Period: ' + sswellperiodsec6 + '</p>' +
//            '<p>Water Temperature: ' + wwatertemp6 + '</p>'    
//            
//            );
//                
//            
//            $('.info6').html(
//            
//            '<p style="text-align:center">12:00' +
//            '<p>Celsius Temp: ' + ttempC12 + '</p>' +
//            '<p>Windspeed: ' + windsp12 + '</p>' +
//            '<p>Precipitation: ' + precipitation12 + '</p>' +
//            '<p>Humidity: ' + hhumidity12 + '</p>' +
//            '<p>Visibility: ' + vvisibility12 + '</p>' +
//            '<p>Pressure: ' + ppressure12 + '</p>' +
//            '<p>Cloud Cover: ' + ccloudcover12 + '</p>' +
//            '<p>Dew Point: ' + ddewpointc12 + '</p>' +
//            '<p>Wind Chill: ' + wwindchill12 + '</p>' +
//            '<p>Wind Gust: ' + wwindgust12 + '</p>' +
//            '<p>Sig Height: ' + ssigheight12 + '</p>' +
//            '<p>Swell Height: ' + sswellheight12 + '</p>' +
//            '<p>Swell Dir: ' + sswelldir12 + '</p>' +
//            '<p>Swell Point: ' + sswelldirpoint12 + '</p>' +
//            '<p>Swell Period: ' + sswellperiodsec12 + '</p>' +
//            '<p>Water Temperature: ' + wwatertemp12 + '</p>'    
//            
//            );
//                
//            $('.info7').html(
//            
//            '<p style="text-align:center">18:00' +
//            '<p>Celsius Temp: ' + ttempC66 + '</p>' +
//            '<p>Windspeed: ' + windsp66 + '</p>' +
//            '<p>Precipitation: ' + precipitation66 + '</p>' +
//            '<p>Humidity: ' + hhumidity66 + '</p>' +
//            '<p>Visibility: ' + vvisibility66 + '</p>' +
//            '<p>Pressure: ' + ppressure66 + '</p>' +
//            '<p>Cloud Cover: ' + ccloudcover66 + '</p>' +
//            '<p>Dew Point: ' + ddewpointc66 + '</p>' +
//            '<p>Wind Chill: ' + wwindchill66 + '</p>' +
//            '<p>Wind Gust: ' + wwindgust66 + '</p>' +
//            '<p>Sig Height: ' + ssigheight66 + '</p>' +
//            '<p>Swell Height: ' + sswellheight66 + '</p>' +
//            '<p>Swell Dir: ' + sswelldir66 + '</p>' +
//            '<p>Swell Point: ' + sswelldirpoint66 + '</p>' +
//            '<p>Swell Period: ' + sswellperiodsec66 + '</p>' +
//            '<p>Water Temperature: ' + wwatertemp66 + '</p>'    
//            );
                
                
            $('.zeroam').html(
                
            '<p style="text-align:center"><p><span class="ggreen">Celsius Temp:</span><span class="wwhite"> ' + ttempC + '</span></p>' +
            '<p><span class="ggreen">Windspeed:</span><span class="wwhite"> ' + windsp + '</span></p>' +
            '<p><span class="ggreen">Precipitation:</span><span class="wwhite"> ' + precipitation + '</span></p>' +
            '<p><span class="ggreen">Humidity:</span><span class="wwhite"> ' + hhumidity + '</span></p>' +
            '<p><span class="ggreen">Visibility:</span><span class="wwhite"> ' + vvisibility + '</span></p>' +
            '<p><span class="ggreen">Pressure:</span><span class="wwhite"> ' + ppressure + '</span></p>' +
            '<p><span class="ggreen">Cloud Cover:</span><span class="wwhite"> ' + ccloudcover + '</span></p>' +
            '<p><span class="ggreen">Dew Point:</span><span class="wwhite"> ' + ddewpointc + '</span></p>' +
            '<p><span class="ggreen">Wind Chill:</span><span class="wwhite"> ' + wwindchill + '</span></p>' +
            '<p><span class="ggreen">Wind Gust:</span><span class="wwhite"> ' + wwindgust + '</span></p>' +
            '<p><span class="ggreen">Sig Height:</span><span class="wwhite"> ' + ssigheight + '</span></p>' +
            '<p><span class="ggreen">Swell Height:</span><span class="wwhite"> ' + sswellheight + '</span></p>' +
            '<p><span class="ggreen">Swell Dir:</span><span class="wwhite"> ' + sswelldir + '</span></p>' +
            '<p><span class="ggreen">Swell Point:</span><span class="wwhite"> ' + sswelldirpoint + '</span></p>' +
            '<p><span class="ggreen">Swell Period:</span><span class="wwhite"> ' + sswellperiodsec + '</span></p>' +
            '<p><span class="ggreen">Water Temperature:</span><span class="wwhite"> ' + wwatertemp + '</span></p>'
            
            );  
                
                
            $('.sixam').html(
            
            '<p style="text-align:center"><p><span class="ggreen">Celsius Temp:</span><span class="wwhite"> ' + ttempC6 + '</span></p>' +
            '<p><span class="ggreen">Windspeed:</span><span class="wwhite"> ' + windsp6 + '</span></p>' +
            '<p><span class="ggreen">Precipitation:</span><span class="wwhite"> ' + precipitation6 + '</span></p>' +
            '<p><span class="ggreen">Humidity:</span><span class="wwhite"> ' + hhumidity6 + '</span></p>' +
            '<p><span class="ggreen">Visibility:</span><span class="wwhite"> ' + vvisibility6 + '</span></p>' +
            '<p><span class="ggreen">Pressure:</span><span class="wwhite"> ' + ppressure6 + '</span></p>' +
            '<p><span class="ggreen">Cloud Cover:</span><span class="wwhite"> ' + ccloudcover6 + '</span></p>' +
            '<p><span class="ggreen">Dew Point:</span><span class="wwhite"> ' + ddewpointc6 + '</span></p>' +
            '<p><span class="ggreen">Wind Chill:</span><span class="wwhite"> ' + wwindchill6 + '</span></p>' +
            '<p><span class="ggreen">Wind Gust:</span><span class="wwhite"> ' + wwindgust6 + '</span></p>' +
            '<p><span class="ggreen">Sig Height:</span><span class="wwhite"> ' + ssigheight6 + '</span></p>' +
            '<p><span class="ggreen">Swell Height:</span><span class="wwhite"> ' + sswellheight6 + '</span></p>' +
            '<p><span class="ggreen">Swell Dir:</span><span class="wwhite"> ' + sswelldir6 + '</span></p>' +
            '<p><span class="ggreen">Swell Point:</span><span class="wwhite"> ' + sswelldirpoint6 + '</span></p>' +
            '<p><span class="ggreen">Swell Period:</span><span class="wwhite"> ' + sswellperiodsec6 + '</span></p>' +
            '<p><span class="ggreen">Water Temperature:</span><span class="wwhite"> ' + wwatertemp6 + '</span></p>'   
            
            );
                
                
            $('.noon').html(
            
            '<p style="text-align:center"><p><span class="ggreen">Celsius Temp:</span><span class="wwhite"> ' + ttempC12 + '</span></p>' +
            '<p><span class="ggreen">Windspeed:</span><span class="wwhite"> ' + windsp12 + '</span></p>' +
            '<p><span class="ggreen">Precipitation:</span><span class="wwhite"> ' + precipitation12 + '</span></p>' +
            '<p><span class="ggreen">Humidity:</span><span class="wwhite"> ' + hhumidity12 + '</span></p>' +
            '<p><span class="ggreen">Visibility:</span><span class="wwhite"> ' + vvisibility12 + '</span></p>' +
            '<p><span class="ggreen">Pressure:</span><span class="wwhite"> ' + ppressure12 + '</span></p>' +
            '<p><span class="ggreen">Cloud Cover:</span><span class="wwhite"> ' + ccloudcover12 + '</span></p>' +
            '<p><span class="ggreen">Dew Point:</span><span class="wwhite"> ' + ddewpointc12 + '</span></p>' +
            '<p><span class="ggreen">Wind Chill:</span><span class="wwhite"> ' + wwindchill12 + '</span></p>' +
            '<p><span class="ggreen">Wind Gust:</span><span class="wwhite"> ' + wwindgust12 + '</span></p>' +
            '<p><span class="ggreen">Sig Height:</span><span class="wwhite"> ' + ssigheight12 + '</span></p>' +
            '<p><span class="ggreen">Swell Height:</span><span class="wwhite"> ' + sswellheight12 + '</span></p>' +
            '<p><span class="ggreen">Swell Dir:</span><span class="wwhite"> ' + sswelldir12 + '</span></p>' +
            '<p><span class="ggreen">Swell Point:</span><span class="wwhite"> ' + sswelldirpoint12 + '</span></p>' +
            '<p><span class="ggreen">Swell Period:</span><span class="wwhite"> ' + sswellperiodsec12 + '</span></p>' +
            '<p><span class="ggreen">Water Temperature:</span><span class="wwhite"> ' + wwatertemp12 + '</span></p>'  
            
            );  
                
                
            $('.sixpm').html(
            
            '<p style="text-align:center"><p><span class="ggreen">Celsius Temp:</span><span class="wwhite"> ' + ttempC66 + '</span></p>' +
            '<p><span class="ggreen">Windspeed:</span><span class="wwhite"> ' + windsp66 + '</span></p>' +
            '<p><span class="ggreen">Precipitation:</span><span class="wwhite"> ' + precipitation66 + '</span></p>' +
            '<p><span class="ggreen">Humidity:</span><span class="wwhite"> ' + hhumidity66 + '</span></p>' +
            '<p><span class="ggreen">Visibility:</span><span class="wwhite"> ' + vvisibility66 + '</span></p>' +
            '<p><span class="ggreen">Pressure:</span><span class="wwhite"> ' + ppressure66 + '</span></p>' +
            '<p><span class="ggreen">Cloud Cover:</span><span class="wwhite"> ' + ccloudcover66 + '</span></p>' +
            '<p><span class="ggreen">Dew Point:</span><span class="wwhite"> ' + ddewpointc66 + '</span></p>' +
            '<p><span class="ggreen">Wind Chill:</span><span class="wwhite"> ' + wwindchill66 + '</span></p>' +
            '<p><span class="ggreen">Wind Gust:</span><span class="wwhite"> ' + wwindgust66 + '</span></p>' +
            '<p><span class="ggreen">Sig Height:</span><span class="wwhite"> ' + ssigheight66 + '</span></p>' +
            '<p><span class="ggreen">Swell Height:</span><span class="wwhite"> ' + sswellheight66 + '</span></p>' +
            '<p><span class="ggreen">Swell Dir:</span><span class="wwhite"> ' + sswelldir66 + '</span></p>' +
            '<p><span class="ggreen">Swell Point:</span><span class="wwhite"> ' + sswelldirpoint66 + '</span></p>' +
            '<p><span class="ggreen">Swell Period:</span><span class="wwhite"> ' + sswellperiodsec66 + '</span></p>' +
            '<p><span class="ggreen">Water Temperature:</span><span class="wwhite"> ' + wwatertemp66 + '</span></p>'  
                
            );        
            }
            });
                 

                
            }
              
            });  
    });
        
        
        
        
    });






            function openContent(evt, time) {
            // Declare all variables
            var i, tabcontent, tablinks;

            // Get all elements with class="tabcontent" and hide them
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            // Get all elements with class="tablinks" and remove the class "active"
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }

            // Show the current tab, and add an "active" class to the button that opened the tab
            document.getElementById(time).style.display = "block";
            evt.currentTarget.className += " active";


        } 






        function getPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
        }
        function showPosition(position) {
        jQuery('#mmap1').append('<script>var mst_lat='+position.coords.latitude+';var mst_lng='+position.coords.longitude+';</script>');
        jQuery('#mmap1').append('<script id="myshiptrackingscript" src="//www.myshiptracking.com/js/widgetApi.js" async defer></script>');
            
        var uluru = {lat: position.coords.latitude, lng: position.coords.longitude};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });       
    }

    