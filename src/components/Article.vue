<template>
  <div id="article">
    <div class="article-wrapper">
      <div class="row">
        <div class="column-40">

          <!-- article description -->
          <slot name="article-description"></slot>
          <!-- / article description -->

          <!-- Main Image -->
          <transition name="bounce" appear>
            <div style="max-width: 540px; margin: auto">
              <slot name="cover">
              </slot>
            </div>
          </transition>
          <!-- / Main Image -->
        </div>

        <div class="column-60">

          <!-- Game and Code tabs -->
          <md-tabs @md-changed="switchTab" :md-active-tab="activeTab" class="md-accent" md-alignment="right">

            <!-- Game tab -->
            <md-tab align="left" style="padding-top: 4px; padding-bottom: 4px" id="tab-action" md-icon="https://use.fontawesome.com/releases/v5.0.13/svgs/solid/gamepad.svg" >
              <md-content style="background: transparent" class="tabContent md-scrollbar">
                <br />
                <!-- article -->
                <slot name="primary-article"></slot>
                <!-- / article -->
              </md-content>
            </md-tab>
            <!-- / Game tab -->

            <!-- Code tab -->
            <md-tab id="tab-code" md-icon="https://use.fontawesome.com/releases/v5.0.13/svgs/solid/code.svg">
              <md-content style="background: transparent" class="tabContent md-scrollbar">
                <!-- article -->
                  <slot name="secondary-article"></slot>
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
export default {
  name: 'Article',
  props: {
  },
  data() {
    return {
      activeTab: '',
    };
  },
  mounted() {
    // hacky way to apply stuff to vue tabs :C
    // eslint-disable-next-line quotes
    document.querySelector('.md-tabs-navigation').style.backgroundImage = `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff7a8f' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`;
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
  components: {
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

  .row {
    display: flex;
    // box-sizing: content-box;
    // border: 2px dotted red;
  }

  .column-40 {
    width: 40%;
    // border: 2px dotted lime;
  }

  .column-60 {
    width: 60%;
    // border: 2px dotted magenta;
  }

  @media only screen and (max-width: 900px) {
    .row {
      display: block;
    }

    .column-40 {
      width: 100%;
    }

    .column-60 {
      width: 100%;
    }

    .article-left {
      border-top-right-radius: $radii;
    }
  }

  .tabContent {
    max-height: 74vh;
    overflow-y: auto;
    padding: 0 34px 0 18px;
  }

  .md-tabs-container {
    height: 80vh !important;
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
