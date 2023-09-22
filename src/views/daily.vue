<template>
  <div class="standard-page">
    <v-row align="center" class="spacer-row">
    </v-row>
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
    <v-row class="options-row">
      <v-spacer></v-spacer>
      <v-col cols="auto">
        <gwordle v-if="ready" :sharetext="sharetext" :answer="chosen" />
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
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
    dayNumber: 0,
    chosen: null,
  }),
  computed: {
    sharetext () {
      return "Gwordle Beasts \n" + "day: " + this.dayNumber + "\n";
    }
  },
  watch: {
  },
  methods: {
    getDayNumber: function () {
      var dayZero = new Date(Date.UTC(2023, 8, 20, 0, 0, 1, 0));
      var now = new Date(Date.now());

      var timeDiff = now.getTime() - dayZero.getTime();
      var days = timeDiff / (1000 * 3600 * 24);

      return Math.floor(days);
    },
    seededRandom: function(number) {
      var a = [number, 34.894]
      var b = [12.9898,78.233]

      return Math.abs((Math.sin( ( (a[0] * b[0]) + (a[1] * b[1]) ) ) * 53758.5453123) % 1.0)
    },
    getDailyGwordle: function () {
      var totalCards = Cards.length;
      var random = this.seededRandom(this.dayNumber);
      var choice = Math.floor(random * totalCards);
      this.chosen = Cards[choice];

      this.ready = true;
    }
  },
  mounted () {
    this.dayNumber = this.getDayNumber();
    this.getDailyGwordle(this.dayNumber);
  }
}
</script>
<style lang="scss" scoped>
.spacer-row {
  height: 64px;
}
.header-row {
  height: 20vh;
}
.gwordle-title {
  font-size: 5vh;
  color: black;
  -webkit-text-stroke: 1px white;
}
.gwordle-subtitle {
  font-size: 3vh;
  color: black;
}
</style>
