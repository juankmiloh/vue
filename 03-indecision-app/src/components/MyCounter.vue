<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ squareCounter }}</h3>
        <h4>{{ text }}</h4>

        <div>
            <button class="btn btn-primary" @click="counter++">+1</button>
            <button @click="counter--">-1</button>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

interface Props {
    value: number;
    text: string;
}

const props = defineProps<Props>();

const counter = ref(props.value);
const squareCounter = computed(() => counter.value * counter.value);

</script>
