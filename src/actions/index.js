import axios from 'axios';

const API_KEY = '3b6d482bd4f14f710e6520b3111025c9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url= `${ROOT_URL}&q=${city},in`;

  const request = axios.get(url);
  return {
    type:FETCH_WEATHER,
    payload: request
  };
}
