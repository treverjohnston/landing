<template>
    <div class="row justify-center bg-grey-4 section q-gutter-xl">
        <div class="col-xs-9 col-md-11 text-center  self-center">
            <div class="text-h3 text-weight-bold header q-mb-xl">
                {{shortestHeader}}
            </div>
        </div>
        <div class="section col-xs-11 self-center">
            <div class="row justify-around">
                <div class="col-xs-10 col-md-5 self-center">
                    <div class="text-h4 text-weight-bold header q-mb-xl self-center">
                        {{shortestHeader}}
                    </div>
                    <div class="col-xs-10 col-md-5 mobile-only q-mb-md self-center">
                        <q-img src="statics/header2.jpg" alt="header image">
                        </q-img>
                    </div>
                    <div class="text-h5 self-center">
                        {{bodyIpsum}}
                    </div>
                </div>
                <div class="col-xs-10 col-md-5 desktop-only self-center">
                    <q-img src="statics/header2.jpg" alt="header image">
                    </q-img>
                </div>
            </div>
        </div>
        <div class="section col-xs-11">
            <div class="row justify-around">
                <div class="col-xs-10 col-md-5 desktop-only  self-center">
                    <q-img src="statics/header.jpg" alt="header image"> </q-img>
                </div>
                <div class="col-xs-10 col-md-5  self-center">
                    <div class="text-h4 text-weight-bold header q-mb-xl">
                        {{shortestHeader}}
                    </div>
                    <div class="col-xs-10 col-md-5 mobile-only q-mb-md">
                        <q-img src="statics/header.jpg" alt="header image"> </q-img>
                    </div>
                    <div class="text-h5">
                        {{bodyIpsum}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Pictures',
        props: {
            shortestHeader: {
                type: String,
            },

            bodyIpsum: {
                type: String,
            }
        }
    }
</script>