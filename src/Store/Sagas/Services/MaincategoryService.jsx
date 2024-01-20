export async function addRecord(payload) {
    let response = await fetch("http://localhost:8000/maincategory", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ name: payload.name })
    })
    return await response.json()
}

export async function getRecord(){
    let response = await fetch("http://localhost:8000/mainctegory", {
        method:"GET",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function updateRecord(payload){
    let response = await fetch("http://localhost:8000/maincategory/"+payload.id, {
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body : JSON.stringify(payload) 
    })
    return await response.json()
}
export async function deleteRecord(payload){
    let response = await fetch("http://localhost:8000/maincategory/"+payload.id, {
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
    })
    return response.json()
}