<template>
    <div>
        <h2 class="text-uppercase text-success">current weather</h2>
        <div class="row d-flex" v-for="item in state.currentWeather">
            <h6 class="col text-uppercase mb-0">{{ item.data }}</h6>
            <p class="col">{{ item.value }} {{ item.unit }}</p>
        </div>
    </div>
</template>

<script>
import { state } from '../store';

export default {
    name: 'CurrentWeather',
    data() {
        return {
            state
        }
    }
}
</script>

<style lang="scss" scoped></style>