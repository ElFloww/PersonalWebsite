<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { i18n } from '@/plugins/i18n';

const { t } = useI18n();

const props = defineProps<{
    modelValue: boolean;
}>();

const emit = defineEmits(['update:modelValue']);

const changeLang = (lang: 'en' | 'fr') => {
    i18n.global.locale.value = lang;
};

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    emit('update:modelValue', false);
};
</script>

<template>
    <v-navigation-drawer
        :model-value="modelValue"
        @update:model-value="emit('update:modelValue', $event)"
        temporary
        location="right"
        class="site-drawer"
    >
        <v-list nav>
            <v-list-item @click="scrollToSection('about')">
                <template v-slot:prepend>
                    <v-icon color="primary">mdi-account</v-icon>
                </template>
                <v-list-item-title>{{ t('components.shared.appBar.about') }}</v-list-item-title>
            </v-list-item>

            <v-list-item @click="scrollToSection('experience')">
                <template v-slot:prepend>
                    <v-icon color="primary">mdi-briefcase</v-icon>
                </template>
                <v-list-item-title>{{ t('components.shared.appBar.experience') }}</v-list-item-title>
            </v-list-item>

            <v-list-item @click="scrollToSection('education')">
                <template v-slot:prepend>
                    <v-icon color="primary">mdi-school</v-icon>
                </template>
                <v-list-item-title>{{ t('components.shared.appBar.education') }}</v-list-item-title>
            </v-list-item>

            <v-list-item @click="scrollToSection('skills')">
                <template v-slot:prepend>
                    <v-icon color="primary">mdi-code-tags</v-icon>
                </template>
                <v-list-item-title>{{ t('components.shared.appBar.skills') }}</v-list-item-title>
            </v-list-item>

            <v-list-item @click="scrollToSection('projects')">
                <template v-slot:prepend>
                    <v-icon color="primary">mdi-rocket-launch</v-icon>
                </template>
                <v-list-item-title>{{ t('components.shared.appBar.projects') }}</v-list-item-title>
            </v-list-item>

            <v-list-item @click="scrollToSection('contact')">
                <template v-slot:prepend>
                    <v-icon color="primary">mdi-email</v-icon>
                </template>
                <v-list-item-title>{{ t('components.shared.appBar.contact') }}</v-list-item-title>
            </v-list-item>

            <v-divider class="my-3"></v-divider>

            <v-list-item>
                <div class="d-flex justify-center ga-2">
                    <v-btn icon flat :ripple="false" size="small" @click="changeLang('en')">
                        <img src="@/assets/images/en.svg" width="28" :alt="t('components.shared.icons.en.alt')" />
                    </v-btn>
                    <v-btn icon flat :ripple="false" size="small" @click="changeLang('fr')">
                        <img src="@/assets/images/fr.svg" width="28" :alt="t('components.shared.icons.fr.alt')" />
                    </v-btn>
                </div>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
