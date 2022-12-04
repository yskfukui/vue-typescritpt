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

    <v-app-bar color="primary" dark app>
      <v-toolbar-title>ENGLISH EXPRESS</v-toolbar-title>
      <v-container>
        <v-app-bar-nav-icon @click="drawer = !drawer">
          <v-icon>mdi-vuetify</v-icon>
        </v-app-bar-nav-icon>
        
        <v-btn 
          v-for ="link in links"
          :key="link"
          variant="text"
        >
        {{link}}
        </v-btn>
        

      </v-container>
      
    </v-app-bar>

    <v-main>
      <TheWelcome />
    </v-main>
  </v-app>
</template>

<script lang="ts">
export default {
  data: () => ({
    drawer: true,
    links: [
      "HOME",
      "SEARCH",
      "SUPPORT",
    ],
  }),
}
</script>