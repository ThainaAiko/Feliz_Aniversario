var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL('aniversarioImagem.png', function(img) {
blockImagemgeObject = img;
blockImagemgeObject.scaleToWidth(700);
blockImagemgeObject.scaleToHeight(510);
blockImagemgeObject.set({
top:0,
	left:0
});
canvas.add(blockImagemgeObject);
});

}


function playSound(){
   x.play();
}
