
const imagenes=document.querySelectorAll('img');
const btnTodos=document.querySelector('.todos');
const btnPan=document.querySelector('.pan');
const btnGalletas=document.querySelector('.galletasydulces');
const btnBebidas=document.querySelector('.bebidas');
const btnPasteles=document.querySelector('.pasteles');
const contenedorPlatillos=document.querySelector('.platillos');

document.addEventListener('DOMContentLoaded',()=>{
    iniciarApp();
    platillos();
});


const iniciarApp=()=>{
    console.log("Hola Bienvenido a mi primer proyecto");
    console.log('Iniciando app...');

}

const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            const imagen = entry.target;
            imagen.src = imagen.dataset.src;
            observer.unobserve(imagen);
        }
    });
});


imagenes.forEach((imagen)=>{
   
    observer.observe(imagen);
});

const platillos =()=>{
    let platillosArreglo = [];
    const platillos = document.querySelectorAll('.platillo');
   
    platillos.forEach((platillo)=>{
        platillosArreglo = [...platillosArreglo, platillo];
    });

   const panes = platillosArreglo.filter(pan=> pan.getAttribute('data-platillo') === 'pan');
   const galletasydulces =platillosArreglo.filter(galletasydulces=> galletasydulces.getAttribute('data-platillo') === 'galletasydulces');
   const bebidas = platillosArreglo.filter(bebidas=> bebidas.getAttribute('data-platillo') === 'Bebidas');
   const pasteles = platillosArreglo.filter(pasteles=> pasteles.getAttribute('data-platillo') === 'pasteles');
   
   mostrarPlatillos(panes, galletasydulces, bebidas, pasteles, platillosArreglo);
}

const mostrarPlatillos =(pan, galletasydulces, bebidas, pasteles, todos)=>{
    btnPan.addEventListener('click', ()=>{
        limpiarPlatillos(contenedorPlatillos);
        pan.forEach((pan)=> contenedorPlatillos.appendChild(pan));
    });

    btnGalletas.addEventListener('click', ()=>{
        limpiarPlatillos(contenedorPlatillos);
        galletasydulces.forEach((galletasydulces)=> contenedorPlatillos.appendChild(galletasydulces));
    });

    btnBebidas.addEventListener('click', ()=>{
        limpiarPlatillos(contenedorPlatillos);
        bebidas.forEach((bebidas)=> contenedorPlatillos.appendChild(bebidas));
    });

    btnPasteles.addEventListener('click', ()=>{
        limpiarPlatillos(contenedorPlatillos);
        pasteles.forEach((pasteles)=> contenedorPlatillos.appendChild(pasteles));
    });

    btnTodos.addEventListener('click', ()=>{
        limpiarPlatillos(contenedorPlatillos);
        todos.forEach((todos)=> contenedorPlatillos.appendChild(todos));
    });
            
       

    }

const limpiarPlatillos =(contenedor)=>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}