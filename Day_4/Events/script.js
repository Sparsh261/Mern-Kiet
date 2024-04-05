// function getInfo(){
//     console.log("Button Clicked")
//     const ne = document.createElement("p");
//     ne.innerText = "I cicked";
//     document.body.prepend(ne)
// }




function getInfo1(e){
    console.log(e)
    const ne = document.createElement("p");
    // ne.innerText = "I cicked";
    // document.body.prepend(ne)
    
    e.target.setAttribute("style", "color:yellow; position:absolute; top:10px; left:20px")
    e.target.style.backgroundColor = "red"
}


