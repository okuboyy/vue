<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
import { EmittedValue, Person } from "../types/interfaces";

const Table = defineAsyncComponent(
  () => import("../component/table/Table/vue")
);
const TableHead = defineAsyncComponent(
  () => import("../components/table/TableHead.vue")
);

const PersonRow = defineAsyncComponent(
  () => import("../components/PersonRow.vue")
);

const people = ref<Person[]>([
  {
    id: 1,
    name: "Aditya",
    email: "aditya@example.com",
    contact: "111111111",
  },
  {
    id: 2,
    name: "John",
    email: "doe@example.com",
    contact: "1111111111",
  },
]);

function handlePersonUpdate(payload: EmittedValue): void {
  people.value = people.value.map((item, index) => {
    if (item.id == payload.id) {
      item[payload.key] = payload.value.toString();
    }
    return item;
  });
}
</script>

<template>
  <div>
    <Table>
      <template #thead>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Contact</TableHead>
      </template>

      <template #tbody>
        <PersonRow
          v-for="(item, index) in people"
          :key="index"
          :person="item"
          @personupdated="handlePersonUpdate"
        />
      </template>
    </Table>
  </div>
</template>
