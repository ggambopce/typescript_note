/**
 * 타입 추론
 */

// 변수의 초기값을 기준으로 추론
let a = 10;
let b = "Hello";
let c = {
    id: 1,
    name: "강진호",
    profile: {
        nickname: "ggambo",
    },
    urls: ["https://jinorandb.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

// 함수의 반환값은 리턴 값으로 추론 
function fun() {
    return "hello";
}

// 암묵적 any 타입의 진화
let d;
d = 10; // number 
d.toFixed();

d = "hello"; // string
d.toLocaleUpperCase();

// 리터럴 타입으로 추론
const num = 10;
const str = "hello";

// 유니온 타입으로 추론
let arr = [1, "hello"];