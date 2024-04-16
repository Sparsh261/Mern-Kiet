// if we use require the both files run i.e., one which has exported ans one in which it is imported.




// const obj = require('./index')

// obj.sub(10,20);    // obj = {f1:sum , f2 : sub}




const {sum,sub} = require('./index');

sum(10,20)