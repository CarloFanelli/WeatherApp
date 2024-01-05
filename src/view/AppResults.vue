<template>
    <h1>{{ this.location }}</h1>
</template>

<script>

export default {
    name: 'AppResults',
    data() {
        return {
            location: this.$route.query.location
        }
    },
    mounted() {
        console.log(this.location);
    }
}
</script>

<style lang="scss" scoped></style>