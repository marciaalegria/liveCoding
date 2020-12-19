
    
   
  <template>
  <v-container class="grey lighten-5">
    <v-main> </v-main>
    <h1>Gallery</h1>
    <v-row no-gutters>
      <v-col v-for="course in courses" :key="course.id" cols="12" sm="4">
        <v-card class="mx-auto" max-width="344">
          <v-img
            :src="course.data.img"
            height="200px"
            @click="showCourse(course.id)"
          ></v-img>

          <v-card-title>
            {{ course.data.name }}
          </v-card-title>

          <v-card-actions>
            <v-btn color="orange lighten-2" text> Explore </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                {{ course.data.description }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Gallery",
  data: () => ({
    show: false,
  }),
  computed: {
    ...mapState(["courses"]),
  },
  methods: {
      showCourse(id){
         this.$router.push(`/admin/${id}`)
      }
  }
};
</script>

<style>
</style>