<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const showButton = ref(false);

const handleScroll = () => {
    showButton.value = window.scrollY > 300;
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <v-fab
        v-if="showButton"
        icon="mdi-chevron-up"
        color="green-lighten-1"
        location="bottom end"
        size="large"
        @click="scrollToTop"
        app
        appear
    ></v-fab>
</template>
