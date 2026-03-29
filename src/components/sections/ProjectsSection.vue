<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import tuuuurImage from '@/assets/images/tuuuur.png';
import kairosImage from '@/assets/images/kairos.png';
import tuuuurLogo from '@/assets/images/tuuuur_logo.png';
import kairosLogo from '@/assets/images/kairos_logo.png';

const { t, locale } = useI18n();

interface ProjectDetail {
    heading: string;
    items: string[];
}

interface Project {
    title: string;
    description: string;
    shortDescription?: string;
    period?: string;
    technologies: string[];
    image?: string;
    logo?: string;
    logoZoom?: number;
    link?: string;
    github?: string;
    color: string;
    colorHex?: string;
    gradient: string;
    icon: string;
    contexte?: string;
    concept?: string;
    roles?: string;
    team?: string;
    missions?: ProjectDetail[];
    challenges?: ProjectDetail[];
}

const projects = computed<Project[]>(() => {
    void locale.value;

    return [
        {
            title: t('views.main.projects.items.tuuuur.title'),
            shortDescription: t('views.main.projects.items.tuuuur.shortDescription'),
            description: t('views.main.projects.items.tuuuur.description'),
            period: t('views.main.projects.items.tuuuur.period'),
            contexte: t('views.main.projects.items.tuuuur.context'),
            roles: t('views.main.projects.items.tuuuur.roles'),
            concept: t('views.main.projects.items.tuuuur.concept'),
            technologies: ['C#', '.NET Core', 'Vue.js', 'Flutter', 'SignalR', 'SQL Server', 'Redis', 'GCP', 'Terraform'],
            image: 'tuuuur',
            logo: 'tuuuur',
            logoZoom: 1,
            link: 'https://tuuuur.florent-dubut.fr/',
            github: 'https://github.com/TuuuurProject',
            color: 'deep-orange',
            colorHex: '#ff7043',
            gradient: 'linear-gradient(135deg, #ff7043 0%, #ff5722 100%)',
            icon: 'mdi-puzzle-multiple',
            missions: [
                {
                    heading: t('views.main.projects.items.tuuuur.missions.projectManagement.heading'),
                    items: [
                        t('views.main.projects.items.tuuuur.missions.projectManagement.items.0'),
                        t('views.main.projects.items.tuuuur.missions.projectManagement.items.1')
                    ]
                },
                {
                    heading: t('views.main.projects.items.tuuuur.missions.backend.heading'),
                    items: [
                        t('views.main.projects.items.tuuuur.missions.backend.items.0'),
                        t('views.main.projects.items.tuuuur.missions.backend.items.1')
                    ]
                },
                {
                    heading: t('views.main.projects.items.tuuuur.missions.realtime.heading'),
                    items: [
                        t('views.main.projects.items.tuuuur.missions.realtime.items.0'),
                        t('views.main.projects.items.tuuuur.missions.realtime.items.1'),
                        t('views.main.projects.items.tuuuur.missions.realtime.items.2')
                    ]
                },
                {
                    heading: t('views.main.projects.items.tuuuur.missions.database.heading'),
                    items: [
                        t('views.main.projects.items.tuuuur.missions.database.items.0'),
                        t('views.main.projects.items.tuuuur.missions.database.items.1'),
                        t('views.main.projects.items.tuuuur.missions.database.items.2')
                    ]
                },
                {
                    heading: t('views.main.projects.items.tuuuur.missions.cloud.heading'),
                    items: [
                        t('views.main.projects.items.tuuuur.missions.cloud.items.0'),
                        t('views.main.projects.items.tuuuur.missions.cloud.items.1'),
                        t('views.main.projects.items.tuuuur.missions.cloud.items.2')
                    ]
                }
            ],
            challenges: [
                {
                    heading: t('views.main.projects.items.tuuuur.challenges.algorithmic.heading'),
                    items: [
                        t('views.main.projects.items.tuuuur.challenges.algorithmic.items.0'),
                        t('views.main.projects.items.tuuuur.challenges.algorithmic.items.1'),
                        t('views.main.projects.items.tuuuur.challenges.algorithmic.items.2')
                    ]
                },
                {
                    heading: t('views.main.projects.items.tuuuur.challenges.performance.heading'),
                    items: [
                        t('views.main.projects.items.tuuuur.challenges.performance.items.0'),
                        t('views.main.projects.items.tuuuur.challenges.performance.items.1')
                    ]
                }
            ]
        },
        {
            title: t('views.main.projects.items.kairos.title'),
            shortDescription: t('views.main.projects.items.kairos.shortDescription'),
            description: t('views.main.projects.items.kairos.description'),
            period: t('views.main.projects.items.kairos.period'),
            contexte: t('views.main.projects.items.kairos.context'),
            roles: t('views.main.projects.items.kairos.roles'),
            concept: t('views.main.projects.items.kairos.concept'),
            technologies: ['TypeScript', 'Vue.js', 'Flutter', 'Node.js', 'PostgreSQL', 'JWT'],
            image: 'kairos',
            logo: 'kairos',
            logoZoom: 2,
            link: 'http://kairos.florent-dubut.fr/',
            github: 'https://github.com/SAE5-Kairos',
            color: 'blue',
            colorHex: '#42a5f5',
            gradient: 'linear-gradient(135deg, #42a5f5 0%, #1e88e5 100%)',
            icon: 'mdi-calendar-clock',
            missions: [
                {
                    heading: t('views.main.projects.items.kairos.missions.projectManagement.heading'),
                    items: [
                        t('views.main.projects.items.kairos.missions.projectManagement.items.0'),
                        t('views.main.projects.items.kairos.missions.projectManagement.items.1')
                    ]
                },
                {
                    heading: t('views.main.projects.items.kairos.missions.database.heading'),
                    items: [
                        t('views.main.projects.items.kairos.missions.database.items.0'),
                        t('views.main.projects.items.kairos.missions.database.items.1'),
                        t('views.main.projects.items.kairos.missions.database.items.2')
                    ]
                },
                {
                    heading: t('views.main.projects.items.kairos.missions.backend.heading'),
                    items: [
                        t('views.main.projects.items.kairos.missions.backend.items.0'),
                        t('views.main.projects.items.kairos.missions.backend.items.1'),
                        t('views.main.projects.items.kairos.missions.backend.items.2')
                    ]
                },
                {
                    heading: t('views.main.projects.items.kairos.missions.frontend.heading'),
                    items: [
                        t('views.main.projects.items.kairos.missions.frontend.items.0'),
                        t('views.main.projects.items.kairos.missions.frontend.items.1')
                    ]
                }
            ],
            challenges: [
                {
                    heading: t('views.main.projects.items.kairos.challenges.reliability.heading'),
                    items: [
                        t('views.main.projects.items.kairos.challenges.reliability.items.0')
                    ]
                },
                {
                    heading: t('views.main.projects.items.kairos.challenges.teamwork.heading'),
                    items: [
                        t('views.main.projects.items.kairos.challenges.teamwork.items.0'),
                        t('views.main.projects.items.kairos.challenges.teamwork.items.1')
                    ]
                }
            ]
        },
        {
            title: t('views.main.projects.items.portfolio.title'),
            shortDescription: t('views.main.projects.items.portfolio.shortDescription'),
            description: t('views.main.projects.items.portfolio.description'),
            technologies: ['Vue.js', 'Vuetify', 'TypeScript', 'Vite'],
            github: 'https://github.com/florentdubut/florent-dubut.fr',
            link: 'https://florent-dubut.fr',
            color: 'green-lighten-1',
            colorHex: '#81c784',
            gradient: 'linear-gradient(135deg, #81c784 0%, #66bb6a 100%)',
            icon: 'mdi-web'
        }
    ];
});

const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

const getProjectImage = (imageName: string | undefined) => {
    if (!imageName) return '';
    const imageMap: { [key: string]: string } = {
        'tuuuur': tuuuurImage,
        'kairos': kairosImage,
    };
    return imageMap[imageName] || '';
};

const getProjectLogo = (logoName: string | undefined) => {
    if (!logoName) return '';
    const logoMap: { [key: string]: string } = {
        'tuuuur': tuuuurLogo,
        'kairos': kairosLogo,
    };
    return logoMap[logoName] || '';
};

const hoveredProject = ref<Project | null>(null);
const selectedProject = ref<Project | null>(null);
const showDetailDialog = ref(false);

const openProjectDetail = (project: Project) => {
    selectedProject.value = project;
    showDetailDialog.value = true;
};
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
                        @mouseenter="hoveredProject = project"
                        @mouseleave="hoveredProject = null"
                        @click="openProjectDetail(project)"
                    >
                        <!-- Image section (16:9 aspect ratio) -->
                        <div v-if="project.image" class="project-image-section">
                            <img 
                                :src="getProjectImage(project.image)" 
                                :alt="project.title"
                                class="project-image"
                            >
                            <div v-if="project.logo" class="project-logo-badge">
                                <img 
                                    :src="getProjectLogo(project.logo)" 
                                    :alt="`${project.title} logo`"
                                    class="logo-img"
                                    :style="{
                                        width: '64px',
                                        height: '64px',
                                        transform: `scale(${project.logoZoom || 1})`
                                    }"
                                >
                            </div>
                            <div v-if="project.period" class="project-period">{{ project.period }}</div>
                        </div>
                        
                        <!-- Icon section (fallback for projects without image) -->
                        <div v-else class="project-icon-section" :style="{ background: project.gradient }">
                            <v-icon :icon="project.icon" size="64" color="white"></v-icon>
                            <div v-if="project.period" class="project-period">{{ project.period }}</div>
                        </div>

                        <v-card-text class="pa-6">
                            <h2 class="text-h5 font-weight-bold mb-2" :style="{ color: project.colorHex || project.color }">
                                {{ project.title }}
                            </h2>

                            <p v-if="project.roles" class="text-caption text-grey mb-3">
                                {{ project.roles }}
                            </p>

                            <p class="text-body-2 mb-4" style="line-height: 1.8;">
                                {{ project.shortDescription || project.description }}
                            </p>

                        </v-card-text>

                        <v-card-actions class="pa-6 pt-0 flex-wrap flex-col">
                            <v-divider class="w-100 mb-4"></v-divider>
                            
                            <div class="tech-stack mb-4 w-100">
                                <v-chip
                                    v-for="tech in project.technologies"
                                    :key="tech"
                                    size="small"
                                    :color="project.color"
                                    variant="flat"
                                    class="mr-2 mb-2"
                                    text-color="white"
                                >
                                    {{ tech }}
                                </v-chip>
                            </div>
                            <v-btn
                                :color="project.color"
                                variant="flat"
                                prepend-icon="mdi-information"
                                @click.stop="selectedProject = project; showDetailDialog = true"
                            >
                                {{ t('views.main.projects.details') }}
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                                v-if="project.link"
                                :color="project.color"
                                variant="outlined"
                                icon="mdi-open-in-new"
                                size="small"
                                @click.stop="openLink(project.link!)"
                            ></v-btn>
                            <v-btn
                                v-if="project.github"
                                :color="project.color"
                                variant="outlined"
                                icon="mdi-github"
                                size="small"
                                @click.stop="openLink(project.github!)"
                            ></v-btn>
                        </v-card-actions>

                        <div 
                            class="project-glow"
                            :class="{ 'project-glow-active': hoveredProject === project }"
                            :style="{ background: `radial-gradient(circle at center, ${project.color}40, transparent)` }"
                        ></div>
                    </v-card>
                </div>
            </v-col>
        </v-row>

        <!-- Detail Dialog -->
        <v-dialog 
            v-model="showDetailDialog" 
            max-width="1000px" 
            scrollable
            persistent
            transition="dialog-transition"
        >
            <v-card v-if="selectedProject" color="white" class="project-detail-modal">
                <!-- Header with gradient background -->
                <div class="project-detail-header" :style="{ background: selectedProject.gradient }">
                    <button 
                        class="close-btn"
                        @click="showDetailDialog = false"
                    >
                        ✕
                    </button>
                    
                    <div class="header-content">
                        <div class="header-top">
                            <div class="header-title-section">
                                <h2 class="project-title">
                                    {{ selectedProject.title }}
                                </h2>
                                <div v-if="selectedProject.period" class="header-period">
                                    <v-icon icon="mdi-calendar-range" size="18" class="mr-2"></v-icon>
                                    <span class="period-text">{{ selectedProject.period }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="header-bottom">
                        </div>
                    </div>
                </div>

                <v-card-text class="pa-8">
                    <!-- Project logo section -->
                    <div v-if="selectedProject.logo" class="project-logo-section-inline mb-6">
                        <img 
                            :src="getProjectLogo(selectedProject.logo)" 
                            :alt="`${selectedProject.title} logo`"
                            class="project-logo-display"
                            :style="{
                                transform: `scale(${selectedProject.logoZoom || 1})`
                            }"
                        >
                    </div>

                    <!-- Short description -->
                    <div class=" mb-6">
                        <p class="text-body-1 font-weight-medium" style="line-height: 1.8; color: rgba(0,0,0,0.8);">
                            {{ selectedProject.description }}
                        </p>
                    </div>

                    <v-divider class="my-6 opacity-30"></v-divider>

                    <!-- Contexte -->
                    <div v-if="selectedProject.contexte" class="mb-6">
                        <div class="d-flex align-center mb-3">
                            <v-icon icon="mdi-information" :color="selectedProject.color" class="mr-2"></v-icon>
                            <h3 class="text-h6 font-weight-bold mb-0">{{ t('views.main.projects.contextTitle') }}</h3>
                        </div>
                        <p class="text-body-2 ml-8" style="line-height: 1.8;">{{ selectedProject.contexte }}</p>
                    </div>

                    <!-- Concept -->
                    <div v-if="selectedProject.concept" class="mb-6">
                        <div class="d-flex align-center mb-3">
                            <v-icon icon="mdi-lightbulb-on" :color="selectedProject.color" class="mr-2"></v-icon>
                            <h3 class="text-h6 font-weight-bold mb-0">{{ t('views.main.projects.conceptTitle') }}</h3>
                        </div>
                        <p class="text-body-2 ml-8" style="line-height: 1.8;">{{ selectedProject.concept }}</p>
                    </div>

                    <v-divider v-if="selectedProject.missions || selectedProject.challenges" class="my-6 opacity-30"></v-divider>

                    <!-- Missions & Challenges -->
                    <div v-if="selectedProject.missions || selectedProject.challenges" class="detail-sections mb-6">
                        <!-- Missions -->
                        <div v-if="selectedProject.missions" class="mb-4">
                            <div class="d-flex align-center mb-4">
                                <v-icon icon="mdi-target" :color="selectedProject.color" class="mr-3"></v-icon>
                                <h3 class="text-h6 font-weight-bold mb-0">{{ t('views.main.projects.missionsTitle') }}</h3>
                            </div>
                            <div class="pl-6">
                                <div v-for="(mission, idx) in selectedProject.missions" :key="idx" class="mb-4">
                                    <div class="d-flex align-center mb-2">
                                        <div class="mission-marker" :style="{ backgroundColor: selectedProject.colorHex }"></div>
                                        <h4 class="font-weight-bold mb-0">{{ mission.heading }}</h4>
                                    </div>
                                    <ul class="ml-7">
                                        <li v-for="(item, itemIdx) in mission.items" :key="itemIdx" class="text-body-2 mb-2">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Challenges -->
                        <div v-if="selectedProject.challenges">
                            <div class="d-flex align-center mb-4">
                                <v-icon icon="mdi-rocket" :color="selectedProject.color" class="mr-3"></v-icon>
                                <h3 class="text-h6 font-weight-bold mb-0">{{ t('views.main.projects.challengesTitle') }}</h3>
                            </div>
                            <div class="pl-6">
                                <div v-for="(challenge, idx) in selectedProject.challenges" :key="idx" class="mb-4">
                                    <div class="d-flex align-center mb-2">
                                        <div class="challenge-marker" :style="{ backgroundColor: selectedProject.colorHex }"></div>
                                        <h4 class="font-weight-bold mb-0">{{ challenge.heading }}</h4>
                                    </div>
                                    <ul class="ml-7">
                                        <li v-for="(item, itemIdx) in challenge.items" :key="itemIdx" class="text-body-2 mb-2">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <v-divider class="my-6 opacity-30"></v-divider>

                    <!-- Technologies -->
                    <div class="tech-section">
                        <div class="d-flex align-center mb-4">
                            <v-icon icon="mdi-tools" :color="selectedProject.color" class="mr-2"></v-icon>
                            <h3 class="text-h6 font-weight-bold mb-0">{{ t('views.main.projects.technologiesTitle') }}</h3>
                        </div>
                        <div class="tech-chips-container">
                            <v-chip
                                v-for="tech in selectedProject.technologies"
                                :key="tech"
                                size="small"
                                :color="selectedProject.color"
                                variant="outlined"
                                class="mr-2 mb-2"
                                :text-color="selectedProject.color"
                            >
                                {{ tech }}
                            </v-chip>
                        </div>
                    </div>
                </v-card-text>

                <!-- Actions footer -->
                <v-card-actions class="pa-6 d-flex justify-end gap-2 border-t">
                    <v-btn
                        variant="text"
                        @click="showDetailDialog = false"
                    >
                        {{ t('views.main.projects.close') }}
                    </v-btn>
                    <v-btn
                        v-if="selectedProject.github"
                        :color="selectedProject.color"
                        variant="outlined"
                        prepend-icon="mdi-github"
                        @click="openLink(selectedProject.github!)"
                    >
                        {{ t('views.main.projects.code') }}
                    </v-btn>
                    <v-btn
                        v-if="selectedProject.link"
                        :color="selectedProject.color"
                        variant="flat"
                        prepend-icon="mdi-open-in-new"
                        @click="openLink(selectedProject.link!)"
                    >
                        {{ t('views.main.projects.visit') }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
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
    cursor: pointer;
    display: flex;
    flex-direction: column;
}

.project-card:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 20px 60px rgba(129, 199, 132, 0.3) !important;
    border-color: rgba(129, 199, 132, 0.4);
}

:deep(.project-card .v-card-text) {
    flex-grow: 1;
}

.project-image-section {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: #f0f0f0;
}

.project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-icon-section {
    width: 100%;
    aspect-ratio: 16 / 9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
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

.project-period {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    backdrop-filter: blur(10px);
    color: rgba(0, 0, 0, 0.8);
    padding: 0.5rem 1.5rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.project-logo-badge {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);
    padding: 0.75rem;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    border: 2px solid rgba(255, 255, 255, 0.2);
}

.logo-img {
    object-fit: contain;
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

.project-detail-header {
    padding: 3rem 2.5rem;
    position: relative;
    color: white;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
    overflow: hidden;
}

.project-detail-header::before {
    content: '';
    position: absolute;
    top: 0;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 100% 0%, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    pointer-events: none;
}

.close-btn {
    position: absolute;
    top: 50%;
    right: 1.5rem;
    transform: translateY(-50%);
    width: 44px;
    height: 44px;
    border: none;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
}

.close-btn:hover {
    background: rgba(255, 255, 255, 0.35);
}

.header-content {
    position: relative;
    z-index: 2;
}

.header-top {
    margin-bottom: 0;
}

.header-title-section {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    width: 100%;
    flex-wrap: nowrap;
}

.project-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin: 0;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    letter-spacing: -0.5px;
    white-space: nowrap;
}

.header-period {
    display: inline-flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    font-weight: 600;
    color: white;
    border: 1.5px solid rgba(255, 255, 255, 0.4);
    white-space: nowrap;
    font-size: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
}

.period-text {
    font-weight: 700;
    letter-spacing: 0.5px;
}

.header-bottom {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    padding-top: 0;
}

.header-roles {
    font-size: 0.95rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.85);
    margin: 0;
    flex: 1;
    letter-spacing: 0.3px;
}

.header-period {
    display: inline-flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    padding: 0.5rem 1.25rem;
    border-radius: 50px;
    font-size: 0.875rem;
    font-weight: 600;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
    white-space: nowrap;
}

.period-chip {
    background: rgba(255, 255, 255, 0.25) !important;
    backdrop-filter: blur(10px);
    border: 1.5px solid rgba(255, 255, 255, 0.5) !important;
    color: white !important;
    font-weight: 600;
}

.project-logo-section {
    width: 100%;
    padding: 3rem 2.5rem;
    background: linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 280px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.project-logo-section-inline {
    width: 100%;
    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.project-logo-display {
    max-width: 240px;
    max-height: 240px;
    width: auto;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.1));
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-logo-section:hover .project-logo-display {
    filter: drop-shadow(0 12px 32px rgba(0, 0, 0, 0.15));
    transform: translateY(-4px);
}

.description-section {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.01) 100%);
    padding: 1.5rem;
    border-radius: 12px;
    border-left: 4px solid currentColor;
}

.info-section {
    padding: 0;
}

.detail-sections {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.detail-block {
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    padding: 1.25rem;
    background: white;
}

.mission-item,
.challenge-item {
    padding: 1rem;
    background: rgba(0, 0, 0, 0.02);
    border-radius: 8px;
    border-left: 3px solid currentColor;
}

.mission-marker,
.challenge-marker {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 0.75rem;
}

.tech-section {
    padding: 0;
}

.tech-chips-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

:deep(.tech-chips-container .v-chip) {
    border-width: 2px;
    font-weight: 500;
}

.border-t {
    border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.gap-2 {
    gap: 0.5rem;
}

.gap-3 {
    gap: 1rem;
}

ul {
    list-style: none;
    padding-left: 0;
}

li {
    position: relative;
    padding-left: 1.5rem;
}

li:before {
    content: "▪";
    position: absolute;
    left: 0;
    color: currentColor;
    opacity: 0.6;
}

.project-detail-modal {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2) !important;
}

:deep(.project-detail-modal .v-card-text) {
    background: #fafafa;
}

@media (max-width: 960px) {
    .projects-grid {
        grid-template-columns: 1fr;
    }
}
</style>
