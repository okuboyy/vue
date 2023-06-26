<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";

const InputBox = defineAsyncComponent(
  () => import("../components/inputBox.vue")
);

const text = ref<string>("");
</script>

<template>
  <div class="h-screen grid place-item-center">
    <div class="w-1/2">
      <inputBox placeholder="Enter your text here ..." v-model="text" />
      Text: {{ text }}
    </div>
  </div>
</template>
