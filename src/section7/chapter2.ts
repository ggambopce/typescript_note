/**
 * 타입변수 응용
 */

import { get } from "http";

// 첫번째 사례
// 타입변수 여러가 선언 가능
function swap<T, U>(a: T, b: U) {
    return [b, a];
}

const [a, b] = swap("a", 2);

// 두번째 사례
// 함수 사용전 타입 추론
function returnFirstValue<T>(data: [T, ...unknown[]]) {
    return data[0];
}

let num = returnFirstValue([0, 1, 2]);

let str = returnFirstValue([1, "helo", "mynameis"]);

// 세번째 사례
// 타입에 조건을 주어서 제한
function getLength<T extends { length: number}>(data: T){
    return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength("1234");
let var3 = getLength({length: 10});
//let var4 = getLength(10);