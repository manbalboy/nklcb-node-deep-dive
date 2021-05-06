
# [NODE] NODE.js의 path module

## 1.개요
NODE에서는 기본적으로 제공 모듈들이 있는데 그중하나인 <b style="color:tomato">Path</b>에 대해서 알아보겠습니다. 

path 모듈은 폴더와 파일의 경로를 쉽게 조작하도록 도와주는 모듈입니다.
이 모듈이 필요한 이유는 많겠지만 큰 이유는 운영체제별로 경로 구분자가 다르기 때문에 이러한 것들을 맞추어주거나 경로나 파일명을 떼어 사용한다거나 하는 행위들을 쉽게 구현할 수 있습니다. 

## 2.path 속성과 메서드
```js
// file: "path.js"
const path = require('path');

// 경로 구분자 OS 따라 POSIX: '/', WINDOWS:'\' 의 구분자로 나타난다.
console.log("path.sep > ", path.sep);

// 환경변수 구분자 OS 따라 POSIX: ':', WINDOWS:';' 의 구분자로 나타난다.
console.log("path.delimiter > ", path.delimiter);

// 파일이 위치한 폴더 경로를 보여줍니다.
console.log("path.dirname > ", path.dirname(__filename));

// 파일의 확장자를 표현합니다.
path.extname('index.html');// Returns: '.html'
path.extname('index.coffee.md');// Returns: '.md'
path.extname('index.');// Returns: '.'
path.extname('index');// Returns: ''
path.extname('.index');// Returns: ''
path.extname('.index.md');// Returns: '.md'
path.extname('.index.md');// Returns: '.md'
console.log("path.extname > ", path.extname(__filename));

// 파일명을 표시합니다 확장자 포함 
// 확장자를 표시하고 싶지 않다면 두번째 인수에 확장자를 넣어주시면 생략됩니다.
console.log("path.basename > ", path.basename(__filename));
console.log("path.basename no ext > ", path.basename(__filename, '.js'));


// 경로를 root / dir/ base/ ext / name 으로 나누어 출력합니다.  
console.log("path.parse> ", path.parse(__filename));
// Returns:
// { root: 'C:\\',
//   dir: 'C:\\githubpage\\node\\_posts\\05',
//   base: 'path.js',
//   ext: '.js',
//   name: 'path' }

// parse한 객체를 합칩니다.
console.log("path.format> ", path.format(path.parse(__filename)));

// /나 \를 실수로 여러번 사용하여도 정상적인 경로로 반환합니다.
console.log("path.normalize> ", path.normalize('C:\\temp\\\\foo\\bar\\..\\'));

//절대경로이면 true 상대경로이면 false 를 반환합니다.
path.isAbsolute('//server');    // true
path.isAbsolute('\\\\server');  // true
path.isAbsolute('C:/foo/..');   // true
path.isAbsolute('C:\\foo\\..'); // true
path.isAbsolute('bar\\baz');    // false
path.isAbsolute('bar/baz');     // false
path.isAbsolute('.');           // false

//경로를 두개 넣으면 첫번째 경로에서 두번째 경로로 가는 법을 알립니다.
console.log("path.relative> ", path.relative(__filename, 'C:\\githubpage\\node\\_posts\\04\\2021-04-27-node01.md'));
```

위의 예제가 정말 길죠? NODE에서 path 모듈을 정말 중요한 모듈입니다. 위의 소개된 내용외에 다른 메서드들도 존재합니다. join,resolve 등등이 존제합니다.

그럼 각각 하나씩 살펴 볼까요? 

## 3. path.sep
경로 구분자 OS 따라 POSIX: '/', WINDOWS:'\' 의 구분자로 나타난다.
```js
//on posix
'foo/bar/baz'.split(path.sep);
// Returns: ['foo', 'bar', 'baz']

//on windows
'foo\\bar\\baz'.split(path.sep);
// Returns: ['foo', 'bar', 'baz']
```

## 4. path.delimiter
환경변수 구분자 OS 따라 POSIX: ':', WINDOWS:';' 의 구분자로 나타난다.

```js
// on posix

console.log(process.env.PATH);
// Prints: '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin'
process.env.PATH.split(path.delimiter);
// Returns: ['/usr/bin', '/bin', '/usr/sbin', '/sbin', '/usr/local/bin']


//on windows
console.log(process.env.PATH);
// Prints: 'C:\Windows\system32;C:\Windows;C:\Program Files\node\'
process.env.PATH.split(path.delimiter);
// Returns ['C:\\Windows\\system32', 'C:\\Windows', 'C:\\Program Files\\node\\']
```

## 5. path.extname(path)
파일의 확장자를 표현합니다.

```js
path.extname('index.html');
// Returns: '.html'

path.extname('index.coffee.md');
// Returns: '.md'

path.extname('index.');
// Returns: '.'

path.extname('index');
// Returns: ''

path.extname('.index');
// Returns: ''

path.extname('.index.md');
// Returns: '.md'
```

## 6. path.dirname(path)
경로를 나타냅니다.

```js
path.dirname('/foo/bar/baz/asdf/quux');
// Returns: '/foo/bar/baz/asdf'
```

## 7. path.basename(path[, ext])
파일명을 나타냅니다.

```js
path.basename('/foo/bar/baz/asdf/quux.html');
// Returns: 'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// Returns: 'quux'
```

## 8. 정리 
자주 사용할 만한 메서드 위주로 몇가지 예제를 들어 살펴보았습니다. 
더욱 상세한 내용은 아래의 참고자료 목차에서 공식 홈페이지 링크를 가셔서 살펴보시길 바랍니다. 제일 좋은 자료는 공식 홈페이지 자료입니다. 

## 6.참고자료
[nodejs.org](https://nodejs.org/api/path.html)


