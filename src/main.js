import "./assets/main.sass"

import { createApp } from "vue"
import App from "./App.vue"
import components from "./components/UI/index" // 4. импортируем массив общих компонентов

const app = createApp(App) // 5. создаем vue приложение

components.forEach((component) => {
    // 6. регимтрируем глобально в приложении каждый компонент из списка
    app.component(component.name, component)
})

app.mount("#app") // 7. монтируем приложение с глобально зарегистрированными компонентами
