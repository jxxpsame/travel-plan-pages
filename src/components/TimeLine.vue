<template>
  <v-timeline>
    <v-timeline-item v-for="(item,index) in tripdata" :key="index" color="red lighten-2" large>
      <template v-slot:opposite>
        <span>{{item.time}}</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">{{item.place}}</v-card-title>
        <v-img v-bind:src="item.image_src"></v-img>
        <v-card-text>{{item.express}}</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  props: [
    "tripdata"
  ]
    
};
</script>