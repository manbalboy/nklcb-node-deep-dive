console.time('10-elements');
for (let i = 0; i < 10; i++) {
  console.timeLog('10-elements', `[index] >> ${i}`);
}
console.timeEnd('10-elements');