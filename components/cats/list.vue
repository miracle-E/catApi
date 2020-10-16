<template>
  <div class="row">
    <catItem v-for="index in 10" :key="index + '-cat-item'"></catItem>

  </div>
</template>
<script>
import { catItem } from "./item";
export default {
  
}
</script>