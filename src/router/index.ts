import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../pages/Cart.vue"),
  },
  {
    path: "/metamasklogin",
    name: "MetamaskLogin",
    component: () => import("../pages/Metamask.vue"),
  },
  {
    path: "./webcam",
    name: "Webcam",
    component: () => import("../pages/Webcam.vue"),
  },
  {
    path: "./editabletable",
    name: "EditableTable",
    component: () => import("../pages/EditableTable.vue"),
  },
  {
    path: "./inputbutnotinput",
    name: "EditableInput",
    component: () => import("../pages/EditableInput.vue"),
  },
  {
    path: "./filedrop",
    name: "FileDrop",
    component: () => import("../pages/FileDropPage.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
