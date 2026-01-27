const apiUrl = 'https://696b876d624d7ddccaa1745e.mockapi.io/event'

export function getAllEvents(setData) {
    fetch(apiUrl)
        .then((res)=>res.json())
        .then((res)=>setData(res));
}

