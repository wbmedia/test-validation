<template>
  <div>
    <v-text-field label="Name" v-model="name" :rules="rules.name">
    </v-text-field>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    name: '',
    valid: true,
    rules: {
      name: [(v: string) => !!v || 'Name is required'],
    },
  }),
  methods: {},
})
</script>
