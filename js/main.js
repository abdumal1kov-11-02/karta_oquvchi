let elList = document.querySelector("#list")
let elMovie = document.querySelector(".movie")

let newuserArray = user.slice(0, 15)

function renderMovies(user, wrapper) {
    elMovie.textContent = user.length
    for (const item of user) {
        let elLi = document.createElement("li")
        let elDiv = document.createElement("div")
        let elDiv2 = document.createElement("div")
        let elH5 = document.createElement("h5")
        let elPi1 = document.createElement("p")
        let elPi2 = document.createElement("p")
        let elBtn1 = document.createElement("Button")
        let elBtn2 = document.createElement("button")
        let elBtn3 = document.createElement("button")
        elH5.textContent ="Ism:"  + item.ism
        elPi1.textContent ="Familiya:" + item.familiya
        elPi2.textContent ="Sharif:" + item.sharifi
        elBtn1.textContent =  "Id:" + item.id
        elBtn2.textContent = "Sinf:" + item.sinf
        elBtn3.textContent = "Fan:" + item.tanlagan_fan

        elDiv.setAttribute("class", "card")
        elDiv.setAttribute("style", "width: 22rem")
        elDiv2.setAttribute("class", "card-body")
        elH5.setAttribute("class", "card-text")
        elPi1.setAttribute("class", "card-text")
        elPi2.setAttribute("class", "card-text")
        elBtn1.setAttribute("class", "btn btn-outline-primary")
        elBtn2.setAttribute("class", "btn btn-outline-info")
        elBtn3.setAttribute("class", "btn btn-outline-success")
        
        
        elDiv2.appendChild(elH5)
        elDiv2.appendChild(elPi1)
        elDiv2.appendChild(elPi2)
        elDiv2.appendChild(elBtn1)
        elDiv2.appendChild(elBtn2)
        elDiv2.appendChild(elBtn3)
        elDiv.appendChild(elDiv2)
        elLi.appendChild(elDiv)

        wrapper.appendChild(elLi)
        
    }
}

renderMovies(user, elList)