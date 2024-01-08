<template>
    <div>
        <h2 class="text-uppercase text-success">current weather</h2>
        <div class="row flex-column">
            <div class="col mb-2" v-for="item in state.currentWeather">

                <div class="row">
                    <h6 class="col pe-0 text-uppercase mb-0">{{ item.data }}</h6>
                    <p class="col mb-0">{{ item.value }} {{ item.unit }}</p>
                </div>
            </div>
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