


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
//calculate Rhombus
function calculateRhombus(){
    const d1 = getInput('d1')
    const d2= getInput('d2')
    const result = 0.5*d1*d2
    const setId = setValue('Rhombus', result,'setAttribute')
    
    return setId
    
}
//calculate pentagon
function CalculatePentagon(){
    const p = getInput('p')
    const b = getInput('b')

   
    const result = 0.5*p*b
    
    const setId = setValue('Pentagon', result,'setAttribute')
    
    return setId
    
}

//calculate Ellipis
function calculateEllips(){
    const a = getInput('a')
    const b= getInput('b')
    const result = 1.41*a*b
    const setId = setValue('Ellipse', result,'setAttribute')
    
    return setId
    
}


//input function
function getInput (UserInput){
    const getID =document.getElementById(UserInput)
    const getValue = getID.value
    const parseflot = parseFloat(getValue)
    return parseflot

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