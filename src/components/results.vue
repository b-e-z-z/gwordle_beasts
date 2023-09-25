<template>
  <v-row align="center" class="win-message">
    <v-spacer/>
    <v-col cols="12" lg="6" order-md="2" class="text-center">
      <div>
        The answer was
      </div>
      <div class="answer-name">
        {{ answer.Name }}
      </div>
      <div>
        It took you {{ guesses.length }} tries
      </div>
      <div class="pa-4">
        <v-btn class="text-none share-button" color="#370101" x-large rounded @click="shareToClipboard">
          Share 
          <v-icon class="ml-2">mdi-content-copy</v-icon>
        </v-btn>
      </div>
    </v-col>
    <v-col cols="12" lg="6" order-md="1">
      <v-img
      :src="answerCardUrl"
      :aspect-ratio="5/7"
      height="250px"
      contain
      >
        <template v-slot:placeholder>
          <div>
            <v-row align="center" style="height: 176px">
              <v-spacer />
              <v-col class="text-center" cols="auto">
                <v-progress-circular indeterminate />
              </v-col>
              <v-spacer />
            </v-row>
          </div>
        </template>
      </v-img>
      <div class="image-credit text-center">
        <div>Image by the scanning team at</div>
        <div><a href="https://www.grotto-bestiary.com/about" style="text-decoration: none;"><b>Grotto Bestiary</b></a></div>
      </div>
    </v-col>
    <v-spacer/>
  </v-row>
</template>
<script>

import { Gwordle } from '../js/gwordlelogic';

export default {
  name: 'Results',
  props: ['guesses', 'answer', 'sharetext'],
  components: {
  },
  data: () => ({
  }),
  computed: {
    answerCardUrl () {
      return Gwordle.getCardImage(this.answer);
    },
  },
  watch: {
  },
  methods: {
    shareToClipboard: function () {
      var emojis = Gwordle.generateEmojis(this.answer, this.guesses);

      var copy = this.sharetext + '\n';
      copy += emojis;

      navigator.clipboard.writeText(copy);
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
</style>
