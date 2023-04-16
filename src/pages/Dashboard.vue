<template>
  <div>
    <icon-modal-button :open.sync="openAdding" :icon="plus"></icon-modal-button>
    <modal-create-student :openAdding="openAdding" @close="openAdding = false">
    </modal-create-student>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th></th>
            <th class="text-left">
              Nom Prénom
            </th>
            <th class="text-left">
              Date de naissance
            </th>
            <th class="text-left">
              Moyenne
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody v-if="displayStudentsList">
          <student-item v-for="student in displayStudentsList" :key="student.id" :studentData="student"> </student-item>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import StudentItem from './../components/students/StudentItem.vue'
import ModalCreateStudent from '../components/students/modals/ModalCreateStudent.vue'
import IconModalButton from './../components/buttons/IconModalButton.vue'

export default {
  data() {
    return {
      openAdding: false,
      plus: "plus"
    }    
  },
  components: {
    StudentItem,
    ModalCreateStudent,
    IconModalButton
  },
  computed: {
    displayStudentsList() {
      return this.$store.getters['students/displayStudents']
    }
  }
}
</script>