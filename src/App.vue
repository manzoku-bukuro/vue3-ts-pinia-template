<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TypeScriptExample from '@/components/TypeScriptExample.vue';
import RefSample from '@/components/RefSample.vue';

const refSample = ref<InstanceType<typeof RefSample> | null>(null);
onMounted(() => {
  console.log(refSample.value?.count);
  refSample.value?.countUp();
  console.log(refSample.value?.callDoubleCount());
})
</script>

<template>
  <div>
    <TypeScriptExample></TypeScriptExample>
    <RefSample ref="refSample"></RefSample>
  </div>
</template>

<style lang="scss" scoped>
</style>
