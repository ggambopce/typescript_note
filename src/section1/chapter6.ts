// any 타입
// 특정 변수와 타입을 우리가 확실히 모를 때
// 런타임 오류 발생 가능
let anyVar: any = 10; // 모든값 할당 가능
anyVar = 'hello';

anyVar = {};
anyVar = () => {};

anyVar.toUpperCase(); // 함수 사용 가능
anyVar.toFixed();

let num: number = 10; // 모든타입에 할당가능
num = anyVar;

// unknown 타입
// 모든 값 할당만 가능
// 다른 것은 타입 정제 필요
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};