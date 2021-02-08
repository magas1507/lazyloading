//variables del contador
let totalImages = 0
let cargaImages = 0
//crear funcion registrar imagen
//se instancia con new, intersectionObserver recibe(funcionQueHacerPorimagen(me pasa todas las entradas que está escuchando))
const isIntersecting= (entry) => {

  return entry.isIntersecting
}

//esta accion trae como segundo argumento el entry
const loadImagen = (entry) =>{
  
  //imagen.src=`https://randomfox.ca/images/${random()}.jpg`
  const container = entry.target // es el contenedor()
  // le ahorramos tareas al navegador indicandole que como la imagen es el primer hijo
  const imagen = container.firstChild
  console.log(imagen)
  const url = imagen.dataset.src

  imagen.src = url;
  imagen.onload = () =>{
    cargaImages++
    contImagen()
    
  }  
  
  //tenemos que decirle que deje de observar el nodo actual
  //para que cuando regresemos le scroll no sea contado 

  observer.unobserve(container)
}
const observer = new IntersectionObserver((entries) =>{
  entries
    .filter(isIntersecting)
    .forEach(loadImagen)
})
export const registerImage = (imagen) => {
  //intersectionobserver -> observer(imagen)
observer.observe(imagen)
  totalImages++
  contImagen()
}

function contImagen() {
  console.log(`⚪️ Total Imágenes: ${totalImages}`);
  console.log(`🟣 Imágenes cargadas: ${cargaImages}`);
  console.log("--------------------------------------");
}