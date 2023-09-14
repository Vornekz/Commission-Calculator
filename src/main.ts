import { createApp } from "vue";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFilterCircleDollar } from "@fortawesome/free-solid-svg-icons";
import "@/assets/style/style.css";
import App from "@/App.vue";
import router from "./router/router";

library.add(faFilterCircleDollar);

createApp(App)
  .use(createPinia())
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
