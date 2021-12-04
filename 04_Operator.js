// 연산자는 하나 이상의 표현식을 대상으로 산술, 할당, 비교, 논리, 타입, 지수 연산 등을 수행해 하나의 값을 만든다.
// 산술 연산자
5 * 4 // -> 20

// 문자열 연결 연산자
'My name is ' + 'Lee' // -> 'My name is Lee'

// 할당 연산자 
color = 'red' // -> 'red'

// 비교 연산자
3 > 5 // -> false

// 논리 연산자
true && false // -> false

// 타입 연산자
typeof 'Hi' // -> string


// 7.1. 산술 연산자
// 피연산자를 대상으로 수학적 계산을 수행해 새로운 숫자 값을 만든다. 산술이 불가능한 경우 NaN을 반환한다.
/** [이항 산술 연산자]
 * 모든 이항 산술 연산자는 피연산자의 값을 변경하는 부수 효과가 없다. 언제나 새로운 값을 만든다.
 * + : 덧셈, 부수 효과 X
 * - : 뺄셈, 부수 효과 X
 * * : 곱셈, 부수 효과 X
 * / : 나눗셈, 부수 효과 X
 * % : 나머지, 부수 효과 X
 */
5 + 2 // -> 7
5 - 2 // -> 3
5 * 2 // -> 10
5 / 2 // -> 2.5
5 % 2 // -> 1

/** [단항 산술 연산자]
 * 단항 산술 연산자는 1개의 피연산자를 산술 연산하여 숫자 값을 만든다.
 * ++ : 증가, 부수 효과 O
 * -- : 감소, 부수 효과 O
 * + : 어떠한 효과도 없다. 음수를 양수로 반전하지도 않는다. 부수 효과 X
 * - : 양수를 음수로, 음수를 양수로 반전한 값을 반환한다. 부수 효과 X
 */
var x = 1;

// ++ 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.
x++; // x = x + 1;
console.log(x); // 2

// -- 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.
x--; // x = x - 1;
console.log(x); // 1

// 증가/감소(++/--) 연산자는 위치에 의미가 있다.
var x = 5, result;

// 선할당 후증가(postfix increment operator)
result = x++;
console.log(result, x); // 5 6

// 선증가 후할당(prefix increment operator)
result = ++x;
console.log(result, x); // 7 7

// 선할당 후감소(prefix decrement operator)
result = x--;
console.log(result, x); // 7 6

// 선감소 후할당(prefix decrement operator)
result = --x;
console.log(result, x); // 5 5

// + 단항 연산자는 피연산자에 어떠한 효과도 없다.
+10; // -> 10
+(-10); // -> -10

// 숫자 타입이 아닌 피연산자에 + 단항 연산자를 사용하면 피연산자를 숫자 타입으로 변환하여 반환한다.
// 피연산자를 변경하는 것은 아니고 숫자 타입으로 변환한 값을 생성해서 반환한다.
var x = "1";

// 문자열을 숫자로 타입 변환한다.
console.log(+x); // 1
// 부수 효과는 없다.
console.log(x); // "1"

// 불리언 값을 숫자로 타입 변환한다.
x = true;
console.log(+x); // 1
// 부수 효과는 없다.
console.log(x); // true

x = false;
console.log(+x); // 0
console.log(x); // false

// 문자열을 숫자로 타입 변환할 수 없으므로 NaN을 반환한다.
x = 'Hello';
console.log(+x); // NaN
// 부수 효과는 없다.
console.log(x); // "Hello"

// - 단항 연산자는 피연산자의 부호를 반전한 값을 반환한다. + 단항 연산자와 마찬가지로 숫자 타입이 아닌 피연산자에 사용하면 피연산자를 숫자 타입으로 변환하여 반환한다.
// 부호를 반전한다.
-(-10); // 10

// 문자열을 숫자로 타입 변환한다.
-'10'; // -10

// 불리언 값을 숫자로 타입 변환한다.
-true; // -1

// 문자열은 숫자로 타입 변환할 수 없으므로 NaN을 반환한다.
-'Hello'; // NaN

/** [문자열 연결 연산자]
 * + 연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작한다.
 * 그 외의 경우는 산술 연산자로 동작한다.
 */
// 문자열 연결 연산자
'1' + 2; // -> '12'
1 + '2'; // -> '12'

// 산술 연산자
1 + 2; // -> 3

// true는 1로 타입 변환된다.
1 + true; // -> 2

// false는 0으로 타입 변환된다.
1 + false; // -> 1

// null은 0으로 타입 변환 된다.
1 + null; // -> 1

// undefined는 숫자로 타입 변환되지 않는다.
+undefined; // -> NaN
1 + undefined; // -> NaN
// 개발자의 의도와는 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되기도 한다는 것이다.
// -> 암묵적 타입 변환 또는 타입 강제 변환


// 7.2. 할당 연산자
// 우항에 있는 피연산자의 평가 결과를 좌항에 있는 변수에 할당한다. 좌항의 변수에 값을 할당하므로 부수 효과가 있다.
/** [할당 연산자]
 * = : ex) x = 5, 동일한 표현 x = 5, 부수 효과 O
 * += : ex) x += 5, x = x + 5, 부수 효과 O
 * -= : ex) x -= 5, x = x - 5, 부수 효과 O
 * *= : ex) x *= 5, x = x * 5, 부수 효과 O
 * /= : ex) x /= 5, x = x / 5, 부수 효과 O
 * %= : ex) x %= 5, x = x % 5, 부수 효과 O
 */ 
var x;

x = 10;
console.log(x); // 10

x += 5; // x = x + 5;
console.log(x); // 15

x -= 5; // x = x - 5;
console.log(x); // 10

x *= 5; // x = x * 5;
console.log(x); // 50

x /= 5; // x = x / 5;
console.log(x); // 10

x %= 5; // x = x % 5;
console.log(x); // 0

var str = 'My name is ';

// 문자열 연결 연산자
str += 'Lee'; // str = str + 'Lee';
console.log(str); // 'My name is Lee'

var x;

// 할당문은 표현식인 문이다.
console.log(x = 10); // 10
// 할당문은 값으로 평가되는 표현식인 문으로서 할당된 값으로 평가된다. 할당문을 다른 변수에 할당할 수도 있다.
var a, b, c;

// 연쇄 할당. 오른쪽에서 왼쪽으로 진행.
// 1. c = 0 : 0으로 평가된다.
// 2. b = 0 : 0으로 평가된다.
// 3. c = 0 : 0으로 평가된다.
a = b = c = 0;

console.log(a, b, c); // 0 0 0


// 7.3. 비교 연산자
// 비교 연산자는 좌항과 우항의 피연산자를 비교한 다음 그 결과를 불리언 값으로 반환한다. if문이나 for문에 주로 사용.
/** [동등/일치 비교 연산자]
 * 좌항과 우항의 피연산자가 같은 값으로 평가되는지 비교해 불리언 값을 반환한다. 비교하는 엄격성의 정도가 다름.
 * 동등 비교 연산자는 느슨한 비교, 일치 비교 연산자는 엄격한 비교
 * == : 동등 비교, ex) x == y, x와 y의 값이 같음, 부수 효과 X
 * === : 일치 비교, ex) x === y, x와 y의 값과 타입이 같음, 부수 효과 X
 * != : 부동등 비교, ex) x != y, x와 y의 값이 다름, 부수 효과 X
 * !== : 불일치 비교, ex) x !== y, x와 y의 값과 타입이 다름, 부수 효과 X
 */
// 동등 비교(==) 연산자는 좌항과 우항의 피연산자를 비교할 때 먼저 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값인지 비교한다.
// 동등 비교
5 == 5; // -> true

// 타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면 동등하다.
5 == '5'; // -> true

// 동등 비교. 결과를 예측하기 어렵다. 안티 패턴이므로 이해하려 하지 않아도 된다.
'0' == ''; // -> false
0 == ''; // -> true
0 == '0'; // -> true
false == 'false'; // -> false
false == '0'; // -> true
false == null; // -> false
false == undefined; // -> false

// 일치 비교(===) 연산자는 좌항과 우항의 피연산자가 타입도 같고, 값도 같은 경우에 한하여 true를 반환한다.
// 일치 비교
5 === 5; // -> true

// 암묵적 타입 변환을 하지 않고 값을 비교한다.
// 즉, 값과 타입이 모두 같은 경우만 true를 반환한다.
5 === '5'; // -> false
// 일치 비교 연산자에서 주의할 것은 NaN이다.
// NaN은 자신과 일치하지 않는 유일한 값이다. 따라서 숫자가 NaN인지 조사하려면 빌트인 함수 isNaN을 사용한다.
NaN === NaN; // -> false

// isNaN 함수는 지정한 값이 NaN인지 확인하고 그 결과를 불리언 값으로 반환한다.
isNaN(NaN); // -> true
isNaN(10); // -> false
isNaN(1 + undefined); // -> true

// 숫자 0도 주의하자. 자바스크립트에는 양의 0과 음의 0이 있는데 이들을 비교하면 true를 반환한다.
0 === -0; // -> true
0 == -0; // -> true

// ==와 ===는 +0과 -0을 동일하다고 평가한다. 또한 동일한 NaN과 NaN을 비교하면 다른 값이라고 평가한다.
// ES6에서 도입된 Object.is 메서드는 다음과 같이 예측 가능한 정확한 비교 결과를 반환한다. 그 외에는 ===와 동일하게 동작한다.
-0 === +0; // -> true
Object.is(-0, +0); // -> false

NaN === NaN; // -> false
Object.is(NaN, NaN); // -> true

// 부동등 비교
5 != 8; // true
5 != 5; // false
5 != '5'; // false

// 불일치 비교
5 !== 8; // true
5 !== 5; // false
5 !== '5'; // true

/** [대소 관계 연산자] 
 * 대소 관계 연산자는 피연산자의 크기를 비교하여 불리언 값을 반환한다.
 * > : ex) x > y, x가 y보다 크다, 부수 효과 X
 * < : ex) x < y, x가 y보다 작다, 부수 효과 X
 * >= : ex) x >= y, x가 y보다 크거나 같다, 부수 효과 X
 * <= : ex) x <= y, x가 y보다 작거나 같다, 부수 효과 X
*/
5 > 0; // true
5 > 5; // false
5 >= 5; // true
5 <= 5; // true


// 7.4. 삼항 조건 연산자
// 자바스크립트의 유일한 삼항 연산자이며, 부수 효과는 없다.
// 조건식 ? 조건식이 true일 때 반환할 값 : 조건식이 false일 때 반환할 값
var result = score >= 60 ? 'pass' : 'fail';

var x = 2;

// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수

var x = 2, result;
if (x % 2) result = '홀수';
else       result = '짝수';
console.log(result); // 짝수
// 삼항 조건 연산자 표현식은 값처럼 사용할 수 있지만 if ... else 문은 값처럼 사용할 수 없다.

var x = 10;
// if ... else 문은 표현식이 아닌 문이다. 따라서 값처럼 사용할 수 없다.
//var result = if (x % 2) { result = '홀수'; } else { result = '짝수'; };
// SyntaxError: Unexpected token if


// 7.5. 논리 연산자
// 우항과 좌항의 피연산자(부정 논리 연산자의 경우 우항의 피연산자)를 논리 연산한다.
/**
 * || : 논리합(OR), 부수 효과 X
 * && : 논리곱(AND), 부수 효과 X
 * ! : 부정(NOT), 부수 효과 X
 */
// 논리합(||) 연산자
true || false; // true
true || false; // true
false || true; // true
false || false; // false

// 논리곱(&&) 연산자
true && true; // true
true && false; // false
false && true; // false
false && false; // false

// 논리 부정(!) 연산자
!true; // false
!false; // true
// 논리 부정(!) 연산자는 언제나 불리언 값을 반환한다. 단, 피연산자가 반드시 불리언 값일 필요는 없다.
// 피연산자가 불리언 값이 아니라면 불리언 타입으로 암묵적 타입 변환된다.
!0; // true
!'Hello'; // false

// 논리합(||) 또는 논리곱(&&) 연산자 표현식의 평가 결과는 불리언 값이 아닐 수도 있다. 언제나 2개의 피연산자 중 어느 한쪽으로 평가된다.
// 단축 평가
'Cat' && 'Dog'; // 'Dog'

// *드 모르간의 법칙*
!(x || y) === (!x && !y)
!(x && y) === (!x || !y)


// 7.6. 쉼표 연산자
// 쉼표 연산자는 왼쪽 피연산자부터 차례대로 피연산자를 평가하고 마지막 피연산자의 평가가 끝나면 마지막 피연산자의 평가 결과를 반환한다.
var x, y, z;
x = 1, y = 2, z = 3; // 3


// 7.7. 그룹 연산자
// 소괄호('()')를 통해 연산자의 우선순위를 조절할 수 있다. 그룹 연산자는 우선순위가 가장 높다.
10 * 2 + 3; // 23
10 * (2 + 3); // 50


// 7.8. typeof 연산자
// 데이터 타입을 문자열로 반환한다.
// "number", "boolean", "undefined", "symbol", "object", "function" 중 하나를 반환한다. "null"은 반환 X, 함수의 경우 "function"을 반환.
typeof '' // "string"
typeof 1 // "number"
typeof NaN // "number"
typeof true // "boolean"
typeof undefined // "undefined"
typeof Symbol() // "symbol"
typeof null // "object"
typeof [] // "object"
typeof {} // "object"
typeof new Date() // "object"
typeof /test/gi // "object"
typeof function() {} // "function"

// null 타입인지 확인할 때는 typeof 연산자를 사용하지 말고, 일치 연산자(===)를 사용해야 한다.
var foo = null;

typeof foo === null; // false
foo === null; // true
// 또 하나 주의해야할 점 - 선언하지 않은 식별자를 typeof 연산자로 연산해보면 ReferenceError가 발생하지 않고 undefined를 반환한다.
// undeclared 식별자를 선언한 적이 없다.
typeof undeclared; // undefined


// 7.9. 지수 연산자
// ES7에서 도입된 지수 연산자는 좌항의 피연산자를 밑으로, 우항의 피연산자를 지수로 거듭 제곱하여 숫자를 반환한다.
2 ** 2; // 4
2 ** 2.5; // 5.65685424949238
2 ** 0; // 1
2** -2; // 0.25

// 지수 연산자가 도입되기 이전에는 Math.pow 메서드를 사용했다.
Math.pow(2, 2); // 4
Math.pow(2, 2.5); // 5.65685424949238
Math.pow(2, 0); // 1
Math.pow(2, -2); // 0.25

// 다음과 같은 경우 Math.pow()보다 가독성이 좋다.
2 ** 2 ** 2; // 16
Math.pow(Math.pow(2, 2), 2); // 16

// 음수를 거듭제곱의 밑으로 사용해 계산하려면 괄호로 묶어야 한다.
//-5 ** 2;
// SyntaxError: Unary operator used immediately before exponentiation expression.
// Parenthesis must be used to disambiguate operator precedence
(-5) ** 2; // 25

// 지수 연산자는 마찬가지로 할당 연산자와 함께 사용할 수 있다.
var num = 5;
num ** 2; // 25
// 지수 연산자는 이항 연산자 중에서 우선순위가 가장 높다.
2 * 5 ** 2; // 50


// 7.10. 그 외의 연산자
/**
 * ?. : 옵셔널 체이닝 연산자
 * ?? : null 병합 연산자
 * delete : 프로퍼티 삭제
 * new : 생성자 함수를 호출할 때 사용하여 인스턴스를 생성
 * instanceof : 좌변의 객체가 우변의 생성자 함수와 연결된 인스턴스인지 판별
 * in : 프로퍼티 존재 확인
 */


// 7.11. 연산자의 부수 효과
// 할당 연산자(=), 증가/감소 연산자(++/--), delete 연산자는 다른 코드에 영향을 주는 부수 효과가 있다.
var x;

// 할당 연산자는 변수 값이 변하는 부수 효과가 있다. 이는 x 변수를 사용하는 다른 코드에 영향을 준다.
x = 1;
console.log(x); // 1

// 증가/감소 연산자(++/--)는 피연산자의 값을 변경하는 부수 효과가 있다.
// 피연산자 x의 값이 재할당되어 변경된다. 이는 x 변수를 사용하는 다른 코드에 영향을 준다.
x++;
console.log(x); // 2

var o = { a: 1};

// delete 연산자는 객체의 프로퍼티를 삭제하는 부수 효과가 있다. 이는 o 객체를 사용하는 다른 코드에 영향을 준다.
delete o.a;
console.log(o); // {}


// 7.12. 연산자의 우선순위
/**
 * 1. ()
 * 2. new(매개변수 존재), ., [](프로퍼티 접근), ()(함수 호출), ?.(옵셔널 체이닝 연산자)
 * 3. new(매개변수 미존재)
 * 4. x++, x--
 * 5. !x, +x, -x, ++x, --x, typeof, delete
 * 6. **(이항 연산자 중에서 우선순위가 가장 높다)
 * 7. *, /, %
 * 8. +, -
 * 9. <, <=, >, >=, in, instanceof
 * 10. ==, !=, ===, !==
 * 11. ??(null 병합 연산자)
 * 12. &&
 * 13. ||
 * 14. ? ... : ...
 * 15. 할당 연산자(=, +=, -=, ...)
 * 16. ,
 */

// 그룹 연산자를 사용하여 우선순위를 명시적으로 조절
10 * (2 + 3); // 50


// 7.13. 연산자 결합 순서
// 어느 쪽(좌항 또는 우항)부터 평가를 수행할 것인지를 나타내는 순서를 말한다.
/**
 * 좌항 -> 우항 : +, -, /, %, <, <=, >, >=, &&, ||, ., [], (), ??, ?., in, instanceof
 * 우항 -> 좌항 : ++, --, 할당 연산자(=, +=, -=, ...), !x, +x, -x, ++x, --x, typeof, delete, ? ... : ...
 */