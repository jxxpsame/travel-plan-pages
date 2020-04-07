<template>
  <div id="app">
    <v-app>
      <AppBar></AppBar>
      <v-content>
        <router-view></router-view>
      </v-content>
      <!-- AppBarコンポーネントをサイトより拾ってくる。 -->
      <Footer></Footer>
    </v-app>
  </div>
</template>

<script>
import AppBar from "./components/AppBar"; // AppBarコンポーネントをサイトより拾ってくる。
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    AppBar, // コンポーネントを追加
    Footer
  },
};
</script>

<style>
</style>
