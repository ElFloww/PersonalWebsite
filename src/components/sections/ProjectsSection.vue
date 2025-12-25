<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

interface Project {
    title: string;
    description: string;
    technologies: string[];
    image?: string;
    link?: string;
    github?: string;
    color: string;
    gradient: string;
    icon: string;
}

const projects: Project[] = [
    {
        title: 'Portfolio Personnel',
        description: 'Site web personnel développé avec Vue.js et Vuetify, présentant mon parcours, mes compétences et mes projets.',
        technologies: ['Vue.js', 'Vuetify', 'TypeScript', 'Vite'],
        github: 'https://github.com/florentdubut/florent-dubut.fr',
        link: 'https://florent-dubut.fr',
        color: 'green-lighten-1',
        gradient: 'linear-gradient(135deg, #81c784 0%, #66bb6a 100%)',
        icon: 'mdi-web'
    },
    {
        title: 'API Clean Architecture',
        description: 'API développée en ASP.NET Core suivant les principes de Clean Architecture pour un projet interne chez Orange Business.',
        technologies: ['C#', 'ASP.NET Core', 'Entity Framework', 'PostgreSQL'],
        color: 'blue',
        gradient: 'linear-gradient(135deg, #42a5f5 0%, #1e88e5 100%)',
        icon: 'mdi-api'
    },
    {
        title: 'Application Full Stack',
        description: 'Application web complète avec frontend Vue.js/Angular et backend ASP.NET, incluant authentification et gestion de données.',
        technologies: ['Vue.js', 'Angular', 'ASP.NET Core', 'Azure'],
        color: 'purple',
        gradient: 'linear-gradient(135deg, #ab47bc 0%, #8e24aa 100%)',
        icon: 'mdi-application'
    },
];

const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

const selectedProject = ref<Project | null>(null);
</script>

<template>
    <v-container id="projects" fluid class="projects-section py-16">
        <v-row justify="center" class="mb-12">
            <v-col cols="12" class="text-center">
                <div class="title-container">
                    <v-icon icon="mdi-lightbulb-on" size="56" color="green-lighten-1" class="mb-4"></v-icon>
                    <h1 class="text-h2 font-weight-bold mb-3">
                        {{ t('views.main.projects.sectionTitle') }}
                    </h1>
                    <p class="text-h6 text-grey-darken-1">{{ t('views.main.projects.sectionDescription') }}</p>
                </div>
                <v-divider class="mx-auto my-4" color="green-lighten-1" :thickness="4" width="100" style="border-radius: 4px;"></v-divider>
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-col cols="12" lg="11">
                <div class="projects-grid">
                    <v-card
                        v-for="(project, index) in projects"
                        :key="index"
                        elevation="8"
                        class="project-card"
                        :style="{ animationDelay: `${index * 0.1}s` }"
                        @mouseenter="selectedProject = project"
                        @mouseleave="selectedProject = null"
                    >
                        <div class="project-icon-section" :style="{ background: project.gradient }">
                            <v-icon :icon="project.icon" size="64" color="white"></v-icon>
                            <div class="project-number">#{{ index + 1 }}</div>
                        </div>

                        <v-card-text class="pa-6">
                            <h2 class="text-h5 font-weight-bold mb-3" :style="{ color: project.color }">
                                {{ project.title }}
                            </h2>

                            <p class="text-body-1 mb-4" style="line-height: 1.8;">
                                {{ project.description }}
                            </p>

                            <v-divider class="my-4"></v-divider>

                            <div class="tech-stack mb-4">
                                <v-chip
                                    v-for="tech in project.technologies"
                                    :key="tech"
                                    size="small"
                                    :color="project.color"
                                    variant="outlined"
                                    class="mr-2 mb-2"
                                >
                                    {{ tech }}
                                </v-chip>
                            </div>

                        </v-card-text>

                        <v-card-actions class="pa-6 pt-0">
                            <v-btn
                                v-if="project.link"
                                :color="project.color"
                                variant="flat"
                                prepend-icon="mdi-open-in-new"
                                @click="openLink(project.link!)"
                            >
                                {{ t('views.main.projects.viewProject') }}
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                                v-if="project.github"
                                :color="project.color"
                                variant="outlined"
                                icon="mdi-github"
                                @click="openLink(project.github!)"
                            ></v-btn>
                        </v-card-actions>

                        <div 
                            class="project-glow"
                            :class="{ 'project-glow-active': selectedProject === project }"
                            :style="{ background: `radial-gradient(circle at center, ${project.color}40, transparent)` }"
                        ></div>
                    </v-card>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.projects-section {
    background: linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%);
    position: relative;
}

.title-container {
    position: relative;
    z-index: 1;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 2.5rem;
}

.project-card {
    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    animation: fadeIn 0.6s ease-out backwards;
    border: 2px solid transparent;
}

.project-card:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 20px 60px rgba(129, 199, 132, 0.3) !important;
    border-color: rgba(129, 199, 132, 0.4);
}

.project-icon-section {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: 180px;
}

.project-number {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    color: white;
    font-size: 2rem;
    font-weight: 800;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid rgba(255, 255, 255, 0.5);
}

.tech-stack {
    min-height: 60px;
}

.project-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0%;
    height: 0%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    opacity: 0;
    transition: all 0.5s ease;
    pointer-events: none;
    filter: blur(60px);
}

.project-glow-active {
    width: 120%;
    height: 120%;
    opacity: 0.6;
}

@media (max-width: 960px) {
    .projects-grid {
        grid-template-columns: 1fr;
    }
}
</style>
