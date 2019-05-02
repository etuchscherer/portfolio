<template>
  <v-app>
    <v-container fluid>
      <VueGithubCorners :repoUrl="repoUrl" :catColor="catColor" :bgColor="bgColor"></VueGithubCorners>

      <seattle-drawer :open="shouldOpenDrawer" v-on:isClosed="openDrawer(false)"/>

      <v-layout column align-center justify-center fill-height>
        <v-flex shrink>
          <h1 class="display-4 font-weight-regular darkest--text">Eric Tuchscherer</h1>
        </v-flex>
        <v-flex shrink>
          <h4 class="display-2 grey--text darken-4 my-2">Software Engineer from <span @click="openDrawer(true)" class="hoverable">Seattle, WA</span></h4>
        </v-flex>
        <v-flex shrink>
          <ul class="list-inline my-4">
            <li class="px-2">
              <a target="_new" class="social-link display-1 grey--text darken-4" href="https://twitter.com/e_tuchscherer">twitter</a>
            </li>
            <li class="px-2">
              <a target="_new" class="social-link display-1 grey--text darken-4" href="https://www.facebook.com/eric.tuchscherer">facebook</a>
            </li>
            <li class="px-2">
              <a target="_new" class="social-link display-1 grey--text darken-4" href="https://www.linkedin.com/in/tuchscherer/">linkedin</a>
            </li>
            <li class="px-2 social-link">
              <a target="_new" class="social-link display-1 grey--text darken-4" href="https://github.com/etuchscherer">github</a>
            </li>
          </ul>
        </v-flex>
      </v-layout>
    </v-container>

  </v-app>
</template>

<script>
import Vue from 'vue';
import { VueGithubCorners } from 'vue2-github-corners';
import SeattleDrawer from './components/seattle-drawer.vue';

// https://github.com/WeiChiaChang/vue-github-corners
Vue.component('VueGithubCorners', VueGithubCorners);
Vue.component('seattle-drawer', SeattleDrawer);

export default {
  data() {
    return {
      shouldOpenDrawer: false,

      // vue-github-corner configuration
      repoUrl: 'https://github.com/etuchscherer/portfolio',
      bgColor: '#333',
      catColor: '#FFF'
    }
  },
  components: {
    SeattleDrawer
  },
  methods: {
    openDrawer(state) {
      this.shouldOpenDrawer = state;
    }
  }
}
</script>


<style lang="scss" scoped>
  .list-inline {
    display: inline-flex;
    list-style-type: none
  }

  .darkest--text {
    color: #333;
  }

  .social-link:hover {
    // use !important otherwise material design overrides
    color: #333 !important;
  }

  span.hoverable:hover {
    color: red;
  }
</style>
