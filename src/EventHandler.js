import Vue from 'vue';

// eslint-disable-next-line
export const EventHandler = new Vue({
  data: {
    darkmode: false,
  },
  methods: {
    swapTheme() {
      this.darkmode = !(this.darkmode);
      this.$emit('darkmode', this.darkmode);
    },
  },
});
