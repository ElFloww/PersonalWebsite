<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const services = [
  { name: 'Jellyfin', x: 432, y: 90 },
  { name: 'Nextcloud', x: 528, y: 90 },
  { name: 'Immich', x: 432, y: 146 },
  { name: 'Pterodactyl', x: 528, y: 146 },
]
const disks = [446, 504, 562]
</script>

<template>
  <svg viewBox="0 0 640 360" role="img" :aria-label="t('views.main.projects.homelabAlt')" class="text-ink" font-family="inherit">
    <defs>
      <marker id="hl-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0L10 5L0 10z" fill="var(--line-strong)" />
      </marker>
    </defs>
    <rect width="640" height="360" fill="var(--accent-soft)" />

    <g stroke="var(--line-strong)" stroke-width="2" fill="none" marker-end="url(#hl-arrow)">
      <path d="M100 180H128" />
      <path d="M240 180H252Q260 180 260 172V123Q260 115 268 115H268" />
      <path d="M240 180H252Q260 180 260 188V237Q260 245 268 245H268" />
      <path d="M400 115H418" />
      <path d="M400 245H418" />
    </g>

    <g fill="var(--surface)" stroke="var(--line-strong)" stroke-width="1.5">
      <rect x="20" y="150" width="80" height="60" rx="12" />
      <rect x="270" y="85" width="130" height="60" rx="12" />
      <rect x="270" y="215" width="130" height="60" rx="12" />
    </g>
    <rect x="130" y="135" width="110" height="90" rx="14" fill="var(--accent-strong)" />

    <g text-anchor="middle" fill="currentColor" font-weight="700">
      <text x="60" y="186" font-size="15">Internet</text>
      <text x="335" y="112" font-size="15">NGINX</text>
      <text x="335" y="242" font-size="15">WireGuard</text>
    </g>
    <g text-anchor="middle" fill="var(--ink-muted)" font-size="11.5">
      <text x="335" y="130">Proxy · SSL</text>
      <text x="335" y="260">VPN</text>
    </g>
    <g text-anchor="middle" fill="var(--on-accent)">
      <text x="185" y="177" font-size="18" font-weight="700">OPNsense</text>
      <text x="185" y="198" font-size="11.5">{{ t('views.main.projects.homelabFirewall') }}</text>
    </g>

    <rect x="420" y="20" width="200" height="320" rx="18" fill="var(--surface)" stroke="var(--accent-strong)" stroke-width="2.5" />
    <text x="520" y="52" text-anchor="middle" font-size="17" font-weight="700" fill="currentColor">Proxmox VE</text>
    <text x="520" y="70" text-anchor="middle" font-size="11.5" fill="var(--ink-muted)">VMs · LXC</text>

    <g v-for="s in services" :key="s.name">
      <rect :x="s.x" :y="s.y" width="88" height="44" rx="10" fill="var(--accent-soft)" stroke="var(--line-strong)" stroke-width="1.5" />
      <text :x="s.x + 44" :y="s.y + 27" text-anchor="middle" font-size="12.5" font-weight="600" fill="currentColor">{{ s.name }}</text>
    </g>

    <rect x="432" y="215" width="176" height="110" rx="12" fill="var(--bg-soft)" stroke="var(--line-strong)" stroke-width="1.5" />
    <text x="520" y="238" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">RAID</text>
    <g v-for="x in disks" :key="x">
      <rect :x="x" y="250" width="46" height="40" rx="6" fill="var(--surface)" stroke="var(--line-strong)" stroke-width="1.5" />
      <path :d="`M${x + 8} 266H${x + 30}M${x + 8} 274H${x + 30}`" stroke="var(--line-strong)" stroke-width="1.5" stroke-linecap="round" />
      <circle :cx="x + 37" :cy="260" r="3" fill="var(--accent)" />
    </g>
    <text x="520" y="312" text-anchor="middle" font-size="11.5" fill="var(--ink-muted)">{{ t('views.main.projects.homelabRaid') }}</text>
  </svg>
</template>
