<template>
    <div>
        <div class="mb-3">
            <label for="location" class="form-label">Location</label>
            <input v-model="location" type="text" name="location" id="location" class="form-control"
                placeholder="insert location" />
        </div>
        <router-link class="btn btn-primary" :to="{ name: 'Results'/* , params: { slug: apartment.slug } */ }">
            <!--             @click.prevent="this.searchLocation()">
 --> Search!
        </router-link>

        <!-- 
            
            <div style="width: 100%; height: 100%;" id="map">
            </div>
        -->




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
            apiGeocode: '6596f0e8a9bf5470888208zvc6c3989'
        };
    },
    methods: {
        searchLocation() {
            console.log(this.location);
            axios({
                method: 'get',
                //url: `https://api.tomtom.com/search/2/geocode/${this.location}.json?storeResult=false&view=Unified&key=${this.apiTomTomKey}`,
                url: `https://geocode.maps.co/search?q=${this.location}&api_key=${this.apiGeocode}`,
            })
                .then(response => {
                    console.log(response);
                });
        },
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