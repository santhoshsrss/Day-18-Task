async function restcountries(){
        let url = 'https://restcountries.com/v3.1/all'
        let data = await fetch(url)
        let final_data = await data.json()
        console.log(final_data)
        final_data.forEach(element => {
                 document.body.innerHTML += `
                        <div class="card card-header card-body  t-img container">
                                <h5 class="card-title class="card1">${element.name.common}</h5>
                                <div><img src="${element.flags.png}"> </div>
                                <div class="card-body">
                                <p class="card-text">
                                        <div>"Capital : ${element.capital} "</div>
                                        <div>"Latlng : ${element.latlng} "</div>
                                        <div>"Region : ${element.region}"</div>
                                        <div>"Country Code : ${element.cca3}"</div>
                                </p>
                                <button class="btn btn-primary" target="_blank" value="${element.name.common}">Click for weather</button>
                                </div>
                        
                        </div>`;
                        let btn =document.querySelectorAll(".btn");
                        btn.forEach((ele)=>{
                        ele.addEventListener("click",()=>{
                        let value=ele.value
                        console.log(value)
                        async function weather() {
                                let weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${ele.value}&APPID=d392aac519d28864e35f141898f06b1f`
                                let res= await fetch(weather_url)
                                let data1 = await res.json();
                                console.log(data1)
                        
                                ele.innerHTML =`weather: ${data1.weather[0].description}<br>Temp: ${data1.main.temp}`
                                console.log(data1.weather[0].description,data1.main.temp)
                        
                        
                        };
                        
                        weather();
                        });
                        });

                 
        });
}
restcountries()