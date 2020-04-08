<template>
    <v-app>
        <v-content>
            <TimeLine v-bind:tripdata="items"></TimeLine>
            <v-container>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import TimeLine from "./TimeLine";

export default {
    components: {
    TimeLine
    },
      data() {
    return {
      image_src: require("@/assets/fox.jpg"),
      items: [
        {
          time: "12:00",
          place: "蔵王キツネ村",
          image_src: require("@/assets/fox.jpg"),
          express: "きつねかわいい"
        },
        {
          time: "14:00",
          place: "蔵王ハートランド",
          image_src: require("@/assets/fox.jpg"),
          express: "ひつじかわいい"
        },
      ]
    };
  }
}
</script>

<style>

</style>