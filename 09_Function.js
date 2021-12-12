// [함수]
// 12.1 함수란?
// 함수 정의
// f(x, y) = x + y
function add(x, y) {
    return x + y;
}

// f(2, 5) = 7
add(2, 5); // 7
// 함수는 일련의 과정을 문으로 구현하고 코드 블록으로 감싸서 하나의 실행 단위로 정의한 것이다.
// 전달받는 변수를 매개변수, 입력을 인수, 출력을 반환값

// 함수 호출
var result = add(2, 5);

// 함수 add에 인수 2, 5를 전달하면서 호출하면 반환값 7을 반환한다.
console.log(result); // 7

// 12.2 함수를 사용하는 이유
// 코드의 재사용이라는 측면에서 매우 유용하다.
// 유지보수의 편의성을 높이고 코드의 신뢰성을 높이는 효과, 코드의 가독성을 향상시킨다.

// 12.3 함수 리터럴
// 변수에 함수 리터럴을 할당
var f = function add(x, y) {
    return x + y;
};
/** [함수 리터럴의 구성 요소]
 * 1. 함수 이름
 * - 함수 이름은 식별자다. 따라서 식별자 네이밍 규칙을 준수해야 한다.
 * - 함수 이름은 함수 몸체 내에서만 참조할 수 있는 식별자다.
 * - 함수 이름은 생략할 수 있다. 이름이 있는 함수를 기명 함수, 이름이 없는 함수를 무명/익명 함수라 한다.
 * 2. 매개변수 목록
 * - 0개 이상의 매개변수를 소괄호로 감싸고 쉼표로 구분한다.
 * - 각 매개변수에는 함수를 호출할 때 지정한 인수가 순서대로 할당된다. 즉, 매개변수 목록은 순서에 의미가 있다.
 * - 매개변수는 함수 몸체 내에서 변수와 동일하게 취급된다. 따라서 매개변수도 변수와 마찬가지로 식별자 네이밍 규칙을 준수해야 한다.
 * 3. 함수 몸체
 * - 함수가 호출되었을 때 일괄적으로 실행될 문들을 하나의 실행 단위로 정의한 코드 블록이다.
 * - 함수 몸체는 함수 호출에 의해 실행된다.
 */

// 12.4 함수 정의
// 1. 함수 선언문
function add(x, y) {
    return x + y;
}
// 2. 함수 표현식
var add = function(x, y) {
    return x + y;
};
// 3. Function 생성자 함수
var add = new Function('x', 'y', 'return x + y');
// 4. 화살표 함수(ES6)
var add = (x, y) => x + y;

// 12.4.1 함수 선언문
function add(x, y) {
    return x + y;
}

// 함수 참조
// console.dir은 console.log와는 달리 함수 객체의 프로퍼티까지 출력한다.
// 단, Node.js 환경에서는 console.log와 같은 결과가 출력된다.
console.dir(add); // f add(x, y)
console.log(add(2, 5)); // 7

// 함수 선언문은 함수 이름을 생략할 수 없다.
// function (x, y) {
//     return x + y;
// }
// SyntaxError: Function statements require a function name
// 함수 선언문은 표현식이 아닌 문이므로 변수에 할당할 수 없다.
// 하지만 함수 선언문이 변수에 할당되는 것 처럼 보인다.
var add = function add(x, y) {
    return x + y;
}

// 함수 호출
console.log(add(2, 5));

// 기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석된다.
// 함수 선언문에서는 함수 이름을 생략할 수 없다.
function foo() { console.log('foo') };
foo(); // foo

// 함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식으로 해석된다.
// 함수 리터럴에서는 함수 이름을 생략할 수 있다.
(function bar() { console.log('bar'); });
bar(); // ReferenceError: bar is not defined

// 12.4.2 함수 표현식
// 함수 표현식
var add = function add(x, y) {
    return x + y;
}

console.log(add(2, 5)); // 7

// 기명 함수 표현식
var add = function foo(x, y) {
    return x + y;
};

// 함수 객체를 가리키는 식별자로 호출
console.log(add(2, 5)); // 7

// 함수 이름으로 호출하면 ReferenceError가 발생한다.
// 함수 이름은 함수 몸체 내부에서만 유효한 식별자다.
console.log(foo(2, 5)); // ReferenceError: foo is not defined

// 12.4.3 함수 생성 시점과 함수 호이스팅
// 함수 참조
console.dir(add); // f add(x, y)
console.log(sub); // undefined

// 함수 호출
console.log(add(2, 5)); // 7
console.log(sub(2, 5)); // TypeError: sub is not a function

// 함수 선언문
function add(x, y) {
    return x + y;
}

// 함수 표현식
var sub = function (x, y) {
    return x - y;
};
// 함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징을 함수 호이스팅이라 한다.

// 12.4.4 Function 생성자 함수
// 일반적인 방식이 아니다. 함수 선언문이나 함수 표현식으로 생성한 함수와 다르게 동작한다.
var add = new Function('x', 'y', 'return x + y');

console.log(add(2, 5)); // 7

var add1 = (function () {
    var a = 10;
    return function (x, y) {
        return x + y + a;
    };
}());

console.log(add1(1, 2)); // 13

var add2 = (function () {
    var a = 10;
    return new Function('x', 'y', 'return x + y + a;');
}());

console.log(add2(1, 2)); // ReferenceError: a is not defined

// 12.4.5 화살표 함수
const add = (x, y) => x + y;
console.log(add(2, 5)); // 7


// 12.5 함수 호출
// 12.5.1 매개변수와 인수
// 함수 선언문
function add(x, y) {
    return x + y;
}

// 함수 호출
// 인수 1과 2가 매개변수 x와 y에 순서대로 할당되고 함수 몸체의 문들이 실행된다.
var result = add(1, 2);

function add(x, y) {
    console.log(x, y); // 2 5
    return x + y;
}

add(2, 5);

// add 함수의 매개변수는 x, y는 함수 몸체 내부에서만 참조할 수 있다.
console.log(x, y); // ReferenceError: x is not defined

// 인수가 부족해서 인수가 할당되지 않은 매개변수의 값은 undefined다.
function add(x, y) {
    return x + y;
}

console.log(add(2)); // NaN

// 매개변수보다 인수가 더 많은 경우 초과된 인수는 무시된다.
console.log(add(2, 5, 10)); // 7
// 그냥 버려지는 것이 아닌 암묵적으로 arguments 객체의 프로퍼티로 보관된다.

function add(x, y) {
    console.log(arguments);
    // Arguments(3) [2, 5, 10, callee: f, Symbol(Symbol.iterator): f]
    return x + y;
}

add(2, 5, 10);
// arguments 객체는 함수를 정의할 때 매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현할 때 유용하게 사용된다.

// 12.5.2 인수 확인
function add(x, y) {
    return x + y;
}

console.log(add(2)); // NaN
console.log(add('a', 'b')); // 'ab'

// 1. 자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않는다.
// 2. 자바스크립트는 동적 타입 언어다. 따라서 자바스크립트 함수는 매개변수의 타입을 사전에 지정할 수 없다.

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        // 매개변수를 통해 전달된 인수의 타입이 부적절한 경우 에러를 발생시킨다.
        throw new TypeError('인수는 모두 숫자 값이어야 합니다.');
    }
    return x + y;
}

console.log(add(2)); // TypeError: 인수는 모두 숫자 값이어야 합니다.
console.log(add('a', 'b')); // TypeError: 인수는 모두 숫자 값이어야 합니다.

function add(a, b, c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}

console.log(add(1, 2, 3)); // 6
console.log(add(1, 2)); // 3
console.log(add(1)); // 1
console.log(add()); // 0
// 매개변수에 인수를 전달하지 않았을 경우와 undefined를 전달한 경우에만 유효하다.

function add(a = 0, b = 0, c = 0) {
    return a + b + c;
}

console.log(add(1, 2, 3)); // 6
console.log(add(1, 2)); // 3
console.log(add(1)); // 1
console.log(add()); // 0

// 12.5.3 매개변수의 최대 개수
// 매개변수는 최대 3개 이상을 넘지 않는 것을 권장한다. 
// 그 이상 매개변수가 필요하다면 하나의 매개변수를 선언하고 객체를 인수로 전달하는 것이 유리하다.
$.ajax({
    method: 'POST',
    url: '/user',
    data: { id: 1, name: 'Lee' },
    cache: false
});

// 12.5.4 반환문
function multiply(x, y) {
    return x * y; // 반환문
}

// 함수 호출은 반환값으로 평가된다.
var result = multiply(3, 5);
console.log(result); // 15

function multiply(x, y) {
    return x * y; // 반환문
    // 반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시된디.
    console.log('실행되지 않는다.');
}

console.log(multiply(3, 5)); // 15

function foo() {
    return;
}

console.log(foo()); // undefined

function foo() {
    // 반환문을 생략하면 암묵적으로 undefined가 반환된다.
}

console.log(foo()); // undefined

function multiply(x, y) {
    // return 키워드와 반환값 사이에 줄바꿈이 있으면
    return // 세미콜론 자동 삽입 기능(ASI)에 의해 세미콜론이 추가된다.
    x * y; // 무시된다.
}

console.log(multiply(3, 5)); // undefined

// 반환문은 함수 몸체 내부에서만 사용할 수 있다. 전역에서 반환문을 사용하면 문법 에러(SyntaxError: Illefal return statement)가 발생한다.


// 12.6 참조에 의한 전달과 외부 상태의 변경
// 매개변수 primitive는 원시 값을 전달받고, 매개변수 obj는 객체를 전달받는다.
function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = 'Kim';
}

// 외부 상태
var num = 100;
var person = { name: 'Lee' };

console.log(num); // 100
console.log(person); // {name: "Lee"}

// 원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다.
changeVal(num, person);

// 원시 값은 원본이 훼손되지 않는다.
console.log(num); // 100

// 객체는 원본이 훼손된다.
console.log(person); // {name: "Kim"}


// 12.7 다양한 함수의 형태
// 12.7.1 즉시 실행 함수
// 익명 즉시 실행 함수
(function () {
    var a = 3;
    var b = 5;
    return a * b;
}());

// 기명 즉시 실행 함수
(function foo() {
    var a = 3;
    var b = 5;
    return a * b;
}());

foo(); // ReferenceError: foo is not defined

// 즉시 실행 함수는 반드시 그룹 연산자(...)로 감싸야 한다. 그렇지 않으면 다음과 같이 에러가 발생한다.
// function () { // SyntaxError: Function statements require a function name
//     // ...
// }();
// 함수 선언문의 형식에 맞지 않기 때문에 에러가 발생한다. 함수 선언문은 함수 이름을 생략할 수 없다.

// function foo() {
//     // ...
// }(); // SyntaxError: Unexpected token ')'
// 세미콜론 자동 삽입 기능에 의해 함수 선언문이 끝나는 위치, 함수 코드 블록의 닫는 중괄호 뒤에 ";"이 암묵적으로 추가되기 때문이다.

// function foo() {}(); // => function foo() {};();

// (); // SyntaxError: Unexpected token ')'

// 그룹 연산자의 피연산자는 값으로 평가되므로 기명 또는 무명 함수를 그룹 연산자로 감싸면 함수 리터럴로 평가되어 함수 객체가 된다.
console.log(typeof (function f() {})); // function
console.log(typeof (function (){})); // function

(function () {
    // ...
}());

(function () {
    // ...
})();

!function () {
    // ...
}();

+function() {
    // ...
}();

// 즉시 실행 함수도 일반 함수처럼 값을 반환할 수 있다.
var res = (function () {
    var a = 3;
    var b = 5;
    return a * b;
}());

console.log(res); // 15

// 즉시 실행 함수에도 일반 함수처럼 인수를 전달할 수 있다.
res = (function (a, b) {
    return a * b;
}(3, 5));

console.log(res); // 15

// 12.7.2 재귀 함수
function countdown(n) {
    for (var i = n; i >= 0; i--) console.log(i);
}

countdown(10);

function countdown(n) {
    if (n < 0) return;
    console.log(n);
    countdown(n - 1); // 재귀 호출
}

countdown(10);

// 팩토리얼(계승)은 1부터 자신까지의 모든 양의 정수의 곱이다.
// n! = 1 * 2 * ... * (n-1) * n
function factorial(n) {
    // 탈출 조건: n이 1이하일 때 재귀 호출을 멈춘다.
    if (n <= 1) return 1;
    // 재귀 호출
    return n * factorial(n - 1);
}

console.log(factorial(0)); // 0! = 1
console.log(factorial(1)); // 1! = 1
console.log(factorial(2)); // 2! = 2 * 1 = 2
console.log(factorial(3)); // 3! = 3 * 2 * 1 = 6
console.log(factorial(4)); // 4! = 4 * 3 * 2 * 1 = 24
console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120

// 함수 표현식
var factorial = function foo(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);

    // 함수 이름으로 자기 자신을 재귀 호출할 수도 있다.
    // console.log(factorial === foo); // true
    // return n * foo(n - 1);
};

console.log(factorial(5)); // 120

function factorial(n) {
    if (n <= 1) return 1;

    var res = n;
    while(--n) res * n;
    return res;
}

// 12.7.3 중첩 함수
// 함수 내부에 정의된 함수를 중첩 함수 또는 내부 함수라 한다.
function outer() {
    var x = 1;

    // 중첩 함수
    function inner() {
        var y = 2;
        // 외부 함수의 변수를 참조할 수 있다.
        console.log(x + y); // 3
    }

    inner();
}

outer();

// 12.7.4 콜백 함수
// n만큼 어떤 일을 반복한다.
function repeat(n) {
    // i를 출력한다.
    for (var i = 0; i < n; i++) console.log(i);
}

repeat(5); // 0 1 2 3 4

// 함수의 반복문 내부에서 다른 일을 하고 싶다면 함수를 새롭게 정의해야 한다.
function repeat2(n) {
    for (var i = 0; i < n; i++) {
        // i가 홀수일 때만 출력한다.
        if (i % 2) console.log(i);
    }
}

repeat2(5); // 1 3

// 외부에서 전달받은 f를 n만큼 반복 호출한다.
function repeat(n, f) {
    for (var i = 0; i < n; i++) {
        f(i); // i를 전달하면서 f를 호출
    }
}

var logAll = function (i) {
    console.log(i);
};

// 반복 호출할 함수를 인수로 전달한다.
repeat(5, logAll); // 0 1 2 3 4

var logOdds = function (i) {
    if (i % 2) console.log(i);
};

// 반복 호출할 함수를 인수로 전달한다.
repeat(5, logOdds); // 1 3
// 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백함수라고 하며
// 매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수를 고차 함수라고 한다.

// 익명 함수 리터럴을 콜백 함수로 고차 함수에 전달한다.
// 익명 함수 리터럴은 repeat 함수를 호출할 때마다 평가되어 함수 객체를 생성한다.
repeat(5, function (i) {
    if (i % 2) console.log(i);
}); // 1 3

// 콜백 함수를 전달받는 함수가 자주 호출된다면 외부에서 콜백함수를 정의한 후 함수 참조를 고차 함수에 전달하는 편이 효율적이다.
// logOdds 함수는 단 한 번만 생성된다.
var logOdds = function (i) {
    if (i % 2) console.log(i);
};

// 고차 함수에 함수 참조를 전달한다.
repeat(5, logOdds); // 1 3

// 콜백 함수를 사용한 이벤트 처리
// myButton 버튼을 클릭하면 콜백 함수를 실행한다.
document.getElementById('myButton').addEventListener('click', function () {
    console.log('button clicked!');
});

// 콜백 함수를 사용한 비동기 처리
// 1초 후에 메세지를 출력한다.
setTimeout(function () {
    console.log('1초 경과');
}, 1000);

// 콜백 함수를 사용하는 고차 함수 map
var res = [1, 2, 3].map(function (item) {
    return item * 2;
});

console.log(res); // [2, 4, 6]

// 콜백 함수를 사용하는 고차 함수 filter
res = [1, 2, 3].filter(function (item) {
    return item % 2;
});

console.log(res); // [1, 3]

// 콜백 함수를 사용하는 고차 함수 reduce
res = [1, 2, 3].reduce(function (acc, cur) {
    return acc + cur;
}, 0);

console.log(res); // 6

// 12.7.5 순수 함수와 비순수 함수
// - 외부 상태에 의존하지도 않고 변경하지도 않는, 부수 효과가 없는 함수를 순수 함수
// - 외부 상태에 의존하거나 외부 상태를 변경하는, 부수 효과가 있는 함수를 비순수 함수
var count = 0; // 현재 카운트를 나타내는 상태

// 순수 함수 increase는 동일한 인수가 전달되면 언제나 동일한 값을 반환한다.
function increase(n) {
    return ++n;
}

// 순수 함수가 반환한 결과값을 변수에 재할당해서 상태를 변경
count = increase(count);
console.log(count); // 1

count = increase(count);
console.log(count); // 2

var count = 0; // 현재 카운트를 나타내는 상태: increase 함수에 의해 변화한다.

// 비순수 함수
function increase() {
    return ++count; // 외부 상태에 의존하며 외부 상태를 변경한다.
}

// 비순수 함수는 외부 상태(count)를 변경하므로 상태 변화를 추적하기 어려워진다.
increase();
console.log(count); // 1

increase();
console.log(count); // 2