<template>
    <div class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
            <!-- Messages go here -->
            <ChatBubble />
        </div>
    </div>
</template>

<script setup lang="ts">
import ChatBubble from './ChatBubble.vue';
</script>