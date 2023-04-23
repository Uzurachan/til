<script lang="ts" setup>
const counterStore = useCounterStore();
const { state } = counterStore;
</script>

<template>
  <NuxtLayout>
    <h1>useState example</h1>
    <div>
      <span>{{ state.count }}</span>
      <div>
        <button @click="counterStore.countUp">countUp</button>
        <button @click="counterStore.setCount(0)">reset count</button>
      </div>
    </div>
  </NuxtLayout>
</template>
