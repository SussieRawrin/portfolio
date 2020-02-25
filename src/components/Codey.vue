<template>
  <!-- <prism :language="language" :code="code">
  </prism> -->
  <md-card class="code">
    <link scoped type="text/css" rel="stylesheet"
      :href="(darkmode) ? '/static/agate.css' : '/static/atom-one-light.css'" />
    <!-- <highlight-code lang="cs">{{ code }}</highlight-code> -->
    <pre class="highlight"><code :class="lang">{{ code }}</code></pre>
  </md-card>
</template>

<script>
import { EventHandler } from '@/EventHandler';

import hljs from 'highlight.js/lib/highlight';

import csharp from 'highlight.js/lib/languages/cs';
import javascript from 'highlight.js/lib/languages/javascript';

export default {
  name: 'DarkCode',
  data() {
    return {
      darkmode: false,
    };
  },
  props: {
    code: {
      type: String,
      default: 'console.log("no code")',
    },
    theme: {
      type: String,
      default: 'light',
    },
    lang: {
      type: String,
      default: 'csharp',
    },
  },
  mounted() {
    hljs.registerLanguage('csharp', csharp);
    hljs.registerLanguage('javascript', javascript);

    const targets = document.querySelectorAll('code');
    targets.forEach((target) => {
      hljs.highlightBlock(target);
    });

    this.darkmode = EventHandler.darkmode;

    EventHandler.$on('darkmode', (darkmode) => {
      this.darkmode = darkmode;
    });
  },
  components: {
  },
};
</script>

<style scoped lang="scss">
  .code {
    // max-width: 60%;
  }

  pre {
    white-space: pre-wrap; /* CSS3 - Text module (Candidate Recommendation) http://www.w3.org/TR/css3-text/#white-space */
    word-wrap: break-word; /* IE 5.5+ */
    overflow: auto;
  }
</style>
