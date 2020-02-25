<template>
  <Article>
    <!-- Article Description -->
      <ArticleDescription
        slot="article-description"
        :title="articleName"
        :description="description"
        :tags="tags"
      />
    <!-- / Article Description -->

    <!-- Main Image -->
      <md-card slot="cover" class="image" style="margin-left: 16px; margin-right: 20px; margin-bottom: 1em">
        <md-card-media>
          <progressive-img src="/static/images/nico.png" placeholder="/static/images/tn/nico.png" alt="" />
        </md-card-media>
        <md-card-content>
          <label>Cover Image</label>
        </md-card-content>
      </md-card>
    <!-- / Main Image -->

    <!-- Main Article -->
      <div slot="primary-article">
        <p align="center" style="font-size: 16px">
          <i>{{ articleName }}</i>
        </p>
      </div>
    <!-- / Main Article -->

    <!-- Secondary Article -->
      <div slot="secondary-article">
        <h2>
          <span style="font-size: 90%; color: grey">(js)</span> Code
        </h2>

        <div align="left">
          <h3>New Code</h3>
          <p>New Description</p>
          <md-card>
            <Codey :code=" 'console.log(\'' + articleName + '\')' "/>
          </md-card>
        </div>
      </div>
    <!-- / Secondary Article -->

  </Article>
</template>

<script>
import Article from '@/components/Article';
import ArticleDescription from '@/components/ArticleDescription';

import Codey from '@/components/Codey';

export default {
  name: 'empty article',
  data() {
    return {
      tags: ['Article'],
      description: 'An empty article',
    };
  },
  computed: {
    articleName() {
      return (`${this.$router.history.current.name} (incomplete article)`);
    },
  },
  components: {
    Article, ArticleDescription, Codey,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #article {
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
    /* -webkit-font-smoothing: antialiased; */
    /* -mox-osx-font-smoothing: grayscale; */
  }

  .row {
    display: flex;
  }

  .column-huge {
    flex: 75%;
    margin: 5px;
  }

  .column-small {
    flex: 25%;
    margin: 5px;
  }

  label {
    text-align: 'center';
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

  .indent {
    text-indent: 2em;
  }

  .image {
    margin: auto;
    // max-width: 499px;
    border-radius: 5px;
  }

  .progressive-image {
    border-radius: 5px;
  }
</style>
