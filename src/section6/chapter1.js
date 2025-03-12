/**
 * 클래스
 */

let studentA = {
    name: "강진호",
    grade: "A",
    age: 37,
    study() {
        console.log("열심히 공부 함");
    },
    introduce(){
        console.log("안녕하세요~");
    }
}

class Student {
    // 필드
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메서드
    study() {
        console.log("열심히 공부 함");
    }
    introduce() {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 학생 인스턴스
let studentB = new Student("강진호", "S", 37);
console.log(studentB);
studentB.study();
studentB.introduce();

class StudentDeveloper extends Student{
    favoriteSkill;

    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }

    programing() {
        console.log(`${this.favoriteSkill}로 프로그래밍 함`);
    }
}

const studentDeveloper = new StudentDeveloper("강진호", "B", 37, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programing();