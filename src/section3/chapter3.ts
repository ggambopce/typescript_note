/**
 * 대수 타입
 * 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * 합집합 타입과 교집합 타입이 존재
 */

/**
 * 1. 합집합 - Union타입
 */

// 기본타입
let a: string | number | boolean | undefined | null | {};
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

// 객체 타입
type Dog = {
    name: string;
    color: string;
}
type Person = {
    name: string;
    language: string;
}

type Union1 = Dog | Person; // 객체이름으로 타입선언 가능

let union1: Union1 = {
    name: "",
    color: "",
}
let union2: Union1 = {
    name: "",
    language: "",
}
let union3: Union1 = {
    name: "",
    color: "",
    language: "",
}
// 어느곳에도 포함 되지못한 산태
// let union4: Union1 = {
//     name: ""
// }

/**
 * 2. 교집합 타입 - Intersection 타입
 */

// 기본타입 교집합타입은 never(공집합)타입
let variable: number | string;

// 객체타입
// 모든 프로퍼티가 존재하는 교집합 타입만 가능
type Dogs = {
    name: string;
    color: string;
}
type Persons = {
    name: string;
    language: string;
}
type Intersection = Dogs & Persons;

let intersection1: Intersection = {
    name: "",
    color: "",
    language: ""
}
 