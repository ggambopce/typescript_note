/**
 * 제네릭
 */

// 제네릭 함수 
// 함수를 호출할때 인수에 따라 타입 추론
function func<T>(value: T) : T {
    return value;
}

let num = func(10);
let bool = func(true);
let str = func("string");

// 배열 타입 튜플로 타입단언
let arr = func([1, 2, 3] as [number, number, number]);
// 튜플 타입 할당
let arr2 = func<[number, number, number]>([1, 2, 3]);