






function sum(a,b){
    console.log(a+b);
}

const sub = (a,b) => {
    console.log(a-b);
}



module.exports = { sum : sum,
                    sub : sub
                };                          

// module.exports = { sum , sub};    this could also be written there in above line. In ES6 if keys are not given then keys are same as values. 


