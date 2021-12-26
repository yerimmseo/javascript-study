// 13.1 스코프란?
// 스코프(유효범위)
function add(x, y) {
    // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
    // 즉, 매개변수의 스코프(유효범위)는 함수 몸체 내부다.
    console.log(x, y); // 2 5
    return x + y;
}

add(2, 5);

// 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
//console.log(x, y); // ReferenceError: x is not defined

var var1 = 1; // 코드의 가장 바깥 영역에서 선언한 변수

if (true) {
    var var2 = 2; // 코드 블록 내에서 선언한 변수
    if (true) {
        var var3 = 3; // 중첩된 코드 블록 내에서 선언한 변수
    }
}

function foo() {
    var var4 = 4; // 함수 내에서 선언한 변수

    function bar() {
        var var5 = 5; // 중첩된 함수 내에서 선언한 변수
    }
}

console.log(var1); // 1
console.log(var2); // 2
console.log(var3); // 3
//console.log(var4); // ReferenceError: var4 is not defined
//console.log(var5); // ReferenceError: var5 is not defined

// 모든 식별자(변수 이름, 함수 이름, 클래스 이름 등)는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효범위가 결정된다.
// 이를 스코프라 한다. 즉, 스코프는 식별자가 유효한 범위를 말한다.
var x = 'global';

function foo() {
    var x = 'local';
    console.log(x); // local
}

foo();

console.log(x); // global
// 두 개의 변수 중에서 어떤 변수를 참조해야 할 것인지를 결정해야 한다. 이를 식별자 결정이라 한다.

// * var 키워드로 선언한 변수의 중복 선언
// var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언이 허용된다. 이는 의도치 않게 변수값이 재할당되어 변경되는 부작용을 발생시킨다.
function foo() {
    var x = 1;
    // var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
    // 아래 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
    var x = 2;
    console.log(x); // 2
}
foo();
// 하지만 let이나 const키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
function bar() {
    let x = 1;
    // let이나 const 키워드로 선언한 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
    let x = 2; // SyntaxError: Identifier 'x' has already been declared
}
bar();

// 13.2 스코프의 종류
// 코드는 전역(global)과 지역(local)로 구분할 수 있다.
// - 전역: 코드의 가장 바깥 영역, 전역 스코프, 전역 변수
// - 지역: 함수 몸체 내부, 지역 스코프, 지역 변수
// * 전역과 전역 스코프
var x = "global x";
var y = "global y";

function outer() {
    var z = "outer's local z";

    console.log(x); // global x
    console.log(y); // global y
    console.log(z); // outer's local z

    function inner() {
        var x = "inner's local x";

        console.log(x); // inner's local x
        console.log(y); // global y
        console.log(z); //outer's local z
    }

    inner();
}

outer();

console.log(x); // global x
console.log(y); // ReferenceError: z is not defined
// 전역에 변수를 선언하면 전역 스코프를 갖는 전역 변수가 된다. 전역 변수는 어디서든지 참조할 수 있다.

// * 지역과 지역 스코프
// 지역이란 함수 몸체 내부를 말한다. 지역 변수는 자신의 지역 스코프와 하위 지역 스코프에서 유효하다.

// 13.3 스코프 체인
// 함수는 중첩될 수 있으므로 함수의 지역 스코프도 중첩될 수 있다. 이는 스코프가 함수의 중첩에 의해 계층적 구조를 갖는다는 것을 의미한다.
// 변수를 참조할 때 자바스크립트 엔진은 스코프 체인을 통해 변수를 참조하는 코드의 스코프에서 시작하여 상위 스코프 방향으로 이동하며 선언된 변수를 검색한다.
// * 스코프 체인에 의한 변수 검색
// - 상위 스코프에서 유효한 변수는 하위 스코프에서 자유롭게 참조할 수 있지만 하위 스코프에서 유효한 변수를 상위 스코프에서 참조할 수 없다는 것을 의미한다.

// * 스코프 체인에 의한 함수 검색
// 전역 함수
function foo() {
    console.log('global function foo');
}

function bar() {
    // 중첩 함수
    function foo() {
        console.log('local function foo');
    }
    foo();
}

bar();

// 13.4 함수 레벨 스코프
// 코드 블록이 아닌 함수에 의해서만 지역 스코프가 생성된다.
// 블록 레벨 스코프(if, for, while, try/catch 등이 지역 스코프를 만든다.)
// var 키워드로 선언된 변수는 오로지 함수의 코드 블록(함수 몸체)만을 지역 스코프로 인정한다. -> 함수 레벨 스코프
var x = 1;

if (true) {
   // var 키워드로 선언된 변수는 함수의 코드 블록(함수 몸체)만을 지역 스코프로 인정한다.
   // 함수 밖에서 var 키워드로 선언된 변수는 코드 블록 내에서 선언되었다 할지라도 모두 전역 변수다.
   // 따라서 x는 전역 변수다. 이미 선언된 전역 변수가 x가 있으므로  x 변수는 중복 선언된다.
   // 이는 의도치 않게 변수 값이 변경되는 부작용을 발생시킨다.
   var x = 10; 
}

console.log(x); // 10

var i = 10;

// for문에서 선언한 i는 전역 변수다. 이미 선언된 전역 변수 i가 있으므로 중복 선언된다.
for(var i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}

// 의도치 않게 변수의 값이 변경되었다.
console.log(i); // 5

// 13.5 렉시컬 스코프
var x = 1;

function foo() {
    var x = 10;
    bar();
}

function bar() {
    console.log(x);
}

foo();
bar();
// 위의 실행 결과는 bar 함수의 상위 스코프가 무엇인지에 따라 결정된다. 두가지 패턴을 예측할 수 있다.
// 1. 함수를 어디서 호출했는지에 따라 함수와 상위 스코프를 결정한다. (동적 스코프)
// 2. 함수를 어디서 정의했는지에 따라 함수의 상위 스코프를 결정한다. (렉시컬 스코프 또는 정적 스코프)
// 자바스크립트는 렉시컬 스코프를 따르므로 함수를 어디서 호출했는지가 아니라 함수를 어디서 정의했는지에 따라 상위 스코프를 결정한다.
// 함수가 호출된 위치는 상위 스코프 결정에 어떠한 영향도 주지 않는다. 즉, 함수의 상위 스코프는 언제나 자신이 정의된 스코프다.



// [전역 변수의 문제점]
// 14.1 변수의 생명 주기
// * 지역 변수의 생명 주기
function foo() {
    var x = 'local';
    console.log(x); // local
    return x;
}

foo();
console.log(x); // ReferenceError: x is not defined
// 지역 변수의 생명주기는 함수의 생명주기와 일치한다.

var x = 'global';

function foo() {
    console.log(x); // 이미 선언되었고 undefined로 초기화 되어있다. 따라서 전역 변수 x를 참조하는 것이 아니라 지역 변수 x를 참조해 값을 출력한다.
    var x = 'local';
}

foo();
console.log(x); // global
// 변수 할당문이 실행되기 이전까지는 undefined 값을 갖는다. 이처럼 호이스팅은 스코프를 단위로 동작한다.
// 호이스팅은 변수 선언이 스코프의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징을 말한다.

// * 전역 변수의 생명 주기
// var 키워드로 선언한 전역 변수의 생명 주기는 전역 객체의 생명 주기와 일치한다.
var x = 'global';

function foo() {
    var x = 'local';
    console.log(x);
    return x;
}

foo();
console.log(x);

// 14.2 전역 변수의 문제점
// * 암묵적 결합 : 전역 변수를 선언한 의도는 전역, 즉 코드 어디서든 참조하고 할당할 수 있는 변수를 사용하겠다는 것이다. 
//                이는 모든 코드가 전역 변수를 참조하고 변경할 수 있는 암묵적 결합을 허용하는 것이다.
// * 긴 생명 주기 : 전역 변수는 생명 주기가 길다. 따라서 메모리 리소스도 오랜 기간 소비한다.
var x = 1;

// 변수의 중복 선언. 기존 변수에 값을 재할당한다.
var x = 100;
console.log(x); // 100
// * 스코프 체인 상에서 종점에 존재 : 변수를 검색할 때 전역 변수가 가장 마지막에 검색된다는 것을 말한다. 즉, 전역 변수의 검색 속도가 가장 느리다.
// * 네임스페이스 오염 : 자바스크립트의 가장 큰 문제점 중 하나는 파일이 분리되어 있다 해도 하나의 전역 스코프를 공유한다는 것이다.

// 14.3 전역 변수의 사용을 억제하는 방법
// 전역 변수를 반드시 사용해야 할 이유를 찾지 못한다면 지역 변수를 사용해야 한다. 변수의 스코프는 좁을수록 좋다.
// * 즉시 실행 함수 : 모든 코드를 즉시 실행 함수로 감싸면 모든 변수는 즉시 실행 함수의 지역 변수가 된다.
(function () {
    var foo = 10; // 즉시 실행 함수의 지역 변수
    // ...
}());

console.log(foo); // ReferenceError: foo is not defiend

// * 네임스페이스 객체 : 네임스페이스 역할을 담당할 객체를 생성하고 전역 변수처럼 사용하고 싶은 변수를 프로퍼티로 추가하는 방법이다.
var MYAPP = {}; // 전역 네임스페이스 객체

MYAPP.name = 'Lee';

console.log(MYAPP.name); // Lee
// 네임스페이스를 계층적으로 구성할 수도 있다.
var MYAPP = {};

MYAPP.person = {
    name : 'Lee',
    address : 'Seoul'
};

console.log(MYAPP.person.name); // Lee

// * 모듈 패턴 : 모듈 패턴은 클래스를 모방해서 관련이 있는 변수와 함수를 모아 즉시 실행 함수로 감싸 하나의 모듈을 만든다.
var Counter = (function () {
    // private 변수
    var num = 0;

    // 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
    return {
        increase() {
            return ++num;
        },
        decrease() {
            return --num;
        }
    };
}());

// private 변수는 외부로 노출되지 않는다.
console.log(Counter.num); // undefined

console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.decrease()); // 0

// * ES6 모듈 : ES6 모듈은 파일 자체의 독자적인 모듈 스코프를 제공한다. 모듈 파일의 확장자는 mjs를 권장한다.
//<script type="module" src="lib.mjs"></script>
//<script type="module" src="app.mjs"></script>



// [let, const 키워드와 블록 레벨 스코프]
// 15.1 var 키워드로 선언한 변수의 문제점
// * 변수 중복 선언 허용
var x = 1;
var y = 1;

// var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
// 초기화문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
var x = 100;
// 초기화문이 없는 변수 선언문은 무시된다.
var y;

console.log(x); // 100
console.log(y); // 1

// * 함수 레벨 스코프
// var 키워드로 선언한 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정한다.
var x = 1;

if (true) {
    // x는 전역 변수다. 이미 선언된 전역 변수 x가 있으므로 x 변수는 중복 선언된다.
    // 이는 의도치 않게 변수값이 변경되는 부작용을 발생시킨다.
    var x = 10;
}

console.log(x); // 10
// for 문의 변수 선언문에서 var 키워드로 선언된 변수도 전역 변수가 된다.
var i = 10;

// for문에서 선언한 i는 전역 변수다. 이미 선언된 전역 변수 i가 있으므로 중복 선언된다.
for (var i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}

// 의도치 않게 i 변수의 값이 변경되었다.
console.log(i); // 5

// * 변수 호이스팅
// 이 시점에는 변수 호이스팅에 의해 이미 foo 변수가 선언되었다(1. 선언 단계)
// 변수 foo는 undefined로 초기화된다(2. 초기화 단계)
console.log(foo); // undefined

// 변수에 값을 할당(3. 할당 단계)
foo = 123;

console.log(foo); // 123

// 변수 선언은 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 실행된다.
var foo;

// 15.2 let 키워드
// * 변수 중복 선언 금지
var foo = 123;
// var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
// 아래 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
var foo = 456;

let bar = 123;
// let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
let bar = 456; // SyntaxError: Identifier 'bar' has already been declared

// * 블록 라벨 스코프
let foo = 1; // 전역 변수

{
    let foo = 2; // 지역 변수
    let bar = 3; // 지역 변수
}

console.log(foo); // 1
console.log(bar); // ReferenceError: bar is not defined

let i = 10;

function foo() {
    let i = 100;
    
    for (let i = 0; i < 3; i++) {
        console.log(i); // 1 2
    }

    console.log(i); // 100
}

foo();

console.log(i); // 10

// * 변수 호이스팅
// let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
console.log(foo); // ReferenceError: foo is not defined
let foo;
// var 키워드로 선언한 변수는 런타임 이전에 선언 단계와 초기화 단계가 실행된다.
// 따라서 변수 선언문 이전에 변수를 참조할 수 있다.
console.log(foo); // undefined

var foo;
console.log(foo); // undefined

foo = 1; // 할당문에서 할당 단계가 실행된다.
console.log(foo); // 1

// let 키워드로 선언한 변수는 "선언 단계"와 "초기화 단계"가 분리되어 진행된다.
// 런타임 이전에 선언 단계가 실행된다. 아직 변수가 초기화되지 않았다.
// 초기화 이전의 일시적 사각지대(TDZ)에서는 변수를 참조할 수 없다.
console.log(foo); // ReferenceError: foo is not defined

let foo; // 변수 선언문에서 초기화 단계가 실행된다.
console.log(foo); // undefined

foo = 1; // 할당문에서 할당 단계가 실행된다.
console.log(foo); // 1

// let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는 것처럼 보인다. 하지만 그렇지 않다.
let foo = 1; // 전역 변수

{
    console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
    let foo = 2; // 지역 변수
}
// let 키워드로 선언한 변수의 경우 변수 호이스팅이 발생하지 않는다면 위는 전역 변수 foo의 값을 출력해야 한다.
// 하지만 let 키워드로 선언한 변수도 여전히 호이스팅이 발생하기 때문에 참조 에러가 발생한다.

// * 전역 객체와 let
// 이 예제는 브라우저 환경에서 실행해야 한다.

// 전역 변수
var x = 1;
// 암묵적 전역
y = 2;
// 전역 함수
function foo() {}

// var 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티이다.
console.log(window.x); // 1
// 전역 객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다.
console.log(x); // 1

// 암묵적 전역은 전역 객체 window의 프로퍼티다.
console.log(window.y); // 2
console.log(y); // 2

// 함수 선언문으로 정의한 전역 함수는 전역 객체 window의 프로퍼티다.
console.log(window.foo); // f foo() {}
// 전역 객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다.
console.log(foo); // f foo() {}

let x = 1;

// let, const 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티가 아니다.
console.log(window.x); // undefined
console.log(x);

// 15.3 const 키워드
// * 선언과 초기화 : const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 한다.
const foo = 1;

const foo; // SyntaxError: Missing initializer in const declaration

{
    // 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
    console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
    const foo = 1;
    console.log(foo); // 1
}

// 블록 레벨 스코프를 갖는다.
console.log(foo); // ReferenceError: foo is not defined

// * 재할당 금지 : const 키워드로 선언한 변수는 재할당이 금지된다.
const foo = 1;
foo = 2; // TypeError: Assignment to constant variable.

// * 상수 : 재할당이 금지된 변수를 말한다. 상태 유지와 가독성, 유지보수의 편의를 위해 적극적으로 사용해야 한다.
// 세전 가격
let preTaxPrice = 100;

// 세후 가격
// 0.1의 의미를 명확히 알기 어렵기 때문에 가독성이 좋지 않다.
let afterTaxPrice = preTaxPrice + (preTaxPrice * 0.1);

console.log(afterTaxPrice); // 110

// 세율을 의미하는 0.1은 변경할 수 없는 상수로서 사용될 값이다.
// 변수 이름을 대문자로 선언해 상수임을 명확히 나타낸다.
const TAX_RATE = 0.1;

// 세전 가격
let preTaxPrice = 100;

// 세후 가격
let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);

console.log(afterTaxPrice); // 110

// * const 키워드와 객체 : const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다.
const person = {
    name : 'Lee'
};

// 객체는 변경 가능한 값이다. 따라서 재할당 없이 변경 가능하다.
person.name = 'Kim';

console.log(person.name); // {name: "Kim"}
// const 키워드는 재할당을 금지할 뿐 "불변"을 의미하지 않는다.

// 15.4 var vs. let vs. const
// - ES6을 사용한다면 var 키워드는 사용하지 않는다.
// - 재할당이 필요한 경우에 한정해 let 키워드를 사용한다. 이때 변수의 스코프는 최대한 좁게 만든다.
// - 변경이 발생하지 않고 읽기 전용으로 사용하는(재할당이 필요 없는 상수) 원시 값과 객체에는 const 키워드를 사용한다.
//   const 키워드는 재할당을 금지하므로 var, let 키워드보다 안전하다.