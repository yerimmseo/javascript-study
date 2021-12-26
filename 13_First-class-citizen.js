// [함수와 일급 객체]
// 1. *일급 객체*
// 1) 무명의 리터럴로 생성할 수 있다. 즉 런타임에 생성이 가능하다.
// 2) 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
// 3) 함수의 매개변수에 전달할 수 있다.
// 4) 함수의 반환값으로 사용할 수 있다.

const { multiply } = require("lodash");

// 1) 2)
// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
const increase = function (num) {
    return ++num;
};

const decrease = function (num) {
    return --num;
};

// 2)
const predicates = { increase, decrease };

// 3) 4)
function makeCounter(predicate) {
    let num = 0;

    return function () {
        num = predicate(num);
        return num;
    };
}

// 3)
const increaser = makeCounter(predicates.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

// 3)
const decreaser = makeCounter(predicates.decrease);
console.log(decreaser());
console.log(decreaser());
// 함수가 일급 객체라는 것은 함수를 객체와 동일하게 사용할 수 있다는 의미이다.
// 일반 객체는 호출할 수 없지만 함수 객체는 호출할 수 있다. 함수 객체는 일반 객체에는 없는 함수 고유의 프로퍼티를 소유한다.

// 2. 함수 객체의 프로퍼티
// console.dir을 사용해서 함수 객체의 내부를 볼 수 있다.
function square(number) {
    return number * number;
}

console.dir(square);
console.log(Object.getOwnPropertyDescriptor(square));
/**
 * {
 *  length: {value: 1, writable: false, enumerable: false, configurable: true},
 *  name: {value: "square", writable: false, enumerable: false, configurable: true},
 *  arguments: {value: null, writable: false, enumerable: false, configurable: false},
 *  caller: {value: null, writable: false, enumerable: false, configurable: false},
 *  prototype: {value: {...}, writable: true, enumerable: false, configurable: false}
 * }
 */

// __proto__는 square 함수의 프로퍼티가 아니다.
console.log(Object.getOwnPropertyDescriptor(square, '__proto__')); // undefined

// __proto__는 Object.prototype 객체의 접근자 프로퍼티다.
// square 함수는 Object.prototype 객체로부터 __proto__ 접근자 프로퍼티를 상속받는다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
// {get: f, set: f, enumerable: false, configurable: true}

// * arguments 프로퍼티
// 함수 객체의 arguments 프로퍼티 값은 arguments 객체다. 함수 호출 시 전달된 인수들의 정보를 담고 있는 순회 가능한 유사 배열 객체이며 함수 내부에서 지역 변수처럼 사용된다.
// 자바스크립트는 함수의 매개변수와 인수의 개수가 일치하는지 확인하지 않는다. 매개변수만큼 인수를 전달하지 않아도 에러가 발생하지 않는다.
function multioky(x, y) {
    console.log(arguments);
    return x * y;
}

console.log(multiply());        // NaN
console.log(multiply(1));       // NaN
console.log(multiply(1, 2));    // 2
console.log(multiply(1, 2, 3)); // 2

// * arguments 객체의 Symbol(Symbol.iterator) 프로퍼티
// arguments 객체의 Symbol(Symbol.iterator) 프로퍼티는 arguments 객체를 순회 가능한 자료구조인 이터러블로 만들기 위한 프로퍼티다.
// Symbol.iterator를 프로퍼티 키로 사용한 메서드를 구현하는 것에 의해 이터러블된다.
function multiply(x, y) {
    // 이터레이터
    const iterator = arguments[Symbol.iterator]();

    // 이터레이터의 next 메서드를 호출하여 이터러블 객체 arguments를 순회
    console.log(iterator.next()); // {value: 1, done: false}
    console.log(iterator.next()); // {value: 2, done: false}
    console.log(iterator.next()); // {value: 3, done: false}
    console.log(iterator.next()); // {value: undefined, done: true}

    return x * y;
}

multiply(1, 2, 3);

// arguments 객체는 매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현할 때 유용하다.
function sum() {
    let res = 0;

    // arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for문으로 순회할 수 있다.
    for (let i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }
    return res;
}

console.log(sum());        // 0
console.log(sum(1, 2));    // 3
console.log(sum(1, 2, 3)); // 6

// 배열 메서드를 사용하려면 Function.prototype.call, Function.prototype.apply를 사용해 간접 호출해야 하는 번거로움이 있다.
function sum() {
    // arguments 객체를 배열로 반환
    const array = Array.prototype.slice.call(arguments);
    return array.reduce(function (pre, cur) {
        return pre + cur;
    }, 0);
}

console.log(sum(1, 2));          // 3
console.log(sum(1, 2, 3, 5, 6)); // 15
// 이러한 번거로움을 해결하기 위해 ES6에서는 Rest 파라미터를 도입했다.
// ES6 Rest parameter
function sum(...args) {
    return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2));          // 3
console.log(sum(1, 2, 3, 4, 5)); // 15

// * caller 프로퍼티
function foo(func) {
    return func();
}

function bar() {
    return 'caller : ' + bar.caller;
}

// 브라우저에서의 실행 결과
console.log(foo(bar));  // caller : function foo(func) {...}
console.log(bar());     // caller : null

// * length 프로퍼티
// 함수를 정의할 때 선언한 매개변수의 개수를 가리킨다.
function foo() {}
console.log(foo.length); // 0

function bar(x) {
    return x;
}
console.log(bar.length); // 1

function baz(x, y) {
    return x * y;
}
console.log(baz.length); // 2
// arguments 객체의 length 프로퍼티는 인자의 개수를 가리키고, 함수 객체의 length 프로퍼티는 매개변수의 개수를 가리킨다.

// * name 프로퍼티
// 기명 함수 표현식
var nameFunc = function foo() {};
console.log(nameFunc.name); // foo

// 익명 함수 표현식
var anonymousFunc = function () {};
// ES5: name 프로퍼티는 빈 문자열을 값으로 갖는다.
// ES6: name 프로퍼티는 함수 객체를 가리키는 변수 이름을 값으로 갖는다.
console.log(anonymousFunc.name); // anonymousFunc

// 함수 선언문(Function declaration)
function bar() {}
console.log(bar.name); // bar

// * __proto__ 접근자 프로퍼티
// 모든 객체는 [[Prototype]]이라는 내부 슬롯을 갖는다. __proto__ 프로퍼티는 [[Prototype]] 내부 슬롯이 가리키는 프로토타입 객체에 접근하기 위해 사용하는 접근자 프로퍼티다.
const obj = { a: 1 };

// 객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype이다.
console.log(obj.__proto__ === Object.__proto__); // true

// 객체 리터럴 방식으로 생성한 객체는 프로토타입 객체인 Object.prototype의 프로퍼티를 상속받는다.
// hasOwnProperty 메서드는 Object.prototype의 메서드다.
// 인수로 전달받은 프로퍼티 키가 객체 고유의 프로퍼티 키인 경우에만 true를 반환하고 상속받은 프로토타입의 프로퍼티인 경우 false를 반환한다.
console.log(obj.hasOwnProperty('a'));         // true
console.log(obj.hasOwnProperty('__proto__')); // false

// * prototype 프로퍼티
// 함수 객체는 prototype 프로퍼티를 소유한다.
(function () {}).hasOwnProperty('prototype'); // true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
({}).hasOwnProperty('prototype'); // false