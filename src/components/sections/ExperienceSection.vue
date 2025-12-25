<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

interface Experience {
    key: string;
    icon: string;
    color: string;
    details?: string[];
}

const experiences: Experience[] = [
    { 
        key: 'third', 
        icon: 'mdi-rocket-launch', 
        color: 'green-lighten-1',
        details: [
            'Développement d\'APIs REST en ASP.NET Core avec architecture propre',
            'Création d\'applications frontend avec Vue.js et Angular',
            'Intégration continue avec Azure DevOps',
            'Travail en méthode Agile (Scrum)',
            'Revue de code et mentorat'
        ]
    },
    { 
        key: 'second', 
        icon: 'mdi-code-braces', 
        color: 'blue',
        details: [
            'Développement d\'une API en clean architecture',
            'Création d\'un backoffice de gestion',
            'Tests unitaires et d\'intégration',
            'Documentation technique'
        ]
    },
    { 
        key: 'first', 
        icon: 'mdi-school', 
        color: 'purple',
        details: [
            'Apprentissage des technologies .NET Core',
            'Développement d\'une API REST',
            'Travail en équipe sur un projet interne',
            'Découverte de la clean architecture'
        ]
    },
];

const selectedExperience = ref<Experience | null>(null);
const dialog = ref(false);

const showDetails = (exp: Experience) => {
    selectedExperience.value = exp;
    dialog.value = true;
};
</script>

<template>
    <v-container id="experience" fluid class="experience-section py-16">
        <v-row justify="center" class="mb-12">
            <v-col cols="12" class="text-center">
                <div class="title-container">
                    <v-icon icon="mdi-briefcase-variant" size="56" color="green-lighten-1" class="mb-4"></v-icon>
                    <h1 class="text-h2 font-weight-bold mb-3">
                        {{ t('views.main.professionalExperience.sectionTitle') }}
                    </h1>
                    <p class="text-h6 text-grey-darken-1">{{ t('views.main.professionalExperience.sectionDescription') }}</p>
                </div>
                <v-divider class="mx-auto my-4" color="green-lighten-1" :thickness="4" width="100" style="border-radius: 4px;"></v-divider>
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-col cols="12" lg="10">
                <div class="experiences-grid">
                    <v-card
                        v-for="(exp, index) in experiences"
                        :key="exp.key"
                        elevation="8"
                        class="experience-card"
                        @click="showDetails(exp)"
                        :style="{ animationDelay: `${index * 0.1}s` }"
                    >
                        <div class="experience-icon-wrapper" :style="{ background: `linear-gradient(135deg, ${exp.color} 0%, ${exp.color} 100%)` }">
                            <v-icon :icon="exp.icon" size="48" color="white"></v-icon>
                        </div>
                        
                        <v-card-text class="pa-6">
                            <v-chip :color="exp.color" variant="flat" size="small" class="mb-4">
                                <v-icon icon="mdi-calendar" start size="small"></v-icon>
                                {{ t(`views.main.professionalExperience.${exp.key}.date`) }}
                            </v-chip>
                            
                            <h2 class="text-h5 font-weight-bold mb-3" :style="{ color: exp.color }">
                                {{ t(`views.main.professionalExperience.${exp.key}.title`) }}
                            </h2>
                            
                            <div class="d-flex align-center mb-4">
                                <v-icon icon="mdi-office-building" :color="exp.color" class="mr-2"></v-icon>
                                <span class="text-body-1 font-weight-medium">
                                    {{ t(`views.main.professionalExperience.${exp.key}.company`) }}
                                </span>
                            </div>
                            
                            <p class="text-body-1" style="line-height: 1.8;">
                                {{ t(`views.main.professionalExperience.${exp.key}.content`) }}
                            </p>
                        </v-card-text>

                        <v-card-actions class="pa-6 pt-0">
                            <v-btn 
                                :color="exp.color" 
                                variant="tonal" 
                                append-icon="mdi-arrow-right"
                                block
                            >
                                {{ t('views.main.professionalExperience.learnMore') }}
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </v-col>
        </v-row>

        <!-- Dialog pour les détails -->
        <v-dialog v-model="dialog" max-width="700">
            <v-card v-if="selectedExperience">
                <v-card-title class="text-h5 pa-6" :style="{ background: `linear-gradient(135deg, ${selectedExperience.color} 0%, ${selectedExperience.color} 100%)`, color: 'white' }">
                    <v-icon :icon="selectedExperience.icon" class="mr-3" color="white"></v-icon>
                    {{ t(`views.main.professionalExperience.${selectedExperience.key}.title`) }}
                </v-card-title>
                
                <v-card-text class="pa-6">
                    <v-chip :color="selectedExperience.color" variant="flat" size="small" class="mb-4">
                        <v-icon icon="mdi-calendar" start size="small"></v-icon>
                        {{ t(`views.main.professionalExperience.${selectedExperience.key}.date`) }}
                    </v-chip>

                    <div class="mb-4">
                        <div class="d-flex align-center mb-3">
                            <v-icon icon="mdi-office-building" :color="selectedExperience.color" class="mr-2"></v-icon>
                            <span class="text-h6 font-weight-medium">
                                {{ t(`views.main.professionalExperience.${selectedExperience.key}.company`) }}
                            </span>
                        </div>
                    </div>

                    <v-divider class="my-4"></v-divider>

                    <h3 class="text-h6 font-weight-bold mb-3">
                        <v-icon icon="mdi-text-box-check" :color="selectedExperience.color" class="mr-2"></v-icon>
                        {{ t('views.main.professionalExperience.missionsAndAchievements') }}
                    </h3>
                    <v-list>
                        <v-list-item 
                            v-for="(detail, idx) in selectedExperience.details" 
                            :key="idx"
                            class="px-0"
                        >
                            <template v-slot:prepend>
                                <v-icon :color="selectedExperience.color" icon="mdi-check-circle"></v-icon>
                            </template>
                            <v-list-item-title class="text-body-1">{{ detail }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-card-text>

                <v-card-actions class="pa-6">
                    <v-spacer></v-spacer>
                    <v-btn color="green-lighten-1" variant="flat" @click="dialog = false" prepend-icon="mdi-close">
                        {{ t('views.main.professionalExperience.close') }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<style scoped>
.experience-section {
    background: white;
    position: relative;
}

.title-container {
    position: relative;
    z-index: 1;
}

.experiences-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.experience-card {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    animation: fadeIn 0.6s ease-out backwards;
    border: 2px solid transparent;
}

.experience-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(129, 199, 132, 0.25) !important;
    border-color: rgba(129, 199, 132, 0.3);
}

.experience-icon-wrapper {
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 150px;
    position: relative;
}

.experience-card {
    display: flex;
    flex-direction: column;
}

@media (max-width: 960px) {
    .experiences-grid {
        grid-template-columns: 1fr;
    }
}
</style>
