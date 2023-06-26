<script setup lang="ts">
import { ref, watch } from "vue";
import { EmittedValue } from "../../types/interfaces";

const props = defineProps<{
  cellValue: string | number;
  cellkey: "name" | "contact" | "email";
}>();

const inputElement = ref<HTMLInputElement>();
const inputValue = ref<string | number>(props.cellValue);
const showInput = ref<boolean>(false);

watch(
  () => props.cellValue,
  (newValue: string | number) => {
    inputValue.value = newValue;
  }
);

const emit = defineEmits<{ (e: "changed", value: EmittedValue): void }>();

function handleClick(): void {
  showInput.value = true;
  setTimeout(() => {
    (inputElement.value as HTMLInputElement).focus;
  }, 200);
}

function handleBlur(): void {
  showInput.value = false;
  emit("changed", { key: props.cellkey, value: inputValue.value });
}
</script>

<template>
  <td class="px-6 py-4 whitespace-nowrap" @click="handleClick">
    <div :class="{ hidden: showInput }">
      <slot />
    </div>

    <input
      type="text"
      ref="inputElement"
      @blur="handleBlur"
      @keypress.enter="handleBlur"
      v-model="inputValue"
      class="border border-gray focus:ring focus:outline-none focus:ring-gray-500"
      :class="`${showInput ? 'block' : 'hidden'}`"
    />
  </td>
</template>
