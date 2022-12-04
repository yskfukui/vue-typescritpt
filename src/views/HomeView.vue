<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
</script>

<!-- <template>
  <main>
    <TheWelcome />
  </main>
</template> -->
<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <TheWelcome />
    </v-main>
  </v-app>
</template>

<script lang="ts">
export default {
  data: () => ({ drawer: true }),
}
</script>