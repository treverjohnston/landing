<template>
    <div class="row justify-center extra-padding q-gutter-xl">
        <div class="col-xs-10 col-md-3 self-center">
            <div class="contact-form">
                <q-form @submit="onSubmit" class="q-gutter-md">
                    <div class="row justify-center">
                        <div class="col-xs-10 text-h4 text-weight-bold q-mt-xl q-mb-xl">
                            Let's get to know you better!
                        </div>
                        <q-input square class="col-xs-10" filled v-model="name" label="Name" bg-color="white" lazy-rules
                            :rules="[ val => val && val.length > 0 || '']" />
                        <q-input square class="col-xs-10" filled v-model="phone" label="Phone Number"
                            mask="(###) ### - ####" bg-color="white" lazy-rules
                            :rules="[ val => val && val.length > 0 || '']" />
                        <q-input square class="col-xs-10" filled v-model="email" label="Email Address" bg-color="white"
                            lazy-rules :rules="[ val => val && val.length > 0 || '']" />
                        <q-input square class="col-xs-10" filled v-model="message" label="Message (Optional)"
                            bg-color="white" type="textarea" />
                    </div>
                    <div>
                        <div class="row justify-center">
                            <div class="col-xs-10">
                                <q-btn label="Submit" type="submit" class="submit-btn full-width" size="xl" flat no-caps
                                    unelevated
                                    v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['-100px', '25px'], duration: 1000},  easing: 'linear' }" />
                            </div>
                        </div>
                    </div>
                </q-form>
            </div>
        </div>
        <div class="col-xs-10 col-md-1 self-center"></div>
        <div class="col-xs-10 col-md-4 self-center">
            <div class="text-body2 font-weight-light text-grey">
                {{shortHeader}}
            </div>
            <div class="text-h4 text-weight-bold header">
                {{shortHeader}}
            </div>
            <div class="q-mt-xl">
                <q-avatar color="white" size="4rem" icon="img:statics/callouts/camera-solid.svg"
                    class="shadow-6 q-mb-lg">
                </q-avatar>
                <div class="text-h5 text-weight-bolder header">
                    {{shortHeader}}
                </div>
                <div class="text-body2 font-weight-light text-grey-8">
                    {{bodyIpsum}}
                </div>
            </div>
            <div class="q-mt-xl">
                <q-avatar color="white" size="4rem" icon="img:statics/callouts/images-solid.svg"
                    class="shadow-6 q-mb-lg">
                </q-avatar>
                <div class="text-h5 text-weight-bolder header">
                    {{shortHeader}}
                </div>
                <div class="text-body2 font-weight-light text-grey-8">
                    {{bodyIpsum}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Contact',
        data() {
            return {
                name: '',
                phone: '',
                email: '',
                message: '',
            }
        },
        props: {
            shortHeader: {
                type: String,
            },

            bodyIpsum: {
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
                this.$store.dispatch('submissions/submit', obj)
            }
        },
    }
</script>