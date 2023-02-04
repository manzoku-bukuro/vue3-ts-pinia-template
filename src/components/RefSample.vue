<script setup lang="ts">
import { ref } from 'vue';

const count = ref<number>(0);

const countUp = () => {
    count.value++;
}

const callDoubleCount = ():number => {
    return count.value * 2;
}

defineExpose({
    count,
    countUp,
    callDoubleCount,
});
</script>

<template>
    <div></div>
</template>

<style lang="scss" scoped>

</style>
