<script setup lang="ts">
import { ref } from 'vue';

// テキスト
const stringSample = ref<string>();
stringSample.value = 'string';

// 数字
const numberSample = ref<number>(1);
numberSample.value = 2;

// 配列(型単体)
const arrayExample = ref<number[]>([1, 2, 3]);
arrayExample.value.push(4);
// 配列(型複数)
const mixArrayExample = ref<(number | string)[]>([1, 'string']);
// 配列(ジェネリクス)
const genericsArrayExample = ref<Array<string | number>>([2, 'apple']);

// 連想配列 キー名が決まっている場合
const fixedKeyDictionaryExample = ref<{ name: string, count: number, unnecessary?: string }>({ 'name': 'a', 'count': 1 });
// 連想配列 キー名が決まっていない場合
const randomKeyDictionaryExample = ref<{ [key: string]: string | number }>({ 'a': 1, 'b': 'cc' });

// DOM要素
const domExample = ref<HTMLElement | null>();
domExample.value = document.querySelector<HTMLElement>('.typescript-sample');

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

// nullable対応
interface nullableInterface {
    title: string;
}
let nullableExample!: nullableInterface;
// let nullableExample: nullableInterface | undefined と同義 

// 戻り値が無い関数
const notReturnFunction = (x: string, y?:number): void => {
    console.log(x, y);
}

// 戻り値がある関数
interface returnFunctionInterface{
    title: string;
}
const returnFunction = (value: returnFunctionInterface): string => {
    return value.title;
}
</script>

<template>
    <div class="typescript-sample">
        <div>{{ stringSample }}</div>
        <div>{{ numberSample }}</div>
        <div>{{ arrayExample }}</div>
        <div>{{ mixArrayExample }}</div>
        <div>{{ genericsArrayExample }}</div>
        <div>{{ fixedKeyDictionaryExample }}</div>
        <div>{{ randomKeyDictionaryExample }}</div>
        <div>{{ interfaceExample }}</div>
    </div>
</template>

<style lang="scss" scoped>

</style>
