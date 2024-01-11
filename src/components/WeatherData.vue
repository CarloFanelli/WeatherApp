<template>
    <div>
        <AppChart></AppChart>
    </div>
</template>

<script>
import AppChart from './AppChart.vue';
import { state } from '../store';
export default {
    name: 'WeatherData',
    components: {
        AppChart
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