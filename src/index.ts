// interface SearchFunc {
//   (source: string, subString: string): boolean
// }

// interface StringArray {
//   [index: number]: string
// }

// const arr: StringArray = ['1']

// function search(params: { source: string; subString: string }): boolean {
//   return false
// }
// const params = {
//   source: '1',
//   subString: '2',
// }

// console.log(`search(params)`, search(params))
// type Person = {
//   firstName: string
//   lastName: string
//   age: number
//   isMarried: boolean
// }

// type PersonKeys = keyof Person

// const p: PersonKeys = ''

// type SupportedEvent = {
//   click: string
//   change: string
//   keyup: string
//   keydown: string
// }

// // 等同于
// type HandleEvent = {
//   [P in keyof SupportedEvent as `handle${Capitalize<P>}`]: () => void
// }

// const handle: HandleEvent = {
//   handleClick: () => console.log(),
//   handleChange: () => console.log(),
//   handleKeyup: () => console.log(),
//   handleKeydown: () => console.log(),
// }
// console.log(handle.)

// enum Color {
//   Red,
//   Green,
//   Blue,
// }

// enum SelectableButtonTypes {
//   Important = 'important',
//   Optional = 'optional',
//   Irrelevant = 'irrelevant',
// }
// const c: SelectableButtonTypes = SelectableButtonTypes.Important
// console.log(`c`, c)

// 範例來自 OneDegree 同事 Ken 與 Ivy

// type Nullable<T> = T | null

// enum BE_ENUM_TIME_UNIT {
//   year = 'year',
//   month = 'month',
//   day = 'day',
// }

// const apiResponse = Math.random() > 0.05 ? BE_ENUM_TIME_UNIT.month : null

// enum FE_ENUM_TIME_UNIT {
//   year = 'year',
//   month = 'month',
//   day = 'day',
// }

// const map = {
//   [BE_ENUM_TIME_UNIT.year]: null,
//   [BE_ENUM_TIME_UNIT.month]: FE_ENUM_TIME_UNIT.month,
//   [BE_ENUM_TIME_UNIT.day]: FE_ENUM_TIME_UNIT.day,
// }

// const map2 = {
//   [BE_ENUM_TIME_UNIT.year]: null,
//   [BE_ENUM_TIME_UNIT.month]: FE_ENUM_TIME_UNIT.month,
//   [BE_ENUM_TIME_UNIT.day]: FE_ENUM_TIME_UNIT.day,
// } as const

// // 因為沒有用 as const，所以 map[apiResponse] 推倒出來的型別是
// // ERROR: Type 'FE_ENUM_TIME_UNIT.year' is not assignable to type 'Nullable<FE_ENUM_TIME_UNIT.month | FE_ENUM_TIME_UNIT.day>'
// let unit: Nullable<FE_ENUM_TIME_UNIT.month | FE_ENUM_TIME_UNIT.day> =
//   apiResponse ? map[apiResponse] : null

// let unit2: Nullable<FE_ENUM_TIME_UNIT.month | FE_ENUM_TIME_UNIT.day> =
//   apiResponse ? map2[apiResponse] : null

type Greet = (name: string, age: number) => string

const greet: Greet = (name, age) => {
  return `Hello ${name}, your age is ${age}.`
}

console.log(greet('Aaron', 1))
