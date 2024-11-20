
    const span = document.querySelector("#password")
    const inputlength = document.querySelector("#length")
    let passwordLength = document.querySelector(".controls span")
    let btngenerate = document.querySelector("#generate")
    let upper = document.querySelector("#mayusculas")
    let lower = document.querySelector("#minusculas")
    let number = document.querySelector("#numeros")
    let symbol = document.querySelector("#simbolos")
    let warningMessage = document.querySelector("#warningMessage")
    let weakIndicator = document.querySelector("#weak")
    let moderateIndicator = document.querySelector("#moderate")
    let strongIndicator = document.querySelector("#strong")
    let veryStrongIndicator = document.querySelector("#very-strong")
    let strenghtWeak = document.querySelector("#strengh-weak")
    let strenghtMedium = document.querySelector("#strengh-medium")
    const copyBtn = document.getElementById("copy-btn")
    const passwordDisplay = document.getElementById("password")

    btngenerate.addEventListener("click", generateRandomNumber)
   

    function generateRandomNumber () {
        const caracterNumbers = Number(inputlength.value)
        const numbers = "0123456789"
        const letras = "abcdefghijklmnopqrstuvyz"
        const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVXYZ"
        const especiales = "!#$&/_."

        let combinaciones = ""
        let password = ""

        if (upper.checked) {
            combinaciones += mayusculas
        }
        if (lower.checked) {
            combinaciones += letras
        }
        if (number.checked) {
            combinaciones += numbers
        }
        if (symbol.checked) {
            combinaciones += especiales
        }

        if (!upper.checked && !lower.checked && !number.checked && !symbol.checked) {
            warningMessage.style.display = "block"
            return  
        } else {
            warningMessage.style.display = "none"
        }

    
        for (let i = 0; i < caracterNumbers; i++) {
            const randomIndex = Math.floor(Math.random() * combinaciones.length)
            const randomChar = combinaciones[randomIndex]
            password += randomChar
        }

        span.innerText = password    
        
        
        updatePasswordStrength(password.length)
        displayPasswordStrengthMessage(password.length)
}

    function updatePasswordStrength(passwordLength){

    weakIndicator.classList.remove("weak");
    moderateIndicator.classList.remove("moderate");
    strongIndicator.classList.remove("strong");
    veryStrongIndicator.classList.remove("very-strong");

  if (passwordLength >= 4 && passwordLength <= 8) {
    weakIndicator.classList.add("weak")
    moderateIndicator.classList.add("inactive")
    strongIndicator.classList.add("inactive")
    veryStrongIndicator.classList.add("inactive")
  } else if (passwordLength >= 9 && passwordLength <= 12) {
    weakIndicator.classList.add("weak")
    moderateIndicator.classList.add("moderate")
    strongIndicator.classList.add("inactive")
    veryStrongIndicator.classList.add("inactive")
  } else if (passwordLength >= 13 && passwordLength <= 16) {
    weakIndicator.classList.add("weak")
    moderateIndicator.classList.add("moderate")
    strongIndicator.classList.add("strong")
    veryStrongIndicator.classList.add("inactive")
  } else if (passwordLength > 16) {
    weakIndicator.classList.add("weak")
    moderateIndicator.classList.add("moderate")
    strongIndicator.classList.add("strong")
    veryStrongIndicator.classList.add("very-strong")
  }
} 
    function valor(value){
        console.log(value)
        passwordLength.textContent = value
    }
    
    function displayPasswordStrengthMessage(passwordLength) {
      let strengthMessage = ""
  
      if (passwordLength >= 4 && passwordLength <= 8) {
          strengthMessage = "débil"
      } else if (passwordLength >= 9 && passwordLength <= 12) {
          strengthMessage = "moderada"
      } else if (passwordLength >= 13 && passwordLength <= 16) {
          strengthMessage = "fuerte"
      } else if (passwordLength > 16) {
          strengthMessage = "muy fuerte"
      }
  
      const messageElement = document.querySelector("#password-strength-message");
      messageElement.innerText = strengthMessage;
  }

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordDisplay.textContent)
  })



