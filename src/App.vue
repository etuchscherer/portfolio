<template>
  <v-app>
    <v-container fluid>
      <v-layout column align-center justify-center fill-height>
        <v-flex shrink>
          <h1 class="display-4 font-weight-regular darkest--text">Eric Tuchscherer</h1>
        </v-flex>
        <v-flex shrink>
          <ul class="list-inline">
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
</style>
