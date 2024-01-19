const apiKey = "a0b6939c17aed01809e79f629274fb67"
const apiCountryURL = "https://countryflagsapi.com/png/"

const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search")

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const umidityElement = document.querySelector("#umidity span")
const windElement = document.querySelector("#wind span")

const weatherContainer = document.querySelector("#weather-data")

// Função para acessar os dados a api
const getWeatherData = async(city) => { // Usando async por se tratar de api podendo demorar um tempo para responder, assim podendo fazer a espera para acessar os dados das mesmas
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br` // const para armazenar a api, usando q=${city} para determinar a cidade, &units=metric para definar a unidade de medida, &appid=${apiKey} sendo a API e &lang=pt_br para buscar os dados em portugues br

    const res = await fetch(apiWeatherURL) // Esperando os dados da api fecth apiWeatherURL armazrnando em res
    const data = await res.json() // Transformando os dados em objeto Javascript armazendo em data

    return data // retornando os dados
}


// Função para exibir os dados da api 
const showWeatherData = async (city) => {
    const data = await getWeatherData(city) // esperando os dados da função assincrona getWeatherData

    cityElement.innerText = data.name // Mudando o texto da cidade no dom(cityElement.innerText) obtendo o mesmo nome dos dados (data.name)

    tempElement.innerText = parseInt(data.main.temp) // Usando parseInt para mostrar o numero interio do grau de temperatura

    descElement.innerText = data.weather[0].description

    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`) // Usando o setAttribute para mudar o src, assim obtendo o icone de acordo com a previsão do tempo

    countryElement.setAttribute("src", apiCountryURL + data.sys.country) // Mudando a bandeira do pais

    umidityElement.innerText = `${data.main.humidity}%`

    windElement.innerText = `${data.wind.speed}km/h`

    weatherContainer.classList.remove("hide") // Removendo a classe hide do weatherContainer
}

// adicionando um evento de click ao button (searchBtn)
searchBtn.addEventListener("click", (e)=> { 
    e.preventDefault() // usando preventDefault para tirar o comportamento padrão do button que é enviar um formulário para realizar os códigos abaixo 

    const city = cityInput.value // Armazenando na const city o valor digitado no cityInput

    showWeatherData(city) // Chamando a função showWetherData com o parametro que foi definido para pegar o valor do input(city)
})

//adicionando evento de keyup para poder pressionar a tecla enter do input (cityInput)
cityInput.addEventListener("keyup", (e)=> {
    if(e.code === "Enter"){ // Se codigo da tecla for Enter
        const city = e.target.value // pegando o valor do input

        showWeatherData(city) // chamando a função showWeatherData
    }
})