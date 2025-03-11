/**
 * 인터페이스의 확장
 * 상속
 */

interface Animal {
    name: string;
    color: string;
}

interface Dog extends Animal {
    isBark: boolean;
}

interface Cat extends Animal {
    name: "hello" // 서브타입으로 재정의 가능
    isScratch: boolean;
}

const cat: Cat = {
    name: "hello",
    color: "",
    isScratch: true,
}

interface Chicken extends Animal {
    isFly: boolean;
}

// 다중 확장
interface DogChicken extends Dog, Chicken {}

const dogChicken: DogChicken = {
    name: "",
    color: "",
    isBark: true,
    isFly: false,
}

