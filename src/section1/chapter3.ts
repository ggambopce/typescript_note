// 객체 타입 정의

// 객체 리터럴 타입
// 구조적 타입 시스템
let user: {
    id?: number; // 선택적 프로퍼티
    name: string;
} = {
    id: 1,
    name: '강진호',
};

user = {
    name: "홍길동",
}

// 읽기 전용 프로퍼티
let config: {
    readonly apiKey: string;
} = {
    apiKey: "my api key",
};

// config.apiKey = "Hacked" 
