const carouselGrande=document.getElementById("carouselGrande")
const points=document.querySelectorAll(".carrousel__point")

//Recorremos los puntos 
points.forEach((point, i)=>{
    //les damos un listener a cada uono de ellos
    points[i].addEventListener("click", (event)=>{

        //guardamos la posicion del punto
        let pointMarked=i
        //guardamos el calculo para saber la posicion de la imagen
        let calcPosImg = pointMarked*-16.66666666
         
        carouselGrande.style.transform = "translateX(" + calcPosImg + "%)";

        //recorremos los punos y le quitamos el activo
        points.forEach(point => {
            point.classList.remove("carrousel__point--active")
        });
        //le añadimos su clase active al que se haya pulsado
        event.target.classList.add("carrousel__point--active")
    })
})

