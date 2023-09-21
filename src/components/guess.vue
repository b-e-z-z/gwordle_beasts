<template>
  <tr class="guess-row" :class="won ? 'won': ''">
    <td class="guess-cell">
      <div class="px-2">
        {{guess.Name}}
      </div>
    </td>
    <td class="guess-cell">
      <div :class="getArtistColor()">
        {{guess.Artist}}
      </div>
    </td>
    <td class="guess-cell">
      <div :class="getTypeColor()">
        {{guess.Type}}
      </div>
    </td>
    <td class="guess-cell text-center">
      <div :class="getRarityColor()">
        {{guess.Rarity}}
      </div>
    </td>
    <td class="guess-cell text-center">
      <div :class="getCostColor()">
        {{guess.Cost}}
      </div>
    </td>
    <td class="guess-cell text-center">
      <div :class="getPowerColor()">
        {{guess.Power}}
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
    red: "red"
  }),
  computed: {
    won () {
      return this.guess.won
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
    pw: function (percent) {
      return (this.width * (percent / 100.0)) + "px"; 
    }
  },
  mounted () {
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
</style>
