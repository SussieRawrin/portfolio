<template>
  <md-content id="articleDescription" class="md-accent article-left" align="left" style="position: relative; padding: 10px 40px 10px 40px">
    <h3> {{ title }} </h3>
    <!-- <p> {{ description }} </p> -->
    <p v-html="description" />
    <div>
      <md-chip md-theme="default-dark" v-for="(tag, index) in sortedTags" :key="index">{{ tag }}</md-chip>
      <!-- <div style="position: absolute; right: 4px; bottom: 4px"><md-button @click="switchTab('tab-action')" class="md-raised md-primary">Download</md-button></div> -->
      <router-link to="/" tag="span"><icon class="backArrow" name="arrow-left" /></router-link>
    </div>
  </md-content>
</template>

<script>
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/arrow-left';

export default {
  name: 'ArticleDescription',
  props: {
    title: {
      type: String,
      default: 'New Article',
    },
    description: {
      type: String,
      default: 'This article is awesome!',
    },
    tags: {
      type: Array,
      default: () => ['article', 'WIP'],
    },
    backArrow: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    sortedTags() {
      return (this.tags.slice().sort());
    },
  },
  mounted() {},
  components: {
    Icon,
  },
};
</script>

<style scoped lang="scss">
  #articleDescription {
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff7a8f' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
    margin-bottom: 1em;
  }

  .backArrow {
    position: absolute;
    left: 1.2em;
    top: 2em;
    transition: all .4s;
  }

    .backArrow:hover {
      height: 1.6em;
      width: 1.6em;
      left: .8em;
      top: 1.8em;
      cursor: pointer;
    }
</style>
