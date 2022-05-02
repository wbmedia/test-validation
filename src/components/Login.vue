<template>
  <div class="v-container">
    <v-row>
      <v-col cols="12" md="8" offset-md="2">
        <v-text-field
        ref="form"
        label="Email"
        v-model="email"
        :rules="rules.email"
        >
        </v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      email: '',
      valid: true,
      rules: {
        email: [(v: string) => !!v || 'Name is required'],
      },
    }
  },
  mounted() {
    (this.$refs.form as Vue & { validate: () => boolean }).validate()
  },
})
</script>
