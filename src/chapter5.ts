// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 컴파일 결과 사라지지 않고 JS 객체로 정의된다


// 숫자형 enum
enum Role {
    ADMIN,  // 자동으로 0번부터 할당, 지정도 가능
    USER,
    GUEST,
}

// 문자형 enum
enum Language {
    KOREAN = "ko",
    ENGLISH = "en"
}

const user1 = {
    name: '강진호',
    role: Role.ADMIN,
    language: Language.KOREAN
}
const user2 = {
    name: '홍길동',
    role: Role.USER,
    language: Language.ENGLISH
}

const user3 = {
    name: '아무개',
    role: Role.GUEST,
}