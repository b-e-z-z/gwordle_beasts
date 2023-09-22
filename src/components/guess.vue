<template>
  <tr class="guess-row" :class="won ? 'won': ''">
    <td v-for="column in columns" :key="column.p" class="guess-cell">
      <div :class="column.c ? column.c() : ''">
        {{ guess[column.p] }}
        <v-icon v-if="column.h" class="comparison-hint">{{ column.h() }}</v-icon>
      </div>
    </td>
  </tr>
</template>
<script>
import { Gwordle } from '../js/gwordlelogic';

export default {
  name: 'Guess',
  props: ['guess', 'answer', 'width'],
  components: {
  },
  data: () => ({
    green: "green",
    orange: "orange",
    red: "red",
    columns: []
  }),
  computed: {
    won () {
      return this.guess.Name == this.answer.Name;
    }
  },
  watch: {
  },
  methods: {
    getArtistColor: function () {
      return Gwordle.getColorClass(Gwordle.compareArtist(this.guess, this.answer));
    },
    getTypeColor: function () {
      return Gwordle.getColorClass(Gwordle.compareType(this.guess, this.answer));
    },
    getRarityColor: function () {
      return Gwordle.getColorClass(Gwordle.compareRarity(this.guess, this.answer));
    },
    getCostColor: function () {
      return Gwordle.getColorClass(Gwordle.compareCost(this.guess, this.answer));
    },
    getPowerColor: function () {
      return Gwordle.getColorClass(Gwordle.comparePower(this.guess, this.answer));
    },
    getNumberColor: function () {
      return Gwordle.getColorClass(Gwordle.compareNumber(this.guess, this.answer));
    },
    getNumberHint: function () {
      return Gwordle.getHint(Gwordle.compareNumber(this.guess, this.answer));
    },
  },
  mounted () {
    this.columns = [
      { p: 'Name' },
      { p: 'Artist', c: this.getArtistColor },
      { p: 'Type', c: this.getTypeColor },
      { p: 'Rarity', c: this.getRarityColor },
      { p: 'Cost', c: this.getCostColor },
      { p: 'Power', c: this.getPowerColor },
      { p: 'Number', c: this.getNumberColor, h: this.getNumberHint }
    ]
  }
}
</script>
<style lang="scss" scoped>
.green {
  background-color: #00ff00;
}
.orange {
  background-color: #ffbb00;
}
.red {
  background-color: #ff0000;
}
.guess-row {
  height: 48px;
}
.guess-cell {
  margin: 10px;
  height: inherit !important;
  padding: 0px 4px !important;
}
.guess-cell > div {
  height: 32px;
  padding: 7px 16px;
  border-radius: 14px;
  text-overflow: ellipsis;
  display: inline-table;
}
.guess-cell:first-child > div {
  padding: 7px 2px;
}
.won {
  background-color: #3f813f;
}
.guess-table tr.won:hover {
  background-color: #3f813f !important;
}
.won td:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.won td:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.comparison-hint {
  font-size: 16px;
}
</style>
