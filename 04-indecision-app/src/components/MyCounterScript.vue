<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button @click="counter++">+1</button>
      <button @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCounter } from '@/composables/useCounter';

export default defineComponent({
  setup() {
    const { counter, squareCounter } = useCounter();

    return {
      counter,
      squareCounter,
    };
  },
});
</script>
