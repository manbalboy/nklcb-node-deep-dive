# [NODE] NODE.js의 timer 함수

## 1.개요
NODE에서는 타이머 기능을 제공하는 함수인 <b style="color:tomato">setTimeout, setInterval, setInmmediate</b> 를 제공 합니다.<br>
이 함수들은 모두 브라우저에서도 자주 사용되는 함수이기 때문에 사용법과 명칭에 대해서 많이 익수 할 것입니다.<br>
각각의 함수별로 사용법과 역할을 살펴보겠습니다.

## 2. setTimeout
setTimeout 함수는 주어진 밀리초 이후에 콜백함수를 실행하는 함수입니다.<br>

```js 
// file: "setTimeout 문법"
// setTimeout(콜백함수, 밀리초);
setTimeout(function(){}, ms);
```

위와같이 setTimeout 함수는 콜백함수를 첫번째 인수 밀리초를 두번째 인수로는 ms초를 받습니다.<br> 
그리고 setTimeout 함수는 id를 반환하기때문에 취소시 <b style="color:tomato">clearTimeout(아이디)</b> 로 취소합니다.

```js 
// file: "timeout.js"
const timeout = setTimeout(() => {
    console.log('timeout 1초후 실행');
}, 1000);

// 바로 취소하려면 아래의 주석을 푸세요
// clearTimeout(timeout);
```
위의 소스를 실행하면 1초후 console.log 값을 보실 수 있습니다. 

## 3. setInterval
setInterval 함수는 주어진 밀리초 간격으로 콜백함수를 반복 실행하는 함수입니다.<br>

```js 
// file: "setInterval 문법"
// setInterval(콜백함수, 밀리초);
setInterval(function(){}, ms);
```

위와같이 setInterval 함수는 콜백함수를 첫번째 인수 밀리초를 두번째 인수로는 ms초를 받습니다.<br> 
그리고 setInterval 함수는 id를 반환하기때문에 취소시 <b style="color:tomato">clearInterval(아이디)</b> 로 취소합니다.

```js 
// file: "interval.js"
const interval = setInterval(() => {
    console.log('interval 1초후 실행');
}, 1000);

// 바로 취소하려면 아래의 주석을 푸세요
// clearInterval(timeout);
```
위의 소스를 실행하면 1마다 console.log 값을 보실 수 있습니다. 

## 4.setImmediate 
<b style="color:tomato">setImmediate</b> 함수는 주어진 콜백함수를 즉시 호출합니다. <br>
<b style="color:tomato">setTimeout(()=>{}, 0)</b> 이랑 똑같은 동작을 하게 되는데 순서가 보장되지 않으므로 <b style="color:tomato">setTimeout(()=>{}, 0) 은 사용하지 않는 것이 좋습니다.</b>

그리고 setImmediate 함수는 id를 반환하기때문에 취소시 <b style="color:tomato">clearImmediate(아이디)</b> 로 취소합니다.


```js 
// file: "immediate.js"
const immediate = setImmediate(() => {
    console.log('즉시실행');
});

// 바로 취소하려면 아래의 주석을 푸세요
// clearImmediate(timeout);
```

## 5.정리 
node의 타이머를 학습하였습니다. 모든 타이머함수는 id 를 반환하며 clear가 붙은 함수로 취소가 가능합니다. 
비동기 처리시 빈번하게 사용되는 함수로 학습을 하시면 여러 방면에서 활용도가 높습니다. 

## 5.참고자료
[nodejs.org](https://nodejs.org/api/timers.html)


