const http = require('http');
const fs = require('fs');
const url = require('url');

const html = fs.readFileSync('./Templates/html.html', 'utf-8')
const card = fs.readFileSync('./Templates/card.html', 'utf-8')
const data = fs.readFileSync('./data.json', 'utf-8')
const dataobj = JSON.parse(data);



let newcard = '';
for(let i = 0; i < 30; i++){
    newcard += card.replace('TITLE', dataobj.products[i].title)
                   .replace('srcVar', dataobj.products[i].images[1])
                    .replace('Info', dataobj.products[i].description)
                   .replace('link', `/product?id=${dataobj.products[i].id}`)
}

const page = html.replace('__Products__CARDS__', newcard);



// let product = dataobj.products;
// let nCard = product.map((elem) => {
//     // console.log(elem);
//     let temp = card;
//     temp = temp.replace('TITLE', elem.title)
//    .replace('Info', elem.description)
//     .replace('srcVar', elem.images[1])
//     return temp;
// })

// const page = html.replace('__Products__CARDS__', nCard.join(" "));



const app = http.createServer((req,res) => {

    res.writeHead(200,{"constent-type":"text/html"});

    const route = req.url;
    // console.log(route);
    
    const path = url.parse(route,true);
    // console.log(path);


    // if(path.pathname == '/') res.end(page);
    // else if(path.pathname == `/product`){
    //     res.end(`
    //     <div>
    //         <div>
    //             <p>${dataobj.products[path.query.id].title}</p>
    //         </div>
    //     </div>
    //     `)
    // }
    // else res.end("Not valid")


    if(path.pathname == '/') res.end(page);
    else if(path.pathname == `/product`){
        const items = dataobj.products;
        const elem = items.find(item => item.id == path.query.id)
        res.end(`
        <div style="min-height:100vh; display:flex; justify-content:center; align-items:center; color:black; background-color:white; margin:0">
                <div style=" max-height: fit-content; border:2px solid black; border-radius:10px; padding:20px; background-color:">
                    <p>${elem.title}</p>
                    <img src="${elem.images[1]}">
                    <p>${elem.description}</p>
                </div>
            </div>
        `)
    }
    else res.end("Not valid")
    
    
})






app.listen(4080, ()=>console.log(".................Server Started............."))