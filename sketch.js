var w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19,w20,w21,w22,w23,w24,w25,w26,w27,w28,w29,w30,w31,w32,w33,w34,w35,w36,w37,w38,w39
var w40,w41,w42,w43,w44,w45,w46,w47,w48,w49,w50,w51,w52,w53,w54,w55,w56,w57,w58,w59,w60,w61,w62,w63,w64,w65,w66,w67,w68,w69,w70
var a,b
var c,d
var e
var c1,c2,c3,c4,c5,c6,c6,c7

var wallsGroup;
function preload(){
  c =  loadImage("coolguy.png")
  d = loadImage("witch.png")

}



function setup(){
  createCanvas(600,600)
  wallsGroup=new Group()

//The Outer-walls of the game

  w1 = createSprite(300,2,600,4)
  w1.shapeColor="black"
  w2 = createSprite(300,598,600,4)
  w2.shapeColor="black"
  w3 = createSprite(2,25,5,50)
  w3.shapeColor="black"
  w4 = createSprite(2,350,5,500)
  w4.shapeColor="black"
  w5 = createSprite(598,250,5,500)
  w5.shapeColor="black"
  w6 = createSprite(598,575,5,50)
  w6.shapeColor="black"

//Inner-walls of the game 

  w7 = createSprite(75,50,150,4)
  w7.shapeColor="black"
  w8 = createSprite(50,100,100,4)
  w8.shapeColor="black"
  w9 = createSprite(525,500,150,4)
  w9.shapeColor="black"
  w10 = createSprite(600-37.5,550,75,4)
  w10.shapeColor="black"

  w11 = createSprite(290,25,4,50)
  w11.shapeColor="black"
  w12 = createSprite(448,575,4,50)
  w12.shapeColor="black"
  w13 = createSprite(175,575,4,50)
  w13.shapeColor="black"
  w14 = createSprite(475,25,4,50)
  w14.shapeColor="black"
  w15 = createSprite(575,200,50,4)
  w15.shapeColor="black"
  w16 = createSprite(25,305,50,4)
  w16.shapeColor="black"

  w17 = createSprite(550,50,4,150)
  w17.shapeColor="black"
  w18 = createSprite(527,125,50,4)
  w18.shapeColor="black"
  w19 = createSprite(527,315,50,4)
  w19.shapeColor="black"
  w20 = createSprite(527,450,50,4)
  w20.shapeColor="black"
  w21 = createSprite(550,255.5,4,115)
  w21.shapeColor="black"
  w22 = createSprite(500,125,4,80)
  w22.shapeColor="black"
  
  w23 = createSprite(500,292,4,50)
  w23.shapeColor="black"
  w24 = createSprite(500,475,4,54)
  w24.shapeColor="black"
  w25 = createSprite(414.5,50,125,4)
  w25.shapeColor="black"
  w26 = createSprite(476,87,50,4)
  w26.shapeColor="black"
  w27 = createSprite(476,269,50,4)
  w27.shapeColor="black"
  w28 = createSprite(450,175,4,70)
  w28.shapeColor="black"
  w29 = createSprite(450,380,4,120)
  w29.shapeColor="black"
  w30 = createSprite(522,380,147,4)
  w30.shapeColor="black"


w31 = createSprite(218,300,100,4)
  w31.shapeColor="black"
  w32 = createSprite(168,324,4,50)
  w32.shapeColor="black"
  w33 = createSprite(194,350,55,4)
  w33.shapeColor="black" 
  w34 = createSprite(233,550,120,4)
  w34.shapeColor="black"
  w35 = createSprite(220,450,4,200)
  w35.shapeColor="black"
  w36 = createSprite(267,400,4,200)
  w36.shapeColor="black"

  w37 = createSprite(370,550,50,4)
  w37.shapeColor="black"
  w38 = createSprite(347,494,4,112)
  w38.shapeColor="black"
  w39 = createSprite(400,440,104,4)
  w39.shapeColor="black"


  w40 = createSprite(74,150,50,4)
  w40.shapeColor="black"
  w41 = createSprite(74,200,50,4)
  w41.shapeColor="black"
  w42 = createSprite(98,175,4,50)
  w42.shapeColor="black"
  w43 = createSprite(50,252,4,109)
  w43.shapeColor="black"
  w44 = createSprite(50,500,4,200)
  w44.shapeColor="black"
  w45 = createSprite(100,500,4,50)
  w45.shapeColor="black"
  w46 = createSprite(100,340,4,180)
  w46.shapeColor="black"

  w47 = createSprite(160,252,120,4)
  w47.shapeColor="black"
  w48 = createSprite(160,477,120,4)
  w48.shapeColor="black"
  w49 = createSprite(125,428,50,4)
  w49.shapeColor="black"

  w50 = createSprite(220,204,4,100)
  w50.shapeColor="black"
  w51 = createSprite(260,155,184,4)
  w51.shapeColor="black"
  w52 = createSprite(168,160,4,90)
  w52.shapeColor="black"
  w53 = createSprite(220,65,4,50)
  w53.shapeColor="black"
  w54 = createSprite(350,103,4,110)
  w54.shapeColor="black"
  w55 = createSprite(310,88,184,4)
  w55.shapeColor="black"
  w56 = createSprite(425,140,55,4)
  w56.shapeColor="black"
  w57 = createSprite(320,290,4,160)
  w57.shapeColor="black"
  w58 = createSprite(330,210,130,4)
  w58.shapeColor="black"
  w59 = createSprite(265,233,4,50)
  w59.shapeColor="black"
  w60 = createSprite(396,175,4,74)
  w60.shapeColor="black"
  

  




  w61 = createSprite(400,463,4,50)
  w61.shapeColor="black"

  w62 = createSprite(427,320,50,4)
  w62.shapeColor="black"
  w63 = createSprite(400,320,4,100)
  w63.shapeColor="black"
  w64 = createSprite(293,368,50,4)
  w64.shapeColor="black" 
 

    //add each wall to the group
    wallsGroup.add(w1);
    wallsGroup.add(w2);
    wallsGroup.add(w3);
    wallsGroup.add(w4);
    wallsGroup.add(w5);
    wallsGroup.add(w6);
    wallsGroup.add(w7);
    wallsGroup.add(w8);
    wallsGroup.add(w9);
  
    wallsGroup.add(w10);
    wallsGroup.add(w11);
    wallsGroup.add(w12);
    wallsGroup.add(w13);
    wallsGroup.add(w14);
    wallsGroup.add(w15);
    wallsGroup.add(w16);
    wallsGroup.add(w17);
    wallsGroup.add(w18);
    wallsGroup.add(w19);
  
    wallsGroup.add(w20);
    wallsGroup.add(w21);
    wallsGroup.add(w22);
    wallsGroup.add(w23);
    wallsGroup.add(w24);
    wallsGroup.add(w25);
    wallsGroup.add(w26);
    wallsGroup.add(w27);
    wallsGroup.add(w28);
    wallsGroup.add(w29);
  
    wallsGroup.add(w30);
    wallsGroup.add(w31);
    wallsGroup.add(w32);
    wallsGroup.add(w33);
    wallsGroup.add(w34);
    wallsGroup.add(w35);
    wallsGroup.add(w36);
    wallsGroup.add(w37);
    wallsGroup.add(w38);
    wallsGroup.add(w39);
  
    wallsGroup.add(w40);
    wallsGroup.add(w41);
    wallsGroup.add(w42);
    wallsGroup.add(w43);
    wallsGroup.add(w44);
    wallsGroup.add(w45);
    wallsGroup.add(w46);
    wallsGroup.add(w47);
    wallsGroup.add(w48);
    wallsGroup.add(w49);
  
    wallsGroup.add(w50);
    wallsGroup.add(w51);
    wallsGroup.add(w52);
    wallsGroup.add(w53);
    wallsGroup.add(w54);
    wallsGroup.add(w55);
    wallsGroup.add(w56);
    wallsGroup.add(w57);
    wallsGroup.add(w58);
    wallsGroup.add(w59);
  
    wallsGroup.add(w60);
    wallsGroup.add(w61);
    wallsGroup.add(w62);
    wallsGroup.add(w63);
    wallsGroup.add(w64);

  a = createSprite(60,75)
  a.addImage(c)
  a.scale = 0.3

  a.setCollider("rectangle",0,0,50,50)

  e = createSprite(575,525,40,40)
  e.visible = false

  c1 = createSprite(95,75,110,30)
  c2 = createSprite(135,155,30,170)
  c3 = createSprite(135,230,150,30)
  c4 = createSprite(75,340,30,250)
  c5 = createSprite(145,450,120,30)


}

function draw() {
  background("lightblue")
  drawSprites()

  if (keyDown("left")){
    a.x-=5
  }
  if (keyDown("right")){
    a.x+=5
  }
  if (keyDown("down")){
    a.y+=5
  }
  if (keyDown("up")){
    a.y-=5
  }
  
  if (a.isTouching(wallsGroup)){
    a.x=60
    a.y=75
  }
  if (a.isTouching(e)){
    textSize(30)
    stroke("white")
    strokeWeight(5)
    fill("black")
    text("WELL DONE",200,300)

  }
  setTimeout(()=>{
    b= createSprite(20,75)
    b.addImage(d)
    b.scale=0.6
  }, 5000);
}

function witchMovement()
{

}