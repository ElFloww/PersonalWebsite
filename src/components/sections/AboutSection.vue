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
    { icon: 'mdi-book-open-variant', key: 'reading', color: 'brown' },
    { icon: 'mdi-pot-steam', key: 'cooking', color: 'red' },
    { icon: 'mdi-music', key: 'music', color: 'pink' },
];

const values = [
    { icon: 'mdi-share-variant', key: 'knowledgeSharing', color: 'green-lighten-1' },
    { icon: 'mdi-file-document-check', key: 'documentation', color: 'blue-lighten-2' },
    { icon: 'mdi-magnify-scan', key: 'pragmatism', color: 'orange-lighten-2' },
    { icon: 'mdi-refresh-circle', key: 'continuousImprovement', color: 'purple-lighten-2' },
];
</script>

<template>
    <v-container id="about" fluid class="about-section py-16">

        <!-- Titre -->
        <v-row justify="center" class="mb-2">
            <v-col cols="12" class="text-center">
                <h1 class="text-h2 font-weight-bold mb-3 gradient-text">
                    {{ t('views.main.presentation.title') }}
                </h1>
                <p class="text-h6 text-medium-emphasis mb-4">{{ t('views.main.presentation.subtitle') }}</p>
                <v-divider class="mx-auto my-4" color="green-lighten-1" :thickness="4" width="100" style="border-radius: 4px;" />
            </v-col>
        </v-row>

        <!-- Ligne 1 : Avatar + Présentation principale -->
        <v-row justify="center" align="start" class="mb-4">

            <!-- Avatar -->
            <v-col cols="12" md="4" class="text-center">
                <div class="avatar-container">
                    <v-avatar size="260" :image="photoProfil" class="mb-6 profile-avatar" />
                    <div class="text-center">
                        <h2 class="text-h4 font-weight-bold mb-3">{{ t('views.main.profil.title') }}</h2>
                        <v-chip color="green-lighten-1" variant="flat" size="large" class="mb-3 d-flex justify-center mx-auto" style="width: fit-content;">
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

            <!-- Paragraphes + Philosophie -->
            <v-col cols="12" md="8">
                <v-card elevation="6" class="pa-8 glass-card mb-4">
                    <v-card-text class="pa-0">
                        <p class="text-body-1 mb-5 text-justify" style="line-height: 1.85;">
                            {{ t('views.main.presentation.firstParagraph') }}
                        </p>
                        <p class="text-body-1 mb-5 text-justify" style="line-height: 1.85;">
                            {{ t('views.main.presentation.secondParagraph') }}
                        </p>

                        <!-- Approche / Philosophie -->
                        <v-alert
                            variant="tonal"
                            color="green-lighten-1"
                            class="mt-2"
                            icon="mdi-lightbulb-on-outline"
                            border="start"
                        >
                            <div class="font-weight-bold mb-1">{{ t('views.main.presentation.philosophyTitle') }}</div>
                            <div style="line-height: 1.75;">{{ t('views.main.presentation.philosophyText') }}</div>
                        </v-alert>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!-- Ligne 2 : Valeurs + Objectif CDI Provence -->
        <v-row justify="center" class="mb-4">

            <!-- Valeurs -->
            <v-col cols="12" md="6">
                <v-card elevation="4" class="pa-6 glass-card h-100">
                    <h3 class="text-h6 font-weight-bold mb-4 text-green-lighten-1">
                        <v-icon icon="mdi-star-circle-outline" class="mr-2" />
                        {{ t('views.main.presentation.valuesTitle') }}
                    </h3>
                    <v-list density="compact" bg-color="transparent" class="pa-0">
                        <v-list-item
                            v-for="value in values"
                            :key="value.key"
                            :prepend-icon="value.icon"
                            :base-color="value.color"
                            rounded="lg"
                            class="mb-2 px-2"
                        >
                            <v-list-item-title class="text-body-2" style="white-space: normal; line-height: 1.5;">
                                {{ t(`views.main.presentation.values.${value.key}`) }}
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>

            <!-- Objectif CDI -->
            <v-col cols="12" md="6">
                <v-card elevation="4" class="pa-6 goal-card h-100" color="green-darken-3">
                    <h3 class="text-h6 font-weight-bold mb-4" style="color: white;">
                        <v-icon icon="mdi-map-marker-star-outline" class="mr-2" />
                        {{ t('views.main.presentation.goalTitle') }}
                    </h3>
                    <p class="text-body-1 mb-5 text-justify" style="line-height: 1.85; color: rgba(255,255,255,0.92);">
                        {{ t('views.main.presentation.goalText') }}
                    </p>
                    <v-chip color="white" variant="outlined" size="large">
                        <v-icon start>mdi-briefcase-search-outline</v-icon>
                        {{ t('views.main.presentation.goalCTA') }}
                    </v-chip>
                </v-card>
            </v-col>
        </v-row>

        <!-- Ligne 3 : Passions -->
        <v-row justify="center">
            <v-col cols="12" md="10">
                <v-card elevation="4" class="pa-6 glass-card">
                    <h3 class="text-h6 font-weight-bold mb-3 text-green-lighten-1">
                        <v-icon icon="mdi-heart-outline" class="mr-2" />
                        {{ t('views.main.presentation.interestsTitle') }}
                    </h3>
                    <p class="text-body-2 text-medium-emphasis mb-4" style="line-height: 1.8;">
                        {{ t('views.main.presentation.passionsText') }}
                    </p>
                    <div class="d-flex flex-wrap ga-3">
                        <v-chip
                            v-for="interest in interests"
                            :key="interest.key"
                            :color="interest.color"
                            variant="flat"
                            size="large"
                            class="interest-chip"
                        >
                            <v-icon :icon="interest.icon" start />
                            {{ t(`views.main.presentation.interests.${interest.key}`) }}
                        </v-chip>
                    </div>
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

.profile-avatar {
    box-shadow: 0 8px 32px rgba(100, 200, 100, 0.25);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-avatar:hover {
    transform: scale(1.03);
    box-shadow: 0 12px 40px rgba(100, 200, 100, 0.4);
}

.goal-card {
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.interest-chip {
    transition: all 0.3s ease;
}

.interest-chip:hover {
    transform: translateY(-4px) scale(1.08);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

@media (max-width: 960px) {
    .v-avatar {
        width: 200px !important;
        height: 200px !important;
    }
}
</style>
