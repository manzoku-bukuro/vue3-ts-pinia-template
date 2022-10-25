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
// 連想配列 キー名が決まっている場合
const fixedKeyDictionaryExample = ref<{ name: string, count: number, unnecessary?: string }>({ 'name': 'a', 'count': 1 });
// 連想配列 キー名が決まっていない場合
const randomKeyDictionaryExample = ref<{ [key: string]: string | number }>({ 'a': 1, 'b': 'cc' });

// interface
interface myInterface {
    name: string | null;
    count: number;
    isSet?: boolean;
    info: {
        status: string;
    } | null;
}
const interfaceExample = ref<myInterface[]>([{ name: 'test1', count: 1, info: { status: 'ok' } },{ name: 'test2', count: 2, isSet: true, info: null }]);
</script>

<template>
    <div>{{ stringSample }}</div>
    <div>{{ numberSample }}</div>
    <div>{{ arrayExample }}</div>
    <div>{{ mixArrayExample }}</div>
    <div>{{ genericsArrayExample }}</div>
    <div>{{ fixedKeyDictionaryExample }}</div>
    <div>{{ randomKeyDictionaryExample }}</div>
    <div>{{ interfaceExample }}</div>
</template>

<style lang="scss" scoped>

</style>
