/**
 * 접근 제어자
 * access modifier
 * => public, private, protected
 */

// 기본 접근 제어자 public
// private은 클래스 내부 접근만 가능
// protected는 파샐 클래스까지 허용
class Employee {
    // 필드
    public name: string;
    protected age: number;
    private position: string; 

    // 생성자
    constructor(name:string, age: number, position: string){
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    work() {
        console.log(`${this.position}은 열심히 일함`);
    }
};

class ExecutiveOfficer extends Employee {
    officNumber: number;

    constructor(name: string, age: number, position: string, officNumber: number){
        super(name, age, position);
        this.officNumber = officNumber;
    }
}

const employee = new Employee("강진호", 37, "developer");

employee.name = "또또";
//employee.age = 27;
//employee.position = "디자이너";

