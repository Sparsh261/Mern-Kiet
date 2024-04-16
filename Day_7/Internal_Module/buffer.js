



// const b = new Buffer.from("abcxyz");
// const b = new Buffer.from("abc");

// console.log(b);




const b = new Buffer.from("ABC");

console.log(b.toString());

b.write("xyz");

console.log(b.toString());