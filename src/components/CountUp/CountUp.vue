<template>
   <span ref="count" class="count" :style="styles"></span>
</template>
<script>
import CountUp from 'countup.js'
export default {
  name: 'CountUp',
  props: {
    styles: {
      type: Object,
      default: function () {
        return {
          color: '#4d63bc'
        }
      }
    },
    start: {
      type: Number,
      default: 0
    },
    end: {
      type: Number,
      default: 2017
    },
    decimal: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 2.5
    },
    options: {
      type: Object
    }
  },
  data () {
    return {
      numAnim: null
    }
  },
  mounted () {
    this.numAnim = new CountUp(
      this.$refs.count,
      this.start,
      this.end,
      this.decimal,
      this.duration,
      this.options
    )
    this.numAnim.start();
  }
}
</script>
