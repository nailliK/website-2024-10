<script lang="ts" setup>
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import MainContent from "@/components/MainContent.vue";

document.body.classList.add("loaded");

</script>

<template>
  <PageHeader/>
  <MainContent/>
  <PageFooter/>
</template>

<style lang="scss">
@import "@/scss/index";
</style>