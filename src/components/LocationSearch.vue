<template>
    <div class="row vh-100">
        <div class="col-8 m-auto">
            <div class="mb-3">
                <label for="location" class="form-label">Location</label>
                <input v-model="location" type="text" name="location" id="location" class="form-control"
                    placeholder="insert location" />
            </div>
            <router-link class="btn btn-primary" :to="{ name: 'Results', query: { location: this.location } }">
                <!--             @click.prevent="this.searchLocation()">
 --> Search!
            </router-link>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import { state } from '../store';
import { RouterLink } from 'vue-router';
//import tt from '@tomtom-international/web-sdk-maps';

/* 
11.1497598,43.7258716,11.3389044,43.8354631
*/


export default {
    name: 'LocationSearch',
    data() {
        return {
            state,
            location: '',
            //apiTomTomKey: '5QktgOJJEhidQMyyoeRgDCMFIquz9uqa',
        };
    },
    methods: {

        /*
        fetchMap() {
            const map = tt.map({
                key: '5QktgOJJEhidQMyyoeRgDCMFIquz9uqa',
                container: 'map',
                //center: this.coordinates,
                center: [40, 10],
                zoom: 7
            })
            map.on('load', () => {
                new tt.Marker({ color: '#ffde59' }).setLngLat([40, 10]).addTo(map)
            })
        },
        */
    },
    components: { RouterLink }
}
</script>

<style lang="scss" scoped></style>