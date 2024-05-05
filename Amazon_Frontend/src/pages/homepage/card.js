// const elem = {
//     "id": 1,
//     "title": "iPhone 9",
//     "description": "An apple mobile which is nothing like apple",
//     "price": 549,
//     "discountPercentage": 12.96,
//     "rating": 4.69,
//     "stock": 94,
//     "brand": "Apple",
//     "category": "smartphones",
//     "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//     "images": [
//         "https://cdn.dummyjson.com/product-images/1/1.jpg",
//         "https://cdn.dummyjson.com/product-images/1/2.jpg",
//         "https://cdn.dummyjson.com/product-images/1/3.jpg",
//         "https://cdn.dummyjson.com/product-images/1/4.jpg",
//         "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
//     ]
// }
const Card = ({elem}) => {
    return (
        <div style={{color: 'red',  maxWidth:'300px', margin:'auto', maxHeight: '300px'}}>
            <h4>{elem.title}</h4>
            <img src={elem.images[0]} alt="" style={{maxHeight: '100px', maxWidth: '250px'}}/>
                <button class="button">Visit page</button>
                <p class="info">Price: {elem.price}</p>
                <p class="info">{elem.description}</p>
        </div>
    )
}

module.exports = Card