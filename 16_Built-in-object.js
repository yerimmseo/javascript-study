// [빌트인 객체]
// 1. 자바스크립트 객체의 분류
/**
 * ⁎ 표준 빌트인 객체
 * - 애플리케이션 전역의 공통 기능을 제공한다.
 * - 자바스크립트 실행환경과 관계없이 언제나 사용할 수 있다.
 * - 표준 빌트인 객체는 전역 객체의 프로퍼티로서 제공된다.
 * - 별도의 선언 없이 전역변수처럼 언제나 참조할 수 있다.
 * ⁎ 호스트 객체
 * - 자바스크립트 실행환경에서 추가로 제공하는 객체를 말한다.
 * ⁎ 사용자 정의 객체
 * - 사용자가 직접 정의한 객체를 말한다.
 */

// 2. 표준 빌트인 객체
// 정적 메서드만 제공한다.
// String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Lee'); // String {"Lee"}
console.log(typeof strObj);       // object

// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(123); // Number {123}
console.log(typeof numObj);     // object

// Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true); // Boolean {true}
console.log(typeof boolObj);       // object

// Function 생성자 함수에 의한 Function 객체(함수) 생성
const func = new Function('x', 'return x * x'); // f anonymous(x)
console.log(typeof func);                       // function

// Array 생성자 함수에 의한 Array 객체(배열) 생성
const arr = new Array(1, 2, 3); // (3) [1, 2, 3]
console.log(typeof arr);        // object

// RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i); // /ab+c/i
console.log(typeof regExp);         // object

// Date 생성자 함수에 의한 Date 객체 생성
const date = new Date();  // Fri May 08 2020 10:43:25 GMT+0900 (대한민국 표준시)
console.log(typeof date); // object

// 생성자 함수인 표준 빌트인 객체가 생성한 인스턴스의 프로토타입은 표준 빌트인 객체의 prototype 프로퍼티에 바인딩된 객체다.
// String 생성자 함수에 의한 String 객체 생성
const strObj2 = new String('Lee'); // String {"Lee"}

// String 생성자 함수를 통해 생성한 strObj 객체의 프로토타입은 String.prototype이다.
console.log(Object.getPrototypeOf(strObj2) === String.prototype); // true

// 표준 빌트인 객체는 인스턴스 없이도 호출 가능한 빌트인 정적 메서드를 제공한다.
// Number 생성자 함수에 의한 Number 객체 생성
const numObj2 = new Number(1.5); // Number {1.5}

// toFixed는 Number.prototype의 프로토타입 메서드다.
// Number.prototype.toFixed는 소수점 자리를 반올림하여 문자열로 반환한다.
console.log(numObj2.toFixed()); // 2

// isInteger는 Number의 정적 메서드다.
// Number.isInteger는 인수가 정수(integer)인지 검사하여 그 결과를 Boolean으로 반환한다.
console.log(Number.isInteger(0.5)); // false

// 3. 원시값과 래퍼 객체
// 원시값은 객체가 아니므로 프로퍼티나 메서드를 가질 수 없는데도 원시값인 문자열이 마치 객체처럼 동작한다.
const str = 'hello';
console.log(str.length); // 5
console.log(str.toUpperCase()); // HELLO

// 문자열, 숫자, 불리언 값에 대해 객체처럼 접근하면 생성되는 임시 객체를 래퍼 객체라고 한다.
const str2 = 'hi';
// 원시 타입인 문자열이 래퍼 객체인 String 인스턴스로 변환된다.
console.log(str2.length); // 2
console.log(str2.toUpperCase()); // HI
// 래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후, 다시 원시값으로 되돌린다.
console.log(typeof str2);

// 식별자가 원시값을 갖도록 되돌리고 래퍼 객체는 가비지 컬렉션의 대상이 된다.
// 1) 식별자 str3은 문자열을 값으로 가지고 있다.
const str3 = 'hello';

// 2) 식별자 str3는 암묵적으로 생성된 래퍼 객체를 가리킨다.
//    식별자 str3의 값 'hello'는 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된다.
//    래퍼 객체에 name 프로퍼티가 동적 추가된다.
str3.name = 'Lee';

// 3) 식별자 str3는 다시 원래의 문자열, 즉 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 갖는다.
//    이때 2)에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.

// 4) 식별자 str3는 새롭게 암묵적으로 생성된(2)에서 생성된 래퍼 객체와는 다른) 래퍼 객체를 가리킨다.
//    새롭게 생성된 래퍼 객체에는 name 프로퍼티가 존재하지 않는다.
console.log(str3.name); // undefined

// 5) 식별자 str3는 다시 원래의 문자열, 즉 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 갖는다.
//    이때 4)에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.
console.log(typeof str, str); // string hello

const num = 1.5;

// 원시 타입인 숫자가 래퍼 객체인 String 객체로 변환된다.
console.log(num.toFixed()); // 2

// 래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후, 다시 원시값으로 되돌린다.
console.log(typeof num, num); // number 1.5

// 4. 전역 객체
// 브라우저 환경에서는 window(또는 self, this, frames)
// Node.js 환경에서는 global이 전역 객체를 가리킨다.
// - 전역 객체는 개발자가 의도적으로 생성할 수 없다. 즉, 전역 객체를 생성할 수 있는 생성자 함수가 제공되지 않는다.
// - 전역 객체의 프로퍼티를 참조할 때 window(또는 global)를 생략할 수 있다.

// 문자열 'F'를 16진수로 해석하여 10진수로 변환하여 반환한다.
window.parseInt('F', 16); // 15
// window.parseInt는 parseInt로 호출할 수 있다.
parseInt('F', 16); // 15

window.parseInt === parseInt;

// var 키워드로 선언한 전역 변수
var foo = 1;
console.log(window.foo); // 1

// 선언하지 않은 변수에 값을 암묵적 전역. bar는 전역 변수가 아니라 전역 객체의 프로퍼티다.
bar = 2; // window.bar = 2
console.log(window.bar); // 2

// 전역 함수
function baz() { return 3; }
console.log(window.baz()); // 3
// let이나 const 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다.
let foo = 1;
console.log(window.foo); // undefined

// 4-1. 빌트인 전역 프로퍼티
// 전역 객체의 프로퍼티를 의미한다. 주로 애플리케이션 전역에서 사용하는 값을 제공한다.

// * Infinity : 무한대
// 전역 프로퍼티는 window를 생략하고 참조할 수 있다.
console.log(window.Infinity === Infinity); // true
// 양의 무한대
console.log(3/0); // Infinity
// 음의 무한대
console.log(-3/0); // -Infinity
// Infinity는 숫자값이다.
console.log(typeof Infinity); // number

// * NaN : 숫자가 아님(Not-a-Number)을 나타내는 숫자값 NaN을 갖는다.
console.log(window.NaN); // NaN

console.log(Number('xyz')); // NaN
console.log(1 * 'string'); // NaN
console.log(typeof NaN); // number

// * undefined
// undefined 프로퍼티는 원시 타입 undefined를 값으로 갖는다.
console.log(window.undefined); // undefined

var foo;
console.log(foo); // undefined
console.log(typeof undefined); // undefined

// 4-2. 빌트인 전역 함수
// 빌트인 전역 함수는 애플리케이션 전역에서 호출할 수 있는 빌트인 함수로서 전역 객체의 메서드다.

// * eval
// 자바스크립트 코드를 나타내는 문자열을 인수로 전달받는다.
/**
 * 주어진 문자열 코드를 런타임에 평가 또는 실행한다.
 * @param {string} code - 코드를 나타내는 문자열
 * @returns {*} 문자열 코드를 평가/실행한 결과값
 */
//eval(code)

// 표현식인 문
eval('1 + 2;'); // 3
// 표현식이 아닌 문
eval('var x = 5'); // undefined

// eval 함수에 의해 런타임에 변수 선언문이 실행되어 x 변수가 선언되었다.
console.log(x); // 5

// 객체 리터럴은 반드시 괄호로 둘러싼다.
const o = eval('({ a: 1 })');
console.log(o); // {a: 1}

// 함수 리터럴은 반드시 괄호로 둘러싼다.
const f = eval('(function() { return 1; })');
console.log(f()); // 1

// 인수로 전달받은 문자열 코드가 여러개 문으로 이루어져 있다면 모든 문을 실행한 다음, 마지막 결과값을 반환한다.
eval('1 + 2; 3 + 4;'); // 7

// eval 함수는 자신이 호출된 위치에서 해당하는 기존의 스코프를 런타임에 동적으로 수정한다.
const x = 1;

function foo() {
  // eval 함수는 런타임에 foo 함수의 스코프를 동적으로 수정한다.
  eval('var x = 2;');
  console.log(x); // 2
}

foo();
console.log(x); // 1

// strict mode에서  eval 함수는 기존의 스코프를 수정하지 않고 eval 함수 자신의 자체적인 스코프를 생성한다.
const x = 1;

function foo() {
  'use strict';

  // strict mode에서  eval 함수는 기존의 스코프를 수정하지 않고 eval 함수 자신의 자체적인 스코프를 생성한다.
   eval('var x = 2; console.log(x);'); // 2
}

foo();
console.log(x); // 1

// let, const 키워드를 사용한 변수 선언문은 strict mode가 적용된다.
const x = 1;

function foo() {
  eval('var x = 2; console.log(x);'); // 2
  // let, const 키워드를 사용한 변수 선언문은 strict mode가 적용된다.
  eval('const x = 3; console.log(x);'); // 3
  console.log(x); // 2
}

foo();
console.log(x); // 1
// eval 함수는 최적화가 수행되지 않으므로 일반적인 코드 실행에 비해 처리 속도가 느리다. 사용 금지.

// * isFinite
// 유한수이면 true, 무한수이면 false를 반환. 전달받은 인수의 타입이 숫자가 아닌 경우, 숫자로 타입 변환 후 검사 수행
// 인수가 NaN으로 평가되는 값이면 false 반환
/**
 * 전달받은 인수가 유한수인지 확인하고 그 결과를 반환한다.
 * @param {number} testValue - 검사 대상 값
 * @returns {boolean} 유한수 여부 확인 결과
 */
//isFinite(testValue)

// 인수가 유한수이면 true를 반환한다.
isFinite(0); // true
isFinite(2e64); // true
isFinite('10'); // true: '10' -> 10
isFinite(null); // true: null -> 0

// 인수가 무한수 또는 NaN으로 평가되는 값이라면 false를 반환한다.
isFinite(Infinity); // false
isFinite(-Infinity); // false

// 인수가 NaN으로 평가되는 값이라면 false를 반환한다.
isFinite(NaN); // false
isFinite('Hello'); // false
isFinite('2005/12/12'); // false

console.log(+null); // 0

// * isNaN
// NaN인지 검사하여 그 결과를 불리언 타입으로 반환한다. 전달받은 인수의 타입이 숫자가 아닌 경우 숫자로 타입을 변환한 후 검사를 수행
/**
 * 주어진 숫자가 NaN인지 확인하고 그 결과를 반환한다.
 * @param {number} testValue - 검사 대상 값
 * @returns {boolean} NaN 여부 확인 결과
 */
//isNaN(testValue)

// 숫자
isNaN(NaN); // true
isNaN(10); // false

// 문자열
isNaN('blabla'); // true: 'blabla' => NaN
isNaN('10');     // false: '10' => 10
isNaN('10.12');  // false: '10.12' => 10.12
isNaN('');       // false: '' => 0
isNaN(' ');      // false: ' ' => 0

// 불리언
isNaN(true); // false: true => 1
isNaN(null); // false: null => 0

// undefined
isNaN(undefined); // true: undefined => NaN

// 객체
isNaN({}); // true: {} => NaN

// date
isNaN(new Date());          // false: new Date() => Number
isNaN(new Date().toString); // true: String => NaN

// * parseFloat
// 전달받은 문자열 인수를 부동 소수점 숫자, 실수로 해석하여 반환한다.
/**
 * 전달받은 문자열 인수를 실수로 해석하여 반환한다.
 * @param {string} string - 변환 대상 값
 * @returns {number} 변환 결과
 * parseFloat(string)
 */
// 문자열을 실수로 해석하여 반환한다.
parseFloat('3.14'); // 3.14
parseFloat('10.00'); // 10

// 공백으로 구분된 문자열은 첫 번째 문자열만 변환한다.
parseFloat('34 45 66'); // 34
parseFloat('40 years'); // 40

// 첫 번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환한다.
parseFloat('He was 40'); // NaN

// 앞뒤 공백은 무시된다.
parseFloat('  60  '); // 60

// * parseInt
/**
 * 전달받은 문자열 인수를 정수로 해석하여 반환한다.
 * @param {string} string - 변환 대상 값
 * @param {number} [radix] - 진법을 나타내는 기수(2 ~ 36, 기본값 10)
 * @returns {number} 변환 결과
 * parseInt(string, radix);
 */
// 문자열을 정수로 해석하여 반환한다.
parseInt('10');     // 10
parseInt('10.123'); // 10

// 기수를 생략하면 10진수로 해석하여 반환한다.
// '10'을 10진수로 해석하고 그 결과를 10진수 정수로 반환한다.
parseInt('10');     // 10
// '10'을 2진수로 해석하고 그 결과를 10진수 정수로 반환한다.
parseInt('10', 2);  // 2
// '10'을 8진수로 해석하고 그 결과를 10진수 정수로 반환한다.
parseInt('10', 8);  // 8
// '10'을 16진수로 해석하고 그 결과를 10진수 정수로 반환한다.
parseInt('10', 16); // 16

// 기수를 지정하여 10진수 숫자를 해당 기수의 문자열로 변환하여 반환하고 싶을 때는 Number.prototype.toString 메서드를 사용한다.
const x = 15;

// 10진수 15를 2진수로 변환하여 그 결과를 문자열로 반환한다.
x.toString(2); // '1111'
// 문자열 '1111'을 2진수로 해석하고 그 결과를 10진수 정수로 반환한다.
parseInt(x.toString(2), 2); // 15

// 10진수 15를 8진수로
x.toString(8); // 17
parseInt(x.toString(8), 8); // 15

x.toString(16); // 'f'
parseInt(x.toString(16), 16); // 15

// 숫자값을 문자열로 변환한다.
x.toString(); // '15'
parseInt(x.toString()); // 15

// 16진수 리터럴 '0xf'를 16진수로 해석하고 10진수 정수로 그 결과를 반환한다.
parseInt('0xf'); // 15
parseInt('f', 16); // 15

// 2진수 리터럴과 8진수 리터럴은 제대로 해석하지 못한다.
// 2진수 리터럴(0b로 시작)은 제대로 해석하지 못한다. 0 이후가 무시된다.
parseInt('0b10'); // 0
// 8진수 리터럴(0o로 시작)은 제대로 해석하지 못한다. 0 이후가 무시된다.
parseInt('0o10'); // 0

// 문자열 '10'을 2진수로 해석한다.
parseInt('10', 2); // 2
parseInt('10', 8); // 8

// 'A'는 10진수로 해석할 수 없다.
parseInt('A0'); // NaN
// '2'는 2진수로 해석할 수 없다.
parseInt('20', 2); // NaN

// 10진수로 해석할 수 없는 'A' 이후의 문자는 모두 무시된다.
parseInt('1A0'); // 1
// 2진수로 해석할 수 없는 '2' 이후의 문자는 모두 무시된다.
parseInt('102', 2); // 2
// 8진수로 해석할 수 없는 '8' 이후의 문자는 모두 무시된다.
parseInt('58', 8); // 5
// 16진수로 해석할 수 없는 'G' 이후의 문자는 모두 무시된다.
parseInt('FG', 16); // 15

// 공백으로 구분된 문자열은 첫 번째 문자열만 변환한다.
parseInt('34 45 66'); // 34
parseInt('40 years'); // 40
// 첫 번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환한다.
parseInt('He was 40'); // NaN
// 앞뒤 공격은 무시된다.
parseInt(' 60 '); // 60

// * encodeURI / decodeURI
/**
 * 완전한 URI를 문자열로 전달받아 이스케이프 처리를 위해 인코딩한다.
 * @param {string} uri - 완전한 URI
 * @returns {string} 인코딩된 URI
 * encodeURI(uri)
 */
// 완전한 URI
const uri = 'http://example.com?name=이웅모&job=programmer&teacher';
// encodeURI 함수는 완전한 URI를 전달받아 이스케이프 처리를 위해 인코딩한다.
const enc = encodeURI(uri);
console.log(enc);
// http://example.com??name=%EC%9D%B4%EC...&job=programmer&teacher
/**
 * 인코딩된 URI를 전달받아 이스케이프 처리 이전으로 디코딩한다.
 * @param {string} encodedURI - 인코딩된URI
 * @returns {string} // 디코딩한 URI 
 * decodeURI(encodedURI)
 */
const uri = 'http://example.com?name=이웅모&job=programmer&teacher';
// endodeURI 함수는 완전한 URI를 전달받아 이스케이프 처리를 위해 인코딩한다.
const enc = encodeURI(uri);
console.log(enc);
// http://example.com?name=%EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher

// decodeURI 함수는 인코딩된 완전한 URI를 전달받아 이스케이프 처리 이전으로 디코딩한다.
const dec = decodeURI(enc);
console.log(dec);
// http://example.com?name=이웅모&job=programmer&teacher

// * encodeURIComponent / decodeURIComponet
/**
 * URI의 구성요소를 전달받아 이스케이프 처리를 위해 인코딩한다.
 * @param {string} uriComponent - URI의 구성요소
 * @returns {string} 인코딩된 URI의 구성요소
 * encodeURIComponent(uriComponent)
 */

/**
  * 인코딩된 URI의 구성요소를 전달받아 이스케이프 처리 이전으로 디코딩한다.
  * @param {string} encodeURIComponent - 인코딩된 URI의 구성요소
  * @returns {string} 디코딩된 URI의 구성요소
  * decodeURIComponent(encodedURIComponent)
  */
// URI의 쿼리 스트링
const uriComp = 'name=이웅모&job=programmer&teacher';

// encodeURIComponent 함수는 인수로 전달받은 문자열을 URI의 구성요소인 쿼리 스트링의 일부로 간주한다.
// 따라서 쿼리 스트링 구분자로 사용하는 =, ?, &까지 인코딩한다.
let enc = encodeURIComponent(uriComp);
console.log(enc);
// name%3D%EC%9D%B4%EC%9B%85%EB%AA%A8%26job%3Dprogrammer%26teacher

let dec = decodeURIComponent(enc);
console.log(dec);
// name=이웅모&job=programmer&teacher

// encodeURI 함수는 인수로 전달받은 문자열을 완전한 URI로 간주한다.
// 따라서 쿼리 스트링 구분자로 사용되는 =, ?, &를 인코딩하지 않는다.
enc = encodeURI(uriComp);
console.log(enc);
// name%3D%EC%9D%B4%EC%9B%85%EB%AA%A8%26job%3Dprogrammer%26teacher

dec = decodeURI(enc);
console.log(dec);
// name=이웅모&job=programmer&teacher

// 4-3. 암묵적 전역
var x = 10; // 전역 변수

function foo() {
  // 선언하지 않은 식별자에 값을 할당
  y = 20; // window.y = 20;
}
foo();

// 선언하지 않은 식별자 y를 전역에서 참조할 수 있다.
console.log(x + y); // 30
// y는 변수가 아니다. 변수 호이스팅이 발생하지 않는다.
// 전역 변수 x는 호이스팅이 발생한다.
console.log(x); // undefined
// 전역 변수가 아니라 단지 전역 객체의 프로퍼티인 y는 호이스팅이 발생하지 않는다.
console.log(y); // ReferenceError: y is not defined

var x = 10; // 전역 변수

function foo() {
  // 선언하지 않은 식별지에 값을 할당
  y = 20; // window.y = 20;
}
foo();

// 선언하지 않은 식별자 y를 전역에서 참조할 수 있다.
console.log(x + y); // 30

// 단지 프로퍼티인 y는 delete 연산자로 삭제할 수 있다. 전역 변수는 프로퍼티이지만 delete 연산자로 삭제할 수 없다.
var x = 10; // 전역 변수

function foo() {
  // 선언하지 않은 식별자에 값을 할당
  y = 20; // window.y = 20;
  console.log(x + y);
}

foo(); // 30

console.log(window.x); // 10
console.log(window.y); // 20

delete x; // 전역 변수는 삭제되지 않는다.
delete y; // 프로퍼티는 삭제된다.

console.log(window.x); // 10
console.log(window.y); // undefined