//Create variables here
var dog, happyDog, database, foodS, foodStock ,foodIMG, dogIMG



function preload()
{
  //load images here
  dogIMG=loadImage("Images/dogimg.png")
  happyDog=loadImage("Images/dogimg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250)
  dog.addImage(dogIMG)
  dog.scale=0.1
  database = firebase.database(); 
  foodStock=database.ref('Food');
    foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog)
  }
    noStroke()
    textSize(25)
    fill("white")
    text("Milk Bottles left:  "+foodS,150,150)
  
    stroke("yellow")
    textSize(25)
    fill("white")
    text("Press Up Arrow To Feed Dog",100,50)




  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1
  }
database.ref('/').update({
  Food:x
})
}





