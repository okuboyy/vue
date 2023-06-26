<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const Counter = defineAsyncComponent(() => import("../components/Counter.vue"));

import products from "../../product.json";
const Title = defineAsyncComponent(() => import("../component/Title.vue"));
const ProductCard = defineAsyncComponent(
  () => import("../component/ProductCard.vue")
);

const Button = defineAsyncComponent(() => import("../components/Button.vue"));
</script>

<template>
  <div class="grid place-items-center h-96">
    <div class="flex justify-between items-center">
      <title>Products</title>
      <router-link to="/cart"> <Button>Cart</Button></router-link>
    </div>

    <div
      class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
    >
      <ProductsCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>
