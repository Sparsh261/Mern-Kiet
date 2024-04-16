

const http = require('http');
const fs = require('fs');

const html = fs.readFileSync('./Teplates/html.html', 'utf-8')
const card = fs.readFileSync('./Teplates/card.html', 'utf-8')
const data = fs.readFileSync('./data.json', 'utf-8')
const dataobj = JSON.parse(data);


let newcard = '';

for(let i = 0; i < 30; i++){
    newcard += card.replace('TITLE', dataobj.products[i].title)
                   .replace('srcVar', dataobj.products[i].images[1])
                   .replace('Info', dataobj.products[i].description); 
}

const page = html.replace('__Products__CARDS__', newcard);

const app = http.createServer((req,res) => {
    res.writeHead(200,{'content-type' : 'text/html'})
    res.end(page);
})


app.listen(4010, () => console.log('server started'));