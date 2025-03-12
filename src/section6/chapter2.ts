/**
 * 타입스크립트의 클래스
 */

const employee = {
    name: "강진호",
    age: 37,
    position: "developer",
    work() {
        console.log("일함");
    },
};

// 타입스크립트 클래스는 타입으로도 사용가능
class Employee {
    // 필드
    name: string;
    age: number;
    position: string; 

    // 생성자
    constructor(name:string, age: number, position: string){
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    work() {
        console.log("일함");
    }
};

// 상속 클래스
class ExecutiveOfficer extends Employee {
    officNumber: number;

    constructor(name: string, age: number, position: string, officNumber: number){
        super(name, age, position);
        this.officNumber = officNumber;
    }
}


const employeeB = new Employee("강진호", 37, "개발자");
console.log(employeeB);
employeeB.work();


const employeeC: Employee = {
    name: "",
    age: 0,
    position: "",
    work() {},
}