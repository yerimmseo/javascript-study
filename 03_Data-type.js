// [데이터 타입]
// 자바스크립트의 모든 값은 데이터 타입을 갖는다.
// 자바스크립트(ES6)는 7개의 데이터 타입을 제공한다. 7개의 데이터 타입은 원시 타입과 객체 타입으로 분류할 수 있다.
/* # 원시 타입
 * - 숫자 타입(number): 숫자. 정수와 실수 구분 없이 하나의 숫자 타입만 존재
 * - 문자열 타입(string): 문자열
 * - 불리언 타입(boolean): 논리적 참(true)과 거짓(false)
 * - undefined 타입: var 키워드로 선언된 변수에 암묵적으로 할당되는 값
 * - null 타입: 값이 없다는 것을 의도적으로 명시할 때 사용하는 값
 * - 심벌 타입(symbol): ES6에서 추가된 7번째 타입 
 * 
 * # 객체 타입
 * - 객체, 함수, 배열 등 */

// 1. 숫자 타입
// 자바스크립트는 독특하게 하나의 숫자 타입만 존재한다. 모든 숫자를 실수로 처리하며, 정수만 표현하기 위한 데이터 타입이 별도로 존재하지 않는다.
// 모두 숫자 타입이다.
var integer = 10; // 정수
var double = 10.12; // 실수
var negative = -20; // 음의 정수

// 2진수, 8진수, 16진수를 표현하기 위한 데이터 타입을 제공하지 않기 때문에 이들 값을 참조하면 모두 10진수로 해석된다.
var binary = 0b01000001; // 2진수
var octal = 0o101; // 8진수
var hex = 0x41; // 16진수

// 표기법만 다를 뿐 모두 같은 값이다.
console.log(binary); // 65
console.log(octal); // 65
console.log(hex); // 65
console.log(binary === octal); // true;
console.log(octal == hex); // true;

// 숫자 타입은 모두 실수로 처리된다.
console.log(1 === 1.0); // true
console.log(4 / 2); // 2
console.log(3 / 2); // 1.5

// 숫자 타입은 추가적으로 세 가지 특별한 값도 표현할 수 있다.
/** Infinity: 양의 무한대
 * -Infinity: 음의 무한대
 * NaN: 산술 연산 불가(not-a-number)
 */
// 숫자 타입의 세 가지 특별한 값
console.log(10 / 0); // Infinity
console.log(10 / -0); // -Infinity
console.log(1 * 'String'); // NaN
// 자바스크립트는 대소문자를 구별하므로 NaN을 NAN, Nan, nan과 표현하면 에러가 발생한다. 값이 아닌 식별자로 해석.
var x = nan; // ReferenceError: nan is not defined


// 2. 문자열 타입
// 문자열은 작은따옴표(''), 큰따옴표(""), 백틱(``)으로 텍스트를 감싼다. 가장 일반적인 표기법은 작은 따옴표.
var string;
string = '문자열'; // 작은따옴표
string = "문자열"; // 큰따옴표
string = `문자열`; // 백틱(ES6)
string = '작은따옴표로 감싼 문자열 내의 "큰따옴표"는 문자열로 인식된다.';
string = "큰따옴표로 감싼 문자열 내의 '작은따옴표'는 문자열로 인식된다.";

// 따옴표로 감싸지 않은 hello를 식별자로 인식한다.
var string = hello; // ReferenceError: hello is not defined
// C는 문자열 타입을 제공하지 않고 문자의 배열로 문자열을 표현하고, 자바는 문자열을 객체로 표현한다.
// 그러나 자바스크립트의 문자열은 원시 타입이며, 변경 불가능한 값이다. 이것은 문자열이 생성되면 그 문자열을 변경할 수 없다는 것을 의미한다.


// 3. 템플릿 리터럴
// ES6부터 템플릿 리터럴이라고 하는 새로운 문자열 표기법이 도입되었다.
// 멀티라인 문자열, 표현식 삽입, 태그드 템플릿 등 편리한 문자열 기능을 제공한다.
// 템플릿 리터럴은 일반적인 따옴표 대신 백틱(``)을 사용해 표현한다.
var template = `Template literal`;
console.log(template); // Template literal

// 3.1. 멀티라인 문자열
// 일반 문자열 내에서는 줄바꿈(개행)이 허용되지 않는다.
//var str = 'Hello
//world.';
// SyntaxError: Invalid or unexpected token
/** 이스케이프 시퀀스를 사용하여 줄바꿈 등의 공백을 표현한다.
 * \0 : Null
 * \b : 백스페이스
 * \f : 폼 피드. 프린터로 출력할 경우 다음 페이지의 시작 점으로 이동한다.
 * \n : 개행. 다음 행으로 이동
 * \r : 개행. 커서를 처음으로 이동
 * \t : 탭(수평)
 * \v : 탭(수직)
 * \uXXXX : 유니코드. 예를 들어 '\u0041'은 'A', '\uD55C'는 '한', '\u{1F600}'는 😁이다.
 * \' : 작은 따옴표
 * \" : 큰따옴표
 * \\ : 백슬래시
 */
var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';

console.log(template);
// 출력 결과 
<ul>
    <li><a href="#">Home</a></li>
</ul>
// 일반 문자열과 달리 템플릿 리터럴 내에서는 이스케이프 시퀀스를 사용하지 않고도 줄바꿈이 허용되고 공백도 그대로 적용된다.
var template = `<ul>
    <li><a href="#">Home</a></li>
</ul>`;

console.log(temlpate);

// 3.2. 표현식 삽입
// 문자열은 +를 사용해 연결할 수 있다. 연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작한다.
var first = 'Ung-mo';
var last = 'Lee';

// ES5: 문자열 연결
console.log('My name is ' + first + ' ' + last + '.'); // My name is Ung-mo Lee.
// 표현식 삽입을 통해 가동성 좋고 간편하게 문자열을 조합할 수 있다.
console.log(`My name is ${first} ${last}.`); // My name is Ung-mo Lee.

console.log(`1 + 2 = ${1 + 2}`); // 1 + 2 = 3
console.log('1 + 2 = ${1 + 2}'); // 1 + 2 = ${1 + 2}


// 4. 불리언 타입
var foo = true;
console.log(foo); // true

foo = false;
console.log(foo); // false


// 5. undefined 타입
// var 키워드로 선언한 변수는 암묵적으로 undefined로 초기화 된다.
// 변수 선언에 의해 확보된 메모리 공간을 처음 할당이 이뤄질 때까지 빈 상태(대부분 비어있지 않고 쓰레기 값이 들어 있다.)로 내버려 두지 않고 자바스크립트 엔진이 undefined로 초기화 한다.
var foo;
console.log(foo); // undefined
// 이처럼 개발자가 의도적으로 할당하기 위한 값이 아니라 자바스크립트엔진이 변수를 초기화 할 때 사용하는 값이다.
// 개발자가 의도적으로 undefined를 변수에 할당한다면, 본래의 취지와 어긋날뿐더러 혼란을 줄 수 있으므로 권장하지 않는다.


// 6. null 타입
// 대소문자를 구분하므로 Null, NULL 등과 다르다.
// null은 변수에 값이 없다는 것을 의도적으로 명시(의도적 부재)할 때 사용한다.
var foo = 'Lee';

// 이전 참조를 제거. foo 변수는 더 이상 'Lee'를 참조하지 않는다.
// 유용해 보이지는 않는다. 변수의 스코프를 좁게 만들어 변수 자체를 빨리 소멸시키는 편이 낫다.
foo = null;

// document.querySelector 메서드는 조건에 부합하는 HTML 요소를 검색할 수 없는 경우 에러 대신 null을 반환한다.
// <!DOCTYPE html>
<html>
<body>
    <script>
        var element = document.querySelector('.myClass');

        // HTML 문서에 myClass 클래스를 갖는 요소가 없다면 null을 반환한다.
        console.log(element);
    </script>
</body>
</html>


// 7. 심벌 타입
// ES6에서 추가된 7번째 타입. 변경 불가능한 원시 타입의 값이다.

// 심벌 값 생성
var key = Symbol('key');
console.log(typeof key); // symbol

// 객체 생성
var obj = {};

// 이름이 총돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용한다.
obj[key] = 'value';
console.log(obj[key]); // value


// 8. 객체 타입
// 자바스크립트는 객체 기반의 언어. 자바스크립트를 이루고 있는 거의 모든 것이 객체라는 것이다.


// 9. 데이터 타입의 필요성
// 9.1. 데이터 타입에 의한 메모리 공간의 확보와 참조
var score = 100;
// 9.2. 데이터 타입에 의한 값 해석


// 10. 동적 타이핑
// 10.1. 동적 타입 언어와 정적 타입 언어
// C나 자바 같은 정적 타입 언어는 변수를 선언할 때 변수에 할당하는 값의 종류, 즉 데이터 타입을 사전에 선언해야 한다.
// 이를 명시적 타입 선언이라 한다. 다음은 C에서 정수 타입의 변수를 선언하는 예이다.

// c 변수에는 1바이트 정수 타입의 값(-128 ~ 127)만 할당할 수 있다.
//char c;

// num 변수에는 4바이트 정수 타입의 값(-2,124,483, 648 ~ 2,124,483,647)만 할당할 수 있다.
//int num;

var foo;
console.log(typeof foo); // undefined

foo = 3;
console.log(typeof foo); // number

foo = 'Hello';
console.log(typeof foo); // string

foo = true;
console.log(typeof foo); // boolean

foo = null;
console.log(typeof foo); // object

foo = Symbol(); // 심벌
console.log(typeof foo); // symbol

foo = {}; // 객체
console.log(typeof foo); // object

foo = []; // 배열
console.log(typeof foo); // object

foo = function () {}; // 함수
console.log(typeof foo); // function
// 자바스크립트의 변수는 선언이 아닌 할당에 의해 타입이 결정(타입 추론)된다. 그리고 재할당에 의해 변수의 타입은 언제든지 동적으로 변할 수 있다.
// 이러한 특징을 동적 타이핑. 자바스크립트를 동적 타입 언어라 한다.