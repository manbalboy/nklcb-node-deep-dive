const dirObj = {
    depth1: {
        depth2: {
            depth3: {
                key: "depth3 key",
                array : [1,2,3,4,5]
            },
            key: "depth2 key"
        },
        key: "depth1 key"
    },
    key: "root key"
}
console.log("=====옵션 colors true =====");
console.dir(dirObj, {colors : true});
console.log("=====옵션 colors false =====");
console.dir(dirObj, {colors : false});
console.log("=====옵션 depth 3 =====");
console.dir(dirObj, {depth : 3});