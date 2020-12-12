<template>
  <v-container >
    <v-main></v-main>

    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Correo"
        required
      ></v-text-field>

      <v-text-field
        v-model="pass"
        :rules="passRules"
        label="Contraseña"
        type="password"
        required
      ></v-text-field>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Validar
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Limpiar</v-btn>
    </v-form>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Name is required"],
    email: "",
    emailRules: [(v) => !!v || "E-mail is required"],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>