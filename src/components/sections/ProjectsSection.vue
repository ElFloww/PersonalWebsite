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

interface ProjectTechCategory {
    category: string;
    icon: string;
    color: string;
    gradient: string;
    tools: string[];
}

interface Project {
    title: string;
    description: string;
    shortDescription?: string;
    period?: string;
    technologies: string[];
    techCategories?: ProjectTechCategory[];
    additionalTechnologies?: string[];
    image?: string;
    logo?: string;
    logoZoom?: number;
    logoBackground?: string;
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
            techCategories: [
                {
                    category: "Cloud Platforms",
                    icon: "mdi-cloud-outline",
                    color: "#1976D2",
                    gradient: "linear-gradient(135deg, #2196F3 0%, #1565C0 100%)",
                    tools: ["Google Cloud Platform"]
                },
                {
                    category: "DevOps & Automation",
                    icon: "mdi-cog-sync",
                    color: "#43A047",
                    gradient: "linear-gradient(135deg, #66BB6A 0%, #388E3C 100%)",
                    tools: ["Terraform", "CI/CD", "GitHub Actions"]
                },
                {
                    category: "Programming & Scripting",
                    icon: "mdi-code-braces",
                    color: "#FB8C00",
                    gradient: "linear-gradient(135deg, #FFA726 0%, #FB8C00 100%)",
                    tools: ["C#", ".NET Core", "Vue.js", "Flutter"]
                }
            ],
            additionalTechnologies: ["SignalR", "SQL Server", "Redis"],
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
            technologies: ['Vue.js', 'JavaScript', 'Python', 'MariaDB', 'CI/CD'],
            techCategories: [
                {
                    category: "Programming & Scripting",
                    icon: "mdi-code-braces",
                    color: "#FB8C00",
                    gradient: "linear-gradient(135deg, #FFA726 0%, #FB8C00 100%)",
                    tools: ["Vue.js", "JavaScript", "Python"]
                },
                {
                    category: "DevOps & Automation",
                    icon: "mdi-cog-sync",
                    color: "#43A047",
                    gradient: "linear-gradient(135deg, #66BB6A 0%, #388E3C 100%)",
                    tools: ["CI/CD"]
                }
            ],
            additionalTechnologies: ["MariaDB"],
            image: 'kairos',
            logo: 'kairos',
            logoZoom: 2,
            logoBackground: '#000000',
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
            technologies: ['Vue.js 3', 'Vuetify 3', 'TypeScript', 'Vite'],
            techCategories: [
                {
                    category: "Programming & Scripting",
                    icon: "mdi-code-braces",
                    color: "#FB8C00",
                    gradient: "linear-gradient(135deg, #FFA726 0%, #FB8C00 100%)",
                    tools: ["TypeScript", "Vue.js 3", "Vuetify 3", "Vite"]
                }
            ],
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
                    <h1 class="text-h2 font-weight-bold mb-4">
                        {{ t('views.main.projects.sectionTitle') }}
                    </h1>
                    <p class="introduction-text text-body1 text-grey-darken-1 mb-6 font-weight-500">
                        {{ t('views.main.projects.sectionDescription') }}
                    </p>
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
        <v-dialog v-model="showDetailDialog" max-width="940">
            <v-card v-if="selectedProject" class="detailed-dialog project-dialog">
                <div class="dialog-accent" :style="{ background: selectedProject.gradient }"></div>

                <div class="dialog-header">
                    <div class="dialog-header-main">
                        <div class="project-logo-dialog" v-if="selectedProject.logo || selectedProject.icon" :style="selectedProject.logo ? { background: selectedProject.logoBackground || 'var(--surface)' } : { background: selectedProject.gradient, border: 'none' }">
                            <img
                                v-if="selectedProject.logo"
                                :src="getProjectLogo(selectedProject.logo)"
                                :alt="selectedProject.title"
                                class="project-logo-img-dialog"
                                :style="{ transform: `scale(${selectedProject.logoZoom || 1})` }"
                            />
                            <v-icon v-else :icon="selectedProject.icon" size="32" color="white"></v-icon>
                        </div>

                        <div class="dialog-heading-copy">
                            <p class="dialog-kicker mb-2" :style="{ color: selectedProject.colorHex || 'var(--ink)', background: selectedProject.colorHex ? `${selectedProject.colorHex}15` : 'rgba(0,0,0,0.05)' }">
                                {{ selectedProject.period || 'Projet' }}
                            </p>
                            <h2 class="text-h5 font-weight-bold mb-1">
                                {{ selectedProject.title }}
                            </h2>
                            <p v-if="selectedProject.roles" class="dialog-company text-subtitle-2 mb-0">
                                {{ selectedProject.roles }}
                            </p>
                        </div>
                    </div>

                    <v-btn
                        icon="mdi-close"
                        variant="text"
                        density="comfortable"
                        class="dialog-close"
                        @click="showDetailDialog = false"
                    ></v-btn>
                </div>

                <v-card-text class="dialog-body pa-6 pt-2">
                    <div class="dialog-meta mb-6">
                        <v-chip v-if="selectedProject.period" :color="selectedProject.color" variant="tonal" size="small">
                            <v-icon icon="mdi-calendar-outline" start size="small"></v-icon>
                            {{ selectedProject.period }}
                        </v-chip>
                        <v-chip v-if="selectedProject.github" :color="selectedProject.color" variant="tonal" size="small" @click="openLink(selectedProject.github!)" style="cursor: pointer;">
                            <v-icon icon="mdi-github" start size="small"></v-icon>
                            {{ t('views.main.projects.code') }}
                        </v-chip>
                        <v-chip v-if="selectedProject.link" :color="selectedProject.color" variant="tonal" size="small" @click="openLink(selectedProject.link!)" style="cursor: pointer;">
                            <v-icon icon="mdi-open-in-new" start size="small"></v-icon>
                            {{ t('views.main.projects.visit') }}
                        </v-chip>
                    </div>

                    <div class="dialog-grid" :class="{ 'dialog-grid--single': !selectedProject.missions && !selectedProject.challenges }">
                        <div class="dialog-grid-left">
                            <section class="dialog-panel mb-4">
                                <h3 class="panel-title d-flex align-center mb-3">
                                    <v-icon :color="selectedProject.color" icon="mdi-text-box-outline" class="mr-2"></v-icon>
                                    Description
                                </h3>
                                <p class="panel-text">{{ selectedProject.description }}</p>

                                <template v-if="selectedProject.contexte">
                                    <h3 class="panel-title d-flex align-center mt-6 mb-3">
                                        <v-icon :color="selectedProject.color" icon="mdi-information-outline" class="mr-2"></v-icon>
                                        {{ t('views.main.projects.contextTitle') }}
                                    </h3>
                                    <p class="panel-text">{{ selectedProject.contexte }}</p>
                                </template>

                                <template v-if="selectedProject.concept">
                                    <h3 class="panel-title d-flex align-center mt-6 mb-3">
                                        <v-icon :color="selectedProject.color" icon="mdi-lightbulb-on-outline" class="mr-2"></v-icon>
                                        {{ t('views.main.projects.conceptTitle') }}
                                    </h3>
                                    <p class="panel-text">{{ selectedProject.concept }}</p>
                                </template>
                            </section>

                            <section v-if="selectedProject.techCategories" class="dialog-panel dialog-panel--soft">
                                <h3 class="panel-title d-flex align-center mb-4">
                                    <v-icon :color="selectedProject.color" icon="mdi-code-tags" class="mr-2"></v-icon>
                                    Stack Technique
                                </h3>
                                <div class="education-categories-grid">
                                    <v-card
                                        v-for="category in selectedProject.techCategories"
                                        :key="category.category"
                                        class="technical-card mb-4"
                                        elevation="0"
                                    >
                                        <v-card-text class="pa-4">
                                            <div class="technical-card-header mb-4">
                                                <div class="technical-title-wrap">
                                                    <div class="technical-icon" :style="{ background: category.gradient }">
                                                        <v-icon :icon="category.icon" size="20" color="white"></v-icon>
                                                    </div>
                                                    <h4 class="text-subtitle-1 font-weight-bold ma-0">{{ category.category }}</h4>
                                                </div>
                                            </div>
                                            <div class="skills-mini-grid">
                                                <v-sheet
                                                    v-for="tool in category.tools"
                                                    :key="tool"
                                                    class="skill-mini-card"
                                                    rounded="lg"
                                                    :style="{ borderColor: category.color }"
                                                >
                                                    <v-icon :color="category.color" icon="mdi-check-circle" size="18" class="mr-2"></v-icon>
                                                    {{ tool }}
                                                </v-sheet>
                                            </div>
                                        </v-card-text>
                                    </v-card>
                                </div>
                                
                                <div v-if="selectedProject.additionalTechnologies && selectedProject.additionalTechnologies.length > 0" class="mt-6">
                                    <h4 class="text-subtitle-1 font-weight-bold mb-3 d-flex align-center">
                                        Additional Technologies
                                    </h4>
                                    <div class="additional-tech">
                                        <v-chip
                                            v-for="tech in selectedProject.additionalTechnologies"
                                            :key="tech"
                                            class="ma-1"
                                            variant="outlined"
                                            color="grey-darken-1"
                                            size="small"
                                        >
                                            {{ tech }}
                                        </v-chip>
                                    </div>
                                </div>
                            </section>
                            
                            <section v-else-if="selectedProject.technologies" class="dialog-panel dialog-panel--soft">
                                <h3 class="panel-title d-flex align-center mb-4">
                                    <v-icon :color="selectedProject.color" icon="mdi-code-tags" class="mr-2"></v-icon>
                                    Stack Technique
                                </h3>
                                <div class="skills-mini-grid">
                                    <v-sheet
                                        v-for="tech in selectedProject.technologies"
                                        :key="tech"
                                        class="skill-mini-card"
                                        rounded="lg"
                                        :style="{ borderColor: selectedProject.colorHex || 'var(--line)' }"
                                    >
                                        <v-icon :color="selectedProject.colorHex || selectedProject.color" icon="mdi-check-circle" size="18" class="mr-2"></v-icon>
                                        {{ tech }}
                                    </v-sheet>
                                </div>
                            </section>
                        </div>

                        <div v-if="selectedProject.missions || selectedProject.challenges" class="dialog-grid-right">
                            <section class="dialog-panel h-100">
                                <template v-if="selectedProject.missions">
                                    <h3 class="panel-title d-flex align-center mb-4">
                                        <v-icon :color="selectedProject.color" icon="mdi-target" class="mr-2"></v-icon>
                                        {{ t('views.main.projects.missionsTitle') }}
                                    </h3>
                                    <div class="dialog-copy-stack mb-6">
                                        <div v-for="(mission, idx) in selectedProject.missions" :key="idx" class="mb-4">
                                            <h4 class="font-weight-bold text-subtitle-2 mb-2 d-flex align-center" style="color: var(--ink)">
                                                <v-icon :color="selectedProject.colorHex || selectedProject.color" icon="mdi-chevron-right-box" size="18" class="mr-2"></v-icon>
                                                {{ mission.heading }}
                                            </h4>
                                            <v-list density="compact" bg-color="transparent" class="mission-list pa-0">
                                                <v-list-item v-for="(item, itemIdx) in mission.items" :key="itemIdx" class="px-0 mb-2 pb-1">
                                                    <template #prepend>
                                                        <v-icon :color="selectedProject.colorHex || selectedProject.color" icon="mdi-arrow-right-circle" size="20" class="mr-3"></v-icon>
                                                    </template>
                                                    <v-list-item-title class="text-body-2 mission-text">{{ item }}</v-list-item-title>
                                                </v-list-item>
                                            </v-list>
                                        </div>
                                    </div>
                                </template>

                                <template v-if="selectedProject.challenges">
                                    <v-divider v-if="selectedProject.missions" class="mb-6"></v-divider>
                                    <h3 class="panel-title d-flex align-center mb-4">
                                        <v-icon :color="selectedProject.color" icon="mdi-rocket-launch-outline" class="mr-2"></v-icon>
                                        {{ t('views.main.projects.challengesTitle') }}
                                    </h3>
                                    <div class="dialog-copy-stack">
                                        <div v-for="(challenge, idx) in selectedProject.challenges" :key="idx" class="mb-4">
                                            <h4 class="font-weight-bold text-subtitle-2 mb-2 d-flex align-center" style="color: var(--ink)">
                                                <v-icon :color="selectedProject.colorHex || selectedProject.color" icon="mdi-alert-decagram-outline" size="18" class="mr-2"></v-icon>
                                                {{ challenge.heading }}
                                            </h4>
                                            <v-list density="compact" bg-color="transparent" class="mission-list pa-0">
                                                <v-list-item v-for="(item, itemIdx) in challenge.items" :key="itemIdx" class="px-0 mb-2 pb-1">
                                                    <template #prepend>
                                                        <v-icon :color="selectedProject.colorHex || selectedProject.color" icon="mdi-lightning-bolt-circle" size="20" class="mr-3"></v-icon>
                                                    </template>
                                                    <v-list-item-title class="text-body-2 mission-text">{{ item }}</v-list-item-title>
                                                </v-list-item>
                                            </v-list>
                                        </div>
                                    </div>
                                </template>
                            </section>
                        </div>
                    </div>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<style scoped>
.projects-section {
    background: transparent;
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
    transform: translateY(-10px) scale(1.01);
    box-shadow: var(--shadow-card) !important;
    border-color: rgba(47, 109, 78, 0.08);
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
    background: var(--surface);
    color: var(--ink);
    padding: 0.45rem 1.25rem;
    border-radius: 18px;
    font-size: 0.875rem;
    font-weight: 600;
    box-shadow: 0 6px 16px rgba(15, 29, 20, 0.06);
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

.project-dialog {
    background: var(--surface);
    box-shadow: var(--shadow-card);
    border-radius: 14px;
    overflow: hidden;
}

.dialog-accent {
    height: 6px;
}

.dialog-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
    padding: 1.25rem 1.5rem 0.5rem;
}

.dialog-header-main {
    display: flex;
    align-items: center;
    gap: 1rem;
    min-width: 0;
}

.project-logo-dialog {
    background: var(--surface);
    border: 1px solid var(--line);
    box-shadow: var(--shadow-soft);
    border-radius: 10px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    width: 64px;
    height: 64px;
}

.project-logo-img-dialog {
    max-height: 48px;
    max-width: 48px;
    object-fit: contain;
}

.dialog-heading-copy {
    min-width: 0;
}

.dialog-kicker {
    display: inline-flex;
    align-items: center;
    padding: 0.3rem 0.65rem;
    border-radius: 999px;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.dialog-company {
    color: var(--ink-muted);
}

.dialog-close {
    margin-top: -0.15rem;
}

.dialog-body {
    display: flex;
    flex-direction: column;
}

.dialog-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.dialog-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(300px, 0.9fr);
    gap: 1rem;
}

.dialog-grid--single {
    grid-template-columns: 1fr;
}

.dialog-panel {
    border: 1px solid var(--line);
    border-radius: 14px;
    background: #fff;
    padding: 1.15rem;
    box-shadow: var(--shadow-soft);
}

.dialog-panel--soft {
    background: var(--surface-muted);
}

.panel-title {
    font-size: 0.98rem;
    font-weight: 700;
    color: var(--ink);
}

.panel-text {
    line-height: 1.8;
    color: var(--ink-muted);
    font-size: 0.96rem;
}

.dialog-copy-stack {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.mission-list {
    border-radius: 8px;
}

.mission-list .v-list-item {
    border-radius: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}

.mission-list .v-list-item:last-child {
    border-bottom: none;
}

.mission-text {
    white-space: normal;
    line-height: 1.65;
    color: var(--ink);
}

.skills-mini-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 0.65rem;
}

.skill-mini-card {
    border: 1px solid var(--line);
    background: linear-gradient(180deg, #ffffff 0%, #f8fcf8 100%);
    border-radius: 10px;
    min-height: 48px;
    height: auto;
    padding: 0.55rem 0.7rem;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 0.88rem;
    color: var(--ink);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    white-space: normal;
    word-break: break-word;
    overflow-wrap: break-word;
    line-height: 1.25;
}

.skill-mini-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-soft);
}

.education-categories-grid {
    display: flex;
    flex-direction: column;
}

.technical-card {
    border: 1px solid var(--line);
    border-radius: 14px;
    background: var(--surface);
    box-shadow: var(--shadow-soft);
    transition: transform 0.22s ease, box-shadow 0.22s ease;
}

.technical-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-card);
}

.technical-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.technical-title-wrap {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.technical-icon {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
}

.additional-tech {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0.5rem;
}

.additional-tech .v-chip {
    border-radius: 999px;
    background: rgba(245,245,245,0.8);
    color: var(--ink);
}

.dialog-actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
}

@media (max-width: 960px) {
    .projects-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 600px) {
    .dialog-header {
        padding-inline: 1rem;
    }
    
    .dialog-header-main {
        align-items: flex-start;
    }
    
    .dialog-grid {
        grid-template-columns: 1fr;
    }
    
    .dialog-panel {
        padding: 1rem;
    }

    .skills-mini-grid {
        grid-template-columns: 1fr;
    }
}
</style>