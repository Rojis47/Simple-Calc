const allButtons = Array.from(document.getElementsByClassName('num'))

console.log("allButtons", allButtons)
const displayScreen = document.getElementById('display-screen')
console.log("displayScreen", displayScreen)


allButtons.map((btn) => {
    btn.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                displayScreen.innerText = ''
                break
            case '<--':
                if (displayScreen.innerText) {
                    displayScreen.innerText = displayScreen.innerText.slice(0, -1)
                }
                break
            case '=':
                try {
                    displayScreen.innerText = eval(displayScreen.innerText)
                } catch (error) {
                    displayScreen.innerText = 'Error'
                }
                break
            default:
                displayScreen.innerText += e.target.innerText
        }
    })
})