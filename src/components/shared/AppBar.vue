<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { i18n } from '@/plugins/i18n';
import { useAppTheme } from '@/composables/useAppTheme';

const { t } = useI18n();
const { isDark, toggleTheme } = useAppTheme();

const changeLang = (lang: 'en' | 'fr') => {
    i18n.global.locale.value = lang;
};

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
</script>

<template>
    <v-app-bar app elevation="0" color="transparent" height="72" class="site-app-bar">
        <v-container fluid class="d-flex align-center justify-space-between px-5">
            <v-app-bar-title class="font-weight-bold text-h5">
                <span class="text-primary">Florent</span>&nbsp;Dubut
            </v-app-bar-title>

            <div class="d-none d-md-flex align-center ga-4 app-nav">
                <v-btn variant="text" @click="scrollToSection('about')">
                    {{ t('components.shared.appBar.about') }}
                </v-btn>
                <v-btn variant="text" @click="scrollToSection('experience')">
                    {{ t('components.shared.appBar.experience') }}
                </v-btn>
                <v-btn variant="text" @click="scrollToSection('education')">
                    {{ t('components.shared.appBar.education') }}
                </v-btn>
                <v-btn variant="text" @click="scrollToSection('skills')">
                    {{ t('components.shared.appBar.skills') }}
                </v-btn>
                <v-btn variant="text" @click="scrollToSection('projects')">
                    {{ t('components.shared.appBar.projects') }}
                </v-btn>
                <v-btn variant="text" @click="scrollToSection('contact')">
                    {{ t('components.shared.appBar.contact') }}
                </v-btn>

                <v-divider vertical thickness="2" class="mx-2"></v-divider>

                <v-btn icon flat :ripple="false" size="small" @click="toggleTheme">
                    <v-icon size="24" :color="isDark ? 'amber' : 'blue-grey-darken-2'">
                        {{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}
                    </v-icon>
                </v-btn>

                <v-btn icon flat :ripple="false" size="small" @click="changeLang('en')">
                    <img src="@/assets/images/en.svg" width="24" :alt="t('components.shared.icons.en.alt')" />
                </v-btn>
                <v-btn icon flat :ripple="false" size="small" @click="changeLang('fr')">
                    <img src="@/assets/images/fr.svg" width="24" :alt="t('components.shared.icons.fr.alt')" />
                </v-btn>
            </div>

            <v-app-bar-nav-icon class="d-md-none" color="primary" @click="$emit('toggle-drawer')"></v-app-bar-nav-icon>
        </v-container>
    </v-app-bar>
</template>
