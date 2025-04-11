const uiMaker = (data) => {
  let temp = `<p class="weather__temperature"> ${data.main.temp} </div>`;
  document.getElementById("output").innerHTML = temp;
};
const getWeather = async (cityName) => {
   let req = await fetch(
     `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b4c426c91009e3429c4af53c61fd6e9c&units=metric`
   );
  let res = await req.json();
  console.log(res);
  uiMaker(res);
};
const getWeatherlocation = async (lat,long) => {
  let req = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b4c426c91009e3429c4af53c61fd6e9c`
  );
  let res = await req.json();
  console.log(res);
  uiMaker(res);
};
document.getElementById("search").addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    let cityName = e.target.value;
    console.log(cityName);
    getWeather(cityName);
  }
});

const getlocation = () => {
  navigator.geolocation.getCurrentPosition((pos)=>{
    const lat= pos.coords.latitude
    const long= pos.coords.longitude
    getWeatherlocation(lat,long)
  })
}

getlocation();