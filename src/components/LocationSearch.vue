<template>
    <div>
        <div class="mb-3">
            <label for="location" class="form-label">Location</label>
            <input v-model="location" type="text" name="location" id="location" class="form-control"
                placeholder="insert location" />
        </div>
        <button class="btn btn-primary" @click.prevent="this.searchLocation()">
            Search!
        </button>



    </div>
</template>

<script>
import axios from 'axios';
import { state } from '../store';
export default {
    name: 'LocationSearch',
    data() {
        return {
            state,
            location: '',
            apiTomTomKey: '5QktgOJJEhidQMyyoeRgDCMFIquz9uqa',
            apiGeocode: '6596f0e8a9bf5470888208zvc6c3989'
        }

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
                })
        }
    }
}
</script>

<style lang="scss" scoped></style>