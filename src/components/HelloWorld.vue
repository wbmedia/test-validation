<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-select
            v-model="select"
            :items="items"
            label="Item"
            required
          ></v-select>

          <v-checkbox
            v-model="checkbox"
            :rules="[(v) => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Validate
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

          <v-btn color="warning" @click="resetValidation">
            Reset Validation
          </v-btn>
          <TestComponent />
          <Login />
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import TestComponent from './TestComponent.vue'
import Login from './Login.vue'
export default Vue.extend({
  name: 'HelloWorld',
  components: {
    TestComponent,
    Login,
  },
  data: () => ({
    valid: true,
    name: '',
    email: '',
    emailRules: [
      (v: string) => !!v || 'E-mail is required',
      (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    nameRules: [(v: string) => !!v || 'Name is required'],
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: false,
  }),

  methods: {
    validate() {
      (this.$refs.form as Vue & { validate: () => boolean }).validate()
    },
    reset() {
      (this.$refs.form as Vue & { reset: () => boolean }).reset()
    },
    resetValidation() {
      (
        this.$refs.form as Vue & { resetValidation: () => boolean }
      ).resetValidation()
    },
  },
  mounted() {
    this.validate()
  },
})
</script>

<style scoped>
.error-message {
  display: flex;
  color: red;
  position: relative;
  font-size: 11px;
  margin-top: -20px;
}
</style>
