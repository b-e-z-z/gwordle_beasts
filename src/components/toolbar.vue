<template>
  <v-app-bar app dense height="64" class="app-toolbar">
    <router-link to="/">
      <v-btn icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </router-link>
    <v-spacer/>
  </v-app-bar>
</template>
<script>
export default {
  name: 'Toolbar',
  props: [],
  components: {
  },
  data: () => ({
  }),
  computed: {
  },
  watch: {
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
.app-toolbar {
  background-color: #370101 !important;
}
</style>
