setImmediate(() => {
    console.log('immediate');
});

Promise.resolve().then(() =>{console.log('Promise')});
process.nextTick(() =>{
    console.log('nextTick');
});

setTimeout(() => {
    console.log('timeout');
},0);
