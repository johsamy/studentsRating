<template>
    <tr :style="{ backgroundColor: calculAverage(studentData) > 35 ? '#DAEAC1' : calculAverage(studentData) < 20 ? '#F0B9AF' : '' }">
        <td>
            <strong class="avatar">
                {{ displayInitialLetters }}
            </strong>
            <v-spacer></v-spacer>
        </td>
        <td>
            {{ displayStudentName }}
        </td>
        <td>
            {{ displayStudentBirthDate }}
        </td>
        <td>
            {{ calculAverage(studentData) }}
        </td>
        <td>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    outlined
                    rounded
                    text
                    @click="openChart = true"
                >
                    <v-icon dark>
                        mdi-finance
                    </v-icon>
                </v-btn>
                <modal-student :openChart="openChart" @close="openChart = false" :id="studentData.id">
                </modal-student>

                <icon-modal-button :open.sync="openAddRating" :icon="plus"></icon-modal-button>
                <modal-add-rating :openAddRating="openAddRating" @close="openAddRating = false" :studentId="studentData.id">
                </modal-add-rating>

                <v-btn
                    outlined
                    rounded
                    text
                    @click="deleteStudent()"
                >
                    <v-icon dark>
                        mdi-delete
                    </v-icon>
                </v-btn>
            </v-card-actions>
        </td>
    </tr>
</template>

<script>
import ModalStudent from './modals/ModalStudent.vue'
import ModalAddRating from './modals/ModalAddRating.vue'
import IconModalButton from '../buttons/IconModalButton.vue'

  export default {
    data() {
        return {
            openChart: false,
            openAddRating: false,
            finalAverage: 0,
            averageColor: "",
            finance: "finance",
            plus: "plus"
        }
    },
    components: {
        ModalStudent,
        ModalAddRating,
        IconModalButton
    },
    props: {
        studentData: Object
    },
    computed: {
        displayStudentName() {
            return this.studentData.firstName + ' ' + this.studentData.lastName
        },
        displayStudentBirthDate() {
            return this.studentData.birthDate
        },
        studentId() {
            return this.studentData.id
        },
        displayInitialLetters() {
            return this.studentData.firstName.substring(0, 1) + '' + this.studentData.lastName.substring(0, 1)
        }
    },
    methods: {
        deleteStudent() {
            this.$store.dispatch('students/deleteStudent', this.studentData.id);
        },
        calculAverage(studentData) {
            const notes = studentData.notes;
            const total = notes.reduce((acc, curr) => acc + curr.value, 0);
            const average = total / notes.length;
            this.finalAverage = average.toFixed();
            return average.toFixed();
        }
    }
  }
</script>

<style>
.avatar {
    color: white;
    background-color: #00076f;
    border: 1px solid #00076f;
    border-radius: 100%;
    width: 10px;
    padding: 10px;
}
</style>