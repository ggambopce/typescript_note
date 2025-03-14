/**
 * 맵드 타입
 * 특정 객체 타입을 선택적으로 변환
 */

interface User {
    id: number;
    name: string;
    age: number;
}

// Mapped Type 형식
type PartialUser = {
    [key in "id" | "name" | "age"]?: User[key];
}

type BooleanUser = {
    [key in keyof User]: boolean;
}

type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User{
    // ..기능
    return {
        id: 1,
        name: "강진호",
        age: 37,
    };
};

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: User) {
    //...수정기능
}

updateUser({
    id: 1,
    name: "강진호",
    age: 27,
});