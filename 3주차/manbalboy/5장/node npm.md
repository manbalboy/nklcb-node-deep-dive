# [NODE] node npm


## 1.개요
node package manager 의 약자로 npm 은 node project를 패키지해서 발행하면 그 패키지들이 다른사람이 사용할 수 있게 hub같은 역할을 하는 툴이라고 보시면 됩니다. 

npm 은 다른 언어보다 가장 많은 모듈이 존재하며 커뮤니티가 활성화 되어있습니다. 

> 공식사이트 : [https://www.npmjs.com/](https://www.npmjs.com/)



## 2.Package.json
<b style="color:tomato">npm</b> 은 <b style="color:tomato">package.json </b>이라는 파일로 관리하게 됩니다. node 프로젝트를 만드려면 폴더에서 CLI 창에 <b style="color:tomato">npm init</b> 이라는 명령을을 입력하게 되면 <b style="color:tomato">package.json</b> 파일이 생성 되게 됩니다.

아래의 코드는 pacage.json 을 발췌해온 애용입니다.
```json
// file: "package.json"
{
  "name": "invitation-server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npx nodemon -e js,html server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "dotenv": "^9.0.2",
    "express": "^4.17.1",
    "mariadb": "^2.5.3",
    "morgan": "^1.9.1",
    "mysql2": "^2.2.5",
    "nunjucks": "^3.2.0",
    "sequelize": "^6.6.2"
  },
  "devDependencies": {
    "prettier": "2.3.0",
    "swagger-jsdoc": "^6.1.0",
    "swagger-ui-express": "^4.1.6"
  }
}
```

위의 코드에서 각각의 내용은 의미가 다 있지만 저희가 관심있게 보아야 할 내용들은 
application 을 구동할 때 필요한 <b style="color:tomato">scripts, dependencies, devDependencies</b>부분 입니다.


각각의 내용들을 살펴보겠습니다. 

### 2-1 scripts
```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npx nodemon -e js,html server.js"
  },
```

scripts 영역은 CLI창에서 실행할수 잇는 명령어를 등록합니다. 

"npm run test" , "npm run start" 를 입력하면 각각 "echo \"Error: no test specified\" && exit 1",  "npx nodemon -e js,html server.js" 명령어가 실행되는 것 입니다. 

여기에서 start 는 run을 생략해서 "npm run" 명령어로 입력가능합니다.

### 2-2 dependencies와 devDependencies
디펜던시는 node 프로젝트에서 사용할 패키지들을 모아 놓은것으로 실행환경에서 사용할 dependencies와 개발 상에서 사용할 devDependencies 나누어집니다. 

그렇다면 어떻게 package들을 추가를 할까요?

```bash
# dependencies 추가방법 
$ npm install --save [추가할package명]

# dependencies 추가방법(축약형) 
$ npm i [추가할package명]

# devDependencies 추가방법 
$ npm install --save-dev [추가할package명]

# devDependencies 추가방법 
$ npm i -D [추가할package명]
```

위와 같은 명령어로 입력 하시면 package.json 에 입력 가능한 것을 보실 수 있습니다. 

이렇게 기본적인 명령어를 학습하시고 개발하다가 어느정도 npm에 익숙해 지셨다면

그 밖에 전역적으로 설치방법과 언인스톨 방법등 다른 단축키들을 공식 사이트에서 찾아보거나 구글링을 따로 해서 사용법을 익히시면 되겠습니다.

## 3.Versioning
npm 은 SemVer 버저닝을 채택 하였습니다. 자세한 내용은 아래의 포스팅을 참고하세요

> [SemVer 포스팅](https://manbalboy.github.io/javascript/node-semver.html) 

## 4.정리 
npm 은 필수적으로 알아야 하는 부분이기 때문에 자주 사용해보고 익숙해 질 필요가 있습니다. 자주 사용되는 명령어 위주로 학습하다 보면 그리 어렵게 다룰 수 있기때문에 많이 사용해보는 것을 추천드립니다. 