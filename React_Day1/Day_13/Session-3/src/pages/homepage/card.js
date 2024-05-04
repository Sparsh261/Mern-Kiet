
const Card = (x) => {
    console.log("HI", x)
    return (<div>
        <h1>{x.title}</h1>
        <p>{x.price}</p>
    </div>)
}

module.exports = Card