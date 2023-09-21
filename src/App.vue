<template>
  <v-app class="app-body">
    <toolbar/>
    <router-view/>
  </v-app>
</template>
<script>
import toolbar from './components/toolbar'
export default {
  name: 'App',
  components: {
    toolbar
  },
  data: () => ({
  }),
  computed: {
  },
  watch: {
  }
};
</script>
<style lang="scss">
.site-loader {
  margin: 0 auto;
}
.app-body {
  background-color: transparent !important;
}
body {
  background-color:#e2bd9d !important;
}
.aclonica {
  font-family: 'Aclonica', sans-serif;
}
.merriweather {
  font-family: 'Merriweather', serif;
}
.amethysta {
  font-family: 'Amethysta', serif;
}
.standard-page {
  height: 100vh !important;
  width: 100vw !important;
  display: block !important;
  // overflow: hidden !important;
}
</style>