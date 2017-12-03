<template>
  <a class="button" :class="type?type:''" @click="hanleClick">
       {{text}}
  </a>
</template>
<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },
  methods: {
    hanleClick: function (evt) {
      this.$emit('on-click', evt)
    }
  }
}
</script>
