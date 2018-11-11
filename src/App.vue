<template>
    <div>
        <app-header></app-header>
        <app-body></app-body>
    </div>
</template>
<script>
import AppHeader from "@c/head/head";
import AppBody from "@c/body/body";
import { Progress } from 'mint-ui';
export default {
    components : {
        AppHeader,
        AppBody,
        [Progress.name] : Progress
    }
}
</script>
<style lang="scss">
  
</style>
