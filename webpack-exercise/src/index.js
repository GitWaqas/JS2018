import _ from "lodash";
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'

function Person(fName,lName,sport){
    this.firstName = fName;
    this.lastName = lName;
    this.favoriteSport = sport;
}

const persons = [
    new Person("Kurt", "Wonnegut","Soccer"),
    new Person("Jan", "Peterson","Hockey"),
    new Person("Jane", "Peterson","Skating"),
    new Person("John", "Hansen","Soccer"),
]


function makeTable(data) {
    const headers = _.keys(data[0]);
    const headerHTML = headers.map(h => `<th>${_.startCase(h)}</th>`).join(" ");
    const bodyHTML = data.map((p) => {
        return "<tr>" + headers.map(property => `<td>${p[property]}</td>`).join("") + "</tr>";
    }).join("");
    return `<table class="table">
    <thead><tr>${headerHTML}</tr></thead>
    <tbody>${bodyHTML}</tbody>
    </table>`
}

function component() {

    // table populate :)    
    const table = makeTable(persons);
    document.getElementById('my-table').innerHTML = table;

    element.appendChild(btn);

    const name = 'Billy';
    setTimeout(() => alert(`Hello there from ${name}`), 1000);

    return element;
}

document.body.appendChild(component());
