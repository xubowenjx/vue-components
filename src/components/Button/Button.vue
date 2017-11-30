<template>
  <a class="button" :class="type?'is-'+type:''" @click="hanleClick">
       {{text}}
  </a>
</template>
<script>
export default {
  name: 'i-button',
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
    hanleClick: function(evt) {
        this.$emit('click', evt);
    }
  }
};
</script>
