# [NODE] NODE.js의 module 패턴

## 1.개요
노드에서 모듈이라는 개념은 노드로 개발한 애플리케이션을 이루는 기본 조각이라고 할 수 있습니다.

기존 방식으로 치면 기능별로 JS 파일을 분리한 것으로도 볼 수 있지만 거기에 기능을 더 추가하여서 독립적이고 원하는 대상만 사용할 수 있게 기능들 더 추가한 것이라고 생각 하시면 되겠습니다. 

쉽게 말하면 물건을 만들 때 쓰는 부품이라고 할 수 있겠습니다. 어떤 큰 물건을 만들 때, 재료 하나로만 만들 수도 있겠지만, 조립식처럼 파트 하나하나를 끼워서 만들 수도 있을 것입니다. 미리 만들어진 파트들을 조립해서 물건을 만드는 것처럼, 관련된 코드들을 모아서 캡슐화해놓은 것을 모듈이라고 합니다. 그리고 여러 가지 모듈을 이용하면 프로젝트를 훨씬 더 수월하게 진행할 수 있습니다.

모듈은 Node.js에서 제공하는 것이 있고, 또는 누군가가 만들어 놓은 모듈이 있으며, 직접 만들 수도 있습니다.

모듈을 라이브러리화 시켜서 깃헙에 올릴수도 있고, 비즈니스 로직에 따라 모듈을 만들어 사용할 수도 있고 굉장히 자유롭습니다.

## 2.모듈의 종류 
1. 외장모듈
    -  일반 Node.js 개발자들이 만들어 놓은 모듈(라이브러리)입니다.
    - 외장 모듈을 사용하기 위해서는 npm( Node Package Manager )을 사용합니다.

2. 내장모듈
    - Node.js를 설치하고 나면 그 안에 이미 제공되어지는 모듈을 의미합니다.
    - 내장 모듈은 이미 Node.js를 설치할 때 존재하기 때문에 npm을 사용하지 않습니다.

이 글에서는 외장모듈, 내장모듈에는 어떤 것들이 있는지 소개하기 보다, 모듈을 어떻게 정의하고 구성 하는지를 살펴보도록 하겠습니다.

어떤 모듈들이 있는지는 앞으로도 계속 볼 것이므로 외울 필요도 없고 그때 그때 찾아보시면 됩니다.

## 3. NODE module 패턴 문법
Node의 Module은 쉽게 이해하려고 하시면 2가지만 기억하시면 됩니다.

- 내보내기 module.exports
- 가져오기 require

내보낼 때는 module.exports를 사용하고 가져올 때는 require를 사용하여 불러온다는 것만 기억하시면 됩니다. 

코드로 살펴볼까요?

```js
//file: "add.js"

function add(a, b) {
  return a + b;
}
module.exports = add;
```

```js
//file: "main.js"

const add = require('./add.js');
console.log(add(1, 2)); // 3
```

위의 코드가 이해가 가셨나요? add 라는 함수를 <b style="color:tomato">module.export</b> 하여 내보내고 <b style="color:tomato">main.js</b>에서 <b style="color:tomato">require</b> 불러와서 사용 하고 있습니다. 


위의 예제에서 add.js 의 3가지 합을 더하는 기능을 추가하면 어떻게 해야할까요?

다음과 같이 사용하시면 됩니다. 
```js
//file: "add.js"

function add(a, b) {
  return a + b;
}

function add3(a, b, c) {
  return a + b + c;
}
module.exports = {
    add,
    add3
}
```

```js
//file: "main.js"

const add = require('./add.js');
console.log(add.add(1, 2)); // 3
console.log(add.add3(1, 2, 3)); // 6
```

어떤가요 이해가 가셨나요?
꼭 직접 실습해 보시고 이해하시길 바랍니다. 

## 4.정리
이번 포스트에서는 Node의 module에 대해 학습해 보았습니다. 매우 중요하고 기본이기 때문에 꼭 알아둘 필요가 있습니다. 이해가 안가는 부분들은 직접 실습해보고 내용을 터득하시길 바랍니다. 

