/**
 * 유틸리티 타입
 * 제네릭, 맵드 타입, 조건부 타입 등의 타ㅇㅂ 조작 기능을 이용해 실무에서 자주 사용되는 타입을 미리 만들어 놓은 것
 */

/**
 * Partial<T>
 * 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

type Partial<T> = {
    [key in keyof T]? : T[key];
}

const draft: Partial<Post> = {
    title: "제목 나중에",
    content: "초안...",
}

/**
 * Required<T>
 * 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */
type Required<T> = {
    [key in keyof T]-?: T[key];
}


const withThumbnailPost: Post = {
    title: "한입 타스 후기",
    tags: ["ts"],
    content: "",
    thumbnailURL: "https://..."
}

/**
 * Readonly<T>
 * 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

const readonlyPost: Readonly<Post> = {
    title: "보호된 게시글",
    tags: [],
    content: "",
};

// readonlyPost.content = "";