const url ='https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';
const form = document.querySelector('.form')
const searching = document.getElementById('searching')
const resultDOM = document.querySelector('.result')
form.onsubmit = (e) => {
    let value = searching.value
    e.preventDefault();
    if(value === '') {
        resultDOM.innerHTML = `<div class="result">Enter please...</div>`
    }
    else {
        fetchPages(value)
    }
}
let fetchPages = async (searchingValue) => {
    resultDOM.innerHTML = `<div class="loading"></div>`
    let data = await fetch(`${url}${searchingValue}`)
    .then(res => res.json())
    let results = data.query.search
    console.log(results)
    let resultList = 
    results.map((result => {
        return `
        <a href= http://en.wikipedia.org/?curid=${result.pageid} class="search-link" target="blank">
            <h4 class="title">${result.title}</h4>
            <p class="desc">${result.snippet}</p>
        </a>
        `
    }))
    .join('')
    resultDOM.innerHTML = 
    `<div class="articles">
        ${resultList} 
    </div>`
    
}