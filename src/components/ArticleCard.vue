<template>
  <transition name="md-empty-state" appear>
    <md-card :class="cardClass" md-with-hover>
      <!-- <router-link :to="'/' + linkName + '/'"> -->
        <md-card-header @click.native="goToArticle">
          <md-avatar v-if="showAvatar">
            <img :src="avatar" alt="Avatar">
          </md-avatar>

          <div class="md-title">{{ title }}</div>
          <div class="md-subhead">{{ subtitle }}</div>
          <div v-if="date != 'none' && dateInHeader == true" class="md-subhead" style="margin-top: 0px">
            <icon name="clock-o"></icon>
            <timeago :since="date" :include-seconds="true" :auto-update="60"></timeago>
          </div>
        </md-card-header>

        <md-card-media @click.native="goToArticle">
          <!-- <img :src="coverImage" alt="People"> -->
          <progressive-img :src="coverImage" :placeholder="placeholderCoverImage" :alt="linkName" />
        </md-card-media>

        <md-card-content @click.native="goToArticle">
          <p class="pretty2" v-html='info'>
          </p>

        </md-card-content>
        <md-progress-bar class="md-accent" md-mode="determinate" :md-value="progress" />

        <md-card-actions :md-alignment="(dateInHeader == true) ? 'right' : 'space-between'">
          <div v-if="date != 'none' && dateInHeader == false" class="md-subhead" style="text-align: center"><icon name="clock-o"></icon> <timeago :since="date" :include-seconds="true" :auto-update="60"></timeago></div>
          <div>
            <md-button :to="'/' + linkName + '/'" class="nohover md-accent"><strong>Article</strong></md-button>
            <md-button v-if="actionName != 'none'" class="nohover" :to="'/' + linkName + '#' + actionName">{{ actionName }}</md-button>
          </div>
        </md-card-actions>
      <!-- </router-link> -->
    </md-card>
  </transition>
</template>

<script>
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/clock-o';

// import VueTimeago from 'vue-timeago';

export default {
  name: 'ArticleCard',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'new article',
    },
    subtitle: {
      type: String,
      default: 'subtitle',
    },
    info: {
      type: String,
      default: 'information',
    },
    imgName: {
      type: String,
      default: 'nico.png',
    },
    actionName: {
      type: String,
      default: 'none',
    },
    linkName: {
      type: String,
      default: 'article',
    },
    date: {
      type: String,
      default: 'none',
    },
    dateInHeader: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // eslint-disable-next-line global-require
      // avatar: require('../assets/images/4.0.png'),
      // eslint-disable-next-line global-require
      avatar: require('../../static/images/4.0.png'),
      showAvatar: false,
      progress: 20,
    };
  },
  methods: {
    goToArticle() {
      this.$router.push(`/${this.linkName}/`);
    },
  },
  computed: {
    coverImage() {
      // eslint-disable-next-line global-require
      const path = (`../../static/images/${this.imgName}`);
      return (path);
    },
    placeholderCoverImage() {
      const path = (`../../static/images/tn/${this.imgName}`);
      return (path);
    },
    cardClass() {
      if (this.disabled) return 'article-card disabled';
      else return 'article-card';
    },
  },
  components: {
    Icon,
    // VueTimeago,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #card {
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
    /* -webkit-font-smoothing: antialiased; */
    /* -mox-osx-font-smoothing: grayscale; */
  }

  $md-transition-enter-timing: cubic-bezier(0.4, 0.4, .2, 1);
  $md-transition-enter-duration: .4s;
  $md-transition-enter: $md-transition-enter-duration $md-transition-enter-timing;

  .article-card {
    transition: opacity .2s $md-transition-enter-timing,
                transform .4s $md-transition-enter-timing;
    will-change: transform, opacity;
  }

  .disabled {
    opacity: .5;
  }


  .fa-icon {
    width: auto;
    height: 1em; /* or any other relative font sizes */

    /* hack to fix alignment */
    vertical-align: middle;
    margin-bottom: 2px;

    /* You would have to include the following two lines to make this work in Safari */
    max-width: 100%;
    max-height: 100%;
  }
</style>
