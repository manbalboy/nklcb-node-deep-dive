// 설치된 노드의 버전
console.log(process.version)

// 프로세서 아키텍쳐 정보
console.log(`This processor architecture is ${process.arch}`);

// 프로세서 운영체제 정보 : 반환값은 다음과 같습니다 'aix, darwin, freebsd, linux, openbsd, sunos, win32'
console.log(`This platform is ${process.platform}`);

// 현재 프로세스의 id
console.log(`This process is pid ${process.pid}`);

// 프로세스가 시작된 후 흐른 시간
console.log(`This process is uptime ${process.uptime()}`);

// node 설치경로
console.log(`This process is execPath ${process.execPath}`);

// 현재 node 가 실행되는 경로
console.log(`This process is cwd ${process.cwd()}`);

// 현재 cpu 사용량
console.log(process.cpuUsage());

// process.env
console.log(process.env);