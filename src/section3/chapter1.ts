/**
 * unknown 타입
 */

function unknownExam() {

    // 업 캐스팅 항상 가능
    let a: unknown = 1;
    let b: unknown = "hellow";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;

    // 다운 캐스팅 불가능
    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}

/**
 *  never 타입
 */

function neverExam() {
    function neverFunc(): never {
        while(true) {}
    }
    // 업 캐스팅 가능
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // 다운 캐스팅 불가능
    // let never1: never = 10;
    // let never2: never = "string";
    // let never3: never = true;
}

/**
 *  void 타입
 */

function voidExam() {
    function voidFunc(): void {
         console.log("hi");
    }

    let voidVar: void = undefined;
}

/**
 *  any 타입
 */

// never를 제외한 대부분의 타입으로 다운 캐스팅이 가능
function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;

    anyVar = unknownVar;
    undefinedVar = anyVar;
}
