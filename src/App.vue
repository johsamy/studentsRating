<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center text-white">
        <router-link to="/">
        <v-icon
          dark
          x-large>
            mdi-steering
        </v-icon>
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <router-link to="/results">
        <v-btn text>
          <span class="mr-2">Résultats</span>
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

    }
  }
};
</script>
