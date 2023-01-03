canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;
function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image; 
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown",mykeydown)

function mykeydown(e) {
keypressed=e.keyCode;
console.log(keypressed)

if ((keypressed>=97 && keypressed<=122)||(keypressed>=65 && keypressed<=90))
{
    alphabetkey()
    document.getElementById("key").innerHTML="You pressed Alphabet key"
}

if (keypressed>=48 && keypressed<=57)
{
    numberkey()
    document.getElementById("key").innerHTML="You pressed Number key"
}

if (keypressed>=37 && keypressed<=40)
{
    arrowkey()
    document.getElementById("key").innerHTML="You pressed Arrow key"
}

if ((keypressed==17)||(keypressed==18)||(keypressed==27))
{
    specialkey()
    document.getElementById("key").innerHTML="You pressed Special key"
}

if ((keypressed==13)||(keypressed==127)||(keypressed==16))
{
    otherkey()
    document.getElementById("key").innerHTML="You pressed Other key"
}
}

function alphabetkey() {
    img_image="Alpkey.png"
    add()
}

function numberkey() {
    img_image="numkey.png"
    add()
}

function arrowkey() {
    img_image="Arrkey.png"
    add()
}

function specialkey() {
    img_image="spkey.png"
    add()
}

function otherkey() {
    img_image="otherkey.png"
    add()
}