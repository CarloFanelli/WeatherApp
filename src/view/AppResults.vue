<template>
    <h1>{{ this.location }}</h1>
    <p v-if="this.location">Lat : {{ state.lat }} - Long : {{ state.long }} - MSLM : {{ state.mslm }}</p>
</template>

<script>
import { state } from '../store';
export default {
    name: 'AppResults',
    data() {
        return {
            location: this.$route.query.location,
            state
        }
    },
    mounted() {
        //console.log(this.location);
        state.searchLocation(this.location)
    }
}
</script>

<style lang="scss" scoped></style>