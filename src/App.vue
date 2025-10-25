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
      class="bg-gray-200 border-b border-gray-300 text-black h-32 flex justify-end relative z-10"
    >
      <div class="flex mt-20 gap-6 px-20">
        <router-link to="/" class="transition transform hover:scale-105"
          >Home</router-link
        >
        <router-link to="/products" class="transition transform hover:scale-105"
          >Products</router-link
        >
        <router-link to="/about" class="transition transform hover:scale-105"
          >About</router-link
        >
        <router-link to="/contact" class="transition transform hover:scale-105"
          >Contact</router-link
        >
      </div>
    </nav>
    <router-view />
  </div>
</template>
