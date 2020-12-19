<template>
<v-container>

<v-main></v-main>
<v-row>
  <v-col>

  <h1> curso {{course.data.name}}</h1>
  <h2>{{course.data.description}}</h2>
  </v-col>
</v-row>

</v-container>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'Admin',
  props: ['id'],
  data: function(){
    return{
      course:{}
    }
  },
  computed: {
    ...mapState(['courses'])
  },
  methods: {
       getCourse(id){
      axios.get("https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/courses/"+ id)
      .then(resp => {
        console.log(resp)
        this.course= resp.data;
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  created(){
    this.getCourse(this.id)
  }
  // components: {},
}
</script>

<style scoped>
  
</style>
