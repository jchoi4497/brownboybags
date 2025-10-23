<script setup>
import AgeVerification from "./components/AgeVerification.vue";
</script>

<template>
  <div>
    <AgeVerification />

    <nav class="bg-gray-800 text-white py-6 px-8 flex gap-6 items-center">
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>
