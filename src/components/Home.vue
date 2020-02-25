<template>
  <div id="page">
    <div class="wrapper">
      <md-content v-if="todo" name="todo" style="background: transparent; border-style: dotted; width: 90%; margin: auto; margin-top: 2em; border-color: #f44286; border-radius: 9px">
        <h2>todo</h2>
        <p>full page fade in!</p>
        <p>firefox does not update cache - make sure it's not t-mobile</p>
        <p>remove elevation hover, add animation scale</p>
        <p>pc builds</p>
      </md-content>

    <!-- {{ width }} -->


      <masonry
        :cols="{default: 4, 1200: 3, 900: 2, 600: 1}"
        :gutter="{default: '25px'/*, 700: '15px'*/}"
      >

        <article-card class="item" v-for="(card, index) in cards" :key="'c' + index"
          :title="card.title"
          :subtitle="card.subtitle"
          :info="card.info"
          :imgName="card.imgName"
          :linkName="card.linkName"
          :actionName="card.actionName"
          :date="card.date"
          :dateInHeader="card.dateInHeader"
          :disabled="card.disabled"
        />

        <transition name="fadeinup" appear>
          <md-card v-show="!(hide)" class="md-accent accent-snazzy">
            <md-ripple>
              <md-card-header>
                <div class="md-title">More Soon!</div>
                <div class="md-subhead">i'm still finishing these articles</div>
              </md-card-header>
            </md-ripple>
          </md-card>
        </transition>

      </masonry>

      <span class="md-body-1">{{ getDate }}</span>
    </div>
  </div>
</template>

<script>
import ArticleCard from '@/components/ArticleCard';
// import Icon from 'vue-awesome/components/Icon';
// import 'vue-awesome/icons/times';

export default {
  name: 'Home',
  data() {
    return {
      cards: [
        {
          title: 'This Website!',
          subtitle: 'Vue.js, Night Mode, Google Analytics, Router',
          info: 'My site is coded from scratch! I am focused right now on finishing the articles component and the internals before adding content',
          imgName: 'c12cab519d.png',
          linkName: 'about',
          date: '2018-06-14T00:14:58.181Z',
        },
        {
          title: 'Unity Pixel Art Role Playing Game',
          subtitle: 'Tilemaps, Dialogue, Pixel-Perfect Camera',
          info: 'A Unity RPG game using <a class="" rel="noopener" href="https://www.mapeditor.org/" target="_blank">Tiled</a> .tmx tiledmaps, a dialogue system, and a Pixel-Perfect Camera',
          imgName: 'f55108bf31.png',
          linkName: 'DungeonRPG',
          actionName: 'download',
          date: '2018-04-15T01:12:51.270Z',
        },
        {
          title: 'Multiplayer Drawing Game',
          subtitle: 'built with React and Typescript',
          info: 'A multiplayer browser game in which you try to guess what someone is drawing! Uses React and Typescript',
          imgName: 'STORM-desktop.jpg',
          linkName: 'DrawingGame',
          date: '2018-02-14T00:14:58.181Z',
          disabled: true,
          // dateInHeader: true,
        },
        {
          title: 'WinDooM Chrome Extention',
          subtitle: 'CRX for WinDooM Servers',
          info: 'A Chrome Extention I made for a Minecraft server called WinDooM. It lists all the players online using Minecraft\'s Query API',
          imgName: 'WIND-promo.jpg',
          linkName: 'WinDooMInfo',
          date: '2017-09-14T00:14:58.181Z',
          disabled: true,
        },
        {
          title: 'Web RPG',
          subtitle: 'A web RPG using the html5 Canvas and WebSockets',
          info: 'Another pixel art RPG, this one is a bit older and built for browsers. It has a really cool chat system!',
          imgName: 'SAIL-console.jpg',
          linkName: 'WebRPG',
          date: '2017-06-14T00:14:58.181Z',
          disabled: true,
          // dateInHeader: true,
        },
        {
          title: 'Quiz Framework',
          subtitle: 'My Web Quiz framework with an API',
          info: 'I created this site as a deployable quiz framework and I\'ve already used it on another site!',
          imgName: 'QUIZ-screenshot.jpg',
          linkName: 'quiz',
          date: '2017-06-14T00:14:58.181Z',
          disabled: true,
        },
      ],
      showWip: false,
      todo: false,
      hide: false,
    };
  },
  methods: {
    getWipNoticeAdknowledged() {
      if (localStorage.getItem('wipNoticeAdknowledged') === (null)) {
        localStorage.setItem('wipNoticeAdknowledged', (false));
      }

      if (localStorage.getItem('wipNoticeAdknowledged') === 'true') {
        this.showWip = (false);
        return (true);
      } else {
        this.showWip = (true);
        return (false);
      }
    },

    setWipNoticeAdknowledged(value) {
      localStorage.setItem('wipNoticeAdknowledged', value);
      this.showWip = !(value);
    },
  },
  computed: {
    width() {
      return (window.innerWidth);
    },
    getDate() {
      // return (new Date().toJSON());
      return (new Date().toLocaleDateString());
    },
  },
  components: {
    ArticleCard,
    // Icon,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#page {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -mox-osx-font-smoothing: grayscale;
}

.item{
  margin-bottom: 25px;
}

.wrapper {
  width: 95%;
  margin: 2.5em auto;
}

</style>
