// [타입 변환과 단축 평가]
// 9.1. 타입 변환이란?
// 값의 타입은 개발자의 의도에 따라 다른 타입으로 변환할 수 있다. 명시적 타입 변환 또는 타입 캐스팅이라 한다.
var x = 10;

// 명시적 타입 변환
// 숫자를 문자열로 타입 캐스팅한다.
var str = x.toString();
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x); // number 10

// 개발자의 의도와는 상관없이 표현식을 평가하는 도중에 자바스크립트 엔진에 의해 암묵적으로 타입이 변환되기도 한다.
// 암묵적 타입 변환, 타입 강제 변환이라 한다.
var x = 10;

// 암묵적 타입 변환
// 문자열 연결 연산자는 숫자 타입 x의 값을 바탕으로 새로운 문자열을 생성한다.
var str = x + '';
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x);

// 암묵적 타입은 기존 변수 값을 재할당하여 변경하는 것이 아니다. 자바스크립트 엔진은 표현식을 에러 없이 평가하기 위해 피연산자의 값을 
// 암묵적 타입 변환해 새로운 타입의 값을 만들어 단 한 번 사용하고 버린다.
// 명시적 타입 변환은 타입을 변경하겠다는 개발자의 의지가 코드에 명백히 드러난다.


// 9.2. 암묵적 타입 변환
// 피연산자가 모두 문자열 타입이어야 하는 문맥
'10' + 2 // '102'

// 피연산자가 모두 숫자 타입이어야 하는 문맥
5 * '10' // 50

// 피연산자 또는 표현식이 불리언 타입이어야 하는 문맥
!0 // true
if (1) { }

// 9.2.1. 문자열 타입으로 변환
1 + '2' // "12"
// 템플릿 리터럴의 표현식 삽입은 표현식의 평가 결과를 문자열 타입으로 암묵적 타입 변환한다.
`1 + 1 = ${1 + 1}` // "1 + 1 = 2"

// 자바스크립트 엔진은 문자열 타입으로 암묵적 타입 변환을 수행할 때 다음과 같이 동작한다.
// 숫자 타입
0 + '' // "0"
-0 + '' // "0"
1 + '' // "1"
-1 + '' // "-1"
NaN + '' // "NaN"
Infinity + '' // "Infinity"
-Infinity + '' // "-Infinity"

// 불리언 타입
true + '' // "true"
false + '' // "false"

// null 타입
null + '' // "null"

// undefined 타입
undefined + '' // "undefined"

// 심벌 타입
(Symbol()) + '' // TypeError: Cannot convert a Symbol value to a string

// 객체 타입
({}) + '' // "[object Object]"
Math + '' // "[object Math]"
//[] + '' // ""
[10, 20] + '' // "10, 20"
(function() {}) + '' // "function() {}"
Array + '' // "function Array() { [native code] }"

// 9.2.2. 숫자 타입으로 변환
1 - '1' // 0
1 * '10' // 10
1 / 'one' // NaN
// 이때 피연산자를 숫자 타입으로 변환할 수 없는 경우는 산술 연산을 수행할 수 없으므로 표현식의 평가 결과는 NaN이다.

'1' > 0 // true
// + 단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환을 수행한다.
// 문자열 타입
+'' // 0
+'0' // 0
+'1' // 1
+'string' // NaN

// 불리언 타입
+true // 1
+false // 0

// null 타입
+null // 0

// undefined 타입
+undefined // NaN

// 심벌 타입
+Symbol() // TypeError: Cannot convert a Symbol value to a number

// 객체 타입
+{} // NaN
+[] // 0
+[10, 20] // NaN
+(function() {}) // NaN
// 빈 문자열(''), 빈 배열([]), null, false는 0으로, true는 1로 변환된다. 객체와 빈 배열이 아닌 배열, undefined는 NaN이 된다는 것에 주의하자.

// 9.2.3. 불리언 타입으로 변환
if ('') console.log(x);
// 자바스크립트 엔진은 조건식의 평가 결과를 불리언 타입으로 암묵적 타입 변환한다.
if ('') console.log('1');
if (true) console.log('2');
if (0) console.log('3');
if ('str') console.log('4');
if (null) console.log('5');
// 2 4
// 이때 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값(참으로 평가되는 값) 또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다.
/** false로 평가되는 Falsy 값
 * - false
 * - undefined
 * - null
 * - 0, -0
 * - NaN
 * - ''(빈 문자열)
 */
// 아래의 조건문은 모두 코드블록을 실행한다.
if (!false) console.log(false + ' is falsy value');
if (!undefined) console.log(undefined + ' is falsy value');
if (!null) console.log(null + ' is falsy value');
if (!0) console.log(0 + ' is falsy value');
if (!NaN) console.log(NaN + ' is falsy value');
if (!'') console.log('' + ' is falsy value');

/** Falsy 값 이외의 모든 값은 모두 true로 평가되는 Truthy 값이다.
 * Truthy/Falsy 값을 판별하는 함수
 */
// 전달받은 인수가 Falsy 값이면 ture, Truthy 값이면 false를 반환한다.
function isFalsy(v) {
    return !v;
}

// 전달받은 인수가 Truthy 값이면 true, Falsy 값이면 false를 반환한다.
function isTruthy(v) {
    return !!v;
}

// 모두 true를 반환한다.
isFalsy(false);
isFalsy(undefined);
isFalsy(null);
isFalsy(0);
isFalsy(NaN);
isFalsy('');

// 모두 true를 반환한다.
isTruthy(true);
isTruthy('0'); // 빈 문자열이 아닌 문자열은 Truthy 값이다.
isTruthy({}); 
isTruthy([]);


// 9.3. 명시적 타입 변환
// 표준 빌트인 생성자 함수(String, Number, Boolean)를 new 연산자 없이 호출하는 방법과 빌트인 메서드를 사용하는 방법
// 암묵적 타입 변환을 이용하는 방법

// 9.3.1. 문자열 타입으로 변환
/** 문자열 타입이 아닌 값을 문자열 타입으러 변환하는 방법
 * 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
 * 2. Object.prototype.toString 메서드를 사용하는 방법
 * 3. 문자열 연결 연산자를 이용하는 방법
 */
// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 숫자 타입 => 문자열 타입
String(1); // "1"
String(NaN); // "NaN"
String(Infinity); // "Infinity"
// 불리언 타입 => 문자열 타입
String(true); // "true"
String(false); // "false"

// 2. Object.prototype.toString 메서드를 사용하는 방법
// 숫자 타입 => 문자열 타입
(1).toString(); // "1"
(NaN).toString(); // "NaN"
(Infinity).toString(); // "Infinity"
// 불리언 타입 => 문자열 타입
(true).toString(); // "true"
(false).toString(); // "false"

// 3. 문자열 연결 연산자를 이용하는 방법
// 숫자 타입 => 문자열 타입
1 + ''; // "1"
NaN + ''; // "NaN"
Infinity + ''; // "Infinity"
// 불리언 타입 => 문자열 타입
true + ''; // "true"
false + ''; // "false"

// 9.3.2. 숫자 타입으로 변환
/** 숫자 타입이 아닌 값을 숫자 타입으로 변환하는 방법
 * 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
 * 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 숫자 타입으로 변환 가능)
 * 3. + 단항 산술 연산자를 이용하는 방법
 * 4. * 산술 연산자를 이용하는 방법
 */
// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 숫자 타입
Number('0'); // 0
Number('-1'); // -1
Number('10.53'); // 10.53
// 불리언 타입 => 숫자 타입
Number(true); // 1
Number(false); // false

// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
// 문자열 타입 => 숫자 타입
parseInt('0'); // 0
parseInt('-1'); // -1
parseFloat('10.53'); // 10.53

// 3. + 단항 산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
+'0'; // 0
+'-1'; // -1
+'10.53'; // 10.53
// 불리언 타입 => 숫자 타입
+true; // 1
+false; // 0

// 4. * 산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
'0' * 1; // 0
'-1' * 1; // -1
'10.53' * 1; // 10.53
// 불리언 타입 => 숫자 타입
true * 1; // 1
false * 1; // 0

// 9.3.3. 불리언 타입으로 변환
/** 불리언 타입이 아닌 값을 불리언 타입으로 변환하는 방법
 * 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
 * 2. ! 부정 논리 연산자를 두 번 사용하는 방법
 */
// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 불리언 타입
Boolean('x'); // true
Boolean(''); // false
Boolean('false'); // true
// 숫자 타입 => 불리언 타입
Boolean(0); // false
Boolean(1); // true
Boolean(NaN); // false
Boolean(Infinity); // true
// null 타입 => 불리언 타입
Boolean(null); // false
// undefined 타입 => 불리언 타입
Boolean(undefined); // false
// 객체 타입 => 불리언 타입
Boolean({}); // true
Boolean([]); // true

// 2. ! 부정 논리 연산자를 두 번 사용하는 방법
// 문자열 타입 => 불리언 타입
!!'x'; // true
!!''; // false
!!'false'; // true
// 숫자 타입 => 불리언 타입
!!0; // false
!!1; // true
!!NaN; // false
!!Infinity; // true
// null 타입 => 불리언 타입
!!null; // false
// undefined 타입 => 불리언 타입
!!undefined; // false
// 객체 타입 => 불리언 타입
!!{}; // true
!![]; // true


// 9.4. 단축 평가
// 9.4.1. 논리 연산자를 사용한 단축 평가
'Cat' && 'Dog' // "Dog"
// 첫 번째 피연산자 'Cat'은 Truthy 값이므로 true로 평가된다. 두 번째 피연산자가 위 논리곱 연산자 표현식의 평가 결과를 결정한다.
// 이때 논리곱 연산자는 논리 연산의 결과를 결정하는 두 번째 피연산자, 문자열 'Dog'를 그대로 반환한다.
// 논리합(||) 연산자도 논리곱(&&) 연산자와 동일하게 작동한다.

'Cat' || 'Dog' // "Cat"
// 논리합(||) 연산자는 두 개의 피연산자 중 하나만 true로 평가되어도 true를 반환한다.
// 첫 번째 피연산자 'Cat'은 Truthy 값이므로 true로 평가된다.

// 논리곱(&&) 연산자와 논리합(||) 연산자는 이처럼 논리 연산의 결과를 결정하는 피연산자의 타입 변환하지 않고 그대로 반환한다.
// 이를 단축 평가라 한다. 표현식을 평가하는 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것을 말한다.
// 단축 평가 표현식         평가 결과
// true || anything         true
// false || anything        anything
// true && anything         anything
// false && anything        false

// 논리합(||) 연산자
'Cat' || 'Dog' // "Cat"
false || 'Dog' // "Dog"
'Cat' || false // "Cat"

// 논리곱(&&) 연산자
'Cat' && 'Dog' // "Dog"
false && 'Dog' // false
'Cat' && false // false

// 어떤 조건이 Truthy 값일 때 무언가를 해야 한다면 논리곱(&&) 연산자 표현식으로 if문을 대체할 수 있다.
var done = true;
var message = '';

// 주어진 조건이 true일 때
if (done) message = '완료';

// if 문은 단축 평가로 대체 가능하다.
// done이 true라면 message에 '완료'를 할당
message = done && '완료';
console.log(message); // 완료

// 조건이 Falsy 값일 때 무언가를 해야 한다면 논리합(||) 연산자 표현식으로 if문을 대체할 수 있다.
var done = false;
var message = '';

// 주어진 조건이 false일 때
if (!done) message = '미완료';

// if문은 단축 평가로 대체 가능하다.
// done이 false라면 message에 '미완료'를 할당
message = done || '미완료';
console.log(message); // 미완료

// 삼항 조건 연산자는 if ... else문을 대체할 수 있다.
var done = true;
var message = '';

// if ... else문
if (done) message = '완료';
else      message = '미완료';
console.log(message); // 완료

// if ... else문은 삼항 조건 연산자로 대체 가능하다.
message = done ? '완료' : '미완료';
console.log(message); // 완료

// * 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때
// 객체는 키와 값으로 구성된 프로퍼티의 집합이다. 민약 객체를 가리키기를 기대하는 변수의 값이 객체가 아니라 null 또는 undefined인 경우
// 객체의 프로퍼티를 참조하면 타입 에러가 발생한다. 에러가 발생하면 프로그램이 강제 종료된다.
var elem = null;
var value = elem.value; // TypeError: Cannot read property 'value' of null
// 단축 평가를 사용하면 에러가 발생하지 않는다.
var elem = null;
// elem이 null이나 undefined와 같은 Falsy 값이면 elem으로 평가되고
// elem이 Truthy 값이면 elem.value로 평가된다.
var value = elem && elem.vale; // null

// * 함수 매개변수에 기본값을 설정할 때
// 함수를 전달할 때 인수를 전달하지 않으면 매개변수에는 undefined가 할당된다.
// 이때 단축 평가를 사용해 매개변수의 기본값을 설정하면 undefined로 인해 발생할 수 있는 에러를 방지할 수 있다.
// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
    str = str || '';
    return str.length;
}

getStringLength(); // 0
getStringLength('hi'); // 2

// ES6의 매개변수의 기본값 설정
function getStringLength(str = '') {
    return str.length;
}

getStringLength(); // 0
getStringLength('hi'); // 2

// 9.4.2. 옵셔널 체이닝 연산자
// 옵셔널 체이닝 연산자 ?.는 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
var elem = null;
var value = elem ?.value;
console.log(value); // undefined

// ?.는 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때 유용하다.
// ?.이전에는 &&를 이용해 확인했다.
var elem = null;
// elem이 Falsy 값이면 elem으로 평가되고, elem이 Truthy 값이면 elem.value로 평가된다.
var value = elem && elem.value;
console.log(value); // null
// &&는 좌항 피연산자가 false로 평가되는 Falsy값(false, undefined, null, 0, -0, NaN, '')이면 좌항 피연산자를 그대로 반환한다.
// 좌항 피연산자가 Falsy값인 0이나 ''인 경우도 마찬가지다. 하지만 0이나 ''은 객체로 평가될 때도 있다.
var str = '';

// 문자열의 길이(length)를 참조한다.
var length = str && str.length;

// 문자열의 길이(length)를 참조하지 못한다.
console.log(length);

var str = '';

// 문자열의 길이(length)를 참조한다. 이때 좌항 피연산자가 false로 평가되는 Falsy 값이라도
// null 또는 undefined가 아니면 우항의 프로퍼티 참조를 이어간다.
var length = str?.length;
console.log(length); // 0

// 9.4.3. null 병합 연산자
// null 병합 연산자 ??는 좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다.
// 기본값을 설정할 때 유용하다.
var foo = null ?? 'default string';
console.log(foo); // "default string"

// Falsy값이나 0이나 ''도 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수 있다.
var foo = '' || 'default string';
console.log(foo); // "default string"
// 좌항의 피연산자가 false로 평가되는 Falsy 값(false, undefined, null, 0, -0, NaN, '')이라도 null 또는 undefined가 아니면 좌항의 피연산자를 그대로 반환한다.
var foo = '' ?? 'default string';
console.log(foo); // ""