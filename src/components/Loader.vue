<script>
    export default {}
</script>

<template>
    <div class="loading">
        <div class="point"></div>
        <div class="point"></div>
        <div class="point"></div>
    </div>
</template>

<style scoped lang="sass">
    @import "../assets/constants.sass"

    .loading
        display: flex


    .point
        width: 12px
        height: 12px

        border-radius: 50%
        background-color: $primary-color
        opacity: 0.5

        animation-name: increasing
        animation-duration: 2s
        animation-timing-function: linear
        animation-iteration-count: infinite

        &:not(:first-child)
            margin-left: 18px


        &:nth-child(2)
            animation-delay: 666ms


        &:nth-child(3)
            animation-delay: 1333ms



    @keyframes increasing
        0%
            transform: scale(1)


        25%
            transform: scale(1.3)
            opacity: 1

        50%
            transform: scale(1)


        100%
            transform: scale(1)
</style>
