// 1. Strict mode란?
function foo() {
  x = 10;
}
foo();

console.log(x); // 자바스크립트 엔진은 암묵적으로 전역 객체에 x 프로퍼티를 동적 생성한다.
// 전역 객체의 x는 전역 변수처럼 사용할 수 있다. (암묵적 전역)

// 2. strict mode의 적용
// strict mode를 적용하려면 전역의 선두 또는 함수 몸체의 선두에 'use strict';를 추가한다. 전역의 선두에 추가하면 스크립트 전체에 적용된다.
'use strict';

function foo() {
  x = 10; // ReferenceError: x is not defined
}
foo();
// 함수 몸체의 선두에 추가하면 해당 함수와 중첩 함수에 strict mode가 적용된다.
function foo() {
  'use strict';

  x = 10; // ReferenceError: x is not defined
}
foo();
// 코드의 선두에 'use strict';를 위치시키지 않으면 strict mode가 제대로 동작하지 않는다.
function foo() {
  x = 10; // 에러를 발생시키지 않는다.
  'use strict';
}

// 3. 전역에 strict mode를 적용하는 것은 피하자.
// 전역에 적용한 strict mode는 스크립트 단위로 적용된다.
/*
<!DOCTYPE html>
<html>
<body>
  <script>
    'use strict';
  </script>
  <script>
    x = 1; // 에러가 발생하지 않는다.
    console.log(x); // 1
  </script>
  <script>
    'use script';

    y = 1; // ReferenceError: y is not defined
    console.log(y);
  </script>
</body>
</html>
*/
// 위와 같이 스크립트 단위로 적용된 strict mode는 다른 스크립트에 영향을 주지 않고 해당 스크립트에 한정되어 사용된다.
// strict mode 스크립트와 non-strict mode 스크립트를 혼용하는 것은 오류를 발생시킬 수 있다.

// 즉시 실행 함수의 선두에 strict mode 적용
(function () {
  'use strict';

  // Do something...
}());

// 4. 함수 단위로 strict mode를 적용하는 것도 피하자.
(function () {
  // non-strict mode
  var let = 10; // 에러가 발생하지 않는다.

  function foo() {
    'use strict';

    let = 20; // SyntaxError: Unexpected strict mode reserved word
  }
  foo();
}());

// 5. strict mode가 발생시키는 에러
// 5-1. 암묵적 전역
// 선언하지 않은 변수를 참조하면 ReferenceError가 발생한다.
(function () {
  'use strict';

  x = 1;
  console.log(x); // ReferenceError: x is not defined
}());

// 5-2. 변수, 함수, 매개변수의 삭제
// delete 연산자로 변수, 함수, 매개변수를 삭제하면 SyntaxError가 발생한다.
(function () {
  'use strict';

  var x = 1;
  delete x; // SyntaxError: Delete of an unqualified identifier in strict mode.

  function foo(a) {
    delete a; // SyntaxError: Delete of an unqualified identifier in strict mode.
  }
  delete foo(); // SyntaxError: Delete of unqualified identifier in strict mode.
}());

// 5-3. 매개변수 이름의 중복
(function () {
  'use strict';

  // SyntaxError: Duplicate parameter name not allowed in this context
  function foo(x, x) {
    return x + x;
  }
  console.log(foo(1, 2));
}());

// 5-4. with문의 사용
// with문은 전달된 객체를 스코프 체인에 추가한다. 동일한 객체의 프로퍼티를 반복해서 사용할 때 객체 이름을 생략할 수 있어서 코드가 간단해지는 효과가 있다.
// 하지만 성능과 가독성이 나빠지는 문제가 있다.
(function () {
  'use strict';

  // SyntaxError: Strict mode code may not include a with statement
  with({ x: 1 }) {
    console.log(x);
  }
}());

// 6. strict mode 적용에 의한 변화
// 6-1. 일반 함수의 this
// strict mode에서 함수를 일반 함수로서 호출하면 this에 undefined가 바인딩된다. 에러는 발생하지 않는다.
(function () {
  'use strict';

  function foo() {
    console.log(this); // undefined
  }
  foo();

  function Foo() {
    console.log(this); // Foo
  }
  new Foo();
}());

// 6-2. arguments 객체
// strict mode에서는 매개변수에 전달된 인수를 재할당하여 변경해도 arguments 객체에 반영되지 않는다.
(function (a) {
  'use strict';
  // 매개변수에 전달된 인수를 재할당하여 변경
  a = 2;

  // 변경된 인수가 arguments 객체에 반영되지 않는다.
  console.log(arguments); // { 0: 1, length: 1 }
}(1));