const beersApi = 'https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/Beers.json';

export const fetchBeers = async () => {
    return await fetch(beersApi)
        .then((response) => response.json())
        .then(data => data)
}