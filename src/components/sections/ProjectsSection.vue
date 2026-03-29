<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import tuuuurImage from '@/assets/images/tuuuur.png';
import kairosImage from '@/assets/images/kairos.png';
import tuuuurLogo from '@/assets/images/tuuuur_logo.png';
import kairosLogo from '@/assets/images/kairos_logo.png';

const { t } = useI18n();

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

const projects: Project[] = [
{
        title: 'Tuuuur',
        shortDescription: 'Application de Quiz Multiplateforme (Web & Mobile) - Projet Master Cloud Computing.',
        description: 'Tuuuur est une application de quiz multiplateforme pensée pour combiner divertissement, apprentissage et compétition avec des salons multijoueurs et du duel compétitif.',
        period: '2025 - 2026',
        contexte: 'Projet thématique réalisé dans le cadre du Master Cloud Computing & Mobility (UPJV). Équipe : Projet réalisé à 3 avec Gaël Grosset et Killian Lefrancois.',
        roles: 'Chef de projet, Concepteur, Architecte Cloud (GCP) et Développeur Back-End / BDD.',
        concept: 'Tuuuur propose des salons multijoueurs (générés par QR Code), du duel compétitif en 1v1 (avec points de vie et multiplicateurs), ainsi qu\'un mode solo d\'entraînement.',
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
                heading: 'Pilotage & Conception (Chef de Projet)',
                items: [
                    'Animation de l\'équipe, distribution des tâches et pilotage global du projet en méthode Agile (sprints Scrum)',
                    'Rédaction du cahier des charges et modélisation technique de l\'architecture'
                ]
            },
            {
                heading: 'Architecture Back-End (C# .NET)',
                items: [
                    'Conception et développement d\'une API REST robuste basée sur les principes de la Clean Architecture',
                    'Garantie de la modularité du code pour une maintenance optimale'
                ]
            },
            {
                heading: 'Synchronisation Temps Réel (SignalR)',
                items: [
                    'Mise en place de WebSockets via SignalR pour assurer une communication bidirectionnelle à très faible latence',
                    'Synchronisation des questions pour tous les joueurs d\'un salon simultanément',
                    'Gestion des affrontements 1v1 en temps réel'
                ]
            },
            {
                heading: 'Bases de Données (SQL Server & Redis)',
                items: [
                    'Modélisation et gestion de SQL Server pour la persistance des données complexes (profils utilisateurs, historiques, calcul du classement Elo)',
                    'Intégration de Redis pour la gestion du cache et l\'optimisation du système de matchmaking ultra-rapide',
                    'Stockage des sessions en cours pour une résilience optimale'
                ]
            },
            {
                heading: 'Architecture Cloud & DevOps (GCP & Terraform)',
                items: [
                    'Conception d\'une infrastructure scalable sur Google Cloud Platform (GCP)',
                    'Automatisation complète des déploiements grâce à l\'Infrastructure as Code (IaC) avec Terraform',
                    'Garantie de la sécurité et de la reproductibilité des environnements'
                ]
            }
        ],
        challenges: [
            {
                heading: 'Algorithmique & Équité',
                items: [
                    'Développement de la logique métier gérant le "matching" des thèmes entre joueurs',
                    'Implémentation du système de survie (points de vie dégressifs)',
                    'Implémentation de l\'algorithme d\'Elo pour classer dynamiquement les utilisateurs'
                ]
            },
            {
                heading: 'Performance',
                items: [
                    'Assurer que l\'API et les bases de données (SQL + Redis) supportent la charge de multiples connexions simultanées',
                    'Garantir la désynchronisation entre les applications web et mobiles'
                ]
            }
        ]
    },
    {
        title: 'Kairos',
        shortDescription: 'Application de Gestion d\'Emploi du Temps - Projet de fin d\'études SAE 6.',
        description: 'Kairos est une application complète (Web et Mobile) dédiée à la gestion des emplois du temps universitaires, développée comme projet de fin d\'études.',
        period: '2023 - 2024',
        contexte: 'Projet de fin d\'études (SAE 6) d\'amélioration continue d\'une application existante, réalisé au sein du département Informatique de l\'IUT d\'Amiens. Équipe : Projet réalisé à 4 collaborateurs (avec Gaël Grosset, Killian Lefrancois et Enzo Pinchon).',
        roles: 'Chef de projet, Concepteur de bases de données, Développeur API et intégrateur de données réelles.',
        concept: 'L\'objectif de cette ultime phase de développement (SAE 6) était d\'apporter des améliorations critiques à l\'existant : sécurisation de l\'API, optimisation de l\'expérience utilisateur et refactoring complet du code pour garantir la pérennité du logiciel.',
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
                heading: 'Pilotage & Gestion de Projet',
                items: [
                    'Coordination de l\'équipe pour surmonter les défis initiaux',
                    'Mise en place d\'une communication ouverte pour s\'adapter à nos différents environnements de travail (alternance) et maintenir la productivité'
                ]
            },
            {
                heading: 'Conception & Base de Données',
                items: [
                    'Mise à jour et correction du Modèle Conceptuel de Données (MCD)',
                    'Refactoring en profondeur des tables de la base de données pour améliorer la maintenabilité',
                    'Data Engineering : Création, formatage et injection de jeux de données réelles basés sur les véritables plannings de l\'IUT d\'Amiens'
                ]
            },
            {
                heading: 'Développement API (Back-End)',
                items: [
                    'Développement et sécurisation de l\'API via l\'implémentation de décorateurs vérifiant l\'authenticité des requêtes',
                    'Gestion minutieuse des erreurs (absence de token, non-autorisation, token expiré ou erroné)',
                    'Nettoyage du code et modification des noms de fonctions pour réduire la complexité'
                ]
            },
            {
                heading: 'Développement Front-End',
                items: [
                    'Appui ponctuel sur la partie Front-End Web pour assurer la liaison avec l\'API',
                    'Résolution de bugs spécifiques et fluidification de l\'expérience utilisateur'
                ]
            }
        ],
        challenges: [
            {
                heading: 'Fiabilité & Tests',
                items: [
                    'Réalisation de nombreux tests pour garantir le bon fonctionnement final du produit après le refactoring massif'
                ]
            },
            {
                heading: 'Cohésion d\'équipe',
                items: [
                    'Maintien d\'un équilibre entre les exigences du projet et nos vies professionnelles',
                    'Transformation de nos inquiétudes initiales en une forte motivation collective'
                ]
            }
        ]
    },

        {
        title: 'Portfolio Personnel',
        shortDescription: 'Site web personnel développé avec Vue.js et Vuetify, présentant mon parcours, mes compétences et mes projets.',
        description: 'Site web personnel développé avec Vue.js et Vuetify, présentant mon parcours, mes compétences et mes projets. C\'est le même site que je développe en ce moment.',
        technologies: ['Vue.js', 'Vuetify', 'TypeScript', 'Vite'],
        github: 'https://github.com/florentdubut/florent-dubut.fr',
        link: 'https://florent-dubut.fr',
        color: 'green-lighten-1',
        colorHex: '#81c784',
        gradient: 'linear-gradient(135deg, #81c784 0%, #66bb6a 100%)',
        icon: 'mdi-web'
    }
];

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
                            <div class="project-number">#{{ index + 1 }}</div>
                            <div v-if="project.period" class="project-period">{{ project.period }}</div>
                        </div>
                        
                        <!-- Icon section (fallback for projects without image) -->
                        <div v-else class="project-icon-section" :style="{ background: project.gradient }">
                            <v-icon :icon="project.icon" size="64" color="white"></v-icon>
                            <div class="project-number">#{{ index + 1 }}</div>
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
                                Détails
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
            max-width="900px" 
            scrollable
            persistent
        >
            <v-card v-if="selectedProject" color="white">
                <div class="project-detail-header" :style="{ background: selectedProject.gradient }">
                    <div class="d-flex justify-space-between align-start px-6 pt-6">
                        <div class="flex-grow-1">
                            <h2 class="text-h4 text-white font-weight-bold">
                                {{ selectedProject.title }}
                            </h2>
                        </div>
                        <v-btn 
                            icon="mdi-close" 
                            color="white"
                            variant="text"
                            @click="showDetailDialog = false"
                        ></v-btn>
                    </div>
                    <p v-if="selectedProject.period" class="period-badge">{{ selectedProject.period }}</p>
                </div>

                <v-card-text class="pa-8">
                    <!-- Contexte -->
                    <div v-if="selectedProject.contexte" class="mb-8">
                        <h3 class="text-h6 font-weight-bold mb-3">📋 Contexte</h3>
                        <p class="text-body-2" style="line-height: 1.8;">{{ selectedProject.contexte }}</p>
                    </div>

                    <!-- Concept -->
                    <div v-if="selectedProject.concept" class="mb-8">
                        <h3 class="text-h6 font-weight-bold mb-3">💡 Le Concept</h3>
                        <p class="text-body-2" style="line-height: 1.8;">{{ selectedProject.concept }}</p>
                    </div>

                    <!-- Missions -->
                    <div v-if="selectedProject.missions" class="mb-8">
                        <h3 class="text-h6 font-weight-bold mb-4">🎯 Mes Missions & Réalisations Techniques</h3>
                        <div v-for="(mission, idx) in selectedProject.missions" :key="idx" class="mb-4">
                            <h4 class="font-weight-bold mb-2 text-grey-darken-1">{{ mission.heading }}</h4>
                            <ul class="ml-4">
                                <li v-for="(item, itemIdx) in mission.items" :key="itemIdx" class="text-body-2 mb-1">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Challenges -->
                    <div v-if="selectedProject.challenges" class="mb-8">
                        <h3 class="text-h6 font-weight-bold mb-4">🚀 Défis Relevés & Enseignements</h3>
                        <div v-for="(challenge, idx) in selectedProject.challenges" :key="idx" class="mb-4">
                            <h4 class="font-weight-bold mb-2 text-grey-darken-1">{{ challenge.heading }}</h4>
                            <ul class="ml-4">
                                <li v-for="(item, itemIdx) in challenge.items" :key="itemIdx" class="text-body-2 mb-1">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Technologies -->
                    <div class="mb-8">
                        <h3 class="text-h6 font-weight-bold mb-3">🛠️ Technologies</h3>
                        <div>
                            <v-chip
                                v-for="tech in selectedProject.technologies"
                                :key="tech"
                                size="small"
                                :color="selectedProject.color"
                                variant="flat"
                                class="mr-2 mb-2"
                                text-color="white"
                            >
                                {{ tech }}
                            </v-chip>
                        </div>
                    </div>
                </v-card-text>

                <v-card-actions class="pa-6">
                    <v-spacer></v-spacer>
                    <v-btn
                        v-if="selectedProject.link"
                        :color="selectedProject.color"
                        variant="flat"
                        prepend-icon="mdi-open-in-new"
                        @click="openLink(selectedProject.link!)"
                        class="mr-2"
                    >
                        Visiter
                    </v-btn>
                    <v-btn
                        v-if="selectedProject.github"
                        :color="selectedProject.color"
                        variant="outlined"
                        prepend-icon="mdi-github"
                        @click="openLink(selectedProject.github!)"
                        class="mr-2"
                    >
                        GitHub
                    </v-btn>
                    <v-btn
                        :color="selectedProject.color"
                        variant="text"
                        @click="showDetailDialog = false"
                    >
                        Fermer
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
    padding: 2rem;
    position: relative;
    color: white;
}

.period-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: white;
    backdrop-filter: blur(10px);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    margin: 0;
    color: rgba(0, 0, 0, 0.8);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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

@media (max-width: 960px) {
    .projects-grid {
        grid-template-columns: 1fr;
    }
}
</style>
