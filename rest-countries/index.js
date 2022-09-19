const loadData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayData(data));
};

const displayData = (data) => {
    const allCountries = data.map(countries => countriesHTML(countries))
    const allCountriesData = allCountries.join(' ')
    const section = document.getElementById('section-1');
    section.innerHTML = allCountriesData;
}

const countriesHTML = (countries) => {
    // console.log()
    return `<div class="country-name">
    <img src="${countries.flags.svg}">
        <h1 class="h1-country"> ${countries.name.common} </h1>
        
    </div>
    `;

}


loadData();