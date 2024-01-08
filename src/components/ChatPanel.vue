<script>
    import Loader from "@/components/Loader.vue"
    export default {
        components: { Loader },
        props: {
            switchChat: {
                type: Function,
                required: true,
            },
            isBotDisabled: {
                type: Boolean,
                required: true,
            },
            isWaiting: {
                type: Boolean,
                required: true,
            },
        },
    }
</script>

<template>
    <div class="chat__panel">
        <div
            :class="isBotDisabled ? 'chat__bot-avatar bot__disabled' : 'chat__bot-avatar'"
            @click="switchChat()"
        >
            <img src="/src/assets/img/bot_avatar.png" alt="bot" />
        </div>
        <Loader v-if="isWaiting" />
    </div>
</template>

<style scoped lang="sass">
    @import "../assets/constants.sass"

    .chat__panel
        width: 310px
        height: 54px
        position: absolute
        z-index: 1
        display: flex
        align-items: center
        justify-content: center

    .chat__bot-avatar
        width: 52px
        height: 52px
        padding: 8px
        position: absolute
        z-index: 2
        top: 0
        left: 0

        background-color: $secondary-color
        border-radius: 50%
        cursor: pointer
        transition: all 0.5s ease

        &:hover
            box-shadow: 0 0 10px 10px rgba(56,187,84,0.6)

        & img
            border-radius: 50%

    .bot__disabled
        transition: all 0.5s ease
        box-shadow: 0 0 10px 10px rgba(56,187,84,0.6)

        animation-name: pulse
        animation-duration: 10s
        animation-timing-function: linear
        animation-iteration-count: infinite

        &:hover
            animation-name: homing
            animation-duration: 0.5s
            animation-timing-function: linear
            animation-iteration-count: 1
            animation-fill-mode: forwards
            transition: all 0.3s ease

    @keyframes pulse
        0%
            transform: scale(1.2)
        5%
            transform: scale(1)
        90%
            transform: scale(1.2)
        95%
            transform: scale(1)
        100%
            transform: scale(1.2)

    @keyframes homing
        0%
            transform: scale(1)
        100%
            transform: scale(1.2)
</style>
