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
