<template>
    <div>
        <AppChart title="ciao" :dataset="dailyDataset.apparent_temperature_max"></AppChart>
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
            state,
            dailyDataset: state.dailyDataset
        }
    },
}
</script>

<style lang="scss" scoped></style>