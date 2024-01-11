<template>
    <Bar :data="data" :options="options" />
</template>
  
<script lang="ts">
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import { state } from '../store'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
    name: 'App',
    components: {
        Bar
    },
    data() {
        return {
            data: {
                labels: state.currentWeather,
                datasets: [{ data: [40, 20, 12] }]
            },
            options: {
                responsive: true
            }
        }
    }
}
</script>