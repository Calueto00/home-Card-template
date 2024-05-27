var mainImg = document.getElementById('imgMain');
var fotos = document.querySelectorAll("#catch");

fotos.forEach(function(foto){
    foto.addEventListener('click',function(){
        mainImg.src = this.src;
    });
});
 