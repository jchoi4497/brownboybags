<script setup>
import AgeVerification from "./components/AgeVerification.vue";
import HeroLogo from "./components/HeroLogo.vue";
</script>

<template>
  <div class="relative min-h-screen overflow-visible">
    <AgeVerification />

    <!-- Hero logo (always visible, can overlap navbar if styled in HeroLogo.vue) -->
    <HeroLogo />

    <nav
      class="bg-gray-800 text-white py-6 px-8 flex gap-6 items-center relative z-10"
    >
      <router-link to="/products" class="transition transform hover:scale-105"
        >Products</router-link
      >
      <router-link to="/about" class="transition transform hover:scale-105"
        >About</router-link
      >
    </nav>
    <router-view />
  </div>
</template>
