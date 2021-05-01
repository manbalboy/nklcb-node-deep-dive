---
title: ES6 Enhanced Object Properties
comments: true
image: 
   path: /assets/img/blog/javascript/js.gif
description: >
    ES6 의 향상된 Object Properties 요소에 대해 알아본다.
sitemap: true
---

# [JS] ES6 Enhanced Object Properties (향상된 객체 리터럴)

* toc
{:toc}


## 1.개요
ES6 에서 Object key를 선언하는 방식이 추가 되었습니다. 이를 <b style="color:tomato">Enhanced Object Properties</b>  또는 <b style="color:tomato">Enhanced Object Literal</b> 이라고 불립니다.

> Literal 이란 소스 코드의 고정된 값을 대표하는 용어

그럼 어떠한 방식이 추가 되었는지 확인해 볼까요?

## 2.ES6 에서 추가된 기법
추가된 기법을 살펴보기 앞어 전통적인 객체 정의 방식에 대해서 알아 보겠습니다. 

```js
// ES5 
var manbalboy = {
  // 키: 값
  language: 'javascript',
  coding: function() {
    console.log('Hello World');
  }
};
```

위의 코드와 같이 키 : 값 으로 객체의 속성들을 정의 하고 있습니다. 
이부분이 어떻게 추가되었는지 확인해 보겠습니다.

### 2-1. 키와 값이 같으면 축약 가능 
ES6에서 키와 값이 같으면 축약이 가능하게 바뀌었습니다. <br>

```js
let lenguage = 'javascript';
let coding = function () {
  console.log('Hello World');
}

const manbalboy = {
  // 축약가능
  lenguage,
  coding
}

console.log(manbalboy.lenguage) // 'javascript'
manbalboy.coding() // 'Hello World'
```
위의 코드와 같이 key : value 의 형태를 축약하여 사용 가능 한 것을 확인 하였습니다. 

### 2-2. 계산된 key 사용가능
ES6에서 Object key 계산된 key가 사용 가능해 졌습니다. 
```js
let num_01 = 1; 
let num_02 = 2; 
let strHello = 'hello'; 

let newObj = { 

  [1 + 1]: 'first',
  [num_01 + num_02]: 'second', 
  [strHello + num_01]: num_02, 
  [`${strHello} - ${num_01 + num_02}`]: 'fourth' 
  
};

console.log(newObj); //{ '2': 'first', '3': 'second', hello1: 2, 'hello - 3': 'fourth' }
```

위의 코드와 같이 [1+1] : 'first' 처럼 사용이 가능해 졌습니다. 

### 2-3. 함수정의시 function 축약 가능
함수 정의시 function 키워드를 축약하는 기능이 추가되었습니다. 

```js
// (ES6) key생략, function키워드 생략 
let newObj = { 
  //축약가능 
  hello(){
    return `Hello World!`;
  } 
}; 

console.log(newObj); // { hello: [Function: hello] }
```

기존 선언방식은 <b style="color:tomato">hello : function () {...}</b> 이였는데 <b style="color:tomato">hello(){...}</b> 으로 축약 해서 선언한 것을 보실 수 있습니다.


**<주의 사항>**
ES6 방식으로 생성한 메서드는 기존 방식으로 생성한 메서드와는 다른 부분이 있습니다.
 

1. 생성자 함수로 사용 불가
2. prototype 프로퍼티 없음
3. super 키워드 사용 가능


1번부터 차례차례 살펴보겠습니다. 

<b style="color:tomato">1. 생성자 함수로 사용 불가 살펴보기</b>
```js
//(기존방식) 객체 생성 
var exObj = { 

  // hello 메서드 생성(기존 방식) 
  hello : function(){return `Hello World!`} 

}; 

// hello메서드로 객체 생성 시도 
var objFromEx = new exObj.hello(); // 객체가 만들어졌다! 
console.log(objFromEx); // hello {}
```

기존방식으로 하면 객체가 생성된 것을 보실 수 있습니다. 

```js
//(ES6방식)객체 생성 
var newObj = { 

  // hello 메서드 생성(ES6방식) 
  hello(){return `Hello World!`;} 

}; 

// hello메서드로 객체 생성 시도 
var objFromNew = new newObj.hello(); 
// TypeError: newObj.hello is not a constructor
```

ES6방식으로 객체를 생성하면 Error가 발생하는것을 볼수 있습니다. 


<b style="color:tomato">2. prototype 프로퍼티 없음 살펴보기</b>
<br>
1번 주의사항의 영향으로 ES6방식의 메서드는 prototype 프로퍼티가 없습니다. 

```js
//(ES6)의 메서드는 prototype프로퍼티가 없다. 
var newObj = { 
  hello(){return `Hello World!`;} 
}; 

console.log(newObj.hello.hasOwnProperty('prototype')); //false 


//(기존방식)의 메서드는 prototype프로퍼티를 갖는다. 
var exObj = { 
  hello : function(){return `Hello World!`} 
}; 

console.log(exObj.hello.hasOwnProperty('prototype')); // true
```
<b style="color:tomato">3. super 키워드 사용 가능 살펴보기</b>
<br>

```js
// newObj객체 생성 
var newObj = { 
  name : 'manbalboy', 
  hello(){return `Hello World!`;} 
}; 

// (ES6)babyObj 객체 생성 
var babyObj = { 
  // __proto__에 newObj지정__ 
  __proto__ : newObj, 
  sayHello(){
    // super는 __proto__에 지정된 newObj를 참조 
    return super.name + super.hello();
  } 
}; 

// babyObj의 sayHello메서드 호출 
console.log(babyObj.sayHello()); // manbalboyHello World! 

// (기존)oldBabyObj 객체 생성 
var oldBabyObj = { 
  __proto__ : newObj, 
  sayHello: function(){
    return super.name + super.hello();
  } // SyntaxError: 'super' keyword unexpected here 
};
```
ES6 방식의 메서드는 super키워드 참조가 가능하지만,
기존 방식의 메서드에선 super 키워드 사용이 불가능한 걸 알 수 있다.


## 3.정리 
향상된 객체 리터럴에 대해서 살펴보았는데요 타이핑을 줄여 코딩 가독성과 생산성을 높일 수 있는 문법 입니다 이는 Vue, React 에서도 자주 사용되고 많은 부분에서 사용되기 때문에 정확한 사용법을 익히고 사용하시는 것을 추천드립니다.

## 4.참고

- [curryyou.tistory.com](https://curryyou.tistory.com/191)
- [joshua1988.github.io](https://joshua1988.github.io/es6-online-book/enhanced-object-literals.html#%EA%B8%B0%EC%A1%B4-%EA%B0%9D%EC%B2%B4-%EC%A0%95%EC%9D%98-%EB%B0%A9%EC%8B%9D)
- [ECMA JS](https://262.ecma-international.org/6.0/ECMA-262.pdfn)
- [http://es6-features.org/](http://es6-features.org/#Constants)