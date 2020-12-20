import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    courses:[],
  },
  mutations: {
    GET_COURSES(state,courses){
      state.courses=courses;
    }
  },
  actions: {
    getCourses({commit}){
      axios.get("https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/courses")
      .then(resp => {
        console.log(resp.data)
        commit("GET_COURSES", resp.data)
      })
      .catch(error => {
        console.log(error)
      })
    },

  },
  modules: {
  }
})
