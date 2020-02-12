<template>
    <q-page>
        <q-list bordered separator class="row">
            <q-expansion-item v-for="submission in submissions" class="col-xs-12" expand-separator icon="mail"
                :label="submission.name" :caption="submission.email">
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
    </q-page>
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