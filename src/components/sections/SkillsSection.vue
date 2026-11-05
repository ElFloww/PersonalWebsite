<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionHeader from '@/components/shared/SectionHeader.vue'

const { t } = useI18n()

const core = new Set(['C#', 'ASP.NET Core', 'TypeScript', 'Vue.js 3', 'Angular', 'SQL Server', 'Entity Framework', 'Docker', 'Azure DevOps', 'GitLab', 'Terraform', 'Terragrunt', 'Amazon AWS'])

const groups: { key: string; skills: string[] }[] = [
  { key: 'programming', skills: ['C#', 'ASP.NET Core', 'Blazor', 'MAUI', 'TypeScript', 'Vue.js 3', 'Angular', 'Python', 'Bash'] },
  { key: 'cloud', skills: ['Google Cloud Platform', 'Amazon AWS', 'Microsoft Azure'] },
  { key: 'devops', skills: ['Terraform', 'Terragrunt', 'Azure DevOps', 'GitLab', 'GitHub Actions', 'Linux', 'Proxmox'] },
  { key: 'containers', skills: ['Docker', 'Docker Swarm', 'Kubernetes', 'Microservices'] },
  { key: 'data', skills: ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Entity Framework', 'WebSocket / SignalR', 'Firebase', 'Git'] },
  { key: 'ai', skills: ['Claude Code', 'GitHub Copilot'] },
]
</script>

<template>
  <section id="skills" class="section section--soft">
    <div class="wrap grid gap-12 lg:grid-cols-12">
      <div class="lg:col-span-4">
        <SectionHeader
          :title="t('views.main.skills.sectionTitle')"
          :description="t('views.main.skills.introduction')"
        />
      </div>

      <div class="lg:col-span-8">
      <p class="m-0 mb-8 inline-flex items-center gap-2 text-[0.95rem] text-muted"><span class="tag tag--core !py-0 !text-[0.8rem]" aria-hidden="true">C#</span>{{ t('views.main.ui.skillsLegend') }}</p>
      <dl class="m-0">
        <div v-for="g in groups" :key="g.key" class="grid gap-3 border-t border-line py-7 first:border-t-0 first:pt-0 sm:grid-cols-[13rem_1fr] sm:gap-8">
          <dt class="font-display text-xl font-bold text-ink">{{ t(`views.main.skills.groups.${g.key}`) }}</dt>
          <dd class="m-0">
            <ul class="m-0 flex list-none flex-wrap gap-2 p-0">
              <li v-for="s in g.skills" :key="s" class="tag" :class="{ 'tag--core': core.has(s) }">{{ s }}</li>
            </ul>
          </dd>
        </div>
      </dl>
      </div>
    </div>
  </section>
</template>
