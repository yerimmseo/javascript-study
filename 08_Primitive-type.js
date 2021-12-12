// [원시 값과 객체의 값 비교]
// 원시 타입의 값, 즉 원시 값은 변경 불가능한 값이다. 이에 비해 객체(참조) 타입의 값, 즉 객체는 변경 가능한 값이다.
// 원시 값을 변수에 할당하면 변수(확보된 메모리 공간)에는 실체 값이 저장된다. 객체를 변수에 할당하면 변수(확보된 메모리 공간)에는 참조 값이 저장된다.
// 원시 값을 갖는 변수를 다른 변수에 할당하면 원본의 원시 값이 복사되어 전달된다. -> 값에 의한 전달
// 객체를 가리키는 변수를 다른 변수에 할당하면 원본의 참조 값이 복사되어 전달된다. -> 참조에 의한 전달

// 11.1. 원시 값
// 11.1.1. 변경 불가능한 값
// 원시 타입의 값, 즉 원시 값은 변경 불가능한 값이다. 변경 불가능하다는 것은 변수가 아니라 값에 대한 진술이다.
// const 키워드를 사용해 선언한 변수는 재할당이 금지된다. 상수는 재할당이 금지된 변수일 뿐이다.
const o = {};

// const 키워드를 사용해 선언한 변수에 할당한 원시 값(상수)은 변경할 수 없다.
// 하지만 const 키워드를 사용해 선언한 변수에 할당한 객체는 변경할 수 있다.
o.a = 1;
console.log(o); // {a: 1}

// 11.1.2. 문자열과 불변성
// 문자열은 0개 이상의 문자로 이뤄진 집합이다.
var str1 = '';      // 0개의 문자로 이뤄진 문자열(빈 문자열)
var str2 = 'Hello'; // 5개의 문자로 이뤄진 문자열

// 식별자 str은 문자열 'Hello'를 가리키고 있다가 문자열 'world'를 가리키도록 변경되었을 뿐이다.
var str = 'Hello';
str = 'world';

// * 유사 배열 객체
// 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고 length 프로퍼티를 갖는 객체를 말한다.
var str = 'string';

// 문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있다.
console.log(str[0]); // s

// 원시 값인 문자열이 객체처럼 동작한다.
console.log(str.length); // 6
console.log(str.toUpperCase()); // STRING

var str = 'string';

// 문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있다.
// 하지만 문자열은 원시 값이므로 변경할 수 없다. 이때 에러가 발생하지 않는다.
str[0] = 'S';

console.log(str); // string

// 11.1.3. 값에 의한 전달
var score = 80;
var copy = score;

console.log(score); // 80
console.log(copy); // 80

score = 100;

console.log(score); // 100
console.log(copy); // ? -> 80

var score = 80;

// copy 변수에는 score 변수의 값 80이 복사되어 할당된다.
var copy = score;

console.log(score, copy); // 80 80
console.log(score === copy); // true
// score와 copy 변수는 숫자 값 80을 갖는다는 점에서는 동일하나 다른 메모리 공간에 저장된 별개의 값이다.

var score = 80;
var copy = score;

console.log(score, copy); // 80 80
console.log(score === copy); // true

// score 변수의 값을 변경해도 copy 변수의 값에는 어떠한 영향도 주지 않는다.
score = 100;

console.log(score, copy); // 100 80
console.log(score === copy); // false


// 11.2. 객체
// 11.2.1. 변경 가능한 값
// 할당이 이뤄지는 시점에 객체 리터럴이 해석되고, 그 결과 객체가 생성된다.
var person = {
    name: 'Lee'
};

// person 변수에 저장되어 있는 참조 값으로 실제 객체에 접근한다.
console.log(person); // {name: "Lee"}

// 프로퍼티 값 갱신
person.name = 'Kim';

// 프로퍼티 동적 생성
person.address = 'Seoul';

console.log(person); // {name: "Kim", address: "Seoul"}

// * 얕은 복사와 깊은 복사
const o = { x: { y: 1 } };

// 얕은 복사
const c1 = { ...o };       // "스프레드 문법"
console.log(c1 === 0);     // false
console.log(c1.x === o.x); // true

// lodash의 cloneDeep을 사용한 깊은 복사
// "npm install lodash"로 lodash를 설치한 후, Node.js 환경에서 실행
const _ = require('lodash');
// 깊은 복사
const c2 = _.cloneDeep(o);
console.log(c2 === 0);     // false
console.log(c2.x === o.x); // false


const v = 1;
// "깊은 복사"라고 부르기도 한다.
const c1 = v;
console.log(c1 === v); // true

const o = { x: 1 };
// "얕은 복사"라고 부르기도 한다.
const c2 = o;
console.log(c2 === o); // true

// 11.2.2. 참조에 의한 전달
var person = {
    name: 'Lee'
};

// 참조 값을 복사(얕은 복사). copy와 person은 동일한 참조 값을 갖는다.
var copy = person;

// copy와 person은 동일한 객체를 참조한다.
console.log(copy === person); // true

// copy를 통해 객체를 변경한다.
copy.name = 'Kim';

// person을 통해 객체를 변경한다.
person.address = 'Seoul';

// copy와 person은 동일한 객체를 가리킨다.
// 따라서 어느 한쪽에서 객체를 변경하면 서로 영향을 주고받는다.
console.log(person); // {name: "Kim", address: "Seoul"}
console.log(copy);   // {name: "Kim", address: "Seoul"}
// "값에 의한 전달"과 "참조에 의한 전달"은 식별자가 기억하는 메모리 공간에 저장되어 있는 값을 복사해서 전달한다는 면에서 동일하다.
// 자바스크립트는 "참조에 의한 전달"은 존재하지 않고 "값에 의한 전달"만이 존재한다고 말할 수 있다.
var person1 = {
    name: 'Lee'
};

var person2 = {
    name: 'Lee'
};

console.log(person1 === person2); // false
console.log(person1.name === person2.name); // true