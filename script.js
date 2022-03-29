const input = document.querySelector("input");
const div = document.querySelector("#lista ul");

const EXTENSAO = ".svg" 


const figure = {
    circle : "images/circle",
    trash : "images/trash"
}

document.querySelector("button").addEventListener("click", () => {
    
    if (input.value === "") {
        alert("Digite algo no Campo!!");
    }else{
        let li = document.createElement("li")

        let img = document.createElement("img");
        img.classList.add("img")
        img.src = figure.circle + EXTENSAO
        img.style.marginLeft = "5px"

        let p = document.createElement("p")
        p.classList.add("p")
        p.innerHTML = input.value
        p.style.marginLeft = "1px"   

        let div2 = document.createElement("div")

        let img2 = document.createElement("img");
        img2.src = figure.trash + EXTENSAO
        img2.classList.add("image")

        // let img3 = document.createElement("img");
        // img3.src = figure.trash + EXTENSAO

        // let img4 = document.createElement("img");
        // img4.src = figure.trash + EXTENSAO

        li.appendChild(img)
        li.appendChild(p)
        li.appendChild(div2)
        li.appendChild(img2)
        // li.appendChild(img3)
        // li.appendChild(img4)

        div.appendChild(li)

        img2.addEventListener("click", () =>{
        
            li.remove()
    
    
        })
    }
    
})
// let img2 = document.querySelector(img2)
    
    