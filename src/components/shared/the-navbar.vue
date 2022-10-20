<template>
    <div>
        <v-navigation-drawer v-model="drawer" absolute bottom temporary>
            <v-list nav dense>
                <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                    <router-link :to="{ name: 'ElKhadem' }">
                        <v-list-item>
                            <v-list-item-title>
                                الخدام
                            </v-list-item-title>
                        </v-list-item>
                    </router-link>

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

        <div class="navbar py-5 px-15" color="primary" dark :class="{'at-home':routeName}">
            <router-link :to="{ name: 'Home' }" class="mr-2">
                <img :src="require('@/assets/images/margirguis.png')" alt="home">
            </router-link>
            <div class="mx-4">
                <p class="mb-0">ايبارشيه شبين القناطر وتوابعها</p>
                <p class="mb-0">كنيسه الشهيد مارجرجس بقها</p>
            </div>

            <div class="white--text mr-auto">
                <v-app-bar-nav-icon @click.stop="drawer = !drawer" dark></v-app-bar-nav-icon>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        drawer: false,
        group: null,
    }),
    computed: {
        routeName() {
            return this.$route.name == 'Home'
        }
    },
    watch: {
        group() {
            this.drawer = false
        },
    },
}
</script>

<style lang="scss" scoped>
.sidebar {
    margin-right: 0.7em;
    background-color: #1976d2;
    height: calc(100vh - 63px);
    position: sticky;
    top: 63px;
}

.navbar {
    display: flex;
    align-items: center;
    color: #fff;
    position: fixed;
    top: 0;
    z-index: 2;
    background: #144653;
    width: 100%;
    height: 80px;

    &.at-home {
        background-color: transparent;
    }

    img {
        max-width: 50px;
        max-height: 90%;
    }
}
</style>