<template>
  <div id="app">
    <v-app>
      <!-- マテリアルUIはv-appタグで全体を囲むこと!!囲まないと色がおかしくなったりします。 -->
      <AppBar></AppBar>
      <!-- AppBarコンポーネントをサイトより拾ってくる。 -->
      <InputTask v-on:child-event="TaskAdded" />
      <taskView v-bind:tasks="tasks" v-on:child-event="TaskFinished" />
    </v-app>
  </div>
</template>

<script>
import TaskView from "./components/TaskView";
import InputTask from "./components/InputTask";
import AppBar from "./components/AppBar"; // AppBarコンポーネントをサイトより拾ってくる。

export default {
  name: "App",
  components: {
    TaskView,
    InputTask,
    AppBar // コンポーネントを追加
  }
};
</script>

<style>
</style>
