const f_texto = document.querySelector("#f_texto")
const p_texto = document.querySelector("#p_texto")
const btn_texto = document.querySelector("#btn_texto")

btn_texto.addEventListener("click", (evt)=> {
    localStorage.setItem("name", f_texto.value)
    p_texto.innerHTML += `${localStorage.getItem("name")} <br/>` 
    f_texto.value=""
    f_texto.focus()

})

/*let num = 10
//window.localStorage.setItem("number", num)
localStorage.setItem("name", "Alan")
localStorage.setItem("number", num)
localStorage.setItem("number", 33)
//alert(localStorage.length)
//alert(localStorage.key(0))
//alert(localStorage.getItem("number"))
localStorage.clear()

//sessionStorage quando o browser é fechado é limpado ao contrario do localStorage

sessionStorage.setItem("name", "Alan")
sessionStorage.setItem("number", 33)*/