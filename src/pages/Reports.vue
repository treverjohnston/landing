<template>
    <q-list bordered separator class="row justify-center full-width">
        <div class="col-xs-8  text-center">
            <h3>Submission Data</h3>
        </div>
        <q-expansion-item v-for="submission in submissions" class="col-xs-12" expand-separator icon="mail"
            :label="submission.email" :caption="submission.createdAt">
            <q-card>
                <q-card-section>
                    <div>
                        Name: {{submission.name}}
                    </div>
                    <div>
                        Email: {{submission.email}}
                    </div>
                    <div>
                        Phone: {{submission.phone}}
                    </div>
                </q-card-section>
                <q-card-section>
                    <div>
                        Message:
                    </div>
                    <div>
                        {{submission.body}}
                    </div>
                </q-card-section>
            </q-card>
        </q-expansion-item>
    </q-list>
</template>

<script>
    import { openURL } from 'quasar'
    export default {
        name: 'Reports',
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
            this.$store.dispatch('submissions/getRawReportData');

        },
        methods: {

        }
    }
</script>

<style>
</style>