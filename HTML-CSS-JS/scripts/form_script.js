const form = document.querySelector("form")
const out = document.getElementById("output")
const clear = document.getElementById("clear")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const inputval = document.querySelector("input").value
    out.innerHTML = inputval
    form.reset()
})

clear.addEventListener("click",()=>{
    out.innerHTML = " "
})

