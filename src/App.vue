<script setup>
import { ref } from "vue";
import AgeVerification from "./components/AgeVerification.vue";
import HeroLogo from "./components/HeroLogo.vue";

//Controls mobile menu toggle
const isOpen = ref(false);
</script>

<template>
  <div
    class="relative min-h-screen overflow-x-hidden"
    :class="{ 'overflow-hidden h-screen': isOpen }"
  >
    <!-- Age Verification Gateway Modal -->
    <AgeVerification />

    <!-- Hero logo (always visible, can overlap navbar if styled in HeroLogo.vue) -->
    <HeroLogo @click="isOpen = false" />

    <!-- Nav Bar -->
    <nav
      class="bg-gray-200 border-b border-gray-300 text-black h-32 flex justify-end relative z-50"
    >
      <!-- Desktop Nav hidden -->
      <div class="hidden sm:flex mt-20 gap-6 px-20">
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

      <!-- Mobile Hamburger Menu Button -->
      <div class="sm:hidden flex w-full justify-end p-4 mt-20 z-50">
        <button
          @click="isOpen = !isOpen"
          class="relative flex flex-col justify-between h-2 w-5 overflow-visible"
        >
          <span
            :class="{ 'rotate-45 translate-y-1': isOpen }"
            class="block h-0.5 w-full bg-black transition-transform duration-300"
          ></span>
          <span
            :class="{ '-rotate-45 -translate-y-1': isOpen }"
            class="block h-0.5 w-full bg-black transition-transform duration-300"
          ></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-white z-40 flex flex-col items-center justify-start pt-40 gap-8 text-2xl font-medium transition-all duration-500 ease-out"
        :class="
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-10 pointer-events-none'
        "
      >
        <router-link
          to="/"
          class="px-4 py-2 hover:bg-gray-100"
          @click="isOpen = false"
          >Home</router-link
        >
        <router-link
          to="/products"
          class="px-4 py-2 hover:bg-gray-100"
          @click="isOpen = false"
          >Products</router-link
        >
        <router-link
          to="/about"
          class="px-4 py-2 hover:bg-gray-100"
          @click="isOpen = false"
          >About</router-link
        >
        <router-link
          to="/contact"
          class="px-4 py-2 hover:bg-gray-100"
          @click="isOpen = false"
          >Contact</router-link
        >
      </div>
    </nav>
    <router-view />
  </div>
</template>
