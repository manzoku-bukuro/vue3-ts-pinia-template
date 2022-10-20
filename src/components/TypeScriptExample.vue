<script setup lang="ts">
// import TypeScriptExample from '@/components/TypeScriptExample.vue';
import { ref } from 'vue';
// テキスト
const stringSample = ref<string>("string");
// 数字
const numberSample = ref<number>(1);
// 配列(型単体)
const arrayExample = ref<number[]>([1, 2, 3]);
// 配列(型複数)
const mixArrayExample = ref<(number | string)[]>([1, 'string']);
// 配列(generics)
const genericsArrayExample = ref<Array<string | number>>([2, 'apple']);
const randomKeyDictionaryExample = ref<{ [key: string]: number }>({ 'a': 1, 'b': 2 });
// const randomKeyDictionaryExample = ref<({ [key: string]: number } | string)[]>([{ 'a': 1 }, { 'b': 2 }, 'c']);
const sample = ref<Array<number>>([1, 2, 3, 4])
</script>

<template>
    <div>{{ stringSample }}</div>
    <div>{{ numberSample }}</div>
    <div>{{ arrayExample }}</div>
    <div>{{ mixArrayExample }}</div>
    <div>{{ genericsArrayExample }}</div>
    <div>{{ randomKeyDictionaryExample }}</div>
</template>

<style lang="scss" scoped>

</style>
