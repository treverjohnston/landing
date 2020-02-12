<template>
    <span>
        <div class="row justify-center bg-grey-4 section q-gutter-xl">
            <div class="col-xs-10 col-md-3">
                <div class="text-body2 font-weight-bold text-grey-8">
                    {{shortHeader}}
                </div>
                <div class="text-h4 text-weight-bold header">
                    {{shortHeader}}
                </div>
            </div>
            <div class="col-xs-4"></div>
        </div>
        <div class="row justify-center bg-grey-4 section q-gutter-xl">
            <template v-for="icon in calloutIcons">
                <div class="col-xs-1"></div>
                <div class="col-xs-10 col-md-3 q-mb-lg">
                    <q-avatar color="white" size="4rem" :icon="icon" class="shadow-6 q-mb-lg">
                    </q-avatar>
                    <div class="text-h5 text-weight-bolder header">
                        {{shortHeader}}
                    </div>
                    <div class="text-body2 font-weight-light text-grey-7">
                        {{bodyIpsum}}
                    </div>
                </div>
            </template>
        </div>
    </span>
</template>

<script>
    export default {
        name: 'Callouts',
        props: {
            shortHeader: {
                type: String,
            },

            bodyIpsum: {
                type: String,
            }
        },
        computed: {
            calloutIcons() {
                return this.$store.state.ipsum.calloutIcons;
            },
            calloutBody() {
                return this.$store.state.ipsum.calloutBody;
            }
        },
    }
</script>