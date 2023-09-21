<template>
  <v-container class="amethysta">
    <v-row>
      <v-col>
        <v-text-field
          label="Guess"
          class="guess-field"
          placeholder="The name of the card"
          color="white"
          background-color="#e2bd9d"
          outlined
          flat
        >
          <template v-slot:append-outer>
            <v-btn class="guess-button" color="white" depressed>
              <v-icon color="black">mdi-send</v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>Card</v-col>
      <v-col>Type</v-col>
      <v-col>Artist</v-col>
      <v-col>Rarity</v-col>
      <v-col>Cost</v-col>
      <v-col>Power</v-col>
    </v-row>
    <guess v-for="guess in guess" :key="guess.name" :guess="guess" />
  </v-container>
</template>
<script>

import guess from './guess.vue'

import { Cards } from '../js/grottobeasts'
export default {
  name: 'Gwordle',
  props: ['gwordle'],
  components: {
    guess
  },
  data: () => ({
    guesses: []
  }),
  computed: {
  },
  watch: {
  },
  methods: {
    makeGuess: function(name) {
      let foundCard = Cards.find(c => c.name == name)

      if (foundCard != null) {
        this.guesses.push(foundCard);
      }
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss">
.guess-field fieldset {
  border-color: white !important;
  border-width: 2px !important;
}
.guess-button {
  margin-top: -18px;
  margin-bottom: -18px;
  height: 56px !important;
}
</style>
