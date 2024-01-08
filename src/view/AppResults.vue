<template>
    <div class="container m-1">
        <div class="row">
            <div class="col-4">
                <AppLocation class="h-25" :location="this.location"></AppLocation>

                <CurrentWeather class="h-75"></CurrentWeather>
            </div>
            <div class="col-8">
            </div>
        </div>

    </div>
</template>

<script>
import { state } from '../store';
import AppLocation from '../components/AppLocation.vue'
import CurrentWeather from '../components/CurrentWeather.vue';

export default {
    name: 'AppResults',
    components: {
        AppLocation,
        CurrentWeather
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