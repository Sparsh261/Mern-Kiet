// const fs = require('fs');

// const data  = fs.readFileSync('myFile.txt')
// // const data  = fs.readFileSync('../Notes.txt')

// console.log(data.toString());



// const data  = fs.readFileSync('myFile.txt',{encoding:'utf-16le'})
// const data  = fs.readFileSync('../Notes.txt','utf-16le')

// console.log(data);



// fs.writeFileSync('./log.txt',"Creating a file on today")
// fs.appendFileSync('./log.txt',"\n creating data")




// Readind File Synchronus way

// const fs = require('fs');
// console.log("Start")
// const data = fs.readFileSync('myFile.txt','utf-8');
// console.log(data);
// console.log("End");





// Readind File Asynchronusly by promises

// const fs = require('fs/promises');
// console.log("Start")
// const p = fs.readFile('myFile.txt','utf-8');
// p.then((res)=>{console.log(res)})
// console.log("End");








// Readind File Asynchronusly by callBack

// const fs = require('fs');
// console.log("Start")
// fs.readFile('myFile.txt','utf-8',(err,data) => {         if(err) console.log("err",err);
                                                //          if(data) console.log(data)    ;
                                                // });
// console.log("End");







// const http = require('http');

// const app = http.createServer((req,res) => {
//     console.log("Request Received second time");
//     // if(req.url != '/favicon.ico')
//     console.log(req.url);
//     res.writeHead(200,{
//         'Content-type' : 'text/html',
//     })
//     res.end("<h1>You are on homme page me </h1> <p>Hiiii</p>")
// });

// app.listen(1400 , () => {
//     console.log(".........Server Started.........")
// })








// MIni-project


const http = require('http');
const fs = require('fs');

// const html = `
//         <!DOCTYPE HTML>
//         <html>
//             <head></head>
//             <body style="min-height:100vh">
//                 __Products__CARDS__
//             </body>
//         </html>           `

    

// const card =   `<div style="color: red; background-color: cyan; max-width:400px; margin:auto; ">
//                     <h4>TITLE</h4>
//                     <p>Info</p>
//                 </div>`



const html = fs.readFileSync('./Templates/httml.html','utf-8')
const card = fs.readFileSync('./Templates/card.html','utf-8')

const data = fs.readFileSync('./data.json', 'utf-8')
const dataObj = JSON.parse(data);

// console.log(dataObj)

let tempcard = '';

for(let i = 0; i < 30; i++){
    tempcard += card.replace('TITLE',dataObj.products[i].title)
    .replace("Info",dataObj.products[i].description)
    .replace('srcVar',dataObj.products[i].images[0]);
}


const page = html.replace('__Products__CARDS__',tempcard);

const app = http.createServer((req,res) => {

    console.log(req.url);
    res.writeHead(200,{'Content-type' : 'text/html',})
    res.end(page)       
});

app.listen(1400 , () => {
    console.log(".........Server Started.........")
})