<template>
  <v-app>
    <v-content>
      <TripAbout v-bind:aboutData="about_data"></TripAbout>
      <v-divider></v-divider>
      <TimeLine v-bind:tripData="items"></TimeLine>
      <v-divider></v-divider>
      <InnAbout v-bind:innData="inn_data"></InnAbout>
    </v-content>
  </v-app>
</template>

<script>
import TimeLine from "./TimeLine";
import TripAbout from "./TripAbout";
import InnAbout from "./InnAbout";

export default {
  components: {
    TripAbout,
    TimeLine,
    InnAbout
  },
  data() {
    return {
      about_data: {
        title: "蔵王旅行に行こう！",
        textlist: [
          {
            text: "眠い"
          },
          {
            text: "しんどい"
          }
        ]
      },
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
        {
          time: "16:00",
          place: "ホテル",
          image_src: require("@/assets/fox.jpg"),
          express: "このプランは一刻館一択だよ"
        }
      ],
      inn_data: [
          {
              name: "一刻館",
              about: "民泊・温泉付き",
              eating: "なし",
              price: "1泊 ¥83,237/9人",
              description: [
                  {
                      text: "民泊を利用して別荘一棟丸々貸し切ります"
                  }
              ]
          },
      ]
    };
  }
};
</script>

<style>
.about-font {
  font-size: 150%;
  font-family: komorebi-gothic;
}
</style>