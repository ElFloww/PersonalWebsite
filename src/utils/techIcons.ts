/**
 * Mapping centralisé : nom d'outil → icône MDI
 * Utilisé dans les modals Expérience, Formation et Projets
 * pour afficher l'icône de chaque technologie comme dans la section Skills.
 */
export const TECH_ICONS: Record<string, string> = {
  // Langages
  'C#': 'mdi-language-csharp',
  'Java': 'mdi-language-java',
  'Python': 'mdi-language-python',
  'JavaScript': 'mdi-language-javascript',
  'TypeScript': 'mdi-language-typescript',
  'PHP': 'mdi-language-php',
  'C++': 'mdi-language-cpp',
  'Bash': 'mdi-console',
  'HTML/CSS': 'mdi-language-html5',
  'SQL': 'mdi-database-search',

  // .NET / Backend
  'ASP.NET Core': 'mdi-dot-net',
  'ASP.NET Core (.NET 6)': 'mdi-dot-net',
  'ASP.NET Core (.NET 6/.NET 8)': 'mdi-dot-net',
  '.NET Core': 'mdi-dot-net',
  'Entity Framework Core': 'mdi-database-cog',
  'MediatR': 'mdi-swap-horizontal',
  'CQRS': 'mdi-swap-horizontal',
  'REST': 'mdi-api',
  'SOAP': 'mdi-api',
  'Clean Architecture': 'mdi-layers-triple',
  'Injection de dépendances': 'mdi-needle',
  'AutoMapper': 'mdi-arrow-left-right',
  'xUnit': 'mdi-test-tube',
  'FluentValidation': 'mdi-check-decagram',
  'Swagger / OpenAPI': 'mdi-api',
  'API REST / SOAP': 'mdi-api',
  'Whisper IA (OpenAI)': 'mdi-microphone-ai',
  'WebSocket / SignalR': 'mdi-signal',
  'SignalR': 'mdi-signal',

  // Frontend
  'Vue.js': 'mdi-vuejs',
  'Vue.js 3': 'mdi-vuejs',
  'Vuetify': 'mdi-vuetify',
  'Vuetify 3': 'mdi-vuetify',
  'Angular': 'mdi-angular',
  'AngularJS': 'mdi-angular',
  'Flutter': 'mdi-flutter',
  'Vite': 'mdi-lightning-bolt',

  // Base de données
  'SQL Server': 'mdi-database',
  'PostgreSQL': 'mdi-database',
  'MariaDB': 'mdi-database',
  'MySQL': 'mdi-database',
  'MongoDB': 'mdi-database',
  'NoSQL': 'mdi-database-outline',
  'Redis': 'mdi-database-clock',
  'Firebase': 'mdi-firebase',

  // Cloud
  'Azure': 'mdi-microsoft-azure',
  'Microsoft Azure': 'mdi-microsoft-azure',
  'AWS': 'mdi-aws',
  'Amazon AWS': 'mdi-aws',
  'Google Cloud Platform': 'mdi-google-cloud',
  'Google Cloud Platform (GCP)': 'mdi-google-cloud',
  'GCP': 'mdi-google-cloud',

  // DevOps & Automation
  'Azure DevOps': 'mdi-microsoft-azure-devops',
  'GitLab CI': 'mdi-gitlab',
  'GitLab': 'mdi-gitlab',
  'GitHub Actions': 'mdi-github',
  'Git': 'mdi-git',
  'CI/CD': 'mdi-infinity',
  'Pipelines CI/CD': 'mdi-pipe',
  'Déploiements automatisés': 'mdi-rocket-launch',
  'Monitoring': 'mdi-monitor-eye',
  'Administration Linux': 'mdi-linux',
  'Linux': 'mdi-linux',

  // Conteneurs & Orchestration
  'Docker': 'mdi-docker',
  'Docker Swarm': 'mdi-docker',
  'Kubernetes': 'mdi-kubernetes',
  'Kubernetes (K8s)': 'mdi-kubernetes',

  // IaC
  'Terraform': 'mdi-terraform',
  'Terragrunt': 'mdi-file-tree',
  'ARM Templates': 'mdi-microsoft-azure',
  'Infrastructure as Code (IaC)': 'mdi-code-braces',

  // Homelab / Self-hosted
  'Proxmox': 'mdi-server-network',
  'Proxmox VE': 'mdi-server-network',
  'IPFire': 'mdi-lan',
  'Jellyfin': 'mdi-play-box-multiple',
  'Nextcloud': 'mdi-cloud-sync',
  'WireGuard': 'mdi-vpn',
  'Immich': 'mdi-image-multiple',
  'Pterodactyl': 'mdi-gamepad-variant',
  'Wings': 'mdi-gamepad-variant',
  'NGINX': 'mdi-web',
  'NGINX Proxy Manager': 'mdi-web-sync',
  'RAID': 'mdi-harddisk',
  'RAID 1': 'mdi-harddisk',
  'VMs & LXC': 'mdi-cube-outline',
  'LXC': 'mdi-cube-outline',
  'SSL/TLS': 'mdi-lock',
  'Reverse Proxy': 'mdi-swap-horizontal-bold',

  // Autres
  'Agile': 'mdi-sync',
  'Scrum': 'mdi-refresh',
  'Méthode Agile (Scrum)': 'mdi-sync',
  'Revues de code': 'mdi-code-review',
  'Proxmox': 'mdi-server',
};

/**
 * Retourne l'icône MDI pour un outil donné.
 * Fallback sur mdi-check-circle si non trouvé.
 */
export function getToolIcon(toolName: string): string {
  return TECH_ICONS[toolName] ?? 'mdi-check-circle';
}
