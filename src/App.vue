<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">LiveCoding</div>

      <v-spacer></v-spacer>

      <v-btn href="" target="_blank" text>
        <span class="mr-2">Login</span>
        <router-link to="/login"><v-icon>mdi-login</v-icon> </router-link>
      </v-btn>
    </v-app-bar>

    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
