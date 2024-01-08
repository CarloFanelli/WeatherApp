<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <CurrentWeather></CurrentWeather>
            </div>
            <div class="col-8">

                <AppLocation :location="this.location"></AppLocation>
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