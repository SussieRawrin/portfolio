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
          <progressive-img src="/static/images/f55108bf31.png" placeholder="/static/images/tn/f55108bf31.png" alt="Game Screenshot" />
        </md-card-media>
        <md-card-content>
          <label>Finshed Product!</label>
        </md-card-content>
      </md-card>
    <!-- / Main Image -->

    <!-- Main Article -->
      <div slot="primary-article">
        <md-card>
          <md-card-header>
            <p align="center" class="md-title" style="font-size: 16px">
              <i>{{ articleName }}</i> is a tile-based Role Playing Game that includes <i>Tilemaps</i>, a <i>Dialouge System</i>, and a <i>Pixel Perfect Camera</i>
            </p>
          </md-card-header>

          <md-card-content>
            <p class="indent">
                My absolute favorite type of retro videogames are <a href="https://en.wikipedia.org/wiki/Tile-based_video_game" target="_blank" rel="noopener">tile-based</a> RPGs! The "tiles" in these games refer to the grid on which most objects are placed and sprites are rendered. The combination of the grid, sprites, objects, and layers is called a <i>Tilemap</i>. I'll be using <a href="https://www.mapeditor.org/" target="_blank" rel="noopener">Tiled</a>, a free Tilemap generator, to create and import my Tilemaps into Unity.
            </p>
          </md-card-content>
          <!-- <hr style="border-top: 1px solid rgba(0, 0, 0, 0.1); border-bottom: 1px solid rgba(255, 255, 255, 0.3)"/> -->
        </md-card>

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

        <br />

        <md-card>
          <md-card-content>
            <p class="indent">I imported this <a href="https://0x72.itch.io/16x16-dungeon-tileset/" rel="noopener" target="_blank">amazing tileset</a> by <i>0x72</i> into Tiled and created my demo level. The tiles graphically represent a 16x16 pixel square and I created 4 visual layers: <i>Overlay</i>, <i>Foreground</i>, <i>Entites</i> and <i>Background</i><br />
              I needed sprites to be interactable with so I created 3 <i>Object Layers</i>: <i><Icon name="user" style="color: #b419da"/> Characters</i>, <i><Icon name="fire" style="color: #00ff7f"/> Interactables</i> and <i><Icon name="lock" style="color: #ff5a5a"/> Collisions</i>. I'm able to get that data in unity and read dialouge or stop movement based on their names!
            </p>

            <p class="indent">
              Importing into unity was mostly just configuring a free Tiled importer I found on the asset store, and coding a script to apply my pixel perfect sprite texture to the imported objects. I also had to hook up the interaction code but that was pretty simple :)
              <br />
            </p>
            <div style="text-align: center"><a @click="switchTab('tab-code')">Check out the code in the code tab!</a></div>
          </md-card-content>
        </md-card>

        <h2 align="center"> Part II: Dialouge System</h2>

        <md-card style="width: 70%" class="image">
          <progressive-img src="/static/images/RPG-dialouge.png" placeholder="/static/images/tn/RPG-dialouge.png" alt="Dialouge example" />
          <label>Dialouge editor</label>
        </md-card>

        <br />

        <md-card>
          <md-card-content>
            <p class="indent">
              For dialouge between characters, I opted to purchase <a href="https://assetstore.unity.com/packages/tools/ai/vide-dialogues-69932" target="_blank" rel="noopener">VIDE Dialouge</a> because all the methods I tried weren't as responsive or adaptable as I needed.
              VIDE has a UI (above) that's easy to use and easy to program. It can invoke methods from C# scripts with events! In the above dialouge, Nico's name first appears as '????' but after Nico says his name I activate a method that sets his name to 'Nico'!
            </p>
          </md-card-content>
        </md-card>

        <h2 align="center"> Part III: Pixel-Perfect Camera</h2>

        <md-card style="width: 70%" class="image">
          <!-- <progressive-img src="/static/images/RPG-dialouge.png" placeholder="/static/images/tn/RPG-dialouge.png" alt="Dialouge example" />
          <label>Dialouge editor</label> -->
        </md-card>

      </div>
    <!-- / Main Article -->

    <!-- Secondary Article -->
      <div slot="secondary-article">
        <h2>
          <span style="font-size: 90%; color: grey">(C#)</span> Code
        </h2>

        <div align="left">
          <h3>Sprite Importer</h3>
          <p>I needed this script to apply the pixel-perfect sprite texture to the textures generated each time I updated the tilemap</p>
          <Codey :code="code1" />
        </div>
      </div>
    <!-- / Secondary Article -->

  </Article>
</template>

<script>
import Article from '@/components/Article';
import ArticleDescription from '@/components/ArticleDescription';

import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/user';
import 'vue-awesome/icons/fire';
import 'vue-awesome/icons/lock';

import Codey from '@/components/Codey';

export default {
  name: 'DungeonRPG',
  data() {
    return {
      tags: ['Unity', /* '2d', */ 'Pixel Art', 'Standalone', 'C#'],
      description: 'A Unity game that uses Tilemaps, A Dialouge System, A Pixel-Perfect Camera, C#, and more',
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
  computed: {
    articleName() {
      return (`${this.$router.history.current.name}`);
    },
  },
  components: {
    Article, ArticleDescription, Icon, Codey,
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
