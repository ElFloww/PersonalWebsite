<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ContactForm from '@/components/sections/ContactForm.vue'
import Icon from '@/components/ui/Icon.vue'
import { URL_LINKEDIN, URL_GITHUB } from '@/core/types/contants/constants'

const { t } = useI18n()
</script>

<template>
  <section id="contact" class="bg-band py-20 text-onband lg:py-28">
    <div class="wrap grid gap-12 lg:grid-cols-12">
      <div class="on-band lg:col-span-5">
        <h2 class="m-0 text-[clamp(2rem,4.2vw,3.25rem)] font-bold !text-onband">{{ t('views.main.contact.sectionTitle') }}</h2>
        <p class="mt-4 mb-0 max-w-[42ch] text-lg !text-onband/90">{{ t('views.main.contact.sectionDescription') }}</p>

        <dl class="m-0 mt-10 space-y-6">
          <div>
            <dt class="text-sm font-bold tracking-wide text-onband/90 uppercase">{{ t('views.main.contact.emailLabel') }}</dt>
            <dd class="m-0 mt-1"><a class="inline-flex min-h-11 items-center text-xl font-semibold !text-onband" href="mailto:florent.dubut@gmail.com">florent.dubut@gmail.com</a></dd>
          </div>
          <div>
            <dt class="text-sm font-bold tracking-wide text-onband/90 uppercase">{{ t('views.main.contact.locationLabel') }}</dt>
            <dd class="m-0 mt-1 text-lg">{{ t('views.main.contact.locationValue') }}</dd>
          </div>
        </dl>

        <ul class="m-0 mt-10 flex list-none flex-wrap gap-3 p-0">
          <li>
            <a class="btn !border-onband !bg-onband !text-[var(--band)]" href="/files/cv-florent-dubut.pdf" target="_blank" rel="noopener noreferrer">
              <Icon name="download" :size="18" />{{ t('views.main.contact.downloadCv') }}
            </a>
          </li>
          <li>
            <a class="btn btn--outline !border-onband !text-onband hover:!bg-white/15" :href="URL_LINKEDIN" target="_blank" rel="noopener noreferrer"><Icon name="linkedin" :size="18" />LinkedIn</a>
          </li>
          <li>
            <a class="btn btn--outline !border-onband !text-onband hover:!bg-white/15" :href="URL_GITHUB" target="_blank" rel="noopener noreferrer"><Icon name="github" :size="18" />GitHub</a>
          </li>
        </ul>
      </div>

      <div class="card p-7 text-ink sm:p-10 lg:col-span-7">
        <ContactForm />
      </div>
    </div>
  </section>
</template>
