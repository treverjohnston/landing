<template>
    <div class="row justify-around extra-padding">
        <div class="col-xs-11 col-md-4 self-center">
            <div class="text-h5 text-weight-bolder header">{{headerIpsum}}</div>
            <div class="text-body2 font-weight-light text-grey">
                {{bodyIpsum}}
            </div>
        </div>
        <div class="col-xs-11 col-md-4 self-center">
            <img src="statics/person.svg" alt="person by laptop graphic"
                class="$q.platform.is.mobile ? mobileGraphic : graphic">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Graphic',
        props: {
            headerIpsum: {
                type: String
            },

            bodyIpsum: {
                type: String,
            }
        },
    }
</script>