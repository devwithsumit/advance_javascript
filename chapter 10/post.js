async function postRequest(todo) {
    let options = {
        method: 'Post',
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(todo)
    }
    //Important: resource will not be really updated on the server but it will be faked as if.
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let value = await response.json()
    return value
}

async function getRequest(id) {
    let response = await fetch('https://jsonplaceholder.typicode.com/albums/'+id)
    let value = await response.json()
    return value
}

async function main(){
    let response = await postRequest({
        tile: 'sumit',
        body: 'a programmer',
    })
    console.log(response);
    let p = await getRequest(100)
    console.log(p);
}
main()