<script setup lang="ts">

import { URL_LINKEDIN, URL_GITHUB } from '@/core/types/contants/constants';

const openInNewTab = (url: string): void => {
    window.open(url, '_blank', 'noopener,noreferrer')
}

</script>
<template>
    <v-footer class="text-center d-flex flex-column ga-2 py-4" color="green-lighten-1">
        <div class="d-flex ga-3">
            <v-btn key="mdi-github" icon="mdi-github" density="comfortable" variant="text"
                v-on:click="openInNewTab(URL_GITHUB)"></v-btn>
            <v-btn key="mdi-linkedin" icon="mdi-linkedin" density="comfortable" variant="text"
                v-on:click="openInNewTab(URL_LINKEDIN)"></v-btn>
        </div>

        <v-divider class="my-2" thickness="2" width="50"></v-divider>

        <div>
            <strong>Florent Dubut © {{ new Date().getFullYear() }} - All rights reserved</strong>
        </div>
    </v-footer>
</template>