<template>
    <div>
        <h1>{{ state.currentWeather }}</h1>
        <h1>ciao ciao</h1>
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