<template>
  <v-app>
    <v-main>
      <theNavbar />
      <v-container fluid class="px-0 pb-0 main-page">
        <router-view></router-view>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
import theNavbar from "@/components/shared/the-navbar.vue";

export default {
  name: 'App',
  components: {
    theNavbar
  },

};
</script>


<style lang="scss">
@font-face {
  font-family: 'TheMixArab';
  src: url(./assets/Fonts/ArbFONTS-TheMixArab-Bold.ttf);
}

@font-face {
  font-family: 'TheMixArab';
  src: url(./assets/Fonts/ArbFONTS-TheMixArab-Regular.ttf);
}

* {
  font-family: 'TheMixArab', 'Tajawal', sans-serif;
  letter-spacing: normal;
}

.main-page {
  background-image: url('@/assets/images/Banner.png');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 80px !important;
  min-height: 100vh;

}
</style>
