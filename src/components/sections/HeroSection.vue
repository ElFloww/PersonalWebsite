<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
</script>

<template>
    <v-container fluid class="hero-section pa-0">
        <v-row class="fill-height" align="center" justify="center">
            <v-col cols="12" class="text-center py-16">
                <h1 class="text-h2 font-weight-bold mb-4 animate-title">
                    <span class="gradient-text">Florent</span> Dubut
                </h1>
                <h2 class="text-h4 font-weight-light mb-8 text-grey-darken-1 animate-subtitle">
                    {{ t('views.main.profil.description') }}
                </h2>
                <div class="d-flex justify-center ga-4 flex-wrap animate-buttons">
                    <v-btn
                        color="green-lighten-1"
                        size="x-large"
                        variant="flat"
                        elevation="8"
                        @click="scrollToSection('about')"
                        class="neon-glow"
                    >
                        <v-icon icon="mdi-account" class="mr-2"></v-icon>
                        {{ t('components.shared.appBar.about') }}
                    </v-btn>
                    <v-btn
                        color="green-lighten-1"
                        size="x-large"
                        variant="outlined"
                        @click="scrollToSection('projects')"
                    >
                        <v-icon icon="mdi-rocket-launch" class="mr-2"></v-icon>
                        {{ t('components.shared.appBar.projects') }}
                    </v-btn>
                    <v-btn
                        color="green-lighten-1"
                        size="x-large"
                        variant="tonal"
                        @click="scrollToSection('contact')"
                    >
                        <v-icon icon="mdi-email" class="mr-2"></v-icon>
                        {{ t('components.shared.appBar.contact') }}
                    </v-btn>
                </div>
                
                <!-- Flèche qui indique de scroller -->
                <div class="scroll-indicator mt-16">
                    <v-icon icon="mdi-chevron-down" size="48" color="green-lighten-1" class="floating"></v-icon>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.hero-section {
    min-height: calc(100vh - 72px);
    background: linear-gradient(180deg, var(--surface) 0%, var(--accent-soft-2) 100%);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: -25%;
    left: -10%;
    width: 560px;
    height: 560px;
    background: radial-gradient(circle, rgba(74, 143, 104, 0.09) 0%, transparent 60%);
    border-radius: 50%;
}

.hero-section::after {
    content: '';
    position: absolute;
    bottom: -28%;
    right: -12%;
    width: 700px;
    height: 700px;
    background: radial-gradient(circle, rgba(74, 143, 104, 0.06) 0%, transparent 60%);
    border-radius: 50%;
}

.animate-title {
    animation: fadeUp 0.9s ease-out;
    position: relative;
    z-index: 1;
    color: var(--ink);
}

.animate-subtitle {
    animation: fadeUp 0.9s ease-out 0.16s backwards;
    position: relative;
    z-index: 1;
    color: var(--ink-muted);
}

.animate-buttons {
    animation: fadeUp 0.9s ease-out 0.24s backwards;
    position: relative;
    z-index: 1;
}

.hero-section h1 .gradient-text {
    background: linear-gradient(120deg, var(--accent-strong), var(--accent));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.v-btn {
    border-radius: 999px;
}

.v-btn[variant="flat"] {
    background: linear-gradient(90deg, var(--accent), var(--accent-strong));
    color: white;
}

.v-btn[variant="outlined"] {
    border: 1.5px solid rgba(47, 109, 78, 0.08);
    color: var(--ink);
}

.scroll-indicator {
    position: relative;
    z-index: 1;
}

@media (max-width: 600px) {
    .text-h2 {
        font-size: 2.25rem !important;
    }

    .text-h4 {
        font-size: 1.15rem !important;
    }
}
</style>
