//Create variables here
var dog
var happyDog
var database
var foodS
var foodStock

function preload()
{
	//load images here
  dogImage = loadImage("dogImg.png")
  happyDogImage = loadImage("dogImg2.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(50,50,10,10)
  dog = addImage()
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {
  background(46,139,87)
  drawSprites();
  textSize(20)
  fill("lime")
  text("Note: Press UP_ARROW Key To Feed Drago Milk!")
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}