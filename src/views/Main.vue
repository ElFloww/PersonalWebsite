<script setup lang="ts">

import HeroSection from '@/components/sections/HeroSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import StatsSection from '@/components/sections/StatsSection.vue';
import ExperienceSection from '@/components/sections/ExperienceSection.vue';
import EducationSection from '@/components/sections/EducationSection.vue';
import SkillsSection from '@/components/sections/SkillsSection.vue';
import ProjectsSection from '@/components/sections/ProjectsSection.vue';
import ContactForm from '@/components/sections/ContactForm.vue';
import SectionDivider from '@/components/shared/SectionDivider.vue';
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
        <!-- <StatsSection /> -->

        <SectionDivider />

        <!-- Section Expérience -->
        <ExperienceSection />

        <SectionDivider />

        <!-- Section Formation -->
        <EducationSection />

        <SectionDivider />

        <!-- Section Compétences -->
        <SkillsSection />

        <SectionDivider />

        <!-- Section Projets -->
        <ProjectsSection />

        <SectionDivider />

        <!-- Section Contact -->
        <v-container id="contact" fluid class="contact-section py-16">
            <v-row justify="center" class="mb-12">
                <v-col cols="12" md="10" lg="8" class="text-center">
                    <div class="title-container">
                        <v-icon icon="mdi-email-fast" size="56" color="green-lighten-1" class="mb-4"></v-icon>
                        <h1 class="text-h2 font-weight-bold mb-4">
                            {{ t('views.main.contact.sectionTitle') }}
                        </h1>
                        <p class="introduction-text text-body1 text-grey-darken-1 mb-6 font-weight-500">
                            {{ t('views.main.contact.sectionDescription') }}
                        </p>
                        <v-divider class="mx-auto my-6" color="green-lighten-1" :thickness="4" width="100" style="border-radius: 4px;"></v-divider>
                    </div>
                </v-col>
            </v-row>

            <v-row justify="center">
                <v-col cols="12" md="10" lg="8">
                    <v-row>
                        <v-col cols="12" md="5" class="d-flex flex-column justify-center pr-md-8 mb-8 mb-md-0">
                            
                            <h3 class="text-h5 font-weight-bold text-ink mb-8">{{ t('views.main.contact.contactInfo') }}</h3>

                            <div class="d-flex flex-column gap-6 mb-10 contact-info-list">
                                <!-- Email -->
                                <div class="d-flex align-center contact-item group">
                                    <div class="icon-box bg-blue-lighten-5 text-blue-darken-2 rounded-lg pa-3 mr-4 transition-transform">
                                        <v-icon icon="mdi-email-outline" size="24"></v-icon>
                                    </div>
                                    <div>
                                        <h4 class="text-subtitle-1 font-weight-bold text-ink mb-1">{{ t('views.main.contact.emailLabel') }}</h4>
                                        <a href="mailto:contact@florent-dubut.fr" class="text-body-1 text-blue-darken-2 text-decoration-none hover-underline transition-colors">contact@florent-dubut.fr</a>
                                    </div>
                                </div>

                                <!-- Location -->
                                <div class="d-flex align-center contact-item group">
                                    <div class="icon-box bg-green-lighten-5 text-green-darken-2 rounded-lg pa-3 mr-4 transition-transform">
                                        <v-icon icon="mdi-map-marker-outline" size="24"></v-icon>
                                    </div>
                                    <div>
                                        <h4 class="text-subtitle-1 font-weight-bold text-ink mb-1">{{ t('views.main.contact.locationLabel') }}</h4>
                                        <p class="text-body-1 text-grey-darken-1 ma-0">{{ t('views.main.contact.locationValue') }}</p>
                                    </div>
                                </div>

                                <!-- Availability -->
                                <div class="d-flex align-center contact-item group">
                                    <div class="icon-box bg-purple-lighten-5 text-purple-darken-2 rounded-lg pa-3 mr-4 transition-transform">
                                        <v-icon icon="mdi-phone-outline" size="24"></v-icon>
                                    </div>
                                    <div>
                                        <h4 class="text-subtitle-1 font-weight-bold text-ink mb-1">{{ t('views.main.contact.availabilityLabel') }}</h4>
                                        <p class="text-body-1 text-grey-darken-1 ma-0">{{ t('views.main.contact.availabilityValue') }}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-2">
                                <h4 class="text-subtitle-1 font-weight-bold text-ink mb-4">{{ t('views.main.contact.connectWithMe') }}</h4>
                                <div class="d-flex gap-4">
                                    <a href="https://www.linkedin.com/in/florent-dubut/" target="_blank" rel="noopener noreferrer" class="social-btn bg-blue-darken-3 text-white rounded-lg pa-3 transition-transform elevation-2" aria-label="LinkedIn">
                                        <v-icon icon="mdi-linkedin" size="24"></v-icon>
                                    </a>
                                    <a href="https://github.com/florentdubut" target="_blank" rel="noopener noreferrer" class="social-btn bg-grey-darken-4 text-white rounded-lg pa-3 transition-transform elevation-2" aria-label="GitHub">
                                        <v-icon icon="mdi-github" size="24"></v-icon>
                                    </a>
                                    <a href="/files/cv-florent-dubut.pdf" target="_blank" rel="noopener noreferrer" class="social-btn bg-green-darken-1 text-white rounded-lg pa-3 transition-transform elevation-2" aria-label="Download CV" title="Télécharger mon CV">
                                        <v-icon icon="mdi-file-download-outline" size="24"></v-icon>
                                    </a>
                                </div>
                            </div>

                        </v-col>
                        
                        <v-col cols="12" md="7">
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
    background: transparent;
    position: relative;
}

.title-container {
    position: relative;
    z-index: 1;
}

.introduction-text {
    line-height: 1.8;
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.05rem;
    letter-spacing: 0.3px;
}

.text-ink {
    color: var(--ink);
}

.gap-6 {
    gap: 1.5rem;
}

.gap-4 {
    gap: 1rem;
}

.contact-item:hover .icon-box {
    transform: scale(1.1);
}

.hover-underline:hover {
    text-decoration: underline !important;
}

.social-btn {
    display: inline-flex;
    text-decoration: none;
}

.social-btn:hover {
    transform: scale(1.1) translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
}
</style>
yle>
>
