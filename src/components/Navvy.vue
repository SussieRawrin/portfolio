<template>
  <div id="navvy">
    <md-toolbar md-elevation="1" style="text-align: left">
      <h3 class="md-title" style="flex: 1"><router-link to="/" tag="span" class="home">{{ title }}</router-link> <transition name="fadeinup" appear><span>| {{ articleTitle }}</span></transition></h3>
      <div class="toggleWrapper" style="height: 40px; z-index: 20">
        <span class="time"></span>


        <!-- https://codepen.io/bnthor/pen/WQBNxO -->
        <!-- don't forget to credit :) -->

        <input @click="toggleDark()" type="checkbox" class="dn" id="dn"/>
        <label for="dn" class="toggle">
          <span class="toggle__handler">
            <span class="crater crater--1"></span>
            <span class="crater crater--2"></span>
            <span class="crater crater--3"></span>
          </span>
          <span class="star star--1"></span>
          <span class="star star--2"></span>
          <span class="star star--3"></span>
          <span class="star star--4"></span>
          <span class="star star--5"></span>
          <span class="star star--6"></span>
        </label>
      </div>
      <md-button
        v-for="(button, index) in buttons" :key="'nb' + index"
        @click="navButtonClick(button.name)">{{ button.name }}
      </md-button>
    </md-toolbar>

    <!-- <md-dialog style="width: 400px" :md-active.sync="showContact">
      <progressive-img src="/static/images/buisnesscard.png" alt="Russell Sorin" />
    </md-dialog> -->

    <md-dialog style="max-width: 699px" :md-active.sync="showIntro">
      <md-card class="md-accent" md-with-hover>
        <md-ripple>
          <md-card-header>
            <md-avatar>
              <img :src="require('@/assets/avatar.jpg')" alt="avatar" />
            </md-avatar>
            <div class="md-title" style="font-size: 160%; padding-bottom: .2em">Hi, I'm Russell</div>
            <div class="md-subhead"><strong>Full Stack Engineer</strong> and <strong>Digital Artist</strong></div>
          </md-card-header>

          <md-card-content style="font-size: 18px; text-indent: 2em">
            Welcome to my personal portfolio! I'm a full stack engineer, digital artist, and tech enthusiast. This site is simply meant to showcase my projects and showcase some of the cool things I've done!
            <!-- thanks shane :) -->
          </md-card-content>

          <md-card-expand>
            <md-card-actions md-alignment="space-between">
              <div>
                <md-button @click="toggleDark(true)">{{(!isDark) ? 'Dark Theme' : 'Light Theme'}}</md-button>
              </div>
              <div>
                <md-card-expand-trigger>
                  <md-button id="showcontacts" @click="showContact = !showContact">contact</md-button>
                </md-card-expand-trigger>
                <md-button @click="showIntro = false">hide</md-button>
              </div>
            </md-card-actions>
            <md-card-expand-content class="contact">
              <md-card-content class="accent-snazzy">

                <icon name="envelope"></icon> <a href="mailto:contact@russellsorin.com?subject=Hi%20Russell!&body=Hi%20Russell!%20I%20was%20wondering...">contact@russellsorin.com</a> <br />
                <icon name="linkedin-square"></icon> <a href="https://linkedin.com/in/russell-sorin" rel="noopener" target="_blank">linkedin.com/in/russell-sorin</a> <br />
                <icon name="snapchat-ghost"></icon> <a>xsorin</a> <br />
              </md-card-content>
            </md-card-expand-content>
          </md-card-expand>
        </md-ripple>
      </md-card>
    </md-dialog>

  </div>
</template>

<script>
import { EventHandler } from '@/EventHandler';

import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/envelope';
import 'vue-awesome/icons/snapchat-ghost';
import 'vue-awesome/icons/linkedin-square';

export default {
  name: 'Navvy',
  data() {
    return {
      title: 'Russell Sorin',
      articleTitle: this.$router.history.current.name,
      previousArticleTitle: 'none',
      buttons: [
        {
          name: 'resume',
        },
        {
          name: 'contact',
        },
      ],
      showContact: false,
      showIntro: true,
      boolean: true,
      mounted: false,
    };
  },
  mounted() {
    this.mounted = true;
  },
  methods: {
    toggleDark(artificial) {
      if (artificial) document.getElementById('dn').click();
      else EventHandler.swapTheme();
    },
    navButtonClick(name) {
      if (name === 'resume') {
        // this.$emit('show-resume');
        window.open('https://russellsorin.com/resume.pdf', '_blank');
      } else if (name === 'contact') {
        // this.$emit('show-contact');
        this.showIntro = true;

        this.$nextTick(() => {
          setTimeout(() => {
            if (!this.showContact) document.getElementById('showcontacts').click();
          }, 200);
        });
      }
    },
  },
  computed: {
    isDark() {
      return (EventHandler.darkmode);
    },
  },
  watch: {
    $route(to, from) {
      this.articleTitle = to.name;
      this.previousArticleTitle = from.name;
    },
  },
  components: {
    Icon,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #navvy {
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
    /* -webkit-font-smoothing: antialiased; */
    /* -mox-osx-font-smoothing: grayscale; */
  }

  .fa-icon {
    width: auto;
    height: 1em; /* or any other relative font sizes */

    /* hack to fix alignment */
    vertical-align: middle;
    margin-bottom: 6px;

    /* You would have to include the following two lines to make this work in Safari */
    max-width: 100%;
    max-height: 100%;

    font-size: 140%;
  }

  .contact {
    text-align: center;
  }
    .contact a {
      line-height: 1.4em;
      color: white;
      font-size: 20px;
    }

    .contact a:hover {
      font-size: 24px;
      color: white;
    }

  .home {
    font-size: 100%;
    transition: all .4s;
  }

  .home:hover {
    font-size: 109%;
    cursor: pointer;
  }

  .md-switch {
    display: flex;
  }

  .md-dialog {
    max-width: 768px;
  }

  .toggleWrapper {
    text-align: left;
    position: absolute;
    top: 50%;
    left: 50%;
    overflow: hidden;
    padding: 0 90px;
    transform: translate3d(-50%, -30%, 0);
    background: transparent;
    input {
      position: absolute;
      left: -99em;
    }
  }

  .time {
    position: absolute;
    top: 16px;
  }

  .toggle {
    cursor: pointer;
    display: inline-block;
    position: relative;
    width: 45px;
    height: 25px;
    background-color: #83D8FF;
    border-radius: 45px - 6;
    transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    /*&:before {
      content: 'AM';
      position: absolute;
      left: -25px;
      top: 7px;
      font-size: 9px;
    }

    &:after {
      content: 'PM';
      position: absolute;
      right: -24px;
      top: 7px;
      font-size: 9px;
      color: #749ED7;
    }*/
  }

  .toggle__handler {
    display: inline-block;
    position: relative;
    z-index: 1;
    top: 2px;
    left: 3px;
    width: 25px - 6;
    height: 25px - 6;
    background-color: #FFCF96;
    border-radius: 25px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
    transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: rotate(-45deg);
    .crater {
      position: absolute;
      background-color: #E8CDA5;
      opacity: 0;
      transition: opacity 200ms ease-in-out;
      border-radius: 100%;
    }
    .crater--1 {
      top: 9px;
      left: 5px;
      width: 2px;
      height: 2px;
    }
    .crater--2 {
      top: 14px;
      left: 11px;
      width: 3px;
      height: 3px;
    }
    .crater--3 {
      top: 5px;
      left: 12px;
      width: 4px;
      height: 4px;
    }
  }

  .star {
    position: absolute;
    background-color: #ffffff;
    transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    border-radius: 50%;
  }

  .star--1 {
    top: 5px;
    left: 17px;
    z-index: 0;
    width: 15px;
    height: 2px;
  }

  .star--2 {
    top: 9px;
    left: 14px;
    z-index: 1;
    width: 15px;
    height: 2px;
  }

  .star--3 {
    top: 14px;
    left: 20px;
    z-index: 0;
    width: 15px;
    height: 2px;
  }

  .star--4,
  .star--5,
  .star--6 {
    opacity: 0;
    transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  .star--4 {
    top: 8px;
    left: 6px;
    z-index: 0;
    width: 1px;
    height: 1px;
    transform: translate3d(2px, 0, 0);
  }

  .star--5 {
    top: 16px;
    left: 9px;
    z-index: 0;
    width: 2px;
    height: 2px;
    transform: translate3d(2px, 0, 0);
  }

  .star--6 {
    top: 16px;
    left: 14px;
    z-index: 0;
    width: 1px;
    height: 1px;
    transform: translate3d(2px, 0, 0);
  }

  input:checked {
    +.toggle {
      background-color: #749DD6;
      &:before {
        color: #749ED7;
      }
      &:after {
        color: #ffffff;
      }
      .toggle__handler {
        background-color: #FFE5B5;
        transform: translate3d(20px, 0, 0) rotate(0);
        .crater {
          opacity: 1;
        }
      }
      .star--1 {
        width: 1px;
        height: 1px;
      }
      .star--2 {
        width: 2px;
        height: 2px;
        transform: translate3d(-2px, 0, 0);
      }
      .star--3 {
        width: 1px;
        height: 1px;
        transform: translate3d(-4px, 0, 0);
      }
      .star--4,
      .star--5,
      .star--6 {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      .star--4 {
        transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
      }
      .star--5 {
        transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
      }
      .star--6 {
        transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
      }
    }
  }
</style>
