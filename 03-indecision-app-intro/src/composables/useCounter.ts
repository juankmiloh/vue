import { ref, computed } from 'vue';

// const counter = ref(10); // Se declara el counter como una variable de scope - significa que aca se crea un gestor de estado global y este valor se actualiza en todos los lugares donde se utilice el composable useCounter - se crea un estado global

export const useCounter = (initialValue: number = 5) => {
  const counter = ref(initialValue);
  //   const squareCounter = computed(() => counter.value * counter.value);

  return {
    counter,
    // squareCounter,
    // Read-only
    squareCounter: computed(() => counter.value * counter.value),
  };
};
