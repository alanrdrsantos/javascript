class Cxmgs{
    static cor="#888"
    static destino=null
    static divmsg=null
    static tipo = null
    static comando_sn = null
    
  
    static mostrar=(config,titulo, texto)=>{
        this.cor=config.cor
        this.tipo=config.tipo
        this.comando_sn=()=>{config.comando_sn()}
        this.destino=document.body
        this.titulo = titulo
        this.texto = texto
        this.divmsg = document.createElement("div")
        const estilo_divmsg =
            "display: flex;"+
            "justify-content: center;"+
            "align-items: center;"+
            "position: absolute;"+
            "top: 0px;"+
            "left: 0px;"+
            "width: 100%;"+
            "height: 100vh;"+
            "background-color: rgba(0,0,0,0.7);"

        this.divmsg.setAttribute("id","divmsg")
        this.divmsg.setAttribute("style", estilo_divmsg)
        this.destino.prepend(this.divmsg)

        const estilo_areaCxmsg = 
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: flex-start;"+
            "flex-direction: column;"+
            "width: 300px;"
            
        const areaCxmsg = document.createElement("div")
        areaCxmsg.setAttribute("style", estilo_areaCxmsg)
        this.divmsg.appendChild(areaCxmsg)

        const estilo_tituloCxmsg = 
                "display: flex;"+
                "justify-content: flex-start;"+
                "align-items: center;"+
                "width: 100%;"+
                "background-color:"+this.cor+";"+
                "color: #fff;"+
                "padding: 5px;"+
                "border-radius: 5px 5px 0px 0px;"

        const tituloCxmsg = document.createElement("div")
        tituloCxmsg.setAttribute("style", estilo_tituloCxmsg)
        tituloCxmsg.innerHTML = this.titulo
        areaCxmsg.appendChild(tituloCxmsg)

        const estilo_corpoCxmsg =
                "display: flex;"+
                "justify-content: flex-start;"+
                "align-items: center;"+
                "width: 100%;"+
                "background-color: #eee;"+
                "color: #000;"+
                "padding: 30px 5px;"

        const corpoCxmsg = document.createElement("div")
        corpoCxmsg.setAttribute("style", estilo_corpoCxmsg)
        corpoCxmsg.innerHTML = this.texto
        areaCxmsg.appendChild(corpoCxmsg)

        const estilo_rodapeCxmsg = 
              "display: flex;"+
              "justify-content: space-around;"+
              "align-items: center;"+
              "width: 100%;"+
              "background-color: #ccc;"+
              "color: #000;"+
              "padding: 5px;"+
              "border-radius: 0px 0px 5px 5px;"

        const rodapeCxmsg = document.createElement("div")
        rodapeCxmsg.setAttribute("style", estilo_rodapeCxmsg)
        areaCxmsg.appendChild(rodapeCxmsg)

        const estilo_buttonCxmsg =
                "background-color:"+this.cor+";"+
                "color: #fff;"+
                "padding: 10px 40px;" +
                "border-radius: 5px;" +
                "cursor: pointer;" +
                "text-transform: upercase;"   

    if(this.tipo === "ok"){
        const buttonCxmsg = document.createElement("button")
        buttonCxmsg.setAttribute("style", estilo_buttonCxmsg)
        buttonCxmsg.innerHTML = "OK"
        buttonCxmsg.addEventListener("click", (evt)=> {
            this.ocultar()

        })
        rodapeCxmsg.appendChild(buttonCxmsg)
    } else if (this.tipo === "sn") {
        const btn_sim = document.createElement("button")
        btn_sim.setAttribute("style", estilo_buttonCxmsg)
        btn_sim.innerHTML = "SIM"
        btn_sim.addEventListener("click", (evt)=> {
            this.comando_sn()
            this.ocultar()
        })

        rodapeCxmsg.appendChild(btn_sim)

        const btn_nao = document.createElement("button")
        btn_nao.setAttribute("style", estilo_buttonCxmsg)
        btn_nao.innerHTML = "NÃO"
        btn_nao.addEventListener("click", (evt)=> {
            this.ocultar()
        })

        rodapeCxmsg.appendChild(btn_nao)

    }
        

    }
    static ocultar=()=>{
        this.divmsg.remove()

    }
}

export {Cxmgs}
