<template>
      <v-toolbar color="deep-purple accent-4" dark flat>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>旅行案✌️</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <template v-slot:extension>
          <v-tabs v-model="currentItem" fixed-tabs slider-color="white">
            <v-tab to="/">HOME</v-tab>
            <v-tab to="/tab1">Tab1</v-tab>
            <v-tab >Tab2</v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
</template>

<script>
import TimeLine from "./TimeLine";

export default {
  TimeLine,

};
</script>