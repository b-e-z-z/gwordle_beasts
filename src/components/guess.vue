<template>
  <v-row>
    <!-- 
    <v-col>Name</v-col>
    <v-col>Type</v-col>
    <v-col>Artist</v-col>
    <v-col>Rarity</v-col>
    <v-col>Cost</v-col>
    <v-col>Power</v-col> -->
    <v-col>{{guess.name}}</v-col>
    <v-col>{{guess.type}}</v-col>
    <v-col>{{guess.artist}}</v-col>
    <v-col>{{guess.rarity}}</v-col>
    <v-col>{{guess.cost}}</v-col>
    <v-col>{{guess.power}}</v-col>
  </v-row>
</template>
<script>
export default {
  name: 'Guess',
  props: ['guess'],
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
</style>
