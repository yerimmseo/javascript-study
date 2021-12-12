// [객체 리터럴]
// 10.1. 객체란?
// 자바스크립트는 객체 기반의 프로그래밍 언어. 자바스크립트를 구성하는 거의 "모든 것"이 객체다.
// 객체 타입은 다양한 타입의 값(원시 값 또는 다른 객체)을 하나의 단위로 구성한 복합적인 자료구조다.
// 원시 타입의 값, 즉 원시 값은 변경 불가능한 값이지만 객체 타입의 값, 즉 객체는 변경 가능한 값이다.
var person = {
    name : 'Lee', // 프로퍼티
    age: 20 // 프로퍼티
}; // ↑  ↖ 프로퍼티 값
// 프로퍼티 키
// 객체는 프로퍼티의 집합이다.
// 자바스크립트에서 사용할 수 있는 모든 값은 프로퍼티 값이 될 수 있다. 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해서는 메서드라 부른다.
var counter = {
    num: 0, // 프로퍼티
    increase: function() { // 메서드
        this.num++;
    }
};
// - 프로퍼티: 객체의 상태를 나타내는 값(data)
// - 메서드: 프로퍼티(상태 데이터)를 참조하고 조작할 수 있는 동작(behavior)


// 10.2. 객체 리터럴에 의한 객체 생성
// 자바스크립트는 프로토타입 기반 객체지향 언어로서 클래스 기반 객체지향 언어와는 달리 다양한 객체 생성 방법을 지원한다.
// - 객체 리터럴
// - Object 생성자 함수
// - 생성자 함수
// - Object.create 함수
// - 클래스(ES6)
// 가장 일반적이고 간단한 방법은 객체 리터럴을 사용하는 방법이다.
var person = {
    name: 'Lee',
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`);
    }
};
console.log(typeof person); // Object
console.log(person); // {name: "Lee", sayHello: f}

var empty = {}; // 프로퍼티를 사용하지 않으면 빈 객체 생성
console.log(typeof empty); // Object

// 10.3. 프로퍼티
// 객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다.
var person = {
    // 프로퍼티 키는 name, 값은 'Lee'
    name: 'Lee',
    // 프로퍼티 키는 age, 값은 20
    age: 20
};
// 프로퍼티 키: 빈 문자열을 포함하는 모든 문자열 또는 심벌 값
// 프로퍼티 값: 자바스크립트에서 사용할 수 있는 모든 값
var person = {
    firstName: 'Ung-mo', // 식별자 네이밍 규칙을 준수하는 프로퍼티 키
    'last-name': 'Lee' // 식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키
};
console.log(person); // {firstName: "Ung-mo", last-name: "Lee"}

var person = {
    firstName: 'Ung-mo',
    // last-name은 식별자 네이밍 규칙을 준수하지 않는다. - 연산자가 있는 표현식으로 해석한다.
    //last-name: 'Lee' // SyntaxError: Unexpected token -
};

// 문자열 또는 문자열로 평가할 수 있는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수도 있다.
// 이 경우는 프로퍼티 키로 사용할 표현식을 대괄호([...])로 묶어야 한다.
var obj = {};
var key = 'hello';

// ES5: 프로퍼티 키 동적 생성
obj[key] = 'world';
// ES6: 계산된 프로퍼티 이름
// var obj = { [key]: 'world' };

console.log(obj); // {hello: "world"}

// 빈 문자열을 프로퍼티 키로 사용해도 에러가 발생하지 않는다. 키로서 의미를 갖지 못하므로 권장하지 않는다.
var foo = {
    '': '' // 빈 문자열도 프로퍼티 키로 사용할 수 있다.
};
console.log(foo); // {"": ""}

// 프로퍼티 키에 문자열이나 심벌 값 외의 값을 사용하면 암묵적 타입 변환을 통해 문자열이 된다.
var foo = {
    0: 1,
    1: 2,
    2: 3
};
console.log(foo); // {0: 1, 1: 2, 2: 3}

// var, function과 같은 예약어를 프로퍼티 키로 사용해도 에러가 발생하지 않는다. 에러가 발생할 여지가 있으므로 권장하지 않는다.
var foo = {
    var: '',
    function: ''
};
console.log(foo); // {var: "", function: ""}

var foo = {
    name: 'Lee',
    name: 'Kim'
};
console.log(foo); // {name: "Kim"}

// 10.4. 메서드
var circle = {
    radius: 5, // <- 프로퍼티

    // 원의 지름
    getDiameter: function() { // <- 메서드
        return 2 * this.radius; // this는 circle을 가리킨다.
    }
};
console.log(circle.getDiameter()); // 10

// 10.5. 프로퍼티 접근
// - 마침표 프로퍼티 접근 연산자(.)를 사용하는 마침표 표기법
// - 대괄호 프로퍼티 접근 연산자([...])를 사용하는 대괄호 표기법
var person = {
    name: 'Lee'
};

// 마침표 표기법에 의한 프로퍼티 접근
console.log(person.name); // Lee
// 대괄호 표기법에 의한 프로퍼티 접근
console.log(person['name']);

// 대괄호 표기법을 사용하는 경우 대괄호 프로퍼티 접근 연산자 내부에 지정하는 프로퍼티 키는 반드시 따옴표로 감싼 문자열이어야 한다.
var person = {
    name: 'Lee'
};
console.log(person[name]); // ReferenceError: name is not defined -> 식별자로 해석

// 객체에 존재하지 않는 프로퍼티에 접근하면 undefined를 반환한다. 이때 ReferenceError가 발생하지 않는데 주의하자.
var person = {
    name: 'Lee'
};
console.log(person.age); // undefined

var person = {
    'last-name': 'Lee',
    1: 10
};

//person.'last-name'; // -> SytaxError: Unexpected string
person.last-name;     // -> 브라우저 환경: NaN
                      // -> Node.js 환경: ReferenceError: name is not defined
person[last-name];    // -> ReferenceError: last is not defined
person['last-name'];  // -> Lee

// 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.
//person.1;   // -> SytaxError: Unexpected number
//person.'1'; // -> SytaxError: Unexpected string
person[1];    // -> 10 : person[1] -> person['1']
person['1'];  // -> 10

// 10.6. 프로퍼티 값 갱신
var person = {
    name: 'Lee'
};

// person 객체에 name 프로퍼티가 존재하므로 name 프로퍼티의 값이 갱신된다.
person.name = 'Kim';

console.log(person); // {name: "Kim"}

// 10.7. 프로퍼티 동적 생성
var person = {
    name: 'Lee'
};

// person 객체에는 age 프로퍼티가 존재하지 않는다.
// 따라서 person 객체에 age 프로퍼티가 동적으로 생성되고 값이 할당된다.
person.age = 20;

console.log(person); // {name: "Lee", age: 20}

// 10.8. 프로퍼티 삭제
var person = {
    name: 'Lee'
};

// 프로퍼티 동적 생성
person.age = 20;

// person 객체에 age 프로퍼티가 존재한다.
// 따라서 delete 연산자로 age 프로퍼티를 삭제할 수 있다.
delete person.age;

// person 객체에 address 프로퍼티가 존재하지 않는다.
// 따라서 delete 연산자로 address 프로퍼티를 삭제할 수 없다. 이때 에러가 발생하지 않는다.
delete person.address;

console.log(person); // {name: "Lee"}

// 10.9. ES6에서 추가된 객체 리터럴의 확장 기능
// 10.9.1. 프로퍼티 축약 표현
// ES5
var x = 1, y = 2;

var obj = {
    x: x,
    y: y
};

console.log(obj); // {x: 1, y: 2} 

// ES6
let x = 1, y = 2;

// 프로퍼티 축약 표현
const obj = { x, y };

console.log(obj); // {x: 1, y: 2}

// 10.9.2. 계산된 프로퍼티 이름
// 프로퍼티로 사용할 표현식을 대괄호([...])로 묶어야 한다.
// ES5
var prefix = 'prop';
var i = 0;

var obj = {};

// 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}

// ES6
const prefix = 'prop';
let i = 0;

// 객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성
const obj = {
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i
};

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}

// 10.9.3. 메서드 축약 표현
// ES5
var obj = {
    name: 'Lee',
    sayHi: function() {
        console.log('Hi! ' + this.name);
    }
};

obj.sayHi(); // Hi! Lee

// ES6
const obj = {
    name: 'Lee',
    // 메서드 축약 표현
    sayHi() {
        console.log('Hi! ' + this.name);
    }
};

obj.sayHi(); // Hi! Lee