<script>
    import { Send } from "lucide-vue-next"
    export default {
        components: { Send },
        props: {
            sendMessage: {
                type: Function,
                required: true,
            },
        },
        methods: {
            sendUserMessage() {
                this.sendMessage({
                    from: "user",
                    date: Date.now(),
                    text: this.$refs.messageInput.value,
                    buttons: [],
                })
                this.$refs.messageInput.value = ""
            },
        },
    }
</script>

<template>
    <div class="message-input__block">
        <input
            ref="messageInput"
            type="text"
            class="message-input__input"
            placeholder="Введите сообщение"
        />
        <button type="button" class="message-input__send" @click="sendUserMessage()">
            <div><Send size="20" /></div>
        </button>
    </div>
</template>

<style scoped lang="sass">
    @import "../assets/constants.sass"

    .message-input__block
        width: 100%
        padding: 12px 8px
        position: relative
        top: 2px
        z-index: 2

        background-color: $secondary-color
        border-radius: 0 0 12px 12px

    .message-input__input
        width: 274px
        height: 28px
        padding: 0 18px 0 6px

        font-family: 'Ubuntu', sans-serif
        font-size: 14px

        border-radius: 8px

    .message-input__send
        box-sizing: border-box
        position: absolute
        right: 8px
        top: 6px
        padding: 8px

        background-color: $primary-color
        border-radius: 50%

        &:hover
            background-color: $primary-color-hover


        & div
            position: relative
            top: 2px
            left: -1px
</style>
