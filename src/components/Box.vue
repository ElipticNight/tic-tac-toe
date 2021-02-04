<template>
  <div @click="test()" class="box-wrapper">
    <div v-if="activated" class="box">
      <div v-if="value == 'cross'" class="cross">
        cross
      </div>
      <div v-if="value == 'circle'" class="circle">
        circle
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["reference"],
  data: function() {
    return {
      activated: false,
      value: ''
    }
  },
  computed: {
    currentTurn() {
      let crosses = this.$store.state.crosses;
      if(crosses) {
        return 'cross';
      } else {
        return 'circle';
      }
    }
  },
  methods: {
    test() {
      if(!this.activated) {
        console.log(this.reference, this.$store.state.crosses);
        this.activated = true;
        this.value = this.currentTurn
        this.$store.commit('toggleTurn');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box-wrapper {
  height: 100%;
  width: 100%;
  background-color: rgb(110, 41, 175);
  border: 1px solid black;
  .box {
    width: 100%;
    height: 100%;
    background-color: brown;
  }
}
</style>