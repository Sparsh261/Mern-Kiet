const express = require('express');
const fs = require('fs');
const fsPromises = require('fs/promises');

const app = express();


app.use(express.json())


// app.get('/api/products',(req,res)=>{
//     const data = fs.readFileSync('./data.json','utf-8')
//     const obj = JSON.parse(data);
//     res.send(obj);
// })


app.get('/api/products', async(req,res)=>{
    const data = await fsPromises.readFile('./data.json','utf-8')
    const obj = JSON.parse(data);
    res.status(200);
    res.json({
        status:'success',
        results:obj.length,
        data:{
            products: data
        }
    });
})

app.post('/api/products',async(req,res)=>{
    // console.log(req)
    // console.log(Object.keys(req))
    
    const data = req.body;
    // console.log(data)

    if(!data.title || data.price){

        res.json({
            status:"error",
            message:"Title or Price not found"
        })
    }
    else{

        
        const db = await fsPromises.readFile('./data.json','utf-8');
        const arr = JSON.parse(db);
        const len = arr.length;
        
        if(len==0)  data.id = 1;
        
        else data.id = (arr[len-1].id)+1;

        // data.id = len==0?1:(arr[len-1].id)+1;
        
        arr.push(data);
        
        // fs.appendFile('./data.json',arr,function(err){
            //     if(err) console.log("Can't do it");
            //     else console.log("saved");
            // })
            
            fsPromises.writeFile('./data.json',JSON.stringify(arr))
            
            
            res.status(201);
            
            res.json({
                status:"success",
                results:1,
                data:{
                    newProduct:data
                }
            })
    }
})
        
app.put('/api/products/:id',async(req,res)=>{
    
    // console.log(req);
    
    // console.log(req.body)
    // console.log(req.query)
    // console.log(req.params)

    const db = await fsPromises.readFile('./data.json','utf-8');
    const arr = JSON.parse(db);

    const narr = arr.map(elem=>{
        if(elem.id == req.params.id) {
            const nelem = req.body;
            nelem.id = Number(req.params.id);
            return nelem ;
        }
        else return elem;
    })

    fsPromises.writeFile('./data.json',JSON.stringify(narr));

    res.status(200);
    res.json({
        status:"success",
        results:1,
        data:{
            newProduct:req.body
        }
    })
})


app.delete('/api/products/:id',async(req,res)=>{
    const arr = JSON.parse(await fsPromises.readFile('./data.json','utf-8'));

    const reqId =  Number(req.params.id)

    const narr = arr.filter(elem=>{
        if(elem.id === reqId) return false
        return true
    })

    fsPromises.writeFile('./data.json',JSON.stringify(narr));

    res.status(200);
    res.json({
        status:"success",
        results:1,
        data:{
            newProduct:null
        }
    })

})



app.patch('/users/:id',async(req,res)=>{
    const arr = JSON.parse(await fsPromises.readFile('./data.json','utf-8'));

    const reqId =  Number(req.params.id)

    const narr = arr.map(elem=>{
        if(elem.id === reqId){
            req.body.id = reqId;
            const newElem = {
                ...elem,...req.body,
            }
            return newElem;
        }
        else  return elem
    })

    fsPromises.writeFile('./data.json',JSON.stringify(narr));

    res.status(200);
    res.json({
        status:"success",
        results:1,
        data:{
            newProduct:"donr"
        }
    })

})




app.listen(5020,()=>console.log("Server"))