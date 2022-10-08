<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>
              <router-link :to="{ name: 'ElKhadem' }">
                الخدام
              </router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>المخدومين</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <img :src="require('./assets/images/margirguis.png')" height="100%" alt="">
      <div class="mx-4">
        <p class="mb-0">مطرانيه شبين القناطر وتوابعها</p>
        <p class="mb-0">كنيسه الشهيد مارجرجس بقها</p>
      </div>

      <div class="white--text mr-auto">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </div>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <!-- <HelloWorld /> -->

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },
};
</script>


<style lang="scss">
.sidebar {
  margin-right: 0.7em;
  background-color: #1976d2;
  height: calc(100vh - 63px);
  position: sticky;
  top: 63px;
}

* {
  font-family: 'Tajawal', sans-serif;
  letter-spacing: normal;
}
</style>
