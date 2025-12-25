<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import photoProfil from '@/assets/images/photo_profil.jpg';

const { t } = useI18n();

const birthDate = new Date('2003-01-27');

const age = computed(() => {
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    const hasHadBirthday =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
    if (!hasHadBirthday) years--;
    return years;
});

const interests = [
    { icon: 'mdi-swim', key: 'swimming', color: 'blue' },
    { icon: 'mdi-run', key: 'running', color: 'orange' },
    { icon: 'mdi-bike', key: 'cycling', color: 'green' },
    { icon: 'mdi-controller', key: 'videoGames', color: 'purple' },
    { icon: 'mdi-toy-brick', key: 'lego', color: 'red' },
];
</script>

<template>
    <v-container id="about" fluid class="about-section py-16">
        <v-row justify="center" class="mb-8">
            <v-col cols="12" class="text-center">
                <h1 class="text-h2 font-weight-bold mb-3 gradient-text">
                    {{ t('views.main.presentation.title') }}
                </h1>
                <v-divider class="mx-auto my-4" color="green-lighten-1" :thickness="4" width="100" style="border-radius: 4px;"></v-divider>
            </v-col>
        </v-row>

        <v-row justify="center" align="center">
            <!-- Avatar avec effet -->
            <v-col cols="12" md="4" class="text-center">
                <div class="avatar-container">
                    <v-avatar size="280" :image="photoProfil" class="mb-6"></v-avatar>
                    <div class="text-center">
                        <h2 class="text-h4 font-weight-bold mb-2">{{ t('views.main.profil.title') }}</h2>
                        <v-chip color="green-lighten-1" variant="flat" size="large" class="mb-3">
                            <v-icon start>mdi-cake-variant</v-icon>
                            {{ age }} {{ t('views.main.profil.yearsOld') }}
                        </v-chip>
                        <div>
                            <v-chip color="green-lighten-1" variant="outlined" size="large">
                                <v-icon start>mdi-code-tags</v-icon>
                                {{ t('views.main.profil.description') }}
                            </v-chip>
                        </div>
                    </div>
                </div>
            </v-col>

            <!-- Présentation avec cards -->
            <v-col cols="12" md="8">
                <v-card elevation="8" class="pa-8 glass-card">
                    <v-card-text>
                        <p class="text-body-1 mb-4 text-justify" style="line-height: 1.8;">
                            {{ t('views.main.presentation.firstParagraph') }}
                        </p>
                        <p class="text-body-1 mb-4 text-justify" style="line-height: 1.8;">
                            {{ t('views.main.presentation.secondParagraph') }}
                        </p>
                        <p class="text-body-1 mb-4 text-justify" style="line-height: 1.8;">
                            {{ t('views.main.presentation.thirdParagraph') }}
                        </p>

                        <!-- Centres d'intérêt -->
                        <v-divider class="my-6"></v-divider>
                        <h3 class="text-h6 font-weight-bold mb-4 text-green-lighten-1">
                            <v-icon icon="mdi-heart" class="mr-2"></v-icon>
                            {{ t('views.main.presentation.interestsTitle') }}
                        </h3>
                        <div class="d-flex flex-wrap ga-3">
                            <v-chip
                                v-for="interest in interests"
                                :key="interest.key"
                                :color="interest.color"
                                variant="flat"
                                size="large"
                                class="interest-chip"
                            >
                                <v-icon :icon="interest.icon" start></v-icon>
                                {{ t(`views.main.presentation.interests.${interest.key}`) }}
                            </v-chip>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.about-section {
    background: white;
    position: relative;
}

.avatar-container {
    position: relative;
    z-index: 1;
}

.interest-chip {
    transition: all 0.3s ease;
}

.interest-chip:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

@media (max-width: 960px) {
    .v-avatar {
        width: 200px !important;
        height: 200px !important;
    }
}
</style>
