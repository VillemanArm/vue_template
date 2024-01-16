<script>
    // import axios from "axios"
    import MessageInput from "@/components/MessageInput.vue"
    import Message from "@/components/Message.vue"
    import ChatPanel from "@/components/ChatPanel.vue"

    export default {
        components: { MessageInput, Message, ChatPanel },
        data() {
            return {
                isWaiting: false,
                isBotDisabled: true,
                messages: [
                    {
                        from: "bot",
                        date: Date.now(),
                        text: "Привет!\nЧто я могу для Вас сделать?",
                        buttons: [
                            "Заказать пиццу",
                            "Установить будильник",
                            "Вывести погоду",
                        ],
                    },
                ],
            }
        },
        methods: {
            sendMessage(newMessage) {
                this.messages = [...this.messages, newMessage]
                this.isWaiting = true
                this.delButtons()
            },
            getBotAnswer(messages) {
                const lastMessage = messages[messages.length - 1]
                if (lastMessage.from === "user") {
                    const answer = {
                        from: "bot",
                        date: Date.now(),
                        text: "ответ\nЧто-нибудь еще?",
                        buttons: [
                            "Заказать пиццу",
                            "Установить будильник",
                            "Вывести погоду",
                        ],
                    }
                    if (lastMessage.text === "Заказать пиццу") {
                        answer.text = "Пицца заказана! Что-нибудь еще?"
                    } else if (lastMessage.text === "Установить будильник") {
                        answer.text = "Будильник установлен! Что-нибудь еще?"
                    } else if (lastMessage.text === "Вывести погоду") {
                        answer.text = "В Москве +10°C, пасмурно.  Что-нибудь еще?"
                    }
                    this.messages.push(answer)
                }
            },
            switchChat() {
                this.isBotDisabled = !this.isBotDisabled
                this.$refs.chat.classList.toggle("hidden")
            },
            delButtons() {
                if (this.messages[this.messages.length - 2].from === "bot") {
                    this.messages[this.messages.length - 2].buttons = []
                }
            },
        },
        watch: {
            async messages(messages) {
                await new Promise((resolve) => {
                    setTimeout(() => {
                        this.getBotAnswer(messages)
                        resolve()
                    }, 2000)
                })
                this.isWaiting = false
            },
        },
        mounted() {},
    }
</script>

<template>
    <div class="chat-wrapper">
        <ChatPanel
            :switchChat="switchChat"
            :isBotDisabled="isBotDisabled"
            :isWaiting="isWaiting"
        />
        <div ref="chat" class="chat hidden">
            <div class="message-list">
                <Message
                    v-for="message in messages"
                    :key="message.date"
                    :message="message"
                    :sendMessage="sendMessage"
                    :delButtons="delButtons"
                />
            </div>
            <MessageInput class="message-input" :sendMessage="sendMessage">
            </MessageInput>
        </div>
    </div>
</template>

<style href="./assets/main.sass" lang="sass"></style>

<style lang="sass">
    @import "./assets/constants.sass"
    .chat-wrapper
        display: inline-block
        position: absolute

    .chat
        width: 310px
        height: 600px
        padding-top: 54px
        position: relative
        display: flex
        flex-direction: column

        font-family: 'Ubuntu', sans-serif
        font-size: 14px

        background-image: url('/src/assets/img/background.jpg')
        background-position: -84px -4px
        background-size: 160%
        border-radius: 24px 12px 12px 12px
        border: 2px solid $secondary-color
        overflow-x: no-scroll
        transition: all 0.5s ease

    .chat-wrapper
        position: relative

    .message-list
        height: 100%
        padding: 0 6px
        overflow-y: auto

        &::-webkit-scrollbar
            width: 6px

        &::-webkit-scrollbar-thumb
            background-color: $primary-color
            border-radius: 10px

    .message-input
        position: absolute
        align-self: start

    .hidden
        transform: translate(-135px, -275px) scale(0.05)
</style>
