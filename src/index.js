import { registerImage } from './lazy'
//crear imagen
/* referencia
<div class="p-4">
  <img 
     class="mx-auto"
      width="320" 
      src="https://randomfox.ca/images/2.jpg" alt=""
  >
</div>

*/
const maximum = 122
const minimum = 1
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum           
//me dara un nodo de lo que yo considero que es una imagen
const createImagenNode = () => {
  //creamos el contenedor
  const container = document.createElement("div")
  container.className = "p-4"

  const imagen = document.createElement("img")
  imagen.className = "mx-auto rounded-md bg-gray-300"
  imagen.width = "320"
  imagen.src =
  "data:imagen/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=";
  imagen.dataset.src=`https://randomfox.ca/images/${random()}.jpg`

  //insertamos la imagen en el contenedor 
  container.appendChild(imagen)
  return container;
}

const nuevaImagen = createImagenNode()
const mountNode = document.getElementById('images')
const addButton = document.querySelector("button")
addButton.className = 'text-white px-3 py-2 rounded-lg bg-gray-900 focus:outline-none';
const addImagen = () => {
  const newImage = createImagenNode()
  mountNode.appendChild(newImage)
  registerImage(newImage);
}
addButton.addEventListener("click",addImagen)


const removeButton = document.querySelector('#reset');
removeButton.className = 'text-white px-3 py-2 rounded-lg bg-gray-900 focus:outline-none';

const removeImage = () => {
    if (mountNode.hasChildNodes()) {
        const container = mountNode.lastElementChild;
        mountNode.removeChild(container);
    }
}

removeButton.addEventListener('click', removeImage);
