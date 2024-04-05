

const fname = (e) => {
    const val =  e.target.value;
    // if(val.length > 3) console.log("LArget than 3")

}

const subitForm = (e) => {
    e.preventDefault()

    // console.log(e.target[1].value)
    
    for(let i = 0; i < e.target.length-1; i++){
        
        const inp = e.target
        
        if(inp[i].type == 'checkbox'){ 
            if(inp[i].checked) {
                // console.log()
                console.log(inp[i].name + " " +inp[i].value)
                continue
            }
        }
        else  console.log(inp[i].name + " " +inp[i].value)
    
    }



}