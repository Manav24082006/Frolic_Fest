const apiUrl = 'https://69266fc726e7e41498fa549a.mockapi.io/institues';

export function getAllInstitutes(setData) {
    fetch(apiUrl)
        .then((res) => res.json())
        .then((res) => setData(res));
}


// export function getInstituteById(id, setData) {
//     fetch(`${apiUrl}/${id}`)
//         .then((res) => res.json())
//         .then((res) => setData(res));
// }