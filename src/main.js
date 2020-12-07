import Vue from "vue";

// 按需引入 element-ui 组件
import "element-ui/lib/theme-chalk/index.css";

import App from "./App.vue";
import router from "./router";
import "@/assets/style/reset.css";
import "@/assets/style/global.css";

// 引入loading组件
import Loading from "@/components/Loading/main";

if (process.env.NODE_ENV !== "production") {
  Vue.createElement = new Vue().$createElement;
  Vue.config.devtools = true;
}

// 使用loading 组件

Vue.use(Loading);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
