<template>
  <v-container>
    <v-row class="text-center ma-1">
      <v-col class="mb-5" cols="12">

        <v-row justify="center">
          <div v-for="(next, i) in whatsNext" :key="i" :href="next.href" class="mx-3" target="_blank">
            <khadem-card />
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import KhademCard from './khodam/khadem-card';
export default {
  name: 'HelloWorld',
  components: {
    KhademCard
  },

  data: () => ({
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer',
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
}
</script>
