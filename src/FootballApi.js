
export function getResults(){
    return fetch(`https://montanaflynn-fifa-world-cup.p.rapidapi.com/teams`, {
        method: 'GET',
        headers: {
            "X-RapidAPI-Host": "montanaflynn-fifa-world-cup.p.rapidapi.com",
            "X-RapidAPI-Key": "81659d0e6bmshe6e6c47765699d3p1ffc8ejsn55ea7ab0de44",
            "accepts": "json"
        }
    }).then((response) => {
        return response.json()
    }).then((json) =>{
        return json
    }) 
}