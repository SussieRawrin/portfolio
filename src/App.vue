<template>
  <md-content :md-theme="theme()" id="app" :style="{ background: bgColor()}">
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->

    <!-- <md-content md-theme="default-dark"> -->
    <navvy />

    <!-- <transition appear name="fade"> -->
      <router-view />
    <!-- </transition> -->
    <!-- </md-content> -->
  </md-content>
</template>

<script>
// global events
import { EventHandler } from '@/EventHandler';

import navvy from './components/Navvy';

export default {
  name: 'App',
  data() {
    return {
      darkmode: false,
      darkBg: '#2F2F2F',
      lightBg: '#F9F9F9',
    };
  },
  mounted() {
    EventHandler.$on('darkmode', (darkmode) => {
      this.darkmode = darkmode;
    });
  },
  methods: {
    bgColor() {
      if (!this.darkmode) {
        return this.lightBg;
      }

      return this.darkBg;
    },
    theme() {
      if (!this.darkmode) {
        return 'default';
      }

      return 'default-dark';
    },
  },
  components: {
    navvy,
  },
};
</script>

<style lang="scss">
  // light or dark
  $mood: light;

  @import "~vue-material/dist/theme/engine"; // Import the theme engine

  @include md-register-theme("default", (
    primary: #FE6D64, // The primary color of your application
    accent: #FF1F6C , // #f44286, // #962959, // The accent or secondary color
    theme: $mood,
  ));

  @include md-register-theme("default-dark", (
    primary: #FE6D64, // The primary color of your application
    accent: #FF1F6C , // #f44286, // #962959, // The accent or secondary color
    theme: dark,
  ));

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .first-color {
    color: md-get-palette-color(deeporange, 500);
  }

  .md-primary {
    color: white !important;
  }

  .accent-snazzy {
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff7a8f' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
  }

  .accent-warning {
    background-color: #2f2f2f !important;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff7a8f' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
  }

  .pretty {
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#f44286+0,ff5722+100&0.8+0,0.8+100 */
    background: -moz-linear-gradient(45deg, rgba(244,66,134,0.8) 0%, rgba(255,87,34,0.8) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(45deg, rgba(244,66,134,0.8) 0%,rgba(255,87,34,0.8) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(45deg, rgba(244,66,134,0.8) 0%,rgba(255,87,34,0.8) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ccf44286', endColorstr='#ccff5722',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

   color: white !important;
    // font-weight: bolder;
  }

    .pretty i {
      color: white !important;
    }

    .pretty a {
      color: white !important;
    }

    a {
      font-weight: bolder !important;
      transition: all 400ms !important;
    }

    a:hover {
      text-decoration: none !important;
      font-size: 120%;
      cursor: pointer;
    }

    .nohover {
      font-size: 100% !important;
    }

  @import "~vue-material/dist/theme/all"; // Apply the theme

  #app {
    /* font-family: 'Roboto', Helvetica, Arial, sans-serif; */
    font-family: 'Quicksand', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    transition: all .2s ease-in-out;

    position: absolute;
    min-height: 100% !important;
    min-width: 100% !important;
  }

  .fadeinup-transition {
    display: inline-block; /* otherwise scale animation won't work */
  }

  .fadeinup-enter-active {
    animation: fade-in-up 2s;
  }

  .fadeinup-leave-active {
    animation: fade-in-up 2s reverse;
  }

  @keyframes fade-in-up {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .bounce-transition {
    display: inline-block; /* otherwise scale animation won't work */
  }

  .bounce-enter-active {
    animation: bounce-out .75s reverse;
  }

  .bounce-leave-active {
    animation: bounce-out .75s;
  }

  @keyframes bounce-out {
    20% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9);
      transform: scale3d(0.9, 0.9, 0.9);
    }

    50%,
    55% {
      opacity: 1;
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }

    to {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
  }
</style>
