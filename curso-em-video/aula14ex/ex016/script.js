function contar () {
    var ini = document.getElementById('inicio')
    var end = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('resultado')
    if (ini.value.length == 0) {
        window.alert('[ERR0] Digite um valor para ínicio')
        res.innerHTML = 'Impossível contar!'
    } else if (end.value.length == 0) {
        window.alert('[ERR0] Digite um valor para fim')
        res.innerHTML = 'Impossível contar!'
    } else if (pas.value.length == 0) {
        window.alert('[ERR0] Digite um valor para passo')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando:<br>'
        var i = Number(ini.value)
        var f = Number(end.value)
        var p = Number(pas.value)
        if (p <= 0) {
            window.alert('Passo inválido! CONSIDERANDO PASSO 1')
            p = 1
        }
        if (i < f) {
            // contagem crescente
            for (c = i; c <= f; c += p)
            res.innerHTML += ` ${c} \u{1F911}`
        } else {
            // contagem regressiva
            for (c = i; c >= f; c -= p)
            res.innerHTML += ` ${c} \u{1F911}`         
        }
        res.innerHTML += `  \u{1F973}`
        
    }
}