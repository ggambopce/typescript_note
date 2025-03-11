/**
 * 함수 오버로딩
 * 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 방법
 * 타입스크립트에서만 지원 자바스크립트는 없음
 * -> 하나의 함수 func
 * -> 모든 매개변수의 타입 number
 * Ver1. 매개변수가 1개 -> 이 매개변수에 20을 곱한 값 출력
 * Ver2. 매개변수가 3개 -> 이 매개변수들을 다 더한 값을 출력
 */

// 버전들 -> 오버로드 시그니쳐
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니쳐
function func(a: number, b?: number, c?: number) {
    if(typeof b === "number" && typeof c === "number") {
        console.log(a + b + c);
    } else {
        console.log(a * 20);
    }
}

//func();
func(1);
//func(1,2);
func(1,2,3,);

