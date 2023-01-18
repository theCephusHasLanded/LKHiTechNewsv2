
// components for rover photos ---> then display results -- each component is like a bucket that has its own logic.

//click event = button submit the logic will get all the infor to send to diplay component -- then it will take info that has been fetched -- everything has been taken. handle the display of the fetch...
const BASE_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3201&camera=fhaz&api_key=THVrwwMgeaEsXt9LpYhWHeGA4RdSbEqggb9Lv18i"

//let photos = await getMars()

async function getMars(){
    const response = await fetch(BASE_URL);
    const data = await response.json();

    // document.getElementById("earthDate").innerText = data.photos[1].earth_date
    // document.getElementById("solDate").innerText= data.photos[1].sol
    // document.getElementById("roverPhotos").innerText = data.photos[1].img_src
    // 

    const rover = {
        sol: data.photos[1].sol,
        full_name: data.photos[1].camera.full_name,
        img_src: data.photos[1].img_src,
        earth_date: data.photos[1].earth_date
    }

    return rover
}

document.getElementById("showPhoto").addEventListener("click", async () => {
    let photos = await getMars()
    document.getElementById("photoBox").remove()
    document.getElementById("deleteP").remove()
    let addRoverPhoto = document.createElement("img")
    document.getElementById("showPhoto").append(addRoverPhoto)
    addRoverPhoto.setAttribute("src",photos.img_src)
    addRoverPhoto.setAttribute("id", "resize")
})

document.getElementById("cameraCurious").addEventListener("click", async () => {
    let photos = await getMars()
    document.getElementById("cameraCurious").classList.add("d-none")
    let addCameraName = document.createElement("p")
    document.getElementById("firstBox").append(addCameraName)
    addCameraName.innerText = photos.full_name
})

document.getElementById("martianDay").addEventListener("click", async () => {
    let photos = await getMars()
    document.getElementById("martianDay").classList.add("d-none")
    let addMartianDay = document.createElement("p")
    document.getElementById("secondBox").append(addMartianDay)
    addMartianDay.innerText = photos.sol
})

document.getElementById("earthDay").addEventListener("click", async () => {
    let photos = await getMars()
    document.getElementById("earthDay").classList.add("d-none")
    let addEarthDay = document.createElement("p")
    document.getElementById("thirdBox").append(addEarthDay)
    addEarthDay.innerText = photos.earth_date
})





// document.getElementById('top-div').onmouseover();

// document.querySelector("section").addEventListener("click", (event) => {
//     event.preventDefault();
//     fetch (BASE_URL)
//     .then((response)=> {
//         return response.json();
//     })
//     .then((earth) => {
//         const earthDate = data.photos[1].earth_date
//         const displayEarth = document.querySelector(".earthDate")
//         console.log("earthDate")
//     })
// });













// const displayRover = document.querySelector("")
// const displayPhoto = document.querySelector("")
// const displaySol = document.querySelector("")



//     document.getElementById(solana).textContent = data.photos[1].sol
//     document.getElementById(fullName).textContent = data.photos[1].camera.full_name
//     document.getElementById(earthDate).textContent = data.photos[1].earth_date
//     document.getElementById(roverPhotos).textContent = data.photos[1].img_src

// solana.addEventListener("click", (event) => {
//    console.log(data.photos[1].sol);
//    event.target = "Clicked";
// })

// const getData = () => {
//    const marsDate = document.getElementById(solana).textContent = data.photos[1].sol
// }





// fetch(BASE_URL, {
//     method: 'GET',
//     body: 
// })
// .then(res => {
//     if (res.ok){
//         console.log('SUCCESS')
//     } else {
//         console.log('Not Successful')
//     }
// })
// .then(data => console.log(data))
// .catch(error => console.log('ERROR'))


