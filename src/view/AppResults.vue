<template>
    <div class="container m-1">
        <div class="row">
            <div class="col-4">
                <AppLocation class="h-25" :location="this.location"></AppLocation>

                <CurrentWeather class="h-75"></CurrentWeather>
            </div>
            <div class="col-8">
                <WeatherData></WeatherData>
            </div>
        </div>

    </div>
</template>

<script>
import { state } from '../store';
import AppLocation from '../components/AppLocation.vue'
import CurrentWeather from '../components/CurrentWeather.vue';
import WeatherData from '../components/WeatherData.vue';

export default {
    name: 'AppResults',
    components: {
        AppLocation,
        CurrentWeather,
        WeatherData
    },
    data() {
        return {
            location: this.$route.query.location,
            state
        }
    },

}
</script>

<style lang="scss" scoped></style>