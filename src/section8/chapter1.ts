/**
 * 인덱스드 엑세스 타입
 * 특정 프로퍼티의 타입을 변수에 정의해줄 수 있는 문법
 */

// 객체 특정 프로퍼티
interface Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}

// 인덱스트 타입에는 타입만 사용 가능
function purintAuthorInfo(author: Post["author"]) {
    console.log(`${author.name}-${author.id}`);
}

const post: Post = {
    title: "게시글 제목",
    content: "게시글 내용",
    author: {
        id: 1,
        name: "강진호",
        age: 37
    },    

}

// 배열 특정 요소 타입 사용
type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}[];

function purintAuthorInfo1(author: PostList[number]["author"]) {
    console.log(`${author.name}-${author.id}`);
}

// number 자리는 타입만 가능
const post1: PostList[number] = {
    title: "게시글 제목",
    content: "게시글 내용",
    author: {
        id: 1,
        name: "강진호",
        age: 37
    },    

}

// 튜플에서 사용
type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Typ1 = Tup[1];
type Typ2 = Tup[2];

type TupNum = Tup[number];