//  DOM is not a part of JavaScript. It is typw of an api provided by browser.

// console log is not a part of Js . It is a part of window object.

// document.getElementsByTagName do not gives an array but an iterable

// Array is an special class of iterables.

// Deep copy VS shallow copy







// console.log(window)
// console.log(window.innerHeight)
// console.log(window.innerWidth)




// console.dir(window.document)
// console.dir(document)



// console.log(window.document)
// console.log(window)




// const res  = document.getElementsByTagName('h3')
// console.log(res)
// console.log(typeof(res))





// const res  = document.getElementById('para')
// const res  = document.getElementById('h11')
// console.log(res)
// console.log(typeof(res))




// const res  = document.querySelector('#h33')
// res.style.backgroundColor = "red";
// res.innerText = "Hello"
// res['innerText'] = "in brackets";
// res.innerHTML = "<p>Inserted a p tag with innerHtml </p>"

// res.setAttribute("class","tryClass")

// console.log(res.tagName)
// console.log(res.innerHTML)
// console.log(res.innerText)
// console.log(res)
// console.log(typeof(res))





const newElelm = document.createElement("h3");
console.log(newElelm)
newElelm.innerText = "New Elelement"
document.body.appendChild(newElelm);


const rem = document.getElementsByTagName("h3")
console.log(rem);
document.body.removeChild(rem[1]);





