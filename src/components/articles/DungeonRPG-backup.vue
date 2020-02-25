<template>
  <div id="article">
    <div class="article-wrapper">
      <div class="md-layout">
        <div class="md-layout-item md-xlarge-size-40 md-large-size-40 md-medium-size-40 md-small-size-100">

          <!-- article description -->
          <ArticleDescription
            :title="articleName"
            :description="description"
            :tags="tags"
          />
          <!-- / article description -->

          <!-- Main Image -->
          <transition name="bounce" appear>
            <md-card class="image" style="margin-left: 16px; margin-right: 20px">
              <md-card-media>
                <progressive-img src="/static/images/f55108bf31.png" placeholder="/static/images/tn/f55108bf31.png" alt="Game Screenshot" />
              </md-card-media>
              <md-card-content>
                <label>Finshed Product!</label>
              </md-card-content>
            </md-card>
          </transition>
          <!-- / Main Image -->
        </div>

        <div class="md-layout-item md-xlarge-size-60 md-large-size-60 md-medium-size-60">

          <!-- Game and Code tabs -->
          <md-tabs @md-changed="switchTab" :md-active-tab="activeTab" class="md-accent" md-alignment="right">

            <!-- Game tab -->
            <md-tab align="left" id="tab-action" md-icon="https://use.fontawesome.com/releases/v5.0.13/svgs/solid/gamepad.svg" >
              <md-content style="background: transparent" class="tabContent md-scrollbar">
                <!-- article -->
                <p align="center" style="font-size: 16px">
                  <i>{{ articleName }}</i> is a tile-based Role Playing Game that includes <i>Tilemaps</i>, a <i>Dialouge System</i>, and a <i>Pixel Perfect Camera</i>
                </p>

                <p class="indent">
                    My absolute favorite type of retro videogames are <a href="https://en.wikipedia.org/wiki/Tile-based_video_game" target="_blank" rel="noopener">tile-based</a> RPGs! The "tiles" in these games refer to the grid on which most objects are placed and sprites are rendered. The combination of the grid, sprites, objects, and layers is called a <i>Tilemap</i>. I'll be using <a href="https://www.mapeditor.org/" target="_blank" rel="noopener">Tiled</a>, a free Tilemap generator, to create and import my Tilemaps into Unity.
                </p>

                <hr style="border-top: 1px solid rgba(0, 0, 0, 0.1); border-bottom: 1px solid rgba(255, 255, 255, 0.3)"/>

                <h2 align="center"> Part I: Unity vs Tilemaps</h2>

                <div class="row" style="width: 85%; margin: auto">
                  <div class="column-huge">
                    <md-card class="image">
                      <progressive-img src="/static/images/RPG-tilemap.png" placeholder="/static/images/tn/RPG-tilemap.png" alt="Colored Tilemap" />
                      <label>Tilemap with collisions, interactables, and characters</label>
                    </md-card>
                  </div>

                  <div class="column-small">
                    <md-card class="image">
                      <progressive-img src="/static/images/RPG-objects.png" placeholder="/static/images/tn/RPG-objects.png" alt="Objects" />
                      <label>Objects list</label>
                    </md-card>

                    <md-card class="image">
                      <progressive-img src="/static/images/RPG-tilesets.png" placeholder="/static/images/tn/RPG-tilesets.png" alt="Tiles" />
                      <label>Avalible tiles</label>
                    </md-card>
                  </div>
                </div>

                <p class="indent">I imported this <a href="https://0x72.itch.io/16x16-dungeon-tileset/" rel="noopener" target="_blank">amazing tileset</a> by <i>0x72</i> into Tiled and created my demo level. The tiles graphically represent a 16x16 pixel square and I created 4 visual layers: <i>Overlay</i>, <i>Foreground</i>, <i>Entites</i> and <i>Background</i><br />
                  I needed sprites to be interactable with so I created 3 <i>Object Layers</i>: <i><Icon name="user" style="color: #b419da"/> Characters</i>, <i><Icon name="fire" style="color: #00ff7f"/> Interactables</i> and <i><Icon name="lock" style="color: #ff5a5a"/> Collisions</i>. I'm able to get that data in unity and read dialouge or stop movement based on their names!
                </p>

                <p class="indent">
                  Importing into unity was mostly just configuring a free Tiled importer I found on the asset store, and coding a script to apply my pixel perfect sprite texture to the imported objects. I also had to hook up the interaction code but that was pretty simple :)
                  <br />
                  <div style="text-align: center"><a @click="switchTab('tab-code')">Check out the code in the code tab!</a></div>
                </p>

                <hr style="border-top: 1px solid rgba(0, 0, 0, 0.1); border-bottom: 1px solid rgba(255, 255, 255, 0.3)"/>
                <h2 align="center"> Part II: Dialouge System</h2>

                <md-card style="width: 70%" class="image">
                  <progressive-img src="/static/images/RPG-dialouge.png" placeholder="/static/images/tn/RPG-dialouge.png" alt="Dialouge example" />
                  <label>Dialouge editor</label>
                </md-card>


                <md-switch v-model="boolean">enable cheats</md-switch>
                <br />
                <md-button class="md-raised md-accent accent-snazzy">download demo</md-button>

                <div align="left">
                </div>
                <!-- / article -->
              </md-content>
            </md-tab>
            <!-- / Game tab -->

            <!-- Code tab -->
            <md-tab id="tab-code" md-icon="https://use.fontawesome.com/releases/v5.0.13/svgs/solid/code.svg">
              <md-content style="background: transparent" class="tabContent md-scrollbar">
                <!-- article -->
                <h2>
                  <span style="font-size: 90%; color: grey">(C#)</span> Code
                </h2>

                <div align="left">
                  <h3>Sprite Importer</h3>
                  <p>I needed this script to apply the pixel-perfect sprite texture to the textures generated each time I updated the tilemap</p>
                  <md-card >
                    <Codey :code="code1" />
                  </md-card>
                </div>
                <!-- / article -->
              </md-content>
            </md-tab>
            <!-- / Code tab -->
          </md-tabs>
          <!-- / Game and Code tabs -->

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/user';
import 'vue-awesome/icons/fire';
import 'vue-awesome/icons/lock';


import Codey from '@/components/Codey';

import ArticleDescription from '@/components/ArticleDescription';

export default {
  name: 'DungeonRPG',
  data() {
    return {
      tags: ['Unity', /* '2d', */ 'Pixel Art', 'Standalone', 'C#'],
      description: 'A Unity game that uses Tilemaps, A Dialouge System, A Pixel-Perfect Camera, C#, and more',
      boolean: true,
      code: {
        movement: '',
        interaction: '',
      },
      activeTab: '',
      code1: `public class SpriteNormalizer : MonoBehaviour {

  public GameObject spriteContainer;
  public Material spriteMaterial;

  // Use this for initialization
  void Start () {
    int n = 0;

    foreach (Transform sprite in spriteContainer.transform) {
      //if already is pixel sprite material, skip it
      if (sprite.GetComponent<SpriteRenderer> ().material.shader.name == spriteMaterial.shader.name)
        continue;
      
      //set sprite material to pixel sprite
      sprite.GetComponent<SpriteRenderer> ().material = spriteMaterial;
      n++;
    }

    if (n > 0) Terminal.print (n + " sprites are now PixelSpriteMaterial");
  }
}`,
    };
  },
  mounted() {
    // hacky way to apply stuff to vue tabs :C
    // eslint-disable-next-line quotes
    document.querySelector('.md-tabs-navigation').style.backgroundImage = `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f0699d' fill-opacity='0.5' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`;
    // eslint-disable-next-line quotes
    document.querySelector('.md-tabs-navigation').style.borderTopRightRadius = '10px';

    document.querySelector('.md-content.md-tabs-content').style.background = 'transparent';

    const thisCopy = this;
    if (window.location.hash) {
      setTimeout(() => {
        thisCopy.switchTab('tab-action');
      }, 900);
    }
  },
  methods: {
    switchTab(value) {
      this.activeTab = value;
    },
  },
  computed: {
    articleName() {
      return (`${this.$router.history.current.name} (incomplete article)`);
    },
  },
  components: {
    Icon, Codey, ArticleDescription,
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

  $radii: 10px;

  label {
    text-align: 'center';
  }

  .image {
    margin: auto;
    // max-width: 499px;
    border-radius: 5px;
  }

  .progressive-image {
    border-radius: 5px;
  }

  .tabContent {
    max-height: 74vh;
    overflow: auto;
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

  .md-tabs-container {
    height: 80vh !important;
    overflow-y: scroll;
  }

  .indent {
    text-indent: 2em;
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

  .article-left {
    border-bottom-right-radius: $radii;
    border-bottom-left-radius: $radii;
    border-top-left-radius: $radii;
 }

  .article-right {
    border-top-right-radius: $radii;
    border-bottom-right-radius: $radii;
  }

  .article-wrapper {
    margin: 20px 40px 20px 40px;
  }
</style>
