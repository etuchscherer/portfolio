<template>
  <v-navigation-drawer v-model="isOpen" absolute temporary dark right>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            About Seattle
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider />

    <v-list>
      <v-list-tile>
        <a class="subheading white--text" href="#">History</a>
      </v-list-tile>
      <v-list-tile>
        <a class="subheading white--text" href="#">Weather</a>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ['open'],
  data() {
    return {
      isOpen: false
    }
  },
  watch: {
    open(val) {
      // why tf do I need 2 watchers to
      // toggle this shit. Lame.
      if (val) this.isOpen = val;
    },
    isOpen(val) {
      this.isOpen = val;
      this.$emit('isClosed', val)
    }
  }
}
</script>