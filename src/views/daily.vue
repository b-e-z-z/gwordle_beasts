<template>
  <div>
    <v-container>
      <v-row style="height: 100px;"></v-row>
      <v-row align="center" class="header-row">
        <v-spacer></v-spacer>
        <v-col cols="auto" class="text-center">
          <div class="gwordle-title aclonica">
            Gwordle Beasts
          </div>
          <div class="gwordle-subtitle amethysta">
            The Gwordle of the Day.
          </div>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="auto">
          <gwordle v-if="ready" :gwordle="chosen" />
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import gwordle from "../components/gwordle";
import { Cards } from '../js/grottobeasts'

export default {
  name: 'Daily',
  props: [],
  components: {
    gwordle
  },
  data: () => ({
    ready: false,
    chosen: null,
  }),
  computed: {
  },
  watch: {
  },
  methods: {
    getDailyGwordle: function () {
      var totalCards = Cards.length;
      var choice = Math.random() * totalCards;
      this.chosen = Cards[choice];

      this.ready = true;
    }
  },
  mounted () {
    this.getDailyGwordle();
  }
}
</script>
<style lang="scss" scoped>
.header-row {
}
.gwordle-title {
  font-size: 4em;
  color: black;
  -webkit-text-stroke: 1px white;
}
.gwordle-subtitle {
  font-size: 2em;
  color: black;
}
</style>
