<template>
    <div>
        {{ cmr.cmrXMLVersion }}
    </div>
</template>
<script>
import cmr from '../../../../store/states'
export default {
    setup() {
        return{
            cmr
        }
    },
}
</script>