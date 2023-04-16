<template>
  <v-data-table
    :headers="headers"
    :items="formattedData"
    item-key="name"
    group-by="categoryValue"
    class="elevation-1"
    show-group-by
  ></v-data-table>
</template>
<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Student',
            align: 'start',
            value: 'name',
            groupable: false,
          },
          { text: 'Note', value: 'categoryValue', align: 'right' },
        ]
      }
    },
    computed: {
      students() {
        return this.$store.getters['students/displayStudents']
      },
      formattedData() {
        const categories = Array.from({length: 41}, (_, i) => i); // Générer des catégories de 0 à 40
        const groupedStudents = categories.reduce((acc, curr) => {
          acc[curr] = this.students.filter(s => s.notes.some(n => n.value === curr)); // Regrouper les étudiants par note
          return acc;
        }, {});
        const formattedData = Object.entries(groupedStudents).flatMap(([categoryValue, students]) => { // Formater les données
          return students.map(student => ({
            name: `${student.firstName} ${student.lastName}`,
            categoryValue,
            note: student.notes.find(n => n.value === parseInt(categoryValue))?.value || '',
          }))
        });
        return formattedData;
      }
    }
  }
</script>




