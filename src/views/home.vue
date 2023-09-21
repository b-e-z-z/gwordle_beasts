<template>
  <div>
    <v-container>
      <v-row style="height: 200px;"></v-row>
      <v-row align="center" class="header-row">
        <v-spacer></v-spacer>
        <v-col cols="auto" class="text-center">
          <div class="gwordle-title aclonica">
            Gwordle Beasts
          </div>
          <div class="gwordle-subtitle amethysta">
            Wordle, but Grotto Beasts.
          </div>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="2" class="text-center">
          <div>
            <router-link to="/daily">
              <v-btn class="text-none start-button" color="#370101" x-large rounded>
                Daily
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </router-link>
          </div>
          <div class="mt-2">
            <router-link to="/random">
              <v-btn class="text-none start-button" color="#370101" x-large rounded>
                Random
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </router-link>
          </div>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'Home',
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
.header-row {
  // height: 300px;
}
.gwordle-title {
  font-size: 6em;
  color: black;
  -webkit-text-stroke: 1px white;
}
.gwordle-subtitle {
  font-size: 2em;
  color: black;
}
.start-button {
  // font-size: 24px;
  // padding: 24px 24px !important;
  width: 140px;
}
</style>
