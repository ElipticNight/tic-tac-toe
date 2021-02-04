<template>
  <div class="board-wrapper">
    <div class="board">
      <Box v-for="index in 9" :key="index" :reference="index"></Box>
    </div>
  </div>
</template>

<script>
import Box from './Box.vue'

export default {
  name: 'App',
  components: {
    Box
  },
  data: function() {
    return {
      crosses: 'true'
    }
  }
}
</script>

<style lang="scss" scoped>
.board-wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(11, 11, 110);
  .board {
    height: 75vh;
    width: 75vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
}
</style>