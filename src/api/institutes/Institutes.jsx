const apiUrl = 'https://69266fc726e7e41498fa549a.mockapi.io/institues';

// export function getAllInstitutes(setData) {
//     fetch(apiUrl)
//         .then((res) => res.json())
//         .then((res) => setData(res));
// }


// export function getInstituteById(id, setData) {
//     fetch(`${apiUrl}/${id}`)
//         .then((res) => res.json())
//         .then((res) => setData(res));
// }


// get (read)
export const getAllInstitutes = async () => {
    const res = await fetch(apiUrl);
    return res.json();
};

// update 
export const getInstituteById = async (id,payload) => {
    const res = await fetch(`${apiUrl}/${id}` , {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body : JSON.stringify(payload)
    } );
    return res.json()
};

// delete 
export const deleteById = async (id) => {
    await fetch(`${apiUrl}/${id}` ,{
        method : "DELETE"
    } );
}