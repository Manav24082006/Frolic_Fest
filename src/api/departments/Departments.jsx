const apiUrl = 'https://69266fc726e7e41498fa549a.mockapi.io/department';

export function getAllDepartments(setData) {
    fetch(apiUrl)
        .then((res)=>res.json())
        .then((res)=>setData(res));
}