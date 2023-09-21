<template>
  <div class="standard-page">
    <v-row align="center" class="spacer-row">
    </v-row>
    <v-row align="center" class="header-row">
      <v-spacer></v-spacer>
      <v-col cols="12" md="8" class="text-center">
        <div class="gwordle-title aclonica">
          Gwordle Beasts
        </div>
        <div class="gwordle-subtitle amethysta">
          Wordle, but Grotto Beasts.
        </div>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row class="options-row">
      <v-spacer></v-spacer>
      <v-col cols="12" md="4" class="text-center">
        <router-link to="/daily" class="mr-1">
          <v-btn class="text-none start-button" color="#370101" x-large rounded>
            Daily
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </router-link>
        <router-link to="/random" class="ml-1">
          <v-btn class="text-none start-button" color="#370101" x-large rounded>
            Random
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </router-link>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row style="height: 48px;">
      <v-spacer/>
      <v-col cols="auto">
        <v-card color="#370101" shaped width="200">
          <v-list-item>
            <v-list-item-content class="text-left">
              <div class="mb-1">
                made by
              </div>
              <v-list-item-title class="text-left text-h5 mb-1">
                bezz
              </v-list-item-title>
              <v-list-item-subtitle class="text-left">
                <a href="https://twitter.com/bezzdev">
                  @bezzdev
                </a>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar
              tile
              size="64"
              color="grey">
              <v-img src="bezz.jpg" aspect-ratio="1"/>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-spacer/>
    </v-row>
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
.spacer-row {
  height: 20vh;
}
.header-row {
  height: 40vh;
}
.options-row {
  height: 20vh;
}
.gwordle-title {
  font-size: 10vh;
  color: black;
  -webkit-text-stroke: 1px white;
}
.gwordle-subtitle {
  font-size: 4vh;
  color: black;
}
.start-button {
  // font-size: 24px;
  // padding: 24px 24px !important;
  width: 140px;
}
.standard-page {
  overflow: hidden !important;
}
</style>
