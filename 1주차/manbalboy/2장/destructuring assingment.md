# [JS] ES6 Destructuring assignment (구조분해할당)

## 1.개요
구조 분해 할당이란 <b style="color:tomato">배열</b>이나 <b style="color:tomato">객체</b>의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 <b style="color:tomato">JavaScript</b> 표현식입니다.

아무것도 모르는 상태에서 예제를 보고 예측해 볼까요?

```js
let a, b, rest;
[a, b] = [10, 20];

console.log(a); // expected output: 10

console.log(b); // expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest); // expected output: Array [30,40,50]
```

자바스크립트를 어느정도 학습 하신 분들이라면 이 구문을 보고 대충 이러한 역할을 하는군 하는 감이 잡히실 겁니다.

그럼 이러한 기능들이 왜 만들어진 것일 까요? 이미 구조 분해 할당은 <b style="color:tomato">Perl</b>이나 <b style="color:tomato">Python</b> 등 다른 언어가 가지고 있는 기능입니다 이를 차용해서 JS에서도 사용할수 있게 기능을 ES6에서 추가한 것 입니다.

그럼 어떠한 이점이 있을까요? 

실무를 할 때에는 객체나 컬렉션의 DATA 일부분만 필요한 경우가 상당히 많이 있습니다. 이럴때 객체나 배열을 변수로 <b style="color:tomato">_'분해'_</b>
할수 있게 해주는 특별한 문법이 <strong style="color:tomato">Destructuring assignment (구조분해할당)</strong> 입니다.


## 2. Array destructuring assignment (배열 구조 분해 할당)
[1.개요](#1-개요) 에서 설명 했듯이 배열과 객체를 구조분해 할 수 있다고 하였는데 먼저 배열의 구조분해할당 부터 살펴 보겠습니다.

구조분해 할당은 변수 선언 방식이 독특할 뿐 여러가지 형태로 사용될 수 있습니다. 

예제로 한번 살펴 보시죠

```js
// 이름과 성을 요소로 가진 배열
let arr = ["Bora", "Lee"]

// 구조 분해 할당을 이용해
// firstName엔 arr[0]을
// surname엔 arr[1]을 할당하였습니다.
let [firstName, surname] = arr;

console.log(firstName); // Bora
console.log(surname);  // Lee
```

위의 코드를 실행해 보셨나요? <br>
이처럼 인덱스를 이용해 배열에 접근하지 않고도 변수의 값을 쉽게 담을수 있게 되었습니다.

할당하려는 원시Data 값은 원본 그대로 상태를 유지하면서 변수에 담기는 것이 특징이며 split 과 같은 배열을 반환하는 메서드를 함께 활용해도 좋습니다. 

```js
//반환값인 배열인 메서드 split을 사용한 구조분해할당
let [firstName, surname] = "Jung Hun".split(' ');
```

배열의 대략적인 활용법을 살펴봣는데요 이제 차근차근 더 많은 활용법에 대해서 알아 보겠습니다. 

### 2-1. 기본변수 할당
```js
let foo = ["one", "two", "three"];

let [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"
```

기본변수 할당 입니다. 어떤가요? 앞선 내용에서 계속 반복해서 본 예제 입니다.

### 2-2. 선언에서 분리한 할당
```js
let a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

선언과 동시에 구조분해 할당을 하지 않아도 분해할당이 가능하다는 것을 알 수 있습니다. 

### 2-3. 기본값 설정
배열의 구조분해 할당을 사용 했을 경우 원시 DATA 배열에 값이 없을 경우 기본값을 설정 해 주어야 할 때가 많이 있습니다. 기본값을 설정 해 주려면 다음 코드와 같이 작성 하시면 됩니다. 

```js
let a, b;

//a에는 기본값 5, b에는 기본값 7 
[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7
```

### 2-4. 변수 값 교환하기
a 값을 b 값으로 b를 a값으로 변환하기 위해서는 temp 값을 지정하여 값을 저장한후 다시 대입하는 식으로 코드를 작성 해야 했습니다. 구조분해 할당을 이용하면 손쉽게 가능합니다. 

```js
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
```


### 2-5. 일부 반환값 무시하기 
다음과 같이 필요하지 않은 값을 무시할 수 있습니다. 

```js
function f() {
  return [1,2,3];
}

let [a ,  , b] = f();

console.log(a); // 1
console.log(b); // 3
```

### 2-6. 변수에 배열의 나머지를 할당하기  
배열을 구조 분해할 경우, 나머지 구문을 이용해 분해하고 남은 부분을 하나의 변수에 할당할 수 있습니다. 

```js
let [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
```

위의 코드에서 <b style="color:tomato">...</b> 구문은 <b style="color:tomato">전개연산자 (Spread Operator)</b> 라고 불리우는 ES6문법입니다. 

변수 b의 나머지 모든것들이 배열형태로 저장되는 것을 볼 수 있습니다.

## 3. Object destructuring assignment (객체 구조 분해 할당)
Object도 배열과 비슷한 문법을 사용합니다. 차례차례 살펴 보도록하죠

### 3-1. 기본할당
```js
let o = {p: 42, q: true};

//key 값을 받아다가 할당
let {p, q} = o;

console.log(p); // 42
console.log(q); // true
```

### 3-2. 선언과 분리하여 할당
```js
let a, b;

({a, b} = {a: 1, b: 2});
```

위와 같이 선언과 값을 할당하는것을 분리 할 수 있습니다. 

### 3-3. 새로운 변수 이름으로 할당하기 
객체로부터 속성을 해체하여 객체의 원래 속성명과는 다른 이름의 변수에 할당할 수 있습니다.

```js
let o = {p: 42, q: true};
let {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true
```

위에서  <b style="color:tomato">\<key\> : \<value\></b> 형태로 속성을 정의 할때  <b style="color:tomato">\<받아올key\> : \<변경할key\></b> 로 정의 하셔서 사용하면 됩니다.

### 3-5. 기본값 설정
객체로부터 해체된 값이 undefined인 경우, 변수에 기본값을 할당할 수 있습니다.

```js
let {a = 10, b = 5} = {a: 3};

console.log(a); // 3
console.log(b); // 5
```

### 3-6. 기본값 갖는 새로운 이름의 변수에 할당하기 
위의 내용을 짬뽕 한 내용입니다. 이렇게도 사용가능하니 참고 하시면 좋습니다.
```js
let {a: aa = 10, b: bb = 5} = {a: 3};

console.log(aa); // 3
console.log(bb); // 5
```


## 4. 정리
ES6 의 구조분해할당에 대해 살펴보았습니다. 모듈기반으로 작성된 코드에서는 구조분해할당이 필수입니다. 중첩배열 , 중첩객체, 객체와 배열의 구조분해 할당 및 복잡한 방식의 할당을 연습해 보시고 이해하셨으면 좋겠습니다.

## 5.[심심풀이 심화] 중첩구조분해 예제

```js

let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// 코드를 여러 줄에 걸쳐 작성해 의도하는 바를 명확히 드러냄
let {
  size: { // size는 여기,
    width,
    height
  },
  items: [item1, item2], // items는 여기에 할당함
  title = "Menu" // 분해하려는 객체에 title 프로퍼티가 없으므로 기본값을 사용함
} = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200
console.log(item1);  // Cake
console.log(item2);  // Donut
```

## 6.참고
- [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [ko.javascript.info](https://ko.javascript.info/destructuring-assignment)
- [ECMA JS](https://262.ecma-international.org/6.0/ECMA-262.pdfn)
- [http://es6-features.org/](http://es6-features.org/#Constants)

