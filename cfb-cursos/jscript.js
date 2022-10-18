var diryJ, dirxJ // Variaveis para controlar a direção do jogador, na direção Y (diryJ) e na direção X (dirxJ)
var jogo // Variavel para iniciar e parar o jogo com true para iniciar e false para parar
var frames // Variavel para o controle da animação
var jog // Variavel para controlar o jogador
var velJ // Variavel para controlar a velocidade do jogador
var velT // Variavel para controlar a velocidade do tiro
var pjy,pjx // Variaveis para controlar a posição do jogador, na posição Y (pjy) e na posição X (pjx)
var tamTelaW, tamTelaH // Variaveis para representar o tamanho da largura(tamTelaW) e o tamanho da altura(tamTelaH) da tela
var contBombas // Variavel para a contagem das bombas
var painelContBombas // Variavel para mostrar a contagem das bombas no painel
var bombasTotal // Variavel controlar o total de bombas
var velB // Variavel para controlar a velocidade da bomba
var tmpCriaBomba // Variavel para controlar o intervalo para criação das bombas
var vidaPlaneta // Variavel para controlar a vida do planeta
var barraPlaneta // Variavel para controlar a barra do planeta
var ie // Variavel para controlar o indice[i](contador) das explosões
var isom // Variavel para controlar o indice[i](contador) do som das explosões
var telaMsg // Variavel para mostrar a imagem com a mensagem na tela quando iniciar, ganhar e perder

 
function teclaDw() { // Função de controle das teclas para movimentar a nave
    var tecla = event.keyCode // Usando o event.keyCode para associar as teclas do teclado atraves de seu codigo numérico, armazenando na variavel tecla de escopo local
    if(tecla==38) { // Se tecla for igual para cima (tecla==38)
        diryJ=-1 // Direção do jogador movendo pra cima recebe -1(diryJ=-1), lembrando que no eixo Y a parte de cima é negativo

    } else if(tecla==40) {// senão se tecla for igual para baixo(tecla==40)
        diryJ=1 // Direção do jogador movendo pra baixo recebe 1(diryJ=1), lembrando que no eixo Y a parte de baixo é positivo
     
    } if(tecla==37) { // Se tecla for igual para esquerda (tecla==37)
        dirxJ=-1 // Direção do jogador movendo para esquerda recebe -1(dirxJ=-1), lembrando que no eixo X a parte da esquerda é negativo

    } else if(tecla==39) { // senão se tecla for igual para direita (tecla==39)
        dirxJ=1 // Direção do jogador movendo para direita recebe 1(dirxJ=1), lembrando que no eixo X a parte da direita é positivo
    
    }if(tecla==32) {// se tecla for igual espaço do teclado(tecla==32), 32=espaço! Espaço vai ser o comando de tiro
        atira(pjx+17,pjy) // Chamando a função atira que controla o tiro passando por parametro a posição do jogador no eixo X (pjx+17, colocando +17 para o tiro sair do meio na nave) e na posição Y (pjy)

    }  
}  

function teclaUp() { //Função de controle para quando as teclas forem liberadas, para a nave parar de se movimentar
    var tecla = event.keyCode // Usando o event.keyCode para associar as teclas do teclado atraves de seu codigo numérico, armazenando na variavel tecla de escopo local
    if((tecla==38) || (tecla==40)) { // Se tecla for igual para cima (tecla==38) ou (||) tecla for igual para baixo(tecla==40)
        diryJ=0 // Direção do jogador no eixo Y recebe 0(diryJ=0), assim parando de se movimentar quando a tecla não esta mais pressionada
    }
    if ((tecla==37) || (tecla==39)) { // Se tecla for igual para esquerda (tecla==37) ou (||) tecla for igual para direita (tecla==39)
        dirxJ=0 // Direção do jogador no eixo X recebe 0(diryJ=0), assim parando de se movimentar quando a tecla deixa de ser pressionada
    }    
}

function  criaBomba() { // Função para criar as bombas
    if(jogo) { // Verificando se o jogo está rolando, se sim executa os comandos abaixo
        var y = 0 // Variavel para a posição da bomba no eixo Y com o valor = 0, para criar a bomba lá em cima
        var x = Math.random()*tamTelaW // Variavel para a posição da bomba no eixo X, usando o metodo Math.random para sortear um numéro aleatorio entre 0 e o tamanho da largura da tela(tamTelaW,variavel que ja foi definida)
        var bomba = document.createElement("div") // Criando um elemento(createElement) div e armazenando na variavel bomba, elemento que vai ser nossa bomba
        var att1 = document.createAttribute("class") // Criando um atributo com o createAttribute, passado por parametro("class"), e armazendo na variavel att1
        var att2 = document.createAttribute("style") // Criando um atributo com o createAttribute, passado por parametro("style"), e armazendo na variavel att2
        att1.value="bomba" // O valor do att1(att1.value) vai receber "bomba"(class="bomba")
        att2.value = "top:"+y+"px;left:"+x+"px" // O valor do att2(att2.value) vai receber o atributo top + posição y na unidade de medida px (top: "+y+"px) e o atributo left + posição x na unidade de medida px (top: "+x+"px)
        bomba.setAttributeNode(att1) // Adicionando o atributo da variavel att1 no elemento da variavel bomba com o setAttributeNode
        bomba.setAttributeNode(att2) // Adicionando o atributo da variavel att2 no elemento da variavel bomba com o setAttributeNode
        document.body.appendChild(bomba) // Adicionando o elemento da variavel bomba(filho) no document.body(pai) com o appendChild
        contBombas-- // Decrementando o contBombas(-1) para subtrair as bombas, lembrando que foi definido 150 na variavel
    }
}

function controlaBomba() { // Função para controlar as bombas
    bombasTotal = document.getElementsByClassName("bomba") // Armazenando na variavel bombasTotal todos os elementos(bombas) que possuem a class="bomba" com o getElementsByClasseName
    const tam = bombasTotal.length // Armazenando na variavel tam o tamanho da bombasTotal(bombasTotal.length) ou seja vai me retornar quantas bombas eu tenho definidas, lembrando que é um array
    for(let i=0; i < tam; i++) { // for para percorrer as bombas como definido na variavel tam que foi armazenado sua quantidade e verificar..
        if(bombasTotal[i]) { //..se bombasTotal na posição [i](bombasTotal[i]) existir executa a rotina abaixo
            var pi = bombasTotal[i].offsetTop // Variavel da posição do indice da bomba(pi) vai receber bombasTotal[i] obtendo sua posição no eixo Y com a propriedade offsetTop
            pi+=velB // Incrementando na posição da bomba(pi) a velocidade da bomba(velB) que ja foi definida! (pi=pi+velB)
            bombasTotal[i].style.top = pi + "px" // Bomba na posição do indice (bombasToral[i]) no eixo Y (style.top) recebe a posição da bomba(pi) + a unidade de medida px, assim fazendo a movimentação na tela
            if(pi>tamTelaH) { // se posição da bomba for maior que o tamamho da altura da tela(pi>tamTelaH)
                vidaPlaneta-=10 // Decrementando 10(-=10) da vidaPlaneta, assim subtraindo 10 a cada bomba que atingir no chão! Lembrando que vidaPlaneta ja esta definido
                criaExplosao(2,bombasTotal[i].offsetLeft,null) // chamando a função criaExplosão passando por parametro o tipo da explosão que ja foi definida (2 = Explosão da colisao da bomba no chão), a posição x pegando a posição da bomba (bombasTotal[i].offsetLeft) e a posição y coloco o valor null pq ela ja esta definida dentro da função criaExplosao (tamTelaH-57)
                bombasTotal[i].remove() // Remove as bombas das posições do indice(bombas[i]) com o remove()
            }         
        }     
    }
}

function atira(x,y) { // Função para criar o tiro e definir a posição do tiro da nave, passando 2 parametros para adicionar a posição do jogador na chamada da função
    //O tiro precisa ser criado de acordo com a posição do jogador
    var t = document.createElement("div") // Criando um elemento div com o createElement, passado por parametro, e armazenando na variavel t
    var att1 = document.createAttribute("class") // Criando um atributo com o createAttribute, passado por parametro("class"), e armazendo na variavel att1
    var att2 = document.createAttribute("style") // Criando um atributo com o createAttribute, passado por parametro("style"), e armazendo na variavel att2
    att1.value = "tiroJog" // O valor do att1(att1.value) vai receber "tiroJog"(class="tiroJog")
    att2.value = "top:"+y+"px;left:"+x+"px" // O valor do att2(att2.value) vai receber o atributo top + posição y na unidade de medida px (top: "+y+"px) e o atributo left + posição x na unidade de medida px (top: "+x+"px)
    t.setAttributeNode(att1) // Adicionando o atributo da variavel att1 no elemento da variavel t com o setAttributeNode
    t.setAttributeNode(att2) // Adicionando o atributo da variavel att2 no elemento da variavel t com o setAttributeNode
    document.body.appendChild(t) // Adicionando o elemento da variavel t(filho) no document.body(pai) com o appendChild
}

function controleTiro() { // Função para o controle do tiro 
    const tiros = document.getElementsByClassName("tiroJog") // Armazenando na variavel tiros o elemento da classe="tiroJog", assim controlando os tiros criados 
    const tam = tiros.length // Obtendo o tamanho da variavel tiros com o length(tiros.length) e armazenando na variavel tam, variavel tiros vai ser um array(vetor)
    for(let i=0; i < tam; i++) { 
        // For para percorrer o tam(quantidade de tiros) 
        if(tiros[i]) { // Verificando se tiros na posição i  existem (tiros[i]), lembrando que tiros é um array, ou seja se for verdadeiro executa os comandos abaixo
            let pt = tiros[i].offsetTop // Armazenando a posição de tiros (tiros[1]) pegando sua posição com a propriedade offsetTop ou seja na vertical
            pt-= velT // Armazenando na posição do tiro(pt) seu decremento menos a velocidade do tiro(velT) (pt = pt - velT), lembrando que no eixo y a parte de cima é negativa por isso tem que ser menos(-) assim o tiro vai para cima
            tiros[i].style.top = pt + "px" // Tiro que está na posição i no eixo y na tela (tiros[i].style.top) recebe a posição do tiro com a unidade de medida px(pt + "px") 
            
            colisaoTiroBomba(tiros[i]) // Chamando a função colisaoTiroBomba passando como parametro o tiro na posição do indice (tiros[i])
           
            if(pt<0) { // Se posição do tiro for menor que 0 (pt<0)
                tiros[i].remove() // Remove os tiros das posições i(tiros[i]) com o remove()
            }
        }
    } 
}

function colisaoTiroBomba(tiro){ 
    console.log(tiro)
    // Função que vai controlar a colisao do tiro com a bomba, passando tiro como parametro para testar cada tiro ou seja para testar a colisão
    const tam = bombasTotal.length // Armazenando na variavel tam o tamanho de bombasTotal com o length, ou seja está pegando o numeros de bombas que ja foi definido
    for(let i=0; i < tam; i++) { // For para percorrer o tam(quantidade de bombas)
        if(bombasTotal[i]) { // Verificando se bombasTotal na posição i existem (bombasTotal[i]), lembrando que bombasTotal é um array, ou seja se for verdadeiro executa os comandos abaixo
            if( // Verificando se..
                (   
                    //CIMA DO TIRO COM BAIXO DA BOMBA
                    (tiro.offsetTop<=(bombasTotal[i].offsetTop+40))&& // a distância do tiro em direção ao top no eixo Y(tiro.offsetTop) for menor ou igual(<=) a distância da bomba no eixo Y + 40 (bombasTotal[i].offsetTop+40)! Colocamos + 40 para pegar a altura da bomba, assim podemos verificar se houve colisão na parte debaixo da bomba por pegar sua altura, lembrando que no eixo y para baixo é positivo por isso somamos assim pegando a parte debaixo da bomba e (&&)..
                    //BAIXO DO TIRO COM CIMA DA BOMBA
                    ((tiro.offsetTop+6)>=(bombasTotal[i].offsetTop)) // posição do tiro no top, eixo Y, + 6 que é a altura da tiro lembrando que no eixo y para baixo é positivo, dessa forma podemos verificar a parte debaixo do tiro (tiro.offsetTop+6) for maior ou igual(>=) posição top da bomba no eixo y
                )
                && // e (&&)
                (
                    //ESQUERDA DO TIRO COM A DIREITA DA BOMBA
                    (tiro.offsetLeft<=(bombasTotal[i].offsetLeft+24))&& // posição left do tiro, eixo X (tiro.offsetLeft) for menor ou igual(<=) a distância da bomba no eixo X + 24 (bombasTotal[i].offsetTop+24)! Colocamos + 24 para pegar a largura da bomba, assim podemos verificar se houve colisão, lembrando que no eixo x para esquerda é negativo por isso somamos assim pegando a largura da bomba e (&&)..
                     //DIREITA DO TIRO COM ESQUERDA DA BOMBA
                    ((tiro.offsetLeft+6)>=(bombasTotal[i].offsetLeft)) // posição do tiro no left, eixo X, + 6 que é a largura do tiro lembrando que no eixo x para esquerda é positivo, dessa forma podemos verificar a largura do tiro(tiro.offsetLeft+6) for maior ou igual(>=) posição left da bomba no eixo X
                )
            ){ 
                criaExplosao(1,bombasTotal[i].offsetLeft-25,bombasTotal[i].offsetTop) // chamando a função criaExplosão passando por parametro o tipo da explosão que ja foi definida (1 = Explosão da colisao da bomba e da nave), a posição x pegando a posição da bomba (bombasTotal[i].offsetLeft-25)descontando o tamanho -25 para a explosao sair centralizada e a posição y pegando a posição da bomba (bombasTotal[i].offsetTop) 
                bombasTotal[i].remove() // Se os testes acima foram verdadeiros removemos o elemento bomba
                tiro.remove() // Removendo os elementos tiros
            }
        }
    }
}

function criaExplosao(tipo,x,y) { // Função para criar as explosões passando por parametro qual vai ser o tipo da explosao, tipo ==1 vai ser quando o tiro atinge a bomba e tipo == 2 vai ser quando a bomba atinge o chao, e tambem as posições x e y
    if(document.getElementById("explosao" + (ie-4))) { // Verificando se explosao+  (ie-4) existe para poder remover os elementos, ou seja vai remover depois de 4 elementos criados
        document.getElementById("explosao" + (ie-4)).remove() // Removendo as explosões com o remove(), começando a remover quando tiver + de 4 (ie-4 = indice da explosão criada - 4), dessa forma a explosão não vai ser removida antes de ser criada
    }
    let explosao = document.createElement("div") // Criando o elemento div e armazenando na let explosao
    let img = document.createElement("img") // Criando o elemento img e armazenando na let img
    let som = document.createElement("audio") // Criando o elemento audio armazenando na let som
    //Atributos para div
    let att1 = document.createAttribute("class") // Criando o atributo class e armazenando na let att1
    let att2 = document.createAttribute("style") // Criando o atributo style armazenando na let att2
    let att3 = document.createAttribute("id") // Criando o atributo id e armazenando na let att3
    // Atributo para img
    let att4 = document.createAttribute("src") // Criando o atributo src e armazenando na let att4
    // Atributos para audio
    let att5 = document.createAttribute("src") // Criando o atributo src e armazenando na let att5
    let att6 = document.createAttribute("id") // Criando o atributo id e armazenando na let att6
    att3.value = "explosao" + ie // Atribuindo um valor ao atributo id(att3.value) o indice da explosao (ie) foi definido inicialmente com 0 então id="explosao0", atribuindo o valor fora do if pois vai servir para as duas explosões
    if(tipo==1) { // Se tipo==1 executa os comandos abaixo
        att1.value="explosaoAr" // Atribuindo um valor ao atributo class(att2.value) = class="explosaoAr"
        att2.value="top:"+y+"px;left:"+x+"px;" // Atribuindo um valor ao atributo style(att2.value) = style."top:"+y+"px;left:"+x+"px;"
        att4.value="nave/explosao_ar.gif?" + new Date() // Atribuindo um valor ao atributo src(att4.value) = src="nave/explosao_ar.gif"! Precisamos usar "nave/explosao_aro.gif?" + new Date() para gerar uma nova animação da gif a cada explosao,  usando o ? depois do nome do gif (explosao_ar.gif?) para falar que é uma imagem diferente, alem de precisar adicionar um valor sendo ele diferente para cada imagem por isso usamos o (new Date() para retonar a data e a hora com segundos e o milesegundos, assim não usando a mesma imagem a cada chamada pq valor vai ser diferente 
    } else { // Senão executa os comandos abaixo
        att1.value="explosaoChao" // Atribuindo um valor ao atributo class (att1.value) = class="explosaoChao"
        att2.value="top:"+(tamTelaH-57)+"px;left:"+(x-17)+"px;" // Atribuindo um valor ao atributo style(att2.value) = style."top:"+(tamTelaH-57)+"px;left:"+(x-17)+"px;"! Top vai receber a posição tamTelaH-57 para pegar o tamanho da altura da tela que ja foi definido,  - 57 que é a altura da explosaoChao! Left vai receber na posição x -17 que é pra descontar o tamanho da bomba pra ficar centralizado pq bomba tem 40px e a explosão tem 57px
        att4.value="nave/explosao_chao.gif?" + new Date() // Atribuindo um valor ao atributo src(att4.value) = src="nave/explosao_chao.gif"! Precisamos usar "nave/explosao_chao.gif?" + new Date() para gerar uma nova animação da gif a cada explosao,  usando o ? depois do nome do gif (explosao_chao.gif?) para falar que é uma imagem diferente, alem de precisar adicionar um valor sendo ele diferente para cada imagem por isso usamos o (new Date() para retonar a data e a hora com segundos e o milesegundos, assim não usando a mesma imagem a cada chamada pq valor vai ser diferente 
    }
    att5.value="nave/exp1.mp3" // Atribuindo um valor ao atributo src(att5.value) = src="nave/exp1.mp3", Colocando fora do if pois vou usar para as duas explosões
    att6.value="som" + isom // Atribuindo um valor ao atributo id(att6.value) o indice do som da explosao (isom) foi definido inicialmente com 0 então id="som0"
    explosao.setAttributeNode(att1) // Adicionando o atributo att1 com o setAttributoNode ao elemento da let explosao
    explosao.setAttributeNode(att2) // Adicionando o atributo att2 com o setAttributoNode ao elemento da let explosao
    explosao.setAttributeNode(att3) // Adicionando o atributo att3 com o setAttributoNode ao elemento da let explosao
    img.setAttributeNode(att4) // Adicionando o atributo att4 com o setAttributoNode ao elemento da let img
    som.setAttributeNode(att5) // Adicionando o atributo att5 com o setAttributoNode ao elemento da let som
    som.setAttributeNode(att6) // Adicionando o atributo att6 com o setAttributoNode ao elemento da let som
    explosao.appendChild(img) // Adicionando o elemento filho(img) com o appenChild ao pai (explosao)
    explosao.appendChild(som) // Adicionando o elemento filho(som) com o appenChild ao pai (explosao)
    document.body.appendChild(explosao) // Adicionando o elemento filho(som) com o appenChild ao pai documemt.body
    document.getElementById("som" + isom).play() // Pegando o elemento som atraves do seu id("som" + isom) com o getElementById e usando play() para poder tocar 
    ie++ // Cada vez que criar uma explosao vou somar +1 (ie = ie + 1)
    isom++ // Cada vez que criar o som da explosao vou somar +1 (isom = isom + 1)
}

function controlaJogador() { // Função para controlar a movimentação do jogador
    //Variaveis de posicionamento
    pjy+=diryJ*velJ // incrementando na posição do jogador no eixo Y (pjy+=) a direção do jogador no eixo Y(diryJ) seu valor ja foi definido nas funções acima, multiplicado pela velocidade do jogador(*velJ) assim incrementando a cada interação, movendo de acordo com a direção e velocidade
    pjx+=dirxJ*velJ // incrementando na posição do jogador no eixo X (pjx+=) a direção do jogador no eixo X(dirxJ) seu valor ja foi definido nas funções acima, multiplicado pela velocidade do jogador(*velJ) assim incrementando a cada interação, movendo de acordo com a direção e velocidade
    // Elemento que associa o objeto da tela (jog) para fazer a movimentação
    jog.style.top = pjy + "px" // Posicionando o jogador na tela no eixo y usando o style.top recebendo a posição Y(pjy) + a unidade de medida(px), assim fazendo a movimentação na tela 
    jog.style.left = pjx + "px" // Posicionando o jogador na tela no eixo x usando o style.left recebendo a posição X(pjx) + a unidade de medida(px), assim fazendo a movimentação na tela 
    
}

function gerenciaGame() { // Função para controlar a vitoria e a derrota do jogo
    barraPlaneta.style.width = vidaPlaneta + "px" // Associando o valor de vidaPlaneta em px com a largura da barraPlaneta
    if(contBombas<=0) { // Verificando se contBombas é menor ou igual a 0(contBombas<=0) assim fazendo o jogador ganhar, lembrando que contBombas foi definido com 150, quando esse numero chegar a 0 ou for menor como foi definido, o jogo chega ao fim e executa os comandos abaixo
        jogo=false // Definindo jogo como false, assim o jogo vai parar
        clearInterval(tmpCriaBomba) // Limpando o setInterval com o clearInterval do tmpCriaBomba que foi definido com um tempo para criar as bombas, lembrando que clearInterval remove o setInterval criado
        telaMsg.style.backgroundImage = "url('nave/vitoria.jpg')" // Atribuindo a telaMsg a imagem de vitoria para aparecer na div atraves do style.backgroundImage
        telaMsg.style.display = "block" // Atribuindo na telaMsg o display block com o style.display, dessa forma o conteudo da div vai aparecer na tela! Lembrando que iniciamente tinha sido definido com display none no css
        let win = document.createElement("audio")
        let div2 = document.createElement("div")
        let attl2 = document.createAttribute("src")
        let class4 = document.createAttribute("id")
        attl2.value="nave/acabou.mp3"
        class4.value="song2"
        win.setAttributeNode(class4)
        win.setAttributeNode(attl2)

        div2.appendChild(win)

        telaMsg.appendChild(div2)
        
        document.getElementById("song2").play()
    
    }
    if(vidaPlaneta <= 0) { // Verificando se vidaPlaneta é menor ou igual a 0(vidaPlaneta<=0) assim fazendo o jogador perder, lembrando que vidaPlaneta foi definido com 300, quando esse numero chegar a 0 ou for menor como foi definido, o jogo chega ao fim e executa os comandos abaixo
        jogo=false // Definindo jogo como false, assim o jogo vai parar
        clearInterval(tmpCriaBomba) // Limpando o setInterval com o clearInterval do tmpCriaBomba que foi definido com um tempo para criar as bombas, lembrando que clearInterval remove o setInterval criado
        telaMsg.style.backgroundImage = "url('nave/derrota.jpg')" // Atribuindo a telaMsg a imagem da derrota para aparecer na div atraves do style.backgroundImage
        telaMsg.style.display = "block" // Atribuindo na telaMsg o display block com o style.display, dessa forma o conteudo da div vai aparecer na tela! Lembrando que iniciamente tinha sido definido com display none no css
        let lose = document.createElement("audio")
        let div = document.createElement("div")
        let attl = document.createAttribute("src")
        let class2 = document.createAttribute("id")
        attl.value="nave/lose.mp3"
        class2.value="song"
        lose.setAttributeNode(class2)
        lose.setAttributeNode(attl)

        div.appendChild(lose)

        telaMsg.appendChild(div)
        
        document.getElementById("song").play()
        
    }
}

function gameLoop() {
    if(jogo==true) { // se jogo for true, ou seja se ele estiver iniciado, vai executar as funções de controle abaixo
        //Funções de Controle
        controlaJogador() // Chamando a função controlaJogador() que verifica a direção e posiciona o elemento da tela de acordo com as posições(pjy e pjx)   
        controleTiro() // chamando a função controleTiro() que controla a posição dos tiros e remove quando sai da tela
        controlaBomba() // chamando a função controlaBomba() que controla a posição das bombas, subtrai pontos quando a bomba toca no chão e remove quando sai da tela   
    }
        gerenciaGame() // Chamando a função gerenciaGame() que vai controlar a vitoria e a derrota do game mostrando a imagem na tela com uma mensagem
        frames=requestAnimationFrame(gameLoop) // Armazenando na variavel frames o requestAnimationFrame que realiza uma animação passando por parametro a função callback que vai repetir, nesse caso chamando ela mesmo(gameLooo) de uma forma recursiva

}

function reinicia() {
    bombasTotal = document.getElementsByClassName("bomba") // Armazenando na variavel bombasTotal todos os elementos(bombas) que possuem a class="bomba" com o getElementsByClasseName
    const tam = bombasTotal.length // Armazenando na const tam o tamanho de bombasTotal com o length, ou seja está pegando o numeros de bombas que ja foi definido
    for(let i=0; i < tam; i++) { // for para percorrer as bombas como definido na const tam que foi armazenado sua quantidade e verificar..
        if(bombasTotal[i]) { //..se bombasTotal na posição i(bombasTotal[i]) existir executa a rotina abaixo
            bombasTotal[i].remove() // Removendo os elementos bombasTotal[i] com o remove
        }    
    }
    telaMsg.style.display = "none" // Ocultando a telaMsg quando o jogo reiniciar usando o style.disply="none"
    clearInterval(tmpCriaBomba) // Zerando o intervalo com o clearInterval da variavel tmpCriaBomba passado por parametro onde esta armazenado o SetInterval, antes de chama-la novamente! Isso vai acontecer se caso o setInterval ja tenha sido criado
    cancelAnimationFrame(frames) // Cancelando a animação com o cancelAnimationFrames que está armazenanda na variavel frames passada por parametro! Dessa forma evitando que a animação dobre sua velocidade pois no final chamamos a função gameLoop() que ja está armazenada na variavel frames que executa o requestAnimationFrame ou seja antes de chamar novamente o gameLoop temos que cancelar o frames que esta armazenado o resquestAnimationFrame existente
    vidaPlaneta = 300 // Voltando a vida do planeta
    pjx = tamTelaW / 2 - 20// Posicionando o jogador no eixo X no centro (pjx) usando a metade do tamanho da largura da tela(tamTelaW/2), assim para o jogador vai ficar no meio da tela
    pjy = tamTelaH / 2 - 20// Posicionando o jogador no eixo Y no centro (pjy) usando a metade do tamanho da altura da tela(tamTelaH/2), assim para o jogador vai ficar no meio da tela
    jog.style.top = pjy + "px" // Posicionando o jogador na tela no eixo y usando o style.top recebendo a posição Y(pjy) + a unidade de medida(px)
    jog.style.left = pjx + "px" // Posicionando o jogador na tela no eixo x usando o style.left recebendo a posição X(pjx) + a unidade de medida(px)
    contBombas = 20 // Reiniciando as bombas
    jogo = true // Definindo jogo como true para iniciar o jogo
    tmpCriaBomba = setInterval(criaBomba,1700) // tmpCriabomba vai receber o setInterval que repete chamadas de funções passadas por parameto junto com um tempo fixo de intervalo entre elas(criaBomba,1700)! O tempo passado é por milésimos nesse caso 1700= 1,7 segundos, isto significa que a função criaBomba será executada assim cada vez que atingir 1,7 segundos
    let play = document.createElement("audio")
        let div1 = document.createElement("div")
        let attl1 = document.createAttribute("src")
        let class3 = document.createAttribute("id")
        attl1.value="nave/bora.mp3"
        class3.value="song1"
        play.setAttributeNode(class3)
        play.setAttributeNode(attl1)

        div1.appendChild(play)

        telaMsg.appendChild(div1)
        
        document.getElementById("song1").play()
    
    gameLoop() // Chamando a função gameLoop para iniciar a animação 
}

function inicia() {
    jogo = false // Definindo jogo como false para iniciar o jogo parado
    tamTelaH = window.innerHeight // Armazenando a altura da tela na variavel(tamTelaH) usando o window.innerHeight para saber a altura
    tamTelaW = window.innerWidth // Armazenando a largura da tela na variavel(tamTelaH) usando o window.innerWidth para saber a largura
    dirxJ=diryJ=0 // Iniciando as variaveis da direção do jogador no eixo X(dirxJ) e no eixo Y(diryJ) com o valor 0
    pjx = tamTelaW / 2 - 20// Armazenando na variavel da posição no jogador no eixo X(pjx) a metade do tamanho da largura da tela(tamTelaW/2), assim para o jogador ficar no meio da tela! Subtraio -20 pois a largura do jogador é 40px assim ficando exatamento no meio
    pjy = tamTelaH / 2 - 20// Armazenando na variavel da posição no jogador no eixo Y(pjy) a metade do tamanho da altura da tela(tamTelaH/2), assim para o jogador ficar no meio da tela! Subtraio -20 pois a altura do jogador é 40px assim ficando exatamento no meio
    velJ=velT = 5 // Definindo a velocidade do jogador(velJ) e a velocidade do tiro (velT)
    jog=document.getElementById("naveJog") // Associando o jogador(jog) com o elemento da pagina atraves do getElementById para poder manipula-lo
    jog.style.top = pjy + "px" // Posicionando o jogador na tela no eixo y usando o style.top recebendo a posição Y(pjy) + a unidade de medida(px)
    jog.style.left = pjx + "px" // Posicionando o jogador na tela no eixo x usando o style.left recebendo a posição X(pjx) + a unidade de medida(px)
    contBombas = 150 // Inicializando a contagem com 150 bombas
    velB = 3 // Definindo a velocidade da bomba(velB)
    vidaPlaneta = 300 // Definindo a vida do Planeta
    barraPlaneta = document.getElementById("barraPlaneta") // Armazenando na var barraPlaneta o elemento do id=barraPlaneta
    barraPlaneta.style.width = vidaPlaneta + "px" // Definindo a largura do barraPlaneta com o  valor de vidaPlaneta com a unidade de medida px assim ficando com o mesmo tamanho, ou seja associando o valor de vidaPlaneta com a largura da barraPlaneta que vai ser 300px
    ie = 0 // Definindo o indice da explosao(ie) para começar com 0
    isom = 0 // Definindo o indice do som da explosao(isom) para começar com 0
    telaMsg = document.getElementById("telaMsg") //Armazenando na var telaMsg o elemento do id=telaMsg
    telaMsg.style.backgroundImage = "url('nave/intro.jpg')" // Atribuindo a telaMsg a imagem da intro para aparecer na tela atraves do style.backgroundImage
    telaMsg.style.display = "block" // Atribuindo na telaMsg o display block com o style.display, dessa forma o conteudo da div vai aparecer na tela! Lembrando que iniciamente tinha sido definido com display none no css
    document.getElementById("btnJogar").addEventListener("click", reinicia) // Adicinando o evento de click com o addEventListener no elemento do id="btnJogar" que é um button, click está associado na função reinicia ou seja quando clicar no elemento chama a função reinicia()
    
}

window.addEventListener("load", inicia) // Adicionando um evento de load para iniciar a funçao inicia quando a pagina for carregada, assim iniciando os componentes e variaveis que estão la dentro
document.addEventListener("keydown", teclaDw) //Adicionando o evento keydown(evento que acontece quando a tecla é pressionada) a função teclaDw, ou seja chama a função quandoa a tecla é pressionada
document.addEventListener("keyup", teclaUp) //Adicionando o evento keyup(evento que acontece quando a tecla deixa de ser pressionada) a função teclaUp, ou seja chama a função quandoa a tecla deixa de ser pressionada