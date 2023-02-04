import { defineStore, type _GettersTree } from "pinia";


export interface Book {
	title: string;
	price: number;
}
export interface exampleState {
	name: string,
	sales: number,
	menus: string[],
	points: Array<number | string>, // or (number | string)[]
	book: Book,
}

export interface exampleGetters extends _GettersTree<exampleState> {
	introduction: (state: exampleState) => string
	bookPrice: (state: exampleState) => number
}
export interface exampleActions {
	changeName: (name: string) => void
	buyBook: (count: number) => string
}

export const useSampleStore = defineStore<string, exampleState, exampleGetters, exampleActions>({
// export const useExampleStore = defineStore({
	id: 'example',
	// state: () => ({
	// 	name: '名前' as string,
	// 	sales: 0 as number,
	// 	menus: ['ホーム', '一覧'] as string[],
	// 	points: [100, 200, 300] as Array<number>,
	// 	book: { title: '本のタイトル', price: 1070 } as Book,
	// }),
	// state: (): {
	// 	name: string,
	// 	sales: number,
	// 	menus: string[],
	// 	points: Array<number>,
	// 	book: Book,
	// } => ({
	// 	name: '名前',
	// 	sales: 0,
	// 	menus: ['ホーム', '一覧'],
	// 	points: [100, 200, 300],
	// 	book: { title: '本のタイトル', price: 1070 },
	// }),
	// state: () => ({
	// 	name: '名前',
	// 	sales: 0,
	// 	menus: ['ホーム', '一覧'],
	// 	points: [100, 200, 300],
	// 	book: { title: '本のタイトル', price: 1070 },
	// } as {
	// 	name: string,
	// 	sales: number,
	// 	menus: string[],
	// 	points: Array<number>,
	// 	book: Book,
	// }),
	// state: () => ({
	// 	name: '名前',
	// 	sales: 0,
	// 	menus: ['ホーム', '一覧'],
	// 	points: [100, 200, 300],
	// 	book: { title: '本のタイトル', price: 1070 },
	// } as exampleState),
	state: () => ({
		name: '名前',
		sales: 0,
		menus: ['ホーム', '一覧'],
		points: [100, 200, 300, '400'],
		book: { title: '本のタイトル', price: 1070 },
	}),
	getters: {
		introduction: (state) => {
			return `私の名前は${state.name}です。`;
		},
		bookPrice: (state) => {
			return state.book.price * 1.08;
		},
	},
	actions: {
		changeName(name) {
			this.name = name;
		},
		buyBook(count) {
			this.sales = this.bookPrice * count;
			return `現在の売上は${this.sales}です。`
		}
	},
})