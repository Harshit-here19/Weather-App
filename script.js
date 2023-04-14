
    const curDate = document.querySelector("#date");
    let weathercon = document.querySelector("#weathercon");

    const tempStatus = "clouds";

    const getCurrentDay = () => {
        var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";

        let currentTime = new Date();
        let day = weekday[currentTime.getDay()];
        return day;

    };

    const getCurrentTime = () => {
        var months = [
            "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug",
            "Sept", "Oct", "Nov", "Dec"
        ];
        var currentTime = new Date();
        var month = currentTime.getMonth();
        var date = currentTime.getDate();


        let hours = currentTime.getHours();
        let mins = currentTime.getMinutes();

        let periods = "AM";

        if (hours > 11) {
            periods = "PM";
            if (hours > 12) {
                hours -= 12;
            }
        }
        if (mins < 10){
            mins = "0" + mins;
        }

        return `${months[month]} ${date} | ${hours}:${mins} ${periods} `;
    };

    curDate.innerHTML =  getCurrentDay() + " | " + getCurrentTime();


    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2c4f65215emsh67cdfa36fb1aee7p14c84djsnfabbedcb4c6a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather = (city) => {

    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {
     
        temp.innerHTML = response.temp;
        tempmin.innerHTML = response.min_temp;
        tempmax.innerHTML = response.max_temp;
        console.log(response)
    })
	.catch(err => console.error(err));
}

getWeather("agra");

submit.addEventListener("click", (event)=>{
    event.preventDefault();
    getWeather(document.querySelector("#name").value);
})