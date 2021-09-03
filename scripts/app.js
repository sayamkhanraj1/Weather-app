const API_KEY = `15709ad929f4588f5829a87ccce0d143`;

const searchTemperature = () =>{
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
};

const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature =>{
    setInnerText('city', temperature.name? temperature.name:'Enter a vaild city');
    setInnerText('temp', temperature.main.temp);
    setInnerText('temp-condition', temperature.weather[0].main);
    // set weater icone
    url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imagIcon = document.getElementById('weather-icon');
    imagIcon.setAttribute('src', url);

}