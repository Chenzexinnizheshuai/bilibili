<template>
    <div>
        <app-header></app-header>
        <app-body></app-body>
    </div>
</template>
<script>
import AppHeader from "@c/head/head";
import AppBody from "@c/body/body";
console.log(AppBody,999999999999)
export default {
  components: {
        AppHeader,
        AppBody,
  }
};
</script>

