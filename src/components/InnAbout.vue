<template>
  <v-container>
    <p style="font-size: 150%; font-family: komorebi-gothic;">宿候補</p>
    <v-card v-for="(oneData,index) in innData" :key=index class="mx-auto" max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://www.clipit.jp/img/39603/1582006603145l.jpg"
      >
        <v-card-title>{{oneData.name}}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">{{oneData.about}}</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>食事：{{oneData.eating}}</div>
        <div>{{oneData.price}}</div>
        <div v-for="(desc,descIndex) in oneData.description " :key=descIndex>民泊を利用して別荘一棟丸々貸し切ります</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text href="https://stayjapan.com/area/miyagi/katta/pr/12272">詳細</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["innData"]
};
</script>

<style>
</style>