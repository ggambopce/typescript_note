// 타입 별칭
// 동일 스코프 내 중복 선언 불가 
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
}

let user: User = {
    id: 1,
    name: '강진호',
    nickname: '깜보',
    birth: '1988.01.24',
    bio: '안녕하세요',
    location: '대전'
}

// 인덱스 시그니처
// 키와 값의 타입을 기주으로 규칙을 이용해서 객체의 타입을 정의하는 문법
//  인덱스 시그니쳐를 사용하면서 동시에 추가적인 프로퍼티를 또 정의할 때에는 인덱스 시그니쳐의 value 타입과 직접 추가한 프로퍼티의 value 타입이 호환되거나 일치해야 한다
type CountryCodes = {
    [key : string]: string;
};

let countryCodes: CountryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdokm: 'uk'
}

type CountryNumberCodes = {
    [key : string]: number;
    Korea: number;
};

let coutryNumberCodes = {
    Korea: 82,
}