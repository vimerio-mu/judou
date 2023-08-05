<script setup>
  import JuDou from './components/JuDou.vue';
  import { ref } from 'vue'
  
  const text = ref("")
  </script>
  
<template>
  <div>
    <input type="text" v-model="text">
    <p>{{text }}</p>
    <JuDou :text="text" :fontSize="72" />
    <!-- <JuDou :text="text" :height="400" :width="500" /> -->
  </div>
</template>
  
<style scoped>
input {
  width: 100%;
}
</style>
  