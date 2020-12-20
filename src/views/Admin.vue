<template>
<v-container>

<v-main></v-main>
<v-row>
  <v-col>

  <h1> curso {{course.data.name}}</h1>
  <h2>{{course.data.description}}</h2>
  </v-col>
</v-row>
<v-row>
  <v-col v-for="example in examples" :key="example.id">
    <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      {{example.data.title}}
    </v-card-title>

    <v-card-subtitle>
      {{example.data.mp3}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </v-col>
</v-row>
</v-container>
</template>

<script>
import axios from 'axios'
import {mapActions, mapState} from 'vuex'
export default {
  name: 'Admin',
  props: ['id'],
  data: function(){
    return{
      course:{
        data:{
          name:'',
        }
      },
      examples:{},
    }
  },
  computed: {
    ...mapState(['courses'])
  },
  methods: {
    ...mapActions(['getCourses']),
       getCourse(id){
      axios.get("https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/courses/"+ id)
      .then(resp => {
        console.log(resp)
        this.course= resp.data;
      })
      .catch(error => {
        console.log(error)
      })
    },
    findExample(){
      if(this.course === []){
        this.getCourses();
      }
      let course = this.courses.find(course=>course.id === this.id)
      this.examples = course.examples
    }
  },
  created(){
    this.getCourse(this.id)
  },
  mounted(){
    this.findExample();
  }
  // components: {},
}
</script>

<style scoped>
  
</style>
