var canvas = new fabric.Canvas('myC');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    })
}


function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(150);
        block_image_object.scaleToHeight(140);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    console.log("inside_mykey")

}
// window.addEventListener("keydown", my_keydown);

// function my_keydown(e)
// {
//     console.log("inside_mykey")
//     keyPressed = e.keyCode ;
//     if (keyPressed == '67') new_image("cloud.jpg");

//     if (keyPressed == '76') new_image("light_green.png");

//     if (keyPressed == '82') new_image("roof.jpg");

//     if (keyPressed == '87') new_image("wall.jpg");

//     if (keyPressed == '76') new_image("light_green.png");

//     if (keyPressed == '68') new_image("dark_green.png");

//     if (keyPressed == '85') new_image("unique.png");

//     if (keyPressed == '84') new_image("trunk.jpg");

//     if (keyPressed == '71') new_image("ground.png");

if(keyPressed=='37')
    Left();

    if(keyPressed=='38')
    Up();

    if(keyPressed=='39')
    Right();

    if(keyPressed=='40')
    Down(); 




// }
