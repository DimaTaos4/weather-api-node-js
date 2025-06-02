import axios from "axios";
import { ACCESS_KEY } from "./config.js";
const weatherInstance = axios.create({
    baseURL: "https://api.weatherstack.com",
    params: {
        access_key: ACCESS_KEY,
    }
})

export const getCurrentWeatherByCity = async (city) => {
    const { data } = await weatherInstance.get("/current", {
        params: {
            query: city
        }
    })
    return data
}
