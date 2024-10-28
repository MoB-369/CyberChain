
const url = 'https://api.github.com/users/MoB-369'
async function getDetails(){
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.url)
    console.log(data.name)
    console.log(data.id)
}

getDetails()


