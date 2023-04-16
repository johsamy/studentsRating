<template>
    <v-dialog
        v-model="openChart"
        max-width="600"
        :class="{'openChart': openChart}"
    >
        <v-card
            class="mx-auto text-center"
            color="secondary"
            dark
            max-width="600"
        >
            <v-card-title class="text-h5">
                {{ displayStudentName }}
            </v-card-title>
            <v-card-text>
                <v-sheet color="rgba(0, 0, 0, .12)">
                    <v-sparkline
                    :labels="studentData.notes.map(note => note.date)"
                    :value="studentData.notes.map(note => note.value)"
                    color="rgba(255, 255, 255, .7)"
                    height="100"
                    padding="24"
                    stroke-linecap="round"
                    smooth
                    >
                    </v-sparkline>
                </v-sheet>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    outlined
                    color="darken-1"
                    text
                    @click="$emit('close')"
                >
                    Femrer
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            studentData: null
        }
    },
    props: [
        'openChart',
        'id'
    ],
    computed: {
        displayStudentName() {
            return this.studentData.firstName + ' ' + this.studentData.lastName
        },
        displayStudentBirthDate() {
            return this.studentData.birthDate
        }
    },
    created() {
        this.$store.dispatch('students/getStudents');
        this.studentData = this.$store.getters['students/displayStudents'].find((studentData) => studentData.id === this.id)
    }
}
</script>