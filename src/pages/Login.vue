<template>
    <q-page>
        <div class="row justify-center text-black q-mt-lg" v-if="!registering">
            <div class="col-xs-10">
                <div class="row justify-center">
                    <div class="col-xs-10 col-md-6">
                        <q-input filled v-model="email" label="Email" lazy-rules
                            :rules="[ val => val && val.length > 0 || '']" />
                        <q-input filled v-model="password" label="Password" type="password" lazy-rules
                            :rules="[ val => val && val.length > 0 || '']" />
                    </div>
                </div>
                <div class="row justify-center">
                    <div class="col-xs-6">
                        <q-btn @click="login" color="blue" class="q-mt-sm">Login</q-btn>
                        <p @click="registering = !registering" class="a-style q-mt-md">Register</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-center text-black q-mt-lg" v-else>
            <div class="col-xs-10">
                <div class="row justify-center">
                    <div class="col-xs-10 col-md-6">
                        <q-input filled v-model="name" label="Name" lazy-rules
                            :rules="[ val => val && val.length > 0 || '']" />
                        <q-input filled v-model="email" label="Email" lazy-rules
                            :rules="[ val => val && val.length > 0 || '']" />
                        <q-input filled v-model="password" label="Password" type="password" lazy-rules
                            :rules="[ val => val && val.length > 0 || '']" />
                        <q-input filled v-model="confirmPassword" label="Confirm Password" type="password" lazy-rules
                            :rules="[ val => val && val.length > 0 && val === password || 'Passwords do not match']" />

                    </div>
                </div>
                <div class="row justify-center">
                    <div class="col-xs-6">
                        <q-btn @click="register" color="blue" class="q-mt-sm">
                            Register
                        </q-btn>
                        <p @click="registering = !registering" class="a-style q-mt-md">Login</p>
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
    import { openURL } from 'quasar'
    export default {
        name: 'Admin',
        data() {
            return {
                registering: false,
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            }
        },
        computed: {
            loggedIn() {
                return this.$store.state.auth.loggedIn
            }
        },
        mounted() {
        },
        methods: {
            openURL,
            login() {
                var obj = {
                    email: this.email,
                    password: this.password
                }
                this.$store.dispatch('auth/login', obj)
                if (this.loggedIn) {
                    this.$router.push('/admin/reports');
                }
            },
            register() {
                var obj = {
                    email: this.email,
                    name: this.name,
                    password: this.password,
                    confirmPassword: this.confirmPassword,
                }
                this.$store.dispatch('auth/register', obj)
                if (this.loggedIn) {
                    this.$router.push('/admin/reports');
                }
            },
            clearFields() {
                this.registering = false;
                this.name = '';
                this.email = '';
                this.password = '';
                this.confirmPassword = '';
            }
        }
    }
</script>

<style>
    .a-style {
        text-decoration: underline;
        color: blue;
    }
</style>