const getters = {
    displayStudents: (state) => state.students
}

const actions = {
    async getStudents({ commit }) {
        try {
            const response = await fetch('http://localhost:8080/students.json', {
                method: 'GET'
            });
            const responseData = await response.json();
            const modifiedData = [];
            for (const data in responseData) {
                modifiedData.push(responseData[data]);
            }
            commit('updateStudentsList', modifiedData);
        } catch (error) {
            console.log(error)
        }
    },
    async addNoteToStudent({ commit }, { studentId, note }) {
        try {
            await commit('ADD_NOTE_TO_STUDENT', { studentId, note })
        } catch (error) {
            console.log(error)
        }
    },
    async deleteStudent({ commit }, studentId) {
        try {
            const response = await fetch(`http://localhost:8080/students/${studentId}`, {
                method: 'DELETE'
            })
            if (response.ok) {
                commit('DELETE_STUDENT', studentId)
            }
        } catch (error) {
            console.log(error)
        }
    },
    async createStudent({ commit }, student) {
        try {
            const id = 's'+Date.now().toString()
            student.id = id

            await commit('ADD_STUDENT', student)
        } catch (error) {
            console.log(error)
        }
    }
}

const mutations = {
    updateStudentsList(state, student) {
        state.students = student
    },
    saveStudent(state, student) { 
        state.students.push(student)
    },
    DELETE_STUDENT(state, studentId) {
        const deletedStudent = state.students.find(student => student.id === studentId)
        state.deletedStudents.push(deletedStudent)
        state.students = state.students.filter(student => student.id !== studentId)
    },
    ADD_NOTE_TO_STUDENT(state, { studentId, note }) {
        const student = state.students.find(student => student.id === studentId)
        if (student) {
            student.notes.push(note)
        }
    },
    ADD_STUDENT(state, student) {
        state.students.push(student)
    }
}

import students from './data.json';

export default {
    namespaced: true,
    state() {
        return {
            students: students,
            deletedStudents: [] 
        }
    },
    getters,
    actions,
    mutations
}