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
          <progressive-img src="/static/images/c12cab519d.png" placeholder="/static/images/tn/c12cab519d.png" alt="" />
        </md-card-media>
        <md-card-content>
          <label>russellsorin.com</label>
        </md-card-content>
      </md-card>
    <!-- / Main Image -->

    <!-- Main Article -->
      <div slot="primary-article">
        <md-card>
          <md-card-header>
            <p align="center" class="md-title" style="font-size: 16px">
              <i>{{ articleName }}</i> is my personal portfolio that I built from scratch using tons of modern web technologies. The primary technlogical focus of this project was speed and efficiency!
            </p>
          </md-card-header>

          <md-card-content>
            <p class="indent">
              I'm relatively new to component based javascript frameworks, and Vue was no exception. Vue is similar to React and Angular but I actually ended up liking Vue the most because it's super fast and also super simple.
            </p>
          </md-card-content>
        </md-card>

        <br />

        <!-- Vue -->
        <h2 align="center"> Working with Vue </h2>
          <md-card class="image" style="width: 70%">
            <progressive-img src="/static/images/WEB-webpack.jpg" placeholder="/static/images/tn/WEB-webpack.jpg" alt="Webpack output" />
            <label>Webpack output</label>
          </md-card>

          <br />

          <md-card>
            <md-card-content>
              <p class="indent">
                Getting started with Vue was super simple! I used <a href="https://cli.vuejs.org/" rel="noopener" target="_blank">Vue's CLI</a> (command line interface) to jumpstart my project and designed the page with <a href="https://vuematerial.io/" rel="noopener" target="_blank">Vue-Material</a>. With the CLI, I was even able to configure the javascript parser to use <a href="https://medium.com/airbnb-engineering/our-javascript-style-guide-43b026f5b463" rel="noopener" target="_blank">AirBnB's style guide</a>!
              </p>
              <p class="indent">
                <a href="https://webpack.js.org/" rel="noopener" target="_blank">Webpack</a> bundles all my assets together (above) and shows me which files are [big] and may need review. As you can see, some images come up as [big]. To lower filesize, I convert them to .jpg if they do not require transparency and also provide a thumbnail to load before the actual image with <a>progressive-img</a>.
              </p>
              <p class="indent">
                In the image above, my vendor.js file shows up as [big]. I've already pruned my imports so the only real improvement I made in addition was to compress it with gZip! Most browsers support gZip compression so I am able to send the gZip file instead of the large .js file if the browser supports it (configured in Nginx &amp; Webpack). The compressed file is almost 80% smaller!
              </p>
            </md-card-content>
          </md-card>
        <!-- / Vue -->

        <!-- Technology -->
        <h2 align="center"> Technology </h2>
          <md-card class="image" style="width: 70%">
            <progressive-img src="/static/images/WEB-analysis.png" placeholder="/static/images/tn/WEB-analysis.png" alt="Compressed filesize visualization" />
            <label>Compressed filesize visualization</label>
          </md-card>

          <br />

          <md-card>
            <md-card-content>
              <p class="indent">
                At first, with all modules and libraries loaded, this site weight almost over 2MB! The Webpack library I'm using looks at all imports and then bundles them into a single javascript file. I downloaded a bundle analyzer (above) and realized that I was importing tons of unnessary stuff (for example, the code highlighter I'm using was downloading every registered language syntax when I only really needed 2 for the entire site)! After cleaning up my imports and digging into some source code, I was actually able to reduce the size of my website by over 1000%!
              </p>

              <p class="indent">
                Two additional technologies that contributed greatly to a lower filesize and faster load time were enabling HTTP/2 and gZip in Nginx and making sure I served compressed files with webpack. Simply put, HTTP/2 is faster than HTTP/1, so this was a no brainer. Additionally gZip is essentially compressing certain files so they can be decompressed by the client. This means lower bandwith for both parties and a lower download size means faster loading. Using Google Chrome's website audit, my performance score shot up!
              </p>
            </md-card-content>
          </md-card>
        <!-- / Technology -->
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
          <Codey :code=" 'console.log(\'' + articleName + '\')' "/>
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
  name: 'about',
  data() {
    return {
      tags: ['Website', 'Nginx', 'SSL', 'Vue.js'],
      description: 'Welcome to <strong>russellsorin.com</strong>! I created this website from scratch to show off my projects!',
    };
  },
  computed: {
    articleName() {
      return ('This Website');
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
