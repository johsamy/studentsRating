<template>
  <v-dialog 
        v-model="openAddRating"
        :class="{'openAddRating': openAddRating}" max-width="500px">
    <v-card>
      <v-card-title>
        Ajouter une note
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="note.value" label="Note"></v-text-field>
          <v-text-field v-model="note.date" label="Date" type="date"></v-text-field>
          <FormError v-if="showErrorMessage">
            La note doit être un entier compris entre 0 et 40.
          </FormError>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="openAddRating = false">Annuler</v-btn>
        <v-btn color="primary" @click="createRating()">Ajouter</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import FormError from './../../errors/FormError.vue'

export default {
  data() {
    return {
      note: {
        value: '',
        date: new Date().toISOString().substr(0, 10)
      },
      showErrorMessage: false
    }
  },
  components: {
    FormError
  },
  props: [
      'openAddRating',
      'studentId'
  ],
  methods: {
    createRating() {
      if (this.note.value === '' || isNaN(this.note.value) || parseInt(this.note.value) < 0 || parseInt(this.note.value) > 40) {
        this.showErrorMessage = true; // Afficher le message d'erreur si les conditions ne sont pas remplies
      } else {
        this.$store.dispatch('students/addNoteToStudent', {
            studentId: this.studentId,
            note: {
                value: parseInt(this.note.value),
                date: this.note.date
            }
        })
        this.note.value = ''
        this.note.date = ''

        this.$toastr.s('Note ajoutée avec succès !')
        this.showErrorMessage = false
        this.openAddRating = false
      }
    }
  }
}
</script>
