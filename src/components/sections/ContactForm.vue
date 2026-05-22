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
                to_name: t('views.main.profil.title')
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
    <v-card elevation="2" class="pa-6">
        <v-card-title class="text-h5 mb-4">
            {{ t('views.main.contactForm.title') }}
        </v-card-title>
        <v-card-text>
            <v-form ref="formRef" @submit.prevent="submit">
                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="form.name"
                            :label="t('views.main.contactForm.name')"
                            :rules="nameRules"
                            prepend-inner-icon="mdi-account"
                            variant="outlined"
                            color="green-lighten-1"
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="form.email"
                            :label="t('views.main.contactForm.email')"
                            :rules="emailRules"
                            prepend-inner-icon="mdi-email"
                            variant="outlined"
                            color="green-lighten-1"
                            type="email"
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                            v-model="form.subject"
                            :label="t('views.main.contactForm.subject')"
                            :rules="subjectRules"
                            prepend-inner-icon="mdi-tag-outline"
                            variant="outlined"
                            color="green-lighten-1"
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-textarea
                            v-model="form.message"
                            :label="t('views.main.contactForm.message')"
                            :rules="messageRules"
                            prepend-inner-icon="mdi-message-text"
                            variant="outlined"
                            color="green-lighten-1"
                            rows="5"
                            required
                        ></v-textarea>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
        <v-card-actions class="px-6 pb-6">
            <v-spacer></v-spacer>
            <v-btn
                color="green-lighten-1"
                size="large"
                variant="flat"
                @click="submit"
                :loading="loading"
            >
                {{ t('views.main.contactForm.send') }}
            </v-btn>
        </v-card-actions>
    </v-card>
</template>