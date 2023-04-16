<template>
  <v-dialog 
        v-model="openAdding"
        :class="{'openAdding': openAdding}" max-width="500px">
    <v-card>
      <v-card-title>
        Ajouter un nouvel élève
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="student.firstName" label="Nom"></v-text-field>
          <v-text-field v-model="student.lastName" label="Prénom"></v-text-field>
          <v-text-field v-model="student.birthDate" label="Date de naissance"></v-text-field>
          <FormError v-if="showErrorMessage">
            Cet élève existe déjà.
          </FormError>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="openAdding = false">Annuler</v-btn>
        <v-btn color="primary" @click="createStudent()">Ajouter</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import FormError from './../../errors/FormError.vue'

export default {
  props: {
    openAdding: Boolean
  },
  data() {
    return {
      student: {
        avatar: '',
        firstName: '',
        lastName: '',
        birthDate: '',
        notes: []
      },
      showErrorMessage: false
    }
  },
  components: {
    FormError
  },
  methods: {
    createStudent() {
      const studentExists = this.$store.getters['students/displayStudents'].find(
        student => 
          student.firstName === this.student.firstName &&
          student.lastName === this.student.lastName &&
          student.birthDate === this.student.birthDate
      )
      if (studentExists) {
        this.showErrorMessage = true;
      } else {
        this.$store.dispatch('students/createStudent', this.student)
        this.student = {
          avatar: '',
          firstName: '',
          lastName: '',
          birthDate: ''
        }
        this.$toastr.s('Elève ajouté avec succès !')
        this.openAdding = false
      }
    }
  }
}
</script>
