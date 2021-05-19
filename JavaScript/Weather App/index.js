const view = (() => {
    function setSearchResult(weatherData) {
      if (!weatherData) return;
  
      const searchResult = document.getElementById("searchResult");
      searchResult.classList.add("active");
  
      const cityName = document.getElementById("cityName");
      const temperature = document.getElementById("temperature");
      const feelsLike = document.getElementById("feelsLike");
      const humidity = document.getElementById("humidity");
      const wind = document.getElementById("wind");
  
      cityName.textContent = `${weatherData.cityName}`;
      temperature.textContent = `${weatherData.temperature}°C`;
      feelsLike.textContent = `Feels like: ${weatherData.feelsLike}°C`;
      humidity.textContent = `Humidity: ${weatherData.humidity}%`;
      wind.textContent = `Wind: ${weatherData.windSpeed}km/h`;
    }
  
    return { setSearchResult };
  })();
  
  const weather = (() => {
    function convertData(data) {
      const {
        name: cityName,
        main: { temp: temperature, feels_like: feelsLike, humidity },
        wind: { speed: windSpeed },
      } = data;
      return { cityName, temperature, feelsLike, humidity, windSpeed };
    }
  
    async function getData(city) {
      const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=28fe7b5f9a78838c639143fc517e4343`;
      try {
        const response = await fetch(endpoint, { mode: "cors" });
        if (!response.ok) throw new Error(`City ${city} not found`);
        const data = convertData(await response.json());
        return data;
      } catch (error) {
        alert(error);
        return null;
      }
    }
    return { getData };
  })();
  
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  
  searchBtn.addEventListener("click", async () => {
    if (searchInput.value === "") return;
    const weatherData = await weather.getData(searchInput.value);
    view.setSearchResult(weatherData);
  });