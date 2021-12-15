<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-img
      height="140"
      class="pa-4"
      src="https://preview.pixlr.com/images/800wm/1439/2/1439104804.jpg"
    >
      <div class="text-center">
        <v-avatar class="mb-4" color="grey darken-1" size="64">
          <v-img
            aspect-ratio="30"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Factory_1b.svg/1245px-Factory_1b.svg.png"
          />
        </v-avatar>
        <h2 class="white--text">Factory</h2>
      </div>
    </v-img>
    <v-divider></v-divider>
    <v-list>
      <v-list-item v-for="[icon, text] in links" :key="icon" link>
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <nav class="container mb-4 mt-4">
      <div class="row">
        <div class="col-8"></div>
        <div class="col-3">
          <button
            v-for="lang in languages"
            :key="lang.info.code"
            @click="changeLang(lang.info.code)"
          >
            {{ lang.info.name }}
          </button>
        </div>
      </div>
    </nav>
  </v-navigation-drawer>
</template>

<script>
import i18n from "../i18n";
export default {
  name: "Sidebar",
  props: ["drawer"],
  data() {
    return {
      links: [
        ["mdi-microsoft-windows", "Dashboard"],
        ["mdi-account", "Profile"],
      ],
      languages: Object.values(i18n.messages),
    };
  },
  methods: {
    changeLang: (lang) => {
      localStorage.setItem("lang", lang);
      location.reload();
    },
  },
};
</script>

<style scoped></style>
