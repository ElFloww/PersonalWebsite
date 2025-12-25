<script setup lang="ts">

import HeroSection from '@/components/sections/HeroSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import StatsSection from '@/components/sections/StatsSection.vue';
import ExperienceSection from '@/components/sections/ExperienceSection.vue';
import EducationSection from '@/components/sections/EducationSection.vue';
import SkillsSection from '@/components/sections/SkillsSection.vue';
import ProjectsSection from '@/components/sections/ProjectsSection.vue';
import ContactForm from '@/components/sections/ContactForm.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

</script>

<template>
    <div>
        <!-- Hero Section -->
        <HeroSection />

        <!-- Section À propos -->
        <AboutSection />

        <!-- Section Statistiques -->
        <StatsSection />

        <v-divider :thickness="2" opacity="0.2"></v-divider>

        <!-- Section Expérience -->
        <ExperienceSection />

        <v-divider :thickness="2" opacity="0.2"></v-divider>

        <!-- Section Formation -->
        <EducationSection />

        <v-divider :thickness="2" opacity="0.2"></v-divider>

        <!-- Section Compétences -->
        <SkillsSection />

        <v-divider :thickness="2" opacity="0.2"></v-divider>

        <!-- Section Projets -->
        <ProjectsSection />

        <v-divider :thickness="2" opacity="0.2"></v-divider>

        <!-- Section Contact -->
        <v-container id="contact" fluid class="contact-section pa-5 py-16">
            <v-row justify="center" align="center">
                <v-col cols="12">
                    <v-row class="d-flex justify-center mb-8">
                        <v-col cols="12" class="text-center">
                            <h1 class="text-h2 font-weight-bold mb-3 gradient-text">
                                {{ t('views.main.contact.title') }}
                            </h1>
                            <v-divider class="mx-auto my-4" color="green-lighten-1" :thickness="4" width="100" style="border-radius: 4px;"></v-divider>
                        </v-col>
                    </v-row>
                    <v-row justify="center" class="mb-8">
                        <v-col cols="12" class="text-center">
                            <p class="text-h6 mb-3">{{ t('views.main.contact.description') }}</p>
                            <a href="mailto:contact@florent-dubut.fr" class="email-link text-h5">
                                <v-icon icon="mdi-email" class="mr-2"></v-icon>
                                contact@florent-dubut.fr
                            </a>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="12" md="8" lg="6">
                            <ContactForm />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped>
.contact-section {
    background: linear-gradient(135deg, #e8f5e9 0%, #f5f5f5 100%);
}

.email-link {
    color: #81c784;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 8px;
}

.email-link:hover {
    transform: translateY(-3px);
    background: rgba(129, 199, 132, 0.1);
}
</style>
