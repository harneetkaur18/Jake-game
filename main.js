var canvas=document.getElementById("abx")
ctx=canvas.getContext("2d")
var Jakex=150
var Jakey=50
Jake_width=100
Jake_height=100

background_image="https://hips.hearstapps.com/hmg-prod/images/maldivesfloatingcity-main-render-2021-1619549353.jpeg"
jake_image="jake.png"

function add(){
    bg = new Image();
    bg.src = background_image;
    bg.onload = uploadbackground;
    
    jk = new Image();
    jk.src = jake_image;
    jk.onload = uploadjake;
}
function uploadbackground(){
    ctx.drawImage(bg,0,0,canvas.width, canvas.height);
}
function uploadjake(){
    ctx.drawImage(jk, Jakex, Jakey, Jake_width, Jake_height);
}

window.addEventListener("keydown", mykey)
function mykey(e){
    keypressed = e.keyCode;
    console.log(keypressed)

    if(keypressed=="37"){
        left();
    }
    if(keypressed=="38"){
        up();
    }
    if(keypressed=="39"){
        right();
    }
    if(keypressed=="40"){
        down();
    }
}
function left(){
    if(Jakex>0){
        Jakex=Jakex-30
        uploadbackground();
        uploadjake()
    }
}
function up(){
    if(Jakey>0){
        Jakey=Jakey-30
        uploadbackground();
        uploadjake();
    }
}
function right(){
    if(Jakex<900){
        Jakex=Jakex+30
        uploadbackground();
        uploadjake();
    }
}
function down(){
    if(Jakey<400){
        Jakey=Jakey+30
        uploadbackground();
        uploadjake();
    }
}
