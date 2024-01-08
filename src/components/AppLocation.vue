<template>
    <div>
        <div class="row">
            <div class="col">
                <h1>{{ this.location }}</h1>
                <p v-if="this.location">Lat : {{ state.lat }} - Long : {{ state.long }} - MSLM : {{ state.mslm }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { state } from '../store';

export default {
    name: 'AppLocation',
    data() {
        return {
            state
        }
    },
    props: {
        location: String
    },
    mounted() {
        //console.log(this.location);
        state.searchLocation(this.location)
    }
}
</script>

<style lang="scss" scoped></style>