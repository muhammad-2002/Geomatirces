//input function
function getInput (UserInput){
    const getID =document.getElementById(UserInput)
    const getValue = getID.value
    const parseFloat = parseFloat(getValue)

}

//calculate Triangle

function calculateTriangle(){
    const base = getInput('triangle-base')
    const height = getInput('triangle-hight')
    const result = 0.5 * base * height

    console.log(result,"hellow")

}