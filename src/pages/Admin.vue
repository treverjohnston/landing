<template>
    <q-page>
        <div class="row justify-center" v-if="loggedIn">
            <Reports></Reports>
        </div>
        <div class="v-else">
            <Login></Login>
        </div>
    </q-page>
</template>

<script>
    import { openURL } from 'quasar'
    import Login from './Login'
    import Reports from './Reports'

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
        components: {
            Login,
            Reports
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

        }
    }
</script>

<style>
</style>