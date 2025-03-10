/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고 어떤 결과값을 반환하는지
// 어떤 [타입의] 매개변수를 받고 어떤 [타입의] 결과값을 반환하는지
function func(a: number, b: number): number {  // 반환타입이 없으면 리턴값에서 추론
    return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 */
function introduce(name = "강진호", age: number, tall?: number) {
    console.log(`name : ${name}`);
    if(typeof tall === "number") {
        console.log(`tall : ${tall + 10}`);
    }   
}
introduce("강진호", 37, 174);
introduce("강진호", 37);

// rest파라미터
function getSum(...rest: number[]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));

    return sum;
}

getSum(1, 2, 3);