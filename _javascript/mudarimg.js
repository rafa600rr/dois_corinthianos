// JavaScript Document

var NAp          = 0;
var Apoio        = new Array( 'img2.jpg', 'img3.jpg', 'img4.jpg');
var ContApoio    = 2;
var lins    = 1;
var cols    = 1;

function ChangeImg()
{
var lin, col, nm_img
for (lin=0; lin< lins; lin++)
{
 for(col=0; col<cols; col=col+1)
 {
   if (NAp < ContApoio )
   {
   NAp = NAp + 1;
   }
    else
   {
   NAp = 0;
   }
 
    nm_img="imgapoio["+lin+"]["+col+"]"
    if(document[nm_img])
    {
      document[nm_img].src    = "_imagens/" + Apoio[NAp];
   }
 }  
}
   
    var x = setTimeout ("ChangeImg()", 5000);
}
var x = setTimeout ("ChangeImg()", 3600);