export default [
  {
    path: "/",
    component: () => import(/* WebpackChunkName: "index" */ "@/pages/Index.vue")
  },
  {
    path: "/total",
    component: () => import(/* WebpackChunkName */ "@/pages/Total.vue")
  }
];
