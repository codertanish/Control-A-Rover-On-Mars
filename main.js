canvas=document.getElementById("myCanvas")

ctx=canvas.getContext("2d");

 rover_width=100;
 rover_height=90;


 mars_pics=["Mars1.jpeg", "Mars2.jpeg", "Mars3.jpeg", "Mars4.jpeg"];


random_index=Math.floor(Math.random() * 4);



 bg_image=mars_pics[random_index];

 rover_image="rover.png";

 rover_x=10;

 rover_y=10;

 function add(){
bg_imgTag = new Image();
bg_imgTag.onload = uploadBg;
bg_imgTag.src = bg_image;

rover_imgTag = new Image();
rover_imgTag.onload = uploadRover;
rover_imgTag.src = rover_image;



 }

 function uploadBg(){
ctx.drawImage(bg_imgTag, 0, 0, canvas.width, canvas.height);
 }

 function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
 }

window.addEventListener("keydown", my_keydown)

function my_keydown(e){
    keyPressed= e.keyCode;

console.log(keyPressed);

if(keyPressed == '37')
{
    left();
console.log("left");

}

if(keyPressed == '38')
{
    up();
console.log("up");

}

if(keyPressed == '39')
{
    right()
console.log("right");

}

if(keyPressed == '40')
{
    down();
console.log("down");

}
}

function left(){
if(rover_x >= 0){
rover_x = rover_x - 10;
console.log("when left arrow pressed, y= " + rover_x + " | y = " + rover_y);
uploadBg();
uploadRover();


}
}



function up(){
    if(rover_y >= 0){
    rover_y = rover_y - 10;
    console.log("when up arrow is pressed, y= " + rover_x + " | y = " + rover_y);
    uploadBg();
    uploadRover();
    
    
    }
    }


    function down(){
        if(rover_y >=500){
        rover_y = rover_y + 10;
        console.log("when down arrow is pressed, y= " + rover_x + " | y = " + rover_y);
        uploadBg();
        uploadRover();
        
        
        }
        }


        function right(){
            if(rover_x >= 0){
            rover_x = rover_x + 10;
            console.log("when right arrow is pressed, y= " + rover_x + " | y = " + rover_y);
            uploadBg();
            uploadRover();
            
            
            } 
            }