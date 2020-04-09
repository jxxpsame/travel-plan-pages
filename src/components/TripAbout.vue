<template>
  <v-container>
    <v-row class="about-font">
      <v-col>
        <p style="font-size: 150%;">{{aboutData.title}}</p>
        <p v-for="(t,index) in aboutData.textlist" :key=index style="font-size: 60%;">{{t.text}}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["aboutData"]
};
</script>

<style>
.about-font {
  font-family: komorebi-gothic;
}
</style>