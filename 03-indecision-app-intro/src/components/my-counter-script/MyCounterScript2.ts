import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const { counter, squareCounter } = useCounter();

    return {
      counter,
      squareCounter,
    };
  },
});
