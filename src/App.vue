<script setup>
import SideBar from "./components/SideBar.vue";
import NavBar from "./components/Navbar.vue";
</script>

<template>
  <div class="flex min-h-screen">
    <side-bar />
    <div className="w-full flex flex-col">
      <NavBar />
      <main className="flex-grow flex flex-col p-5">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
