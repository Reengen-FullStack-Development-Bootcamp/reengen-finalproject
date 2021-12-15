<template>
  <v-app-bar app elevate-on-scroll elevation="3" color="white">
    <v-app-bar-nav-icon @click="$emit('drawerEvent')"></v-app-bar-nav-icon>
    <v-spacer />
    <v-col lg="6" cols="12"> </v-col>
    <v-spacer />
    <v-menu offset-y>
      <template v-slot:activator="{ attrs, on }">
        <span
          class="mx-5 mr-10"
          style="cursor: pointer"
          v-bind="attrs"
          v-on="on"
        >
        </span>
      </template>
      <v-list three-line width="250">
        <template v-for="(item, index) in items">
          <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
          ></v-subheader>

          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
          ></v-divider>
        </template>
      </v-list>
    </v-menu>
    <v-menu offset-y>
      <template v-slot:activator="{ attrs, on }">
        <span style="cursor: pointer" v-bind="attrs" v-on="on">
          <v-chip link>
            <span class="ml-3">{{ user ? user.name : "Giriş yap!!" }}</span>
          </v-chip>
        </span>
      </template>
      <v-list width="250" class="py-0" v-if="user">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title
              >{{ user ? user.name : "Giriş yap!!" }}
            </v-list-item-title>
            <v-list-item-subtitle>{{
              user ? "Sign out" : "Sign in"
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item
          link
          v-for="(menu, i) in menus"
          :key="i"
          @click="menu.function"
        >
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ menu.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Topbar",
  data() {
    return {
      menus: [
        { title: "Profile", icon: "mdi-account" },
        { title: "Setting", icon: "mdi-cog" },
        { title: "Logout", icon: "mdi-logout", function: this.logout },
      ],
    };
  },
  methods: {
    logout() {
      this.$cookies.remove("authorization");
      this.setUser(null);
      this.$router.push("/login");
    },
    ...mapMutations("account", ["setUser"]),
  },
  computed: {
    ...mapState("account", ["user"]),
  },
};
</script>

<style scoped></style>
