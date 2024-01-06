<script>
    export default {
        components: {},
        props: {
            message: {
                type: Object,
                required: true,
            },
            sendMessage: {
                type: Function,
                required: true,
            },
        },
        data() {
            return {
                userAvatarURL: "/src/assets/img/user_avatar.png",
                botAvatarURL: "/src/assets/img/bot_avatar.png",
            }
        },
        methods: {},
    }
</script>

<template>
    <div
        class="message"
        :style="message.from === 'user' && 'flex-direction: row-reverse'"
    >
        <div class="message__avatar">
            <img
                :src="message.from === 'bot' ? botAvatarURL : userAvatarURL"
                alt="avatar"
            />
        </div>
        <div class="message__wrapper">
            <div class="message__text">{{ message.text }}</div>
            <button
                v-for="button in message.buttons"
                type="button"
                class="message__button"
                :key="button.value"
                @click="
                    (e) => {
                        sendMessage({
                            from: 'user',
                            date: Date.now(),
                            text: e.target.innerText,
                            buttons: [],
                        })
                    }
                "
            >
                {{ button }}
            </button>
        </div>
    </div>
</template>

<style scoped lang="sass">
    @import "../assets/constants.sass"

    .message
        display: flex
        gap: 8px
        margin-bottom: 8px

    .message__avatar
        width: 36px
        height: 36px


        & img
            border-radius: 50%

    .message__wrapper
        display: inline-block
        width: 190px

    .message__text, .message__button
        max-width: 190px
        padding: 4px 6px
        margin-bottom: 4px

        background-color: $primary-color
        color: $font-color
        border-radius: 8px

    .message__button:hover
        background-color: $primary-color-hover
</style>
