

//input function
function getInput (UserInput){
    const getID =document.getElementById(UserInput)
    const getValue = getID.value
    const parseflot = parseFloat(getValue)
    return parseflot

}

//calculate Triangle

function calculateTriangle(){
    const base = getInput('triangle-base')
    const height = getInput('triangle-hight')
    const result = 0.5 * base * height
    const setId = setValue('Triangle-area', result,'setAttribute')
    return setId
    
}
//calculate Rectangle
function calculateRectangle(){
    const w = getInput('w')
    const I = getInput('I')
    const result = w*I
    const setId = setValue('Rectangle-Area', result,'setAttribute')
    
    return setId
    
}
//calculate Parallelogram
function calculateParallelogram(){
    const b = getInput('b')
    const h = getInput('h')
    const result = b*h
    const setId = setValue('Parallelogram-Area', result,'setAttribute')
    
    return setId
    
}

//set value
function setValue(id,text,area){
    const getId = document.getElementById(id).innerHTML = text 
    const areaSet =document.getElementById(area)
    const newDiv =document.createElement('div')
    const newHeading = document.createElement('h1')
    newDiv.appendChild(newHeading)
    areaSet.appendChild(newDiv)
    newHeading.innerText = getId   
    return getId

}