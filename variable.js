// 변수는 하나의 값을 저장하기 위한 수단이다.
var userId = 1;
var userName = 'Lee';

// 객체나 배열 같은 자료구조를 사용하면 여러 개의 값을 하나로 그룹화해서 하나의 값처럼 사용할 수 있다.
var user = { id: 1, name: 'Lee'};

var users = [
    {id: 1, name: 'Lee'},
    {id: 2, name: 'Kim'}
]

var result = 10 + 20;

/* 변수 이름을 식별자 라고도 한다.
어떤 값을 구별해서 식별할 수 있는 고유의 이름을 말한다.
메모리 공간에 저장되어 있는 어떤 값을 구별해서 식별해 낼 수 있어야 한다.
이를 위해 식별자는 어떤 값이 저장되어있는 메모리 주소를 기억(저장)해야 한다. */
// [변수의 선언]
// 변수를 사용하려면 반드시 선언이 필요하다. 변수를 선언할 때는 var, let, const를 사용한다.
var score; // 변수 선언(변수 선언문)
// 변수에 값을 할당하지 않아도 undefined라는 값이 암묵적으로 할당되어 초기화 된다. 자바스크립트의 특징.

// [변수 선언의 실행 시점과 변수 호이스팅]
console.log(score); // undefined

var score;
// 참조 에러가 발생하지 않고 undefined가 출력. 변수 선언이 소스코드가 한 줄씩 순차적으로 실행되는 시점,
// 즉 런타임이 아니라 그 이전 단계에서 먼저 실행되기 때문이다.
// 자바스크립트 엔진은 변수 선언을 포함한 모든 선언문을 소스코드에서 찾아내 먼저 실행한다.
// 즉, 변수 선언이 소스코드의 어디에 있든 상관없이 다른 코드보다 먼저 실행한다.
// 따라서 변수 선언이 어디에 위치하는지와 상관없이 어디서든지 변수를 참조할 수 있다.

var score; // 변수 선언
score = 80; // 값의 할당
var score = 80; // 변수 선언과 값의 할당


console.log(score); // undefined

var score; // 1. 변수 선언 - 런타임 이전에 먼저 실행
score = 80; // 2. 값의 할당 - 런타임에 실행

console.log(score); // 80


console.log(score);

var score = 80;

console.log(score);


var score = 80; // 변수 선언과 값의 할당
score = 90; // 값의 재할당
// var 키워드로 선언한 변수는 값을 재할당 할 수 있다. 사용하지 않는 메모리는 가비지 콜렉터에 의해 자동 해제 된다.
// 더 이상 사용되지 않는 메모리란 어떤 식별자도 참조하지 않는 메모리 공간.

/* [식별자 네이밍 규칙]
- 식별자는 특수문자를 제외한 문자, 숫자, 언더스코어(_), 달러 기호($)를 포함할 수 있다.
- 단, 식별자는 특수문자를 제외한 문자, 언더스코어(_), 달러 기호($)로 시작해야 한다. 숫자로 시작하는 것은 비허용
- 예약어는 식별자로 사용할 수 없다. */
var person, $elem, _name, first_name, val1; // 한 번에 선언 가능하나 가독성이 나쁘다.
var 이름; // 권장하지 않는 선언 방법.
//var first-name; // SyntaxError: Unexpected token -
//var list; // SyntaxError: Invalid or unexpected token
//var this; // SyntaxError: Unexpected token this

// 자바스크립트는 대소문자를 구별한다.
var firstname;
var firstName;
var FIRSTNAME;

var x = 3; // NG. x 변수가 의미하는 바를 알 수 없다.
var score = 100; // OK. score 변수는 점수를 의미한다.

// 경과 시간. 단위는 날짜.
var d; // NG
var elapsedTimeInDays // OK

// 카멜 케이스(camelCase)
var firstName;

// 스네이크 케이스(snake_case)
var first_name;

// 파스칼 케이스(PascalCase)
var FirstName;

// 헝가리언 케이스(typeHungarianCase)
var strFirstName; // type + identifier
var $elem = document.getElementById('myId'); // DOM 노드
var observable$ = fromEvent(document, 'click'); // RxJS 옵저버블