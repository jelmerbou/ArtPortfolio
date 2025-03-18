<template>
        <div class="customContainer borderHeader ">
            <div class="md:p-6 text-center">
                <h2>CONTACT</h2>
                <div class="contactContent grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="flex flex-col items-center justify-center">
                        <font-awesome-icon icon="fa-solid fa-envelopes-bulk" class="text-2xl mb-[50px] md:mb-0"/>
                    </div>
                    <div class="contactFormContent">
                        <div class="flex sm:pt-12 md:p-12">
                            <div class="mx-auto w-full ">
                                <form action="https://formbold.com/s/FORM_ID" method="POST">
                                    <div class="mb-5">
                                        <FormInput label="Full Name" v-model="contactForm.name" :error="errors.name" placeholder="Your name" @input="() => setTouched('name')" />
                                    </div>
                                    <div class="mb-5">
                                        <FormInput label="Email" v-model="contactForm.email" :error="errors.email" placeholder="Email" @input="() => setTouched('email')" />
                                    </div>
                                    <div class="mb-5">
                                        <FormInput label="Subject" v-model="contactForm.subject" :error="errors.subject" placeholder="Subject" @input="() => setTouched('subject')" />
                                    </div>
                                    <div class="mb-5">
                                        <FormTextarea label="Message" v-model="contactForm.message" :error="errors.message" placeholder="Your message" @input="() => setTouched('message')" />
                                    </div>
                                    <div>
                                        <button class="linkBtn float-left outline-none" :disabled="!isFormValid">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                                <div v-if="!showForm">
                                    {{ succesMessage }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>
    import { ref, reactive, computed } from 'vue';
    import { sendEmail } from '~/services/emailService';
    import FormInput from '@/components/forms/FormInput';
    import FormTextarea from '@/components/forms/FormTextArea';

    const title = "form";
    const showForm = ref(true);
    const succesMessage = ref('');

    const initialConTactForm = {
        name: '',
        subject: '',
        email: '',
        message: '',
        file: null
    };

    const initialTouched = {
        name: false,
        subject: false,
        email: false,
        message: false,
    };

    const contactForm = reactive({...initialConTactForm});
    const touched = reactive({...initialTouched});

    function setTouched(field) {
        touched[field] = true;
    }

    const errors = reactive({
        name: computed(() => (!contactForm.name && touched.name) ? 'Name is required' : ''),
        subject: computed(() => (!contactForm.subject && touched.subject) ? 'Subject is required' : ''),
        email: computed(() => {
            if (touched.email) {
                if (!contactForm.email) return 'Email is required';
                if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(contactForm.email)) return 'Please provide a valid email address';
            } 
            return '';
        }),
        message: computed(() => (!contactForm.message && touched.message) ? 'Message is required' : ''),
    });

    const isFormValid = computed(() => {
        const allFieldsTouched = Object.values(touched).every(t => t);
        const noErrors = !Object.values(errors).some(e => e);

        return allFieldsTouched && noErrors;
    });

    function resetForm(){
        setTimeout(() => {
            succesMessage.value = '';
            showForm.value = true;
            Object.assign(contactForm, initialConTactForm);
            Object.assign(touched, initialTouched);
        }, 5000);
    }
</script>