// NO CAMBIES EL NOMBRE DE ESTA FUNCIÓN 
// Comenta la linea 5 y descomenta la linea 4 para utilziar nodemon o node en este archivo
// Regresa todo a como estaba para probar los tests
//function wordCounter (phrase) {
export function wordCounter (phrase) {
    let palabras = phrase.split(" ")
    console.log(palabras)
    let contador={}

    for (let p of palabras){
        if(contador[p] !== undefined){
            contador[p]++
        }else{
            contador[p]=1
        }
    }       
    console.log(contador)
    let a=[]
    for (let palabra in contador) {
        let objeto={
            
            word: palabra,
            count: contador[palabra]
            
        }
        a.push(objeto)
    }
    
    let mostrar = a.sort((x,y)=> y.count - x.count)
  
   
    console.log((mostrar[0]))

    return mostrar[0]
  
}


// Puedes hacer pruebas corriendo node o nodemon y el nombre de tu archivo descomentando esta linea
wordCounter("Juan es un desarrollador en Google, y como desarrollador trabaja en el área de tecnología y en el área de innovación.")