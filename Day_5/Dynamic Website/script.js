console.log("........App Started..........")

function callApi(){
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=a434fb0af57046988dc83a2ce62bf81b")
    // fetch("https://api.github.com/users/sparsh261")
    .then((res)=>res.json())
    .then(data => {console.log(data); renderUI(data)})
}

// callApi()



function renderUI(data){
    
    const articles = data.articles;

    for(let i = 0; i < articles.length; i++){

        const root = document.getElementById("root");
        
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");

        div.setAttribute('class',"news-card")

        h3.innerText = articles[i].title;
        img.setAttribute('src',articles[i].urlToImage)
    
        div.appendChild(h3)
        div.appendChild(img)
        
        root.appendChild(div)
    }
}


// function renderUI(data){
    
//     const articles = data.articles;

//     const root = document.getElementById("root");
//     const img = document.createElement("img");
//     img.setAttribute('src',articles[0].url)
    
//     root.appendChild(img)
// }












//a434fb0af57046988dc83a2ce62bf81b
// https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=a434fb0af57046988dc83a2ce62bf81b