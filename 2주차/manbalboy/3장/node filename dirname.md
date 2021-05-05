# [NODE] NODE.js의 __filename , __dirname

## 1.개요
NODE에서는 파일 경로와 디렉토리 경로를 나타내는 global 변수를 제공 합니다.<br> 
바로 <b style="color:tomato">__filename , __dirname</b> 인데요 각각 사용법을 알아보도록 하겠습니다.

## 2. __filename
file 경로를 나타내는 변수 입니다.

## 3. __dirname
디렉토리 경로를 나타내는 변수 입니다. 

## 4. 예제 
```js 
// file: "node.filename.dirname.js"
console.log("__filename : ", __filename);
console.log("__dirname : ", __dirname);
```

[결과]
![filename](./img/05.PNG  "filename")


## 5. 정리 
실제 node 에서 path 랑 조합하여 가장 많이 사용되는 부분입니다. 




