/**
 * 조건부 타입
 * 삼항 연산자를 사용하여 조건에 따라 타입을 결정하는 문법
 */

type A = number extends string ? string: number;

type ObjA = {
    a: number;
}

type ObjB = {
    a: number;
    b: number;
}

type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA : StringNumberSwitch<number>

let varB : StringNumberSwitch<string>

// 조건부 타입, 제네릭, 함수 오버로딩으로 타입 정의
function removeSpaces<T>(text : T) : T extends string ? string : undefined;
function removeSpaces(text : any) {
    if (typeof text === "string") {
        return text.replaceAll(" ", "");
    } else{
        return undefined;
    }
}

let result = removeSpaces("hi im winterlood");
result.toUpperCase();

let results = removeSpaces(undefined);