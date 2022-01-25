// [클로저]
const x = 1;

function outerFunc() {
  const x = 10;

  function innerFunc() {
    console.log(x); // 10
  }

  innerFunc();
}

outerFunc();
// innerFunc 함수가 outerFunc 함수의 내부에서 정의된 중첩 함수가 아니라면 innerFunc 함수를 outerFunc 함수의 내부에서 호출한다 하더라도 outerFunc 함수의 변수에 접근할 수 없다.
const x = 1;

function outerFunc() {
  const x = 10;
  innerFunc();
}

function innerFunc() {
  console.log(x); // 1
}

outerFunc();
// 자바스크립트는 렉시컬 스코프를 따르는 프로그래밍 언어이기 때문이다.

// 1. 렉시컬 스코프
// 자바스크립트 엔진은 함수를 어디서 호출했는지가 아니라 함수를 어디에 정의했는지에 따라 상위 스코프를 결정한다. 이를 렉시컬 스코프(정적 스코프)라 한다.
const x = 1;

function foo() {
  const x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo();
bar();
// 렉시컬 환경의 "외부 렉시컬 환경에 대한 참조"에 저장할 참조값, 즉 상위 스코프에 대한 참조는 함수 정의가 평가되는 시점에
// 함수가 정의된 환경(위치)에 의해 결정된다. => 렉시컬 스코프

// 2. 함수 객체의 내부 슬롯 [[Environment]]
// 함수는 자신의 내부 슬롯 [[Enviroment]]에 자신이 정의된 환경, 즉 상위 스코프의 참조를 저장한다.
const x = 1;

function foo() {
  const x = 10;

  // 상위 스코프는 함수 정의 환경(위치)에 따라 결정된다.
  // 함수 호출 위치와 상위 스코프는 아무런 관계가 없다.
  bar();
}

// 함수 bar는 자신의 상위 스코프, 즉 전역 렉시컬 환경을 [[Environment]]에 저장하여 기억한다.
function bar() {
  console.log(x);
}

foo(); // ?
bar(); // ?

// 3. 클로저와 렉시컬 환경
const x = 1;

function outer() {
  const x = 1;
  const inner = function () {
    console.log(x); 
  };
  return inner;
}

// outer 함수를 호출하면 중첩함수 inner를 반환한다.
// 그리고 outer 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 팝되어 제거된다.
const innerFunc = outer();
innerFunc(); // 10
// 외부 함수보다 중첩 함수가 더 오래 유지되는 경우 중첩 함수는 이미 생성 주기가 종료한 외부 함수의 변수를 참조할 수 있다.
// -> 이러한 중첩 함수를 클로저라고 부른다.

//<브라우저 디버깅 모드>
// <!DOCTYPE html>
// <html>
//   <body>
//     <script>
//       function foo() {
//         const x = 1;
//         const y = 2;

//         // 일반적으로 클로저라고 하지 않는다.
//         function bar() {
//           const z = 3;

//           debugger;
//           // 상위 스코프의 식별자를 참조하지 않는다.
//           console.log(z);
//         }
//         return bar;
//       }

//       const bar = foo();
//       bar();
//     </script>
//   </body>
// </html>
// 상위 스코프의 어떤 식별자도 참조하지 않는 함수는 클로저가 아니다.

// <!DOCTYPE html>
// <html>
//   <body>
//     <script>
//       function foo() {
//         const x = 1;

//         // bar 함수는 클로저였지만 곧바로 소멸한다.
//         // 이러한 함수는 일반적으로 클로저라고 하지 않는다.
//         function bar() {
//           debugger;
//           // 상위 스코프의 식별자를 참조한다.
//           console.log(x);
//         }
//         bar();
//       }

//       foo();
//     </script>
//   </body>
// </html>

// <!DOCTYPE html>
// <html>
//   <body>
//     <script>
//       function foo() {
//         const x = 1;
//         const y = 2;

//         // 클로저
//         // 중첩 함수 bar는 외부 함수보다 더 오래 유지되며 상위 스코프의 식별자를 참조한다.
//         function bar() {
//           debugger;
//           console.log(x);
//         }
//         return bar;
//       }

//       const bar = foo();
//       bar();
//     </script>
//   </body>
// </html>
// 클로저는 중첩 함수가 상위 스코프의 식별자를 참조하고 있고 중첩 함수가 외부 함수보다 더 오래 유지되는 경우에 한정하는 것이 일반적이다.

// 4. 클로저의 활용
// 클로저는 상태를 안전하게 변경하고 유지하기 위해 사용한다. 상태를 안전하게 은닉하고 특정 함수에게만 상태 변경을 허용
// 카운트 상태 변수
let num = 0;

// 카운트 상태 변경 함수
const increase = function () { 
  // 카운트 상태를 1만큼 증가시킨다.
  return ++num;
};

console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3
// 위의 함수가 올바르게 동작하려면
// 1) 카운트 상태(num 변수의 값)는 increase 함수가 호출되기 전까지 변경되지 않고 유지되어야 한다.
// 2) 이를 위해 상태(num 변수의 값)는 increase 함수만이 변경할 수 있어야 한다.
// 카운트 상태 변경 함수 
const increase = function () {
  // 카운트 상태 변수
  let num = 0;

  // 카운트 상태를 1만큼 증가시킨다.
  return ++num;
};

// 이전 상태를 유지시키지 못한다.
console.log(increase()); // 1
console.log(increase()); // 1
console.log(increase()); // 1

// 클로저 사용
// 카운트 상태 변경 함수
const increase = (function () {
  // 카운트 상태 변수
  let num = 0;

  return function () {
    // 카운트 상태를 1만큼 증가시킨다.
    return ++num;
  };
}());

console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3
// 이처럼 클로저는 상태가 의도치 않게 변경되지 않도록 안전하게 은닉하고 특정 함수에게만 상태 변경을 허용하여 상태를 안전하게 변경하고 유지하기 위해 사용한다.

const counter = (function () {
  // 카운트 상태 변수
  let num = 0;

  // 클로저인 메서드를 갖는 객체를 반환한다.
  // 객체 리터럴은 스코프를 만들지 않는다.
  // 따라서 아래 메서드들의 상위 스코프는 즉시 실행 함수의 렉시컬 환경이다.
  return {
    // num : 0, // 프로퍼티는 public하므로 은닉되지 않는다.
    increase() {
      return ++num;
    },
    decrease() {
      return num > 0 ? --num : 0;
    }
  };
}());

console.log(counter.increase()); // 1
console.log(counter.increase()); // 2

console.log(counter.decrease()); // 1
console.log(counter.decrease()); // 1

// 위를 생성자 함수로 표현
const Counter = (function () {
  // 1) 카운트 상태 변수
  let num = 0;

  function Counter() {
    // this.num = 0; // 2) 프로퍼티는 public 하므로 은닉되지 않는다.
  }

  Counter.prototype.increase = function () {
    return ++num;
  };

  Counter.prototype.decrease = function () {
    return num > 0 ? --num : 0;
  };

  return Counter;
}());

const counter = new Counter();

console.log(counter.increase()); // 1
console.log(counter.increase()); // 2

console.log(counter.decrease()); // 1
console.log(counter.decrease()); // 0

// 함수형 프로그래밍에서 클로저를 활용
// 함수를 인수로 전달받고 함수를 반환하는 고차 함수
// 이 함수는 카운트 상태를 유지하기 위한 자유 함수
function makeCounter(predicate) {
  // 카운트 상태를 유지하기 위한 자유 변수
  let counter = 0;

  // 클로저를 반환 
  return function () {
    // 인수로 전달받은 보조 함수에 상태 변경을 위임한다.
    counter = predicate(counter);
    return counter;
  };
}

// 보조 함수
function increase(n) {
  return ++n;
}

// 보조 함수
function decrease(n) {
  return --n;
}

// 함수로 함수를 생성한다.
// makeCounter 함수는 보조 함수를 인수로 전달받아 함수를 반환한다.
const increaser = makeCounter(increase); // 1)
console.log(increaser()); // 1
console.log(increaser()); // 2

// increaser 함수와는 별개의 독립적인 렉시컬 환경을 갖기 때문에 카운터 상태가 연동하지 않는다.
const decreaser = makeCounter(decrease); // 2)
console.log(decreaser()); // -1
console.log(decreaser()); // -2
// 주의해야할 점 -> makeCounter 함수를 호출해 함수를 반환할 때 반환되는 함수는 자신만의 독립된 렉시컬 환경을 갖는다는 것
// 증감이 가능한 카운터를 만들려면 렉시컬 환경을 공유하는 클로저를 만들어야 한다.

// 함수를 반환하는 고차 함수
// 이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter를 기억하는 클로저를 반환한다.
const counter = (function () {
  // 카운트 상태를 유지하기 위한 자유 변수
  let counter = 0;

  // 함수를 인수로 전달받는 클로저를 반환
  return function (predicate) {
    // 인수로 전달받는 보조 함수에 상태 변경을 위임한다.
    counter = predicate(counter);
    return counter;
  };
}());

// 보조 함수
function increase(n) {
  return ++n;
}

// 보조 함수
function decrease(n) {
  return --n;
}

// 보조 함수를 전달하여 호출
console.log(counter(increase)); // 1
console.log(counter(increase)); // 2

// 자유 변수를 공유한다.
console.log(counter(decrease)); // 1
console.log(counter(decrease)); // 0

// 5. 캡슐화와 정보 은닉
// 캡슐화 : 객체의 상태를 나타내는 프로퍼티와 프로퍼티를 참조하고 조작할 수 있는 동작인 메서드를 하나로 묶는 것
// 정보 은닉 : 캡슐화는 객체의 특정 프로퍼티나 메서드를 감출 목적으로도 사용
// 자바스크립트의 객체의 모든 프로퍼티와 메서드는 기본적으로 public 하다.
function Person(name, age) {
  this.name = name; // public 
  let _age = age; // private

  // 인스턴스 메서드
  this.sayHi = function () {
    console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
  };
}

const me = new Person('Lee', 20);
me.sayHi(); // Hi! My name is Lee. I am 20.
console.log(me.name); // Lee
console.log(me._age); // undefined

const you = new Person('Kim', 30);
you.sayHi(); // Hi! My name is Kim. I am 30.
console.log(you.name); // Kim
console.log(you._age); // undefined

// sayHi는 Person객체가 생성될 때마다 중복 생성된다. 프로토타입으로 변경하여 중복 생성을 방지
function Person(name, age) {
  this.name = name; // public
  let _age = age;   // private
}

// 프로토타입 메서드
Person.prototype.sayHi = function () {
  // Person 생성자 함수의 지역 변수 _age를 참조할 수 없다.
  console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
}
// _age를 참조할 수 없는 문제 발생 -> 생성자 함수와 함께 사용

const person = (function () {
  let _age = 0; // private

  // 생성자 함수
  function Person(name, age) {
    this.name = name; // public
    _age = age;
  }

  // 프로토타입 메서드
  Person.prototype.sayHi = function () {
    console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
  };

  // 생성자 함수를 반환
  return Person;
}());

const me = new Person('Lee', 20);
me.sayHi();
console.log(me.name);
console.log(me._age);

const you = new Person('Kim', 30);
you.sayHi();
console.log(you.name);
console.log(you._age);
// 여러 개의 인스턴스를 생성할 경우 다음과 같이 _age 변수의 상태가 유지되지 않는다는 것
const me = new Person('Lee', 20);
me.sayHi(); // Hi! My name is Lee. I am 20.

const you = new Person('Kim', 30);
you.sayHi(); // Hi! My name is Kim. I am 30.

// _age 변수 값이 변경된다!
me.sayHi(); // Hi! My name is Lee. I am 30.
// 자바스크립트는 정보 은닉을 완전하게 지원X

// 6. 자주 발생하는 실수
// 클로저를 사용할 때 자주 발생하는 실수
var funcs = [];

for (var i = 0; i < 3; i++) {
  funcs[i] = function () { return 1; }; // 1)
}

for (var j = 0; j < funcs.length; j++) {
  console.log(funcs[j]()); // 2)
}
// 함수가 0, 1, 2를 반환할 것을 기대하나 결과는 그렇지 않음. 전역변수 i를 참조하여 i의 값 3이 출력됨.
var funcs = [];

for (var i = 0; i < 3; i++) {
  funcs[i] = (function (id) { // 1) 전역 변수 i에 현재 할당되어 있는 값을 인수로 전달받아 매개변수 id에 할당한 후 중첩 함수를 반환하고 종료
    return function () {
      return id;
    };
  }(i));
}

for (var j = 0; j < funcs.length; j++) {
  console.log(funcs[j]());
}
// for 문의 var키워드로 선언한 변수가 전역변수가 되기 때문에 발생한 현상. let 키워드를 사용하면 해결
const funcs = [];

for (let i = 0; i < 3; i++) {
  funcs[i] = function () { return i; };
}

for (let i = 0; i < funcs.length; i++) {
  console.log(funcs[i]()); // 0 1 2
}

// 함수형 프로그래밍 기법인 고차 함수를 사용하는 방법
// 요소가 3개인 배열을 생성하고 배열의 인덱스를 반환하는 함수를 요소로 추가한다.
// 배열의 요소로 추가된 함수들은 모두 클로저다.
const funcs = Array.from(new Array(3), (_, i) => () => i); // (3) [f, f, f]

// 배열의 요소로 추가된 함수들을 순차적으로 호출한다.
funcs.forEach(f => console.log(f())); // 0 1 2