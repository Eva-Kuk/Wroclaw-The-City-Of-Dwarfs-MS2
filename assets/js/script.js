/*jshint esversion: 6 */
/* CREDIT from w3school.com and customised for slide down a footer on scroll*/
// Footer slide down on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
        this.document.getElementById("footer").style.bottom = "0";
    } else {
        this.document.getElementById("footer").style.bottom = "-100px";
    }
    this.prevScrollpos = currentScrollpos;
};

// Weather API
// CREDIT from youtube tutorial how to build a weather API from Jonah Lawrence 
let weather = {
    apiKey: "f9f3ef1574ecab985a0fe573c8a1467f",
    fetchWeather: function (city) {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
        )
            .then((response) => {
                if (!response.ok) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                }
                return response.json();
            })
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp } = data.main;
        document.querySelector(".city").innerText = "Today in " + name;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = Math.floor(temp) + "°C";
        document.querySelector(".weather").classList.remove("loading");
    },
};
weather.fetchWeather("Wroclaw");

