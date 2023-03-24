import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "@/index.css";
import App from "./App.vue";

library.add(faSearch);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
// The component method returns an app just like createApp(App), but
// allows additional items to be added to app
// .component("font-awesome-icon", FontAwesomeIcon) // this code makes the search icon available globally
