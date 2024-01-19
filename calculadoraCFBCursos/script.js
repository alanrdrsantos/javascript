const teclasNum =[...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const display = document.querySelector(".display")
const tcpy = document.getElementById("tcpy")
const tlimpar = document.getElementById("tlimpar")
const teste = document.getElementById("teste")
const aba = document.getElementById("calc_aba")
const calc = document.getElementById("calc")
const img = document.getElementById("img_aba_calc")

let sinal = false
let decimal = false


teclasNum.forEach((el)=> {
    el.addEventListener("click",(evt)=> {
        sinal = false
        if(evt.target.innerHTML == ",") {
            if(!decimal) {
                decimal = true
                if(display.innerHTML == "0") {
                    display.innerHTML = "0,"
                } else {
                    display.innerHTML += evt.target.innerHTML           
                }
            }
        } else {
            if(display.innerHTML == "0") {
                display.innerHTML = ""
            }
            display.innerHTML += evt.target.innerHTML
        }   
    })
})

teclasOp.forEach((el)=> {
    el.addEventListener("click",(evt)=> {
        if(!sinal){
            sinal=true
            if(display.innerHTML == "0") {
                display.innerHTML = ""
            }
            if(evt.target.innerHTML == "x") {
                display.innerHTML+= "*"
            }else {
                display.innerHTML += evt.target.innerHTML        
            }
        }
    })
})

tlimpar.addEventListener("click",()=> {
    sinal = false
    decimal = false
    display.innerHTML = "0"
})

teclaRes.addEventListener("click",(evt)=> {
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})

tcpy.addEventListener("click",(evt)=> {
    navigator.clipboard.writeText(display.innerHTML)
    /*teste.select() // Mobile
    teste.setSelectionRange(0,9999999) // Mobile
    navigator.clipboard.writeText(teste.value)*/
})

aba.addEventListener("click",(evt)=> {
   calc.classList.toggle("calc_exibir")
   console.log(evt.target)
   if(calc.classList.contains("calc_exibir")) {
        img.setAttribute("src", "img/left.svg")
   } else {
        img.setAttribute("src", "img/right.svg")
   }
})

