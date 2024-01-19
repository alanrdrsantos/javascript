import { Cxmgs } from "./cxmsg.js"

const config ={
    cor: "#48f",
    tipo: "sn", // tipos: ok, cancela / sim ,nao
    comando_sn:()=> {}
}

const fsim =()=> {
    console.log("Botão SIM pressionado")
}


const btn_mostrarcxmsg = document.querySelector("#btn_mostrarcxmsg")

btn_mostrarcxmsg.addEventListener("click", ()=> {
    config.comando_sn=()=> {fsim()}
    Cxmgs.mostrar(config,"CFB Cursos","Curso de JavaScript, criando caixa de mensagem personalizada")
})

