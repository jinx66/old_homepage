import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: () => import(/*webpackChunkName: "Home" */ "@/views/Home.vue")
  // },
  {
    path: "/",
    name: "products",

    component: () =>
      import(/* webpackChunkName: "Products" */ "../views/Products.vue")
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  // base:
  //   process.env.NODE_ENV !== "production"
  //     ? process.env.BASE_URL
  //     : process.env.BASE_URL  ,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return { x: 0, y: 0 };
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;

router.onError(err => {
  if (err.name === "ChunkLoadError") {
    router.app.$notify.error("网络资源加载错误");
  }
});
