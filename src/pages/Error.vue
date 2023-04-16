<template>
  <v-app dark>
    <div>
      <v-row
        class="my-8"
        justify="center"
        no-gutters
      >
        <v-col lg="2">
            <v-img
              src="./../assets/404-error.svg"
              class="ma-8"
            ></v-img>
        </v-col>
      </v-row>
    </div>
    <v-row
      class="my-8"
      justify="center"
      no-gutters
    >
      <router-link to="/">
        <TextButton>
          Accueil
        </TextButton>
      </router-link>
    </v-row>
  </v-app>
</template>

<script>
import TextButton from './../components/buttons/TextButton.vue'

export default {
  layout: 'empty',
  components: {
    TextButton
  },
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Page introuvable',
      otherError: 'Veuillez rafraichir la page ou réessayer plus tard.',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : "Erreur"
    return {
      title,
    }
  },
}
</script>
