<template>
  <v-app> 
    <Gallery></Gallery>
  </v-app>
</template>

<script>
// @ is an alias to /src

import Gallery from '@/components/Gallery.vue'
import { mapActions } from "vuex";
//import Gallery from '../components/Gallery.vue';

export default {
  name: "Principal",
  components: {
    Gallery
  },
  methods: {
    ...mapActions(['getCourses']),
  },
  created() {
    this.getCourses();
  },
};
</script>
