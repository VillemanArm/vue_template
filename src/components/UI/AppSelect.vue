<script>
    export default {
        components: {},
        props: {
            options: {
                type: Array,
                default: [],
            },
            changeFunc: {
                type: Function,
                required: true,
            },
        },
        name: "AppSelect",
        data() {
            return {}
        },
        methods: {},
    }
</script>

<template>
    <select
        @change="
            (event) => {
                changeFunc(event)
            }
        "
    >
        <option disabled value="" default selected>select from list</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.name }}
        </option>
    </select>
</template>

<style scoped lang="sass"></style>
