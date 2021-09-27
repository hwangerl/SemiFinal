const nav = document.querySelector(".nav-container");

if (nav) {
  const toggle = nav.querySelector(".nav-toggle");
  
  if (toggle) {
    toggle.addEventListener("click", () => {
      if (nav.classList.contains("is-active")) {
        nav.classList.remove("is-active");
      }
      else {
        nav.classList.add("is-active");
      }
    });
    
    nav.addEventListener("blur", () => {
      nav.classList.remove("is-active");
    });
  }
}



function setCondition(AQI){
    if(AQI<=50)return "Good";
    if(AQI<=100)return "Moderate";
    if(AQI<=150)return "Unhealthy for Sensitive Groups";
    if(AQI<=200)return "Unhealthy";
    if(AQI<=300)return "Very Unhealthy";
    if (AQI<=500)return "Hazardous";
}

const button=document.getElementById('icon');

button.addEventListener('click',function(){
    let CITY=document.getElementById('search_box').value;
    if(CITY!=""){
        fetch('https://api.weatherbit.io/v2.0/current/airquality?city='+CITY+'&key=c407fc46a4ff4a0983fbe473ee5aa17d')
            .then(response => response.json())
            .then(data => {
                document.getElementById('destination').textContent=CITY;
                document.getElementById('AQI').textContent=data['data'][0]['aqi'];
                document.getElementById('condition').textContent=setCondition(data['data'][0]['aqi']);
                document.getElementById('PM25').textContent=data['data'][0]['pm25'].toFixed(1);
                document.getElementById('PM10').textContent=data['data'][0]['pm10'].toFixed(1);
                document.getElementById('O3').textContent=data['data'][0]['o3'].toFixed(1);
                document.getElementById('NO2').textContent=data['data'][0]['no2'].toFixed(1);
                document.getElementById('SO2').textContent=data['data'][0]['so2'].toFixed(1);
                document.getElementById('CO').textContent=data['data'][0]['co'].toFixed(1);
            })
            .catch(err => {
                document.getElementById('destination').textContent='Invalid ZIP Code'
                document.getElementById('AQI').textContent='';
                document.getElementById('condition').textContent='';
                document.getElementById('PM25').textContent='';
                document.getElementById('PM10').textContent='';
                document.getElementById('O3').textContent='';
                document.getElementById('NO2').textContent='';
                document.getElementById('SO2').textContent='';
                document.getElementById('CO').textContent='';
            })
        document.getElementById('search_box').value='';
    }
})