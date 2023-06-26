<script setup lang="ts">
import { computed, defineAsyncComponent, onMounted } from "@vue/runtime-core";
import { useCartStore } from "../store/cart";
import { storeToRefs } from "pinia";
import { DisplayCart } from "../types/interface";

const Title = defineAsyncComponent(() => import("../components/Title.vue"));
const button = defineAsyncComponent(() => import("../components/Button.vue"));

const cartStore = useCartStore();
const { cart, displayCart } = storeToRefs(cartStore);

onMounted(() => {
  cartStore.loadCartInstance(), cartStore.displayCartLoad();
});

const total = computed(() => {
  let sum = (displayCart.value as DisplayCart[]).reduce(
    (initialsum: number, item: DisplayCart) => {
      if (item.inStock) initialsum = initialsum + item.price * item.qty;
      return initialsum;
    },
    0
  );

  return sum;
});

function removeItem(id: number) {
  cartStore.removeItem(id);
}
</script>
<template>
  <div>
    <Title>Cart</Title>
    <div v-for="(item, index) in displayCart" :key="index">
      <div v-if="item.inStock">
        <div>{{ item.name }}</div>
        <div>{{ item.currency }}{{ item.price }}</div>
        <div>{{ item.qty }}</div>
        <div>{{ item.color }}</div>
      </div>
      <div v-else>
        {{
          `Item $(item.name) was in stock when you added in the cart but not it is out of stock`
        }}
      </div>

      <button @click="removeItem(item.id)">Remove</button>
    </div>

    <div>Total {{ Total }}</div>
  </div>
</template>
