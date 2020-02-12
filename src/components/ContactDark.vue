<template>
    <div class="row justify-center section q-gutter-xl bg-grey-4">
        <div class="col-xs-10 col-md-3 self-center desktop-only">
            <div class="contact-form-dark">
                <q-form @submit="onSubmit" class="q-gutter-md">
                    <div class="row justify-center">
                        <div class="col-xs-9 text-h4 text-weight-bold q-mt-xl q-mb-xl">
                        </div>
                        <q-input square class="col-xs-9" filled v-model="name" label="Name" bg-color="white" lazy-rules
                            :rules="[ val => val && val.length > 0 || '']" />
                        <q-input square class="col-xs-9" filled v-model="email" label="Email Address" bg-color="white"
                            lazy-rules :rules="[ val => val && val.length > 0 || '']" />
                        <q-input square class="col-xs-9" input-style="height:200px" filled v-model="message"
                            label="Message" bg-color="white" flazy-rules :rules="[ val => val && val.length > 0 || '']"
                            type="textarea" />
                    </div>
                    <div>
                        <div class="row justify-center">
                            <div class="col-xs-7 q-mt-xl q-mb-xl">
                                <q-btn label="Submit" type="submit" class="submit-btn full-width" size="xl" flat no-caps
                                    unelevated
                                    v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['-100px', '0px'], duration: 1000},  easing: 'linear' }" />
                            </div>
                        </div>
                    </div>
                </q-form>
            </div>
        </div>
        <div class="col-xs-10 col-md-4 self-center">
            <div class="text-h5 text-weight-bold q-mb-sm text-grey-6">
                Get in touch with us
            </div>
            <div class="text-h3 text-weight-bold header q-mb-xl">
                Have Questions?
            </div>
            <div class="text-h5 text-weight-medium text-grey-7">
                {{questionsIpsum}}
            </div>
            <div class="contact-form-dark mobile-only q-mt-xl">
                <q-form @submit=" onSubmit" class="q-gutter-md">
                    <div class="row justify-center">
                        <div class="col-xs-9 text-h4 text-weight-bold q-mt-xl q-mb-xl">
                        </div>
                        <q-input square class="col-xs-9" filled v-model="name" label="Name" bg-color="white" lazy-rules
                            :rules="[ val => val && val.length > 0 || '']" />
                        <q-input square class="col-xs-9" filled v-model="email" label="Email Address" bg-color="white"
                            lazy-rules :rules="[ val => val && val.length > 0 || '']" />
                        <q-input square class="col-xs-9" input-style="height:200px" filled v-model="message"
                            label="Message" bg-color="white" flazy-rules :rules="[ val => val && val.length > 0 || '']"
                            type="textarea" />
                    </div>
                    <div>
                        <div class="row justify-center">
                            <div class="col-xs-7 q-mt-xl q-mb-xl">
                                <q-btn label="Submit" type="submit" class="submit-btn full-width" size="xl" flat no-caps
                                    unelevated
                                    v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['-100px', '0px'], duration: 1000},  easing: 'linear' }" />
                            </div>
                        </div>
                    </div>
                </q-form>
            </div>
            <div class="text-h5 q-mt-xl">
                <q-avatar color="white" size="4rem" icon="img:statics/callouts/address-card-solid.svg"
                    class="shadow-6 self-center">
                </q-avatar>
                <span class="text-h5 text-weight-medium self-center text-grey-8 q-ml-md">
                    1234 Main St, City, 12345 </span>
            </div>
            <div class="text-h5 q-mt-md">
                <q-avatar color="white" size="4rem" icon="img:statics/callouts/phone-solid.svg"
                    class="shadow-6 self-center">
                </q-avatar>
                <span class="text-h5 text-weight-medium self-center text-grey-8 q-ml-md">
                    888-888-8888 </span>
            </div>
            <div class="text-h5 q-mt-md">
                <q-avatar color="white" size="4rem" icon="img:statics/callouts/envelope-solid.svg"
                    class="shadow-6 self-center">
                </q-avatar>
                <span class="text-h5 text-weight-medium self-center text-grey-8 q-ml-md">
                    heythere@company.com </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Contactdark',
        data() {
            return {
                name: '',
                phone: '',
                email: '',
                message: '',
            }
        },
        props: {
            questionsIpsum: {
                type: String,
            }
        },
        methods: {
            onSubmit() {
                var obj = {
                    name: this.name,
                    phone: this.phone,
                    email: this.email,
                    body: this.message
                }
                this.$ga.event('Button', 'press', 'Submit2', 2)
                this.$store.dispatch('submissions/submit', obj)
            }
        },
    }
</script>