# [NODE] NODE.js 에서 파일실행하기

## 1.개요
NODE JS에서 JS를 해석하는 방법 중 하나인 REPL 에 대해서 배워봤습니다. 이번에는 JS파일을 직접 사용해보는 방법에대해서  알아보겠습니다. 

링크 : [\[REPL 바로가기\]](https://manbalboy.github.io/blog/node/2021-04-27-node01/)


## 2.JS 파일실행하기
### 2-1. JS 작성
~~~js
// file: "helloManbalboy.js"
function helloNode() {
    console.log('hello node!!');
}

function helloManbalboy() {
    console.log('manbalboy');
}

helloNode();
helloManbalboy();
~~~

위의코드를 <b style="color:tomato">helloManbalboy.js</b> 파일로 저장하시고 터미널을 열어 다음 명령어를 입력합니다. 

```bash
 $ node helloManbalboy.js
```

위의 명령어 입력시 js 확장자는 생략가능합니다. 

> [파일/폴더 이름 제한]<br>
파일이나 폴더의 이름에 쓸수없는 문자들이 있습니다. <br>대표적으로 /,\\,|,>,<,",? 등이 있습니다. 영어 숫자조합으로 파일명을 만드는게 가장 좋습니다.

