<script setup lang="ts">
import { nextTick, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { toast } from 'vue3-toastify'
import emailjs from '@emailjs/browser'

const { t } = useI18n()

const emptyForm = () => ({ name: '', email: '', subject: '', message: '' })
const form = reactive(emptyForm())
const errors = reactive<Record<string, string>>({})
const loading = ref(false)

const rules: Record<keyof ReturnType<typeof emptyForm>, (v: string) => string> = {
  name: (v) => (!v ? t('views.main.contactForm.nameRequired') : v.length < 2 ? t('views.main.contactForm.nameMinLength') : ''),
  email: (v) => (!v ? t('views.main.contactForm.emailRequired') : !/.+@.+\..+/.test(v) ? t('views.main.contactForm.emailInvalid') : ''),
  subject: (v) => (!v ? t('views.main.contactForm.subjectRequired') : ''),
  message: (v) => (!v ? t('views.main.contactForm.messageRequired') : v.length < 10 ? t('views.main.contactForm.messageMinLength') : ''),
}

const validate = (field: keyof typeof rules) => (errors[field] = rules[field](form[field]))
const revalidate = (field: keyof typeof rules) => {
  if (errors[field]) validate(field)
}

const submit = async () => {
  const fields = Object.keys(rules) as (keyof typeof rules)[]
  fields.forEach(validate)
  if (fields.some((f) => errors[f])) {
    await nextTick()
    document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()
    return
  }

  loading.value = true
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
      { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message, to_name: 'Florent Dubut' },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
    )
    toast.success(t('views.main.contactForm.successMessage'), { position: 'top-right', autoClose: 5000 })
    reset()
  } catch (error) {
    console.error('Erreur EmailJS:', error)
    toast.error(t('views.main.contactForm.errorMessage'), { position: 'top-right', autoClose: 5000 })
  } finally {
    loading.value = false
  }
}

const reset = () => {
  Object.assign(form, emptyForm())
  Object.keys(errors).forEach((k) => delete errors[k])
}

const input = 'mt-1.5 block w-full rounded-xl border border-strong bg-bg px-4 py-3 text-base text-ink placeholder:text-muted aria-[invalid=true]:border-red-600 dark:aria-[invalid=true]:border-red-400'
</script>

<template>
  <form novalidate class="flex flex-col gap-5" @submit.prevent="submit">
    <h3 class="m-0 text-2xl font-bold">{{ t('views.main.contactForm.title') }}</h3>

    <div v-for="f in (['name', 'email', 'subject'] as const)" :key="f">
      <label :for="`cf-${f}`" class="text-[0.95rem] font-bold text-ink">{{ t(`views.main.contactForm.${f}`) }}<span aria-hidden="true" class="text-brand"> *</span></label>
      <input
        :id="`cf-${f}`"
        v-model="form[f]"
        :type="f === 'email' ? 'email' : 'text'"
        :autocomplete="f === 'name' ? 'name' : f === 'email' ? 'email' : 'off'"
        :placeholder="t(`views.main.contactForm.${f}Placeholder`)"
        :aria-required="true"
        :aria-invalid="!!errors[f]"
        :aria-describedby="errors[f] ? `cf-${f}-err` : undefined"
        :class="input"
        @blur="validate(f)"
        @input="revalidate(f)"
      />
      <p v-if="errors[f]" :id="`cf-${f}-err`" role="alert" class="mt-1 mb-0 text-sm font-semibold text-red-700 dark:text-red-300">{{ errors[f] }}</p>
    </div>

    <div>
      <label for="cf-message" class="text-[0.95rem] font-bold text-ink">{{ t('views.main.contactForm.message') }}<span aria-hidden="true" class="text-brand"> *</span></label>
      <textarea
        id="cf-message"
        v-model="form.message"
        rows="5"
        :placeholder="t('views.main.contactForm.messagePlaceholder')"
        :aria-required="true"
        :aria-invalid="!!errors.message"
        :aria-describedby="errors.message ? 'cf-message-err' : undefined"
        :class="input"
        @blur="validate('message')"
        @input="revalidate('message')"
      ></textarea>
      <p v-if="errors.message" id="cf-message-err" role="alert" class="mt-1 mb-0 text-sm font-semibold text-red-700 dark:text-red-300">{{ errors.message }}</p>
    </div>

    <div class="flex flex-wrap gap-3">
      <button type="submit" class="btn" :disabled="loading" :aria-busy="loading">
        {{ loading ? t('views.main.ui.sending') : t('views.main.contactForm.send') }}
      </button>
    </div>
  </form>
</template>
