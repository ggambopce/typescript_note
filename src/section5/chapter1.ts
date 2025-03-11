/**
 * 인터페이스 
 * 객체의 구조를 정의하는데 특화된 문법
 * 상속, 합침 등의 특수한 기능을 제공함
 */

interface Person {
    name: string;
    age: number;
    sayHi: () => void; // 함수 타입 표현식
    sayHello() : void; // 호출 시그니쳐
    sayHello(a: number, b: number) : void;
};

const person: Person = {
    name: "강진호",
    age: 37,
    sayHi: function() {
        console.log("hi");
    },
    sayHello: function() {
        console.log("hello");
    },
};

person.sayHello();
person.sayHello(1,2);