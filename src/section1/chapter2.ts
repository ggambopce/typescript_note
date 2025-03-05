// 배열 타임 정의 2가지 방법
let numArr: number[] = [1,2,3];
let strArr: string[] =  ["hello", "im", "jino"];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1,2,3],
    [4,5]
];

// 튜플
// 길이와 타입이 고정된 배열
// 배열 메서드인 push나 pop을 이용해 고정된 길이를 무시하고 요소를 추가하거나 삭제할 수 있다
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
    ["강진호", 1],
    ["이나리", 2],
    ["노현정", 3],
//  [4, "박이수"]
]
