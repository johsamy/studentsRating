<template>
  <v-data-table
    :headers="headers"
    :items="studentsByNote"
    item-key="id"
    class="elevation-1"
    show-group-by
  ></v-data-table>
</template>

<script>
  export default {
    computed: {
      students() {
        return this.$store.getters['students/displayStudents']
      },
      headers() {
        return [
          {
            text: 'ID',
            align: 'start',
            value: 'id',
            groupable: false,
          },
          {
            text: 'Last Name',
            value: 'lastName',
            align: 'right',
          },
          {
            text: 'First Name',
            value: 'firstName',
            align: 'right',
          },
          {
            text: 'Birth Date',
            value: 'birthDate',
            align: 'right',
          },
          {
            text: 'Note',
            value: 'note',
            align: 'right',
          },
        ]
      },
      studentsByNote() {
        const notes = []
        for (const student of this.students) {
          for (const note of student.notes) {
            notes.push({
              id: student.id,
              lastName: student.lastName,
              firstName: student.firstName,
              birthDate: student.birthDate,
              note: note.value,
            })
          }
        }
        return notes.sort((a, b) => a.note - b.note)
      },
    },
  }
</script>
