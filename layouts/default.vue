<script setup lang="ts">
import Navbar from "~/layouts/navbar.vue"
</script>

<template>
  <div class="h-screen">
    <Navbar/>
    <slot/>
  </div>
</template>