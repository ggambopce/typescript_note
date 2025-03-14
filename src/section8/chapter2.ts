/**
 * keyof 연산자
 */

interface Person {
    name: string;
    age: number;
}

// 타입만 함께 사용 
function getPropertyKey(person: Person, key: keyof Person) {
    return person[key];
}

const person: Person = {
    name: "강진호",
    age: 37,
};

getPropertyKey(person, "name");


// typeof 연산자 타입으로 사용
type Person1 = typeof person;

function getPropertyKey1(person: Person, key: keyof typeof person) {
    return person[key];
}

const person1: Person1 = {
    name: "이민희",
    age: 27,
};