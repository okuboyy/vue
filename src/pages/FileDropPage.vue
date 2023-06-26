<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const FileDrop = defineAsyncComponent(
  () => import("../components/FileDrop.vue")
);

function startUpload(file: File[]): void {
  file.map((file) => console.log("uploading", file));
}
</script>

<template>
  <div class="grid place-items-center mx-auto h-96">
    <FileDrop class="w-72 h-72" @upload="startUpload" />
  </div>
</template>
