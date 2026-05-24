<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import emailjs from '@emailjs/browser';

const { t } = useI18n();

const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
});

const formRef = ref();
const loading = ref(false);

const nameRules = [
    (v: string) => !!v || t('views.main.contactForm.nameRequired'),
    (v: string) => v.length >= 2 || t('views.main.contactForm.nameMinLength')
];

const emailRules = [
    (v: string) => !!v || t('views.main.contactForm.emailRequired'),
    (v: string) => /.+@.+\..+/.test(v) || t('views.main.contactForm.emailInvalid')
];

const subjectRules = [
    (v: string) => !!v || t('views.main.contactForm.subjectRequired')
];

const messageRules = [
    (v: string) => !!v || t('views.main.contactForm.messageRequired'),
    (v: string) => v.length >= 10 || t('views.main.contactForm.messageMinLength')
];

const submit = async () => {
    const { valid } = await formRef.value.validate();
    
    if (valid) {
        loading.value = true;
        
        try {
            // Configuration EmailJS (à remplacer par vos propres IDs)
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

            // Paramètres du template EmailJS
            const templateParams = {
                from_name: form.value.name,
                from_email: form.value.email,
                subject: form.value.subject,
                message: form.value.message,
                to_name: 'Florent Dubut'
            };

            await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );

            toast.success(t('views.main.contactForm.successMessage'), {
                position: 'top-right',
                autoClose: 5000,
            });
            resetForm();
        } catch (error) {
            console.error('Erreur EmailJS:', error);
            toast.error(t('views.main.contactForm.errorMessage'), {
                position: 'top-right',
                autoClose: 5000,
            });
        } finally {
            loading.value = false;
        }
    }
};

const resetForm = () => {
    form.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };
    formRef.value.reset();
};
</script>

<template>
    <v-card elevation="6" class="pa-8 glass-card h-100">
        <h3 class="text-h5 font-weight-bold text-ink mb-6">
            {{ t('views.main.contactForm.title') }}
        </h3>
        <v-form ref="formRef" @submit.prevent="submit" class="contact-form-wrapper">
            <div class="mb-5">
                <label class="d-block text-subtitle-2 font-weight-medium text-grey-darken-2 mb-2">{{ t('views.main.contactForm.name') }} *</label>
                <v-text-field
                    v-model="form.name"
                    :placeholder="t('views.main.contactForm.namePlaceholder')"
                    :rules="nameRules"
                    variant="outlined"
                    color="green-darken-1"
                    bg-color="surface"
                    density="comfortable"
                    hide-details="auto"
                    required
                ></v-text-field>
            </div>

            <div class="mb-5">
                <label class="d-block text-subtitle-2 font-weight-medium text-grey-darken-2 mb-2">{{ t('views.main.contactForm.email') }} *</label>
                <v-text-field
                    v-model="form.email"
                    :placeholder="t('views.main.contactForm.emailPlaceholder')"
                    :rules="emailRules"
                    variant="outlined"
                    color="green-darken-1"
                    bg-color="surface"
                    density="comfortable"
                    hide-details="auto"
                    type="email"
                    required
                ></v-text-field>
            </div>

            <div class="mb-5">
                <label class="d-block text-subtitle-2 font-weight-medium text-grey-darken-2 mb-2">{{ t('views.main.contactForm.subject') }} *</label>
                <v-text-field
                    v-model="form.subject"
                    :placeholder="t('views.main.contactForm.subjectPlaceholder')"
                    :rules="subjectRules"
                    variant="outlined"
                    color="green-darken-1"
                    bg-color="surface"
                    density="comfortable"
                    hide-details="auto"
                    required
                ></v-text-field>
            </div>

            <div class="mb-6">
                <label class="d-block text-subtitle-2 font-weight-medium text-grey-darken-2 mb-2">{{ t('views.main.contactForm.message') }} *</label>
                <v-textarea
                    v-model="form.message"
                    :placeholder="t('views.main.contactForm.messagePlaceholder')"
                    :rules="messageRules"
                    variant="outlined"
                    color="green-darken-1"
                    bg-color="surface"
                    rows="5"
                    hide-details="auto"
                    no-resize
                    required
                ></v-textarea>
            </div>

            <v-btn
                color="green-lighten-1"
                size="x-large"
                variant="flat"
                @click="submit"
                :loading="loading"
                class="w-100 font-weight-medium rounded-lg submit-btn"
            >
                <v-icon icon="mdi-send" class="mr-2 send-icon" size="20"></v-icon>
                {{ t('views.main.contactForm.send') }}
            </v-btn>
        </v-form>
    </v-card>
</template>

<style scoped>
.contact-form-wrapper :deep(.v-field) {
    border-radius: 8px;
    border-color: rgba(0,0,0,0.1);
}

.submit-btn {
    text-transform: none;
    letter-spacing: normal;
}
</style>
