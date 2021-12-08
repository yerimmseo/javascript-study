// 제어문은 조건에 따라 코드 블록을 실행(조건문)하거나 반복 실행(반복문)할 때 사용

// 8.1 블록문
// 0개 이상의 문을 중괄호로 묶은 것. 자바스크립트는 블록문을 하나의 실행 단위로 취급함
// 블록문
{
    var foo = 10;
}

// 제어문
var x = 1;
if (x < 10) {
    x++;
}

// 함수 선언문
function sum(a, b) {
    return a + b;
}


// 8.2 조건문
// 조건식은 불리언 값으로 평가될 수 있는 표현식이다. if ... else, switch문
// 8.2.1. if ... else 문
if (조건식) {
    // 조건식이 참이면 이 코드 블럭이 실행된다.
} else {
    // 조건식이 거짓이면 이 코드 블록이 실행된다.
}
// if문의 조건식은 불리언 값으로 평가되어야 한다. 만약 if문의 조건식이 불리언 값이 아닌 값으로 평가되면 자바스크립트 엔진에 의해
// 암묵적으로 불리언 값으로 강제 변환되어 실행할 코드 블럭을 결정한다.
if (조건식1) {
    // 조건식1이 참이면 이 코드 블록이 실행된다.
} else if (조건식2) {
    // 조건식2가 참이면 이 코드 블록이 실행된다.
} else {
    // 조건식1과 조건식2가 모두 거짓이면 이 코드 블록이 실행된다.
}

var num = 2;
var kind;

// if문
if (num > 0) {
    kind = '양수'; // 음수를 구별할 수 없다
}
console.log(kind); // 양수

// if ... else문
if (num > 0) {
    kind = '양수';
} else {
    kind = '음수'; // 0은 음수가 아니다.
}
console.log(kind); // 양수

// if ... else if문
if (num > 0) {
    kind = '양수';
} else if (num < 0) {
    kind = '음수';
} else {
    kind = '영';
}
console.log(kind); // 양수

// 코드가 하나라면 중괄호 생략 가능
var num = 2;
var kind;

if (num > 0)      kind = '양수';
else if (num < 0) kind = '음수';
else              kind = '영';

console.log(kind); // 양수

// 대부분의 if ... else 문은 삼항 조건 연산자로 바꿔 쓸 수 있다.
var x = 2;
var result;

if (x % 2) { // 2 % 2는 0이다. 이때 0은 false로 암묵적 강제 변환된다.
    result = '홀수';
} else {
    result = '짝수';
}

console.log(result); // 짝수

var x = 2;

// 0은 false로 취급된다.
var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수

var num = 2;
var kind = num ? (num > 0 ? '양수' : '음수') : '영';

console.log(kind); // 양수

// 8.2.2. switch문
switch (표현식) {
    case 표현식1:
        // switch문의 표현식과 표현식1이 일치하면 실행될 문;
        break;
    case 표현식2:
        // switch문의 표현식과 표현식2가 일치하면 실행될 문;
        break;
    default:
        // switch문의 표현식과 일치하는 case문이 없을 때 실행될 문;
}
// switch문은 논리적 참, 거짓보다는 다양한 상황(case)에 따라 실행할 코드 블록을 결정할 때 사용한다.

// 월을 영어로 변환.
var month = 11;
var monthName;

switch (month) {
    case 1: monthName = 'January';
    case 2: monthName = 'February';
    case 3: monthName = 'March';
    case 4: monthName = 'April';
    case 5: monthName = 'May';
    case 6: monthName = 'June';
    case 7: monthName = 'July';
    case 8: monthName = 'August';
    case 9: monthName = 'September';
    case 10: monthName = 'October';
    case 11: monthName = 'November';
    case 12: monthName = 'December';
    default: monthName = 'Invalid month';
}
console.log(monthName); // Invalid month;
// 폴스루(fall through), 각 case마다 break문을 사용해야 한다.
switch (month) {
    case 1: 
        monthName = 'January';
        break;
    case 2: 
        monthName = 'February';
        break;
    case 3: 
        monthName = 'March';
        break;
    case 4: 
        monthName = 'April';
        break;
    case 5: 
        monthName = 'May';
        break;
    case 6: 
        monthName = 'June';
        break;
    case 7: 
        monthName = 'July';
        break;
    case 8: 
        monthName = 'August';
        break;
    case 9: 
        monthName = 'September';
        break;
    case 10: 
        monthName = 'October';
        break;
    case 11: 
        monthName = 'November';
        break;
    case 12: 
        monthName = 'December';
        break;
    default: 
        monthName = 'Invalid month';
}
// default문에는 break문을 생략하는 것이 일반적이다. break문을 생략한 폴스루가 유용한 경우도 있다.
var tear = 2000; // 2000년은 윤년으로 2월이 29일이다.
var month = 2;
var days = 0;

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        // 윤년 계산 알고리즘
        // 1. 연도가 4로 나누어떨어지는 해(2000, 2004, 2008, 2012, 2016, 2020 ...)는 윤년이다.
        // 2. 연도가 4로 나누어떨어지더라도 연도가 100으로 나누어떨어지는 해(2000, 2100, 2200 ...)는 평년이다.
        // 3. 연도가 400으로 나누어떨어지는 해(2000, 2400, 2800 ...)는 윤년이다.
        days = ((year % 4 === 0 && year % 100 != 0) || (year % 400 === 0)) ? 29 : 28;
        break;
    default:
        console.log('Invalid month');
}

console.log(days); // 29


// 8.3. 반복문
// 8.3.1. for문
// for (변수 선언문 또는 할당문; 조건식; 증감식) {
//  조건식이 참인 경우 반복 실행될 문;
// }
for (var i = 0; i < 2; i++) {
    console.log(i);
}
// 0
// 1

for (var i = 1; i >= 0; i--) {
    console.log(i);
}

// 무한루프
for (;;) {};

for (var i = 1; i <= 6; i++) {
    for (var j = 1; j <= 6; j++) {
        if (i + j === 6) console.log(`[${i}, ${j}]`);
    }
}
// [1, 5]
// [2, 4]
// [3, 3]
// [4, 2]
// [5, 1]

// 8.3.2. while문
// for문은 반복 횟수가 명확할 때 주로 사용하고 while문은 반복 횟수가 불명확할 때 주로 사용
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while (count < 3) {
    console.log(count); // 0 1 2
    count++;
}

// 무한루프
while (true) {};

// 무한루프에서 탈출하기 위해서는 코드 블록 내에 if문으로 탈출 조건을 만들고 break문으로 코드 블록을 탈출한다.
var count = 0;

// 무한루프
while (true) {
    console.log(count);
    count++;
    // count가 3이면 코드 블록을 탈출한다.
    if (count === 3) break;
} // 0 1 2

// 8.3.3. do ... while문
// 코드 블록을 먼저 실행하고 조건식을 평가한다. 무조건 코드 블록은 한 번 이상 실행된다.
var count = 0;

// count가 3보다 작을 때 까지 코드 블록을 계속 반복 실행한다.
do {
    console.log(count); // 0 1 2
    count++;
} while (count < 3);


// 8.4. break문
// 레이블 문, 반복문(for, for...in, for...of, while, do...while) 또는 switch문의 코드 블록을 탈출한다.
if (true) {
    break;
}
// 레이블 문이란 식별자가 붙은 문을 말한다.
// foo라는 레이블 식별자가 붙은 레이블 문
foo: console.log('foo');
// 레이블 문은 프로그램의 실행 순서를 제어하는데 사용한다. switch문의 case문과 default문도 레이블 문이다.
foo: {
    console.log(1);
    break foo; // foo 레이블 블록문을 탈출한다.
    console.log(2);
}

console.log('Done!');

// 중첩된 for문의 내부 for문에서 break문을 실행하면 내부 for문을 탈출하여 외부 for문으로 진입한다.
// 이때 내부 for문이 아닌 외부 for문을 탈출하려면 레이블 문을 사용한다.

// outer라는 식별자가 붙은 레이블
outer: for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        // i + j === 3이면 outer라는 식별자가 붙은 레이블 for문을 탈출한다.
        if (i + j === 3) break outer;
        console.log(`inner[${i}, ${j}]`);
    }
}

console.log('Done!');

// 문자열에서 특정 인덱스(위치)를 검색하는 예
var string = 'Hello World.';
var search = 'l';
var index;

// 문자열은 유사 배열이므로 for문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
    // 문자열의 개별 문자가 'l'이면
    if (string[i] === search) {
        index = i;
        break; // 반복문을 탈출한다.
    }
}

console.log(index);
// 참고로 String.prototype.indexOf 메서드를 사용해도 같은 동작을 한다.
console.log(string.indexOf(search));


// 8.5. continue문
// 문자열에서 특정 문자의 개수를 세는 예
var string = 'Hello World.';
var search = 'l';
var count = 0;

// 문자열은 유사 배열이므로 for문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
    // 'l'이 아니라면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
    if (string[i] !== search) continue;
    count++; // continue문이 실행되면 이 문은 실행되지 않는다.
}

console.log(count); // 3
// 참고로 String.prototype.match 메서드를 사용해도 같은 동작을 한다.
const regexp = new RegExp(search, 'g');
console.log(string.match(regexp).length); // 3

for (var i = 0; i < string.length; i++) {
    // 'l'이면 카운트를 증가시킨다.
    if (string[i] === search) count++;
}

// continue문을 사용하지 않으면 if문 내에 코드를 작성해야 한다.
for (var i = 0; i < string.length; i++) {
    // 'l'이면 카운트를 증가시킨다.
    if (string[i] === search) {
        count++;
        // code ....
    }
}

// continue문을 사용하면 if문 밖에 코드를 작성할 수 있다.
for (var i = 0; i < string.length; i++) {
    // 'l'이 아니면 카운트를 증가시키지 않는다.
    if (string[i] !== search) continue;
    count++;
    // code ....
}
