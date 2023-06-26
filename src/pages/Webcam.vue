<script setup lang="ts">
import { defineAsyncComponent } from "@vue/runtime-core";

const Title = defineAsyncComponent(() => import("../components/Title.vue"));
const Detectory = defineAsyncComponent(
  () => import("../components/Detectory.vue")
);
</script>

<template>
  <div>
    <div class="flex justify-between items-center">
      <Title>Detector</Title>
    </div>

    <div class="mt-6 w-full"><Detectory /></div>
  </div>
</template>
