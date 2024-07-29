let p = fetch("https://goweather.herokuapp.com/weather/bhopal")
p.then((response) => {
    console.log(response.headers)
    return response.json()
}).then((response) => {
    console.log(response)
})


let p2 = fetch("https://goweather.herokuapp.com/weather/newdelhi")
p2.then((response) => {
    console.log(response.status)
    console.log(response.ok)
    console.log(response.headers)
    return response.json()
}).then((response) => {
    console.log(response)
})
console.log('hello');