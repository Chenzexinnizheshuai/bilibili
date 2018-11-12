<template>
    <div>
        <router-view>

        </router-view>
    </div>
</template>
<script>

import { Progress } from 'mint-ui';
export default {
    components : {
        [Progress.name] : Progress,

    }
}
</script>
<style lang="scss">
  
</style>
