<script>
    // import axios from "axios"
    import MessageInput from "@/components/MessageInput.vue"
    import Message from "@/components/Message.vue"

    export default {
        components: { MessageInput, Message },
        data() {
            return {
                messages: [
                    {
                        from: "bot",
                        date: Date.now(),
                        text: "Привет! Что я могу для Вас сделать?",
                        buttons: [
                            "Заказать пиццу",
                            "Установить будильник",
                            "Вывести погоду",
                        ],
                    },
                    {
                        from: "user",
                        date: 2,
                        text: "Привет! Что я могу для Вас сделать?",
                        // buttons: [
                        //     "Заказать пиццу",
                        //     "Установить будильник",
                        //     "Вывести погоду",
                        // ],
                    },
                ],
            }
        },
        methods: {
            sendMessage(newMessage) {
                this.messages.push(newMessage)
            },
        },
        mounted() {},
    }
</script>

<template>
    <div class="chat">
        <div class="message-list">
            <Message v-for="message in messages" :key="message.date" :message="message" :sendMessage="sendMessage"/>
        </div>
        <MessageInput class="message-input"> </MessageInput>
    </div>
</template>

<style href="./assets/main.sass" lang="sass"></style>

<style lang="sass">
    @import "./assets/constants.sass"

    .chat
        width: 310px
        height: 600px
        display: flex
        flex-direction: column

        font-family: 'Ubuntu', sans-serif
        font-size: 14px

        // background: url('./assets/img/background.avif')
        background-position: -84px -4px
        background-size: 160%
        border-radius: 24px 12px 12px 12px
        border: 2px solid $secondary-color
        overflow-y: no-scroll

    .message-list
        height: 100%
        padding: 8px 8px 0 8px

    .message-input
        align-self: start
</style>
