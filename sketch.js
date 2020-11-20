//Create variables here
var dog;
var happyDog;
 var database;
 var food;
var foodStock;

function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png")
  happyDogImg=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  database=firebase.database();
  dog=new dog(200,200,100,50);
  
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  

  drawSprites();
  //add styles here
  if(keyWentDown(UP_ARROW)){
writeStock(food);
dog.addImage(happyDogImg);


textSize(32);
text('PRESS UP_ARROW KEY TO FEED MILK TO DOG);', 10, 30);
fill(0,80,78);

  }

}
function readStock(data){
    
food=data.val();
}

function writeSrtock(x){

  if(x<-0){
x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}

