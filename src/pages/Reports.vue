<template>
    <q-page>
        <div class="row justify-center text-black">
            <div v-for="submission in submissions">
                {{submission}}
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
            }
        },
        computed: {
            loggedIn() {
                return this.$store.state.auth.loggedIn;
            },
            submissions() {
                return this.$store.state.submissions.reports;
            }
        },
        mounted() {
            if (!this.loggedIn) {
                this.$router.push('/admin');
            }
            this.$store.dispatch('submissions/getRawReportData');

        },
        methods: {

        }
    }
</script>

<style>
</style>