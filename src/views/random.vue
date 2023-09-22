<template>
  <div>
    <v-row align="center" class="spacer-row">
    </v-row>
    <v-row align="center" class="header-row">
      <v-spacer></v-spacer>
      <v-col cols="auto" class="text-center">
        <div class="gwordle-title aclonica">
          Gwordle Beasts
        </div>
        <div class="gwordle-subtitle amethysta">
          Endless random mode.
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
  name: 'Random',
  props: [],
  components: {
    gwordle
  },
  data: () => ({
    ready: false,
    chosen: null,
  }),
  computed: {
    sharetext () {
      return "Gwordle Beasts \n" + "random: " + this.chosen.Name + "\n";
    }
  },
  watch: {
  },
  methods: {
    getRandomGwordle: function () {
      var totalCards = Cards.length;
      var choice = Math.floor(Math.random() * totalCards);
      this.chosen = Cards[choice];

      this.ready = true;
    }
  },
  mounted () {
    this.getRandomGwordle();
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
