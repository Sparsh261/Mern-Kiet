// const fetchApi(){
//     fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services
//     /timeline/London%2CUK?unitGroup=us&key=YOUR_API_KEY")
// }


const root = document.getElementById('root')

const row = document.createElement('tr')

    let cell = document.createElement("th")
    cell.innerText = "Row 1"
    row.appendChild(cell);

    cell = document.createElement("th")
    cell.innerText = "Row 2"
    row.appendChild(cell);

    cell = document.createElement("th")
    cell.innerText = "Row 3"
    row.appendChild(cell);

    root.appendChild(row)

for (let i = 0; i < 10; i++) {
    const row = document.createElement('tr')

    let cell = document.createElement("td")
    cell.innerText = "r1"
    row.appendChild(cell);

    cell = document.createElement("td")
    cell.innerText = "r2 "
    row.appendChild(cell);

    cell = document.createElement("td")
    cell.innerText = "r3 "
    row.appendChild(cell);

    root.appendChild(row)

}