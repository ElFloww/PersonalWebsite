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
    min-height: calc(100vh - 70px);
    background: linear-gradient(135deg, #ffffff 0%, #e8f5e9 50%, #ffffff 100%);
    position: relative;
    overflow: hidden;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -20%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(129, 199, 132, 0.15) 0%, transparent 70%);
    border-radius: 50%;
}

.hero-section::after {
    content: '';
    position: absolute;
    bottom: -50%;
    right: -20%;
    width: 700px;
    height: 700px;
    background: radial-gradient(circle, rgba(129, 199, 132, 0.1) 0%, transparent 70%);
    border-radius: 50%;
}

@keyframes slideInDown {
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-title {
    animation: slideInDown 1s ease-out;
    position: relative;
    z-index: 1;
}

.animate-subtitle {
    animation: slideInDown 1s ease-out 0.2s backwards;
    position: relative;
    z-index: 1;
}

.animate-buttons {
    animation: slideInUp 1s ease-out 0.4s backwards;
    position: relative;
    z-index: 1;
}

.v-btn {
    position: relative;
    overflow: hidden;
}

.v-btn::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.v-btn:hover::after {
    width: 400px;
    height: 400px;
}

.scroll-indicator {
    position: relative;
    z-index: 1;
}

@media (max-width: 600px) {
    .text-h2 {
        font-size: 2.5rem !important;
    }
    
    .text-h4 {
        font-size: 1.5rem !important;
    }
}
</style>
