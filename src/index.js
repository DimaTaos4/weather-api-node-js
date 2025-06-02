import { DateTime } from "luxon";

const now = DateTime.now()
// console.log(now);
// const now2 = DateTime.local()
// console.log(now2);
// const nowUTC = DateTime.utc()
// console.log(nowUTC);

// console.log(now.month);
// console.log(now.year);
// console.log(now.day);
// const { year, month, day } = now

// console.log(`${year}-${month}-${day}`);

// const nowLA = DateTime.now().setZone("America/Los_Angeles")
// console.log(nowLA);
// const now3 = now.plus({ days: -2, hours: 1 }) // минус 2 дня и плюс 1 день
// console.log(now3);

// console.log(now.toFormat("dd/LLL/yyyy"));
// console.log(now.toFormat("dd/MM/yyyy"));
// console.log(now.toISO());


// import { getCurrentWeatherByCity } from "./weatherApi.js";

// const weatherData = await getCurrentWeatherByCity('Stuttgart')
// console.log(weatherData);

// console.log(`Температура в Stuttgart ${weatherData.current.temperature}°C`);


console.log(process.env);
