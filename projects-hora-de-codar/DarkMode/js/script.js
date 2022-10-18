const changeThemeBtn = document.querySelector("#change-theme")

const toggleDarkMode = () => document.body.classList.toggle("dark") // Função para dark mode

//Load ligth or dark mode

const loadTheme = () => {
    const darkMode = localStorage.getItem("dark") // Pegando o valor da key "dark" com o getItem no localStorage, armazenado na const darkMode

    if(darkMode) { // verificando se darkMode existe
        toggleDarkMode() // Se existir chama a function toggleDarkmode
    }
}

loadTheme() // Chamando a function loadTheme

changeThemeBtn.addEventListener("change", () => {
  toggleDarkMode() // chamando a função dark mode que foi definida acima

  //Save or remove dark mode
  localStorage.removeItem("dark") // Removendo o tema dark, contido na class = "dark"

  if(document.body.classList.contains("dark")) { // if para verificar se o body contêm a class = "dark" 
    localStorage.setItem("dark",1) // Se existir armazena no localStorage com o setItem, usando uma key value("dark", 1)
  }
})
