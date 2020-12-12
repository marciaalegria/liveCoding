<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">LiveCoding
</div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Login</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      
    </v-main>
    <router-view></router-view>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
  
  },

  data: () => ({
    //
  }),
};
</script>
