import { reactive } from 'vue';
import axios from 'axios'

export const state = reactive({

    apiGeocode: '6596f0e8a9bf5470888208zvc6c3989',
    lat: null,
    long: null,
    mslm: null,
    currentWeather: [],
    weatherDataHourly: [],
    hourlyLabels: [],
    dailyLabels: [],
    dailyDataset: [],

    /**
     * axios call and organize response
     */
    getMeteo() {
        axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${this.lat}&longitude=${this.long}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weather_code,surface_pressure,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,visibility,wind_speed_10m,wind_speed_80m,wind_speed_120m,wind_direction_10m,wind_direction_80m,wind_direction_120m,wind_gusts_10m,temperature_80m,soil_temperature_0cm,soil_moisture_0_to_1cm,uv_index,is_day,freezing_level_height,sunshine_duration&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,daylight_duration,uv_index_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant&timezone=auto&past_days=13&forecast_days=3`)
            .then(response => {

                /* CURRENT WEATHER SECTION */
                this.mslm = '',
                    this.currentWeather = [],
                    //console.log(response);
                    this.mslm = response.data.elevation
                //console.log(response.data.current_units);
                let currentData = response.data.current;
                currentData = Object.entries(currentData);
                //console.log(currentData);
                const currentUnits = Object.values(response.data.current_units);
                //console.log(currentUnits);

                currentData.forEach((value, i) => {
                    const parameter = {
                        data: value[0].replace(/_/g, ' '),
                        value: value[1],
                        unit: currentUnits[i]
                    }
                    this.currentWeather.push(parameter);
                });

                //console.log(this.currentWeather);
                /* END CURRENT WEATHER SECTION */

                /* HourlyWeatherData SECTION */
                //console.log(response.data.hourly);

                this.weatherDataHourly = response.data.hourly;
                //console.log(this.weatherDataHourly);

                /*
                //console.log(response.data.hourly.time);
                this.hourlyLabels = response.data.hourly.time;
                //console.log(this.hourlyLabels);

                this.hourlyLabels.forEach(label => {
                    label = label.split('T');
                    let data = label[0].split('-');
                    data = data[2] + '-' + data[1] + '-' + data[0];
                    //console.log(data);
                    label = label[1] + ' ' + data;
                    //console.log(label);
                });

                console.log('??', this.hourlyLabels);
                 */
                /*END HourlyWeatherData SECTION */

                /* DailyData SECTION */
                //console.log(response.data.daily.time);

                const days = response.data.daily.time;

                days.forEach(label => {

                    let data = label.split('-');
                    //console.log(data);
                    label = data[2] + '-' + data[1] + '-' + data[0];
                    //console.log(label);
                    this.dailyLabels.push(label)
                })
                //console.log(this.dailyLabels);
                /* DailyData ENDSECTION */

                this.dailyDataset = response.data.daily;
                console.log(this.dailyDataset);



            })
    },

    /**
     * 
     * @param {string} location 
     * search location and then getMeteo()
     */
    searchLocation(location) {
        //console.log(this.location);
        axios({
            method: 'get',
            //url: `https://api.tomtom.com/search/2/geocode/${this.location}.json?storeResult=false&view=Unified&key=${this.apiTomTomKey}`,
            url: `https://geocode.maps.co/search?q=${location}&api_key=${this.apiGeocode}`,
        })
            .then(response => {
                //console.log(response.data[0].lat);
                this.lat = response.data[0].lat;
                this.long = response.data[0].lon
                this.getMeteo()

            });
    }

})