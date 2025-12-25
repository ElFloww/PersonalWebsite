<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

interface Education {
    key: string;
    icon: string;
    color: string;
    gradient: string;
    details?: string[];
}

const educations: Education[] = [
    {
        key: 'second',
        icon: 'mdi-cloud',
        color: 'green-lighten-1',
        gradient: 'linear-gradient(135deg, #81c784 0%, #66bb6a 100%)',
        details: [
            'Architecture Cloud (AWS, Azure, GCP)',
            'DevOps et CI/CD',
            'Containerisation avec Docker et Kubernetes',
            'Développement mobile (iOS, Android)',
            'Projet de fin d\'études en architecture microservices'
        ]
    },
    {
        key: 'first',
        icon: 'mdi-laptop',
        color: 'blue',
        gradient: 'linear-gradient(135deg, #42a5f5 0%, #1e88e5 100%)',
        details: [
            'Bases de données relationnelles et NoSQL',
            'Développement web (HTML, CSS, JavaScript, PHP)',
            'Programmation orientée objet (Java, C#)',
            'Gestion de projets Agile',
            'Stage de fin d\'études chez Orange Business'
        ]
    },
];

const selectedEducation = ref<Education | null>(null);
const dialog = ref(false);

const showDetails = (edu: Education) => {
    selectedEducation.value = edu;
    dialog.value = true;
};
</script>

<template>
    <v-container id="education" fluid class="education-section py-16">
        <v-row justify="center" class="mb-12">
            <v-col cols="12" class="text-center">
                <div class="title-container">
                    <v-icon icon="mdi-school" size="56" color="green-lighten-1" class="mb-4"></v-icon>
                    <h1 class="text-h2 font-weight-bold mb-3">
                        {{ t('views.main.education.sectionTitle') }}
                    </h1>
                    <p class="text-h6 text-grey-darken-1">{{ t('views.main.education.sectionDescription') }}</p>
                </div>
                <v-divider class="mx-auto my-4" color="green-lighten-1" :thickness="4" width="100" style="border-radius: 4px;"></v-divider>
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-col cols="12" lg="10">
                <div class="education-grid">
                    <v-card
                        v-for="(edu, index) in educations"
                        :key="edu.key"
                        elevation="8"
                        class="education-card"
                        @click="showDetails(edu)"
                        :style="{ animationDelay: `${index * 0.1}s` }"
                    >
                        <div class="education-year" :style="{ background: edu.gradient }">
                            <span>{{ t(`views.main.education.${edu.key}.date`).split(' - ')[0] }}</span>
                            <v-icon icon="mdi-arrow-down" size="small" class="my-2"></v-icon>
                            <span>{{ t(`views.main.education.${edu.key}.date`).split(' - ')[1] }}</span>
                        </div>

                        <v-card-text class="pa-6">
                            <div class="education-icon mb-4" :style="{ background: `${edu.color}15` }">
                                <v-icon :icon="edu.icon" :color="edu.color" size="40"></v-icon>
                            </div>

                            <h2 class="text-h5 font-weight-bold mb-3" :style="{ color: edu.color }">
                                {{ t(`views.main.education.${edu.key}.title`) }}
                            </h2>

                            <div class="d-flex align-center mb-4">
                                <v-icon icon="mdi-map-marker" :color="edu.color" class="mr-2"></v-icon>
                                <span class="text-body-1 font-weight-medium">
                                    {{ t(`views.main.education.${edu.key}.school`) }}
                                </span>
                            </div>

                            <template v-if="edu.key === 'first'">
                                <p class="text-body-1 mb-2" style="line-height: 1.8;">
                                    {{ t('views.main.education.first.content1') }}
                                </p>
                            </template>
                            <template v-else>
                                <p class="text-body-1 mb-2" style="line-height: 1.8;">
                                    {{ t(`views.main.education.${edu.key}.content`) }}
                                </p>
                            </template>
                        </v-card-text>

                        <v-card-actions class="pa-6 pt-0">
                            <v-btn 
                                :color="edu.color" 
                                variant="tonal" 
                                append-icon="mdi-arrow-right"
                                block
                            >
                                {{ t('views.main.education.viewProgram') }}
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </v-col>
        </v-row>

        <!-- Dialog pour les détails -->
        <v-dialog v-model="dialog" max-width="700">
            <v-card v-if="selectedEducation">
                <v-card-title class="text-h5 pa-6" :style="{ background: selectedEducation.gradient, color: 'white' }">
                    <v-icon :icon="selectedEducation.icon" class="mr-3" color="white"></v-icon>
                    {{ t(`views.main.education.${selectedEducation.key}.title`) }}
                </v-card-title>
                
                <v-card-text class="pa-6">
                    <v-chip :color="selectedEducation.color" variant="flat" size="small" class="mb-4">
                        <v-icon icon="mdi-calendar" start size="small"></v-icon>
                        {{ t(`views.main.education.${selectedEducation.key}.date`) }}
                    </v-chip>

                    <div class="mb-4">
                        <div class="d-flex align-center mb-3">
                            <v-icon icon="mdi-map-marker" :color="selectedEducation.color" class="mr-2"></v-icon>
                            <span class="text-h6 font-weight-medium">
                                {{ t(`views.main.education.${selectedEducation.key}.school`) }}
                            </span>
                        </div>
                    </div>

                    <v-divider class="my-4"></v-divider>

                    <h3 class="text-h6 font-weight-bold mb-3">
                        <v-icon icon="mdi-book-open-page-variant" :color="selectedEducation.color" class="mr-2"></v-icon>
                        {{ t('views.main.education.modulesAndSkills') }}
                    </h3>
                    <v-list>
                        <v-list-item 
                            v-for="(detail, idx) in selectedEducation.details" 
                            :key="idx"
                            class="px-0"
                        >
                            <template v-slot:prepend>
                                <v-icon :color="selectedEducation.color" icon="mdi-check-circle"></v-icon>
                            </template>
                            <v-list-item-title class="text-body-1">{{ detail }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-card-text>

                <v-card-actions class="pa-6">
                    <v-spacer></v-spacer>
                    <v-btn color="green-lighten-1" variant="flat" @click="dialog = false" prepend-icon="mdi-close">
                        {{ t('views.main.education.close') }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<style scoped>
.education-section {
    background: white;
    position: relative;
}

.title-container {
    position: relative;
    z-index: 1;
}

.education-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.education-card {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    animation: fadeIn 0.6s ease-out backwards;
    border: 2px solid transparent;
}

.education-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(129, 199, 132, 0.25) !important;
    border-color: rgba(129, 199, 132, 0.3);
}

.education-year {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    min-height: 120px;
}

.education-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.education-card {
    display: flex;
    flex-direction: column;
}

@media (max-width: 960px) {
    .education-grid {
        grid-template-columns: 1fr;
    }
}
</style>
