function mostrarAlerta() {
  alert("Tu carrito está vacio");
}



function enviarMensaje() {
  alert("Gracias por tus comentarios");
}


function carrito() {
  alert("Se agregó a tu carrito");
}


function newsletter() {
  alert("Tu email ha sido ingresado");
}


$(document).ready(function() {
    $(".fancybox-media")
        .attr('rel', 'media-gallery')
        .fancybox({
            openEffect : 'none',
            closeEffect : 'none',
            prevEffect : 'none',
            nextEffect : 'none',
            arrows : false,
            helpers : {
                media : {},
                buttons : {}
            },
            afterLoad : function() {
               
                if (this.href.indexOf('youtube.com') !== -1) {
                    this.href = this.href.replace('&autoplay=1', '?autoplay=1'); 
                }
                this.inner.find('iframe').attr('src', this.href); 
            }
        });
});
