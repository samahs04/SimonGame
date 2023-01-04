var colors=["green","red","yellow","blue"];
var level=0
var started=false;
var patternColor=[];
var BtnUser=[];
//game btn////
function nextSequence(){
  btnClick=[];
  level++;
  $("#levelTitle").text("level "+level);
  var randomColor=colors[Math.floor(Math.random()*4)];
  patternColor.push(randomColor);
  playSound(randomColor);
  animationBtn(randomColor);
}
///////start///////
$(".startBtn").click(function startGame() {
  if(!started){
    $("#levelTitel").text("Level "+level);
    nextSequence();
    started=true;
  }})
$(".startAgain").hide();
$(".start").click(function(){
  $(this).hide();
  startGame();
})
//////start again//////
$(".startAgain").click(function(){
  $(this).hide();
  startGame();
})
///////btn user click/////
$(".btn").click(function(){
  var btnClick=$(this).attr("id");
  BtnUser.push(btnClick);
  playSound(btnClick);
  animationBtn(btnClick);
  animatePress(btnClick);
  checkAnswer(BtnUser.length-1);
})
/////play again//////
function checkAnswer(currentLevel){
  if(BtnUser[currentLevel]===patternColor[currentLevel]){
    if(BtnUser.length===patternColor.length){
      setTimeout(function(){
        nextSequence();
      }, 1000);
    }
  }
    else{
      playSound("wrong");
      $("body").addClass("gameOver");
      $('#levelTitle').text("Game Over");
      setTimeout(function(){
        $("body").removeClass("gameOver");
      },200);
      $(".startAgain").show();
      startOver();
    }
  }
////////start over/////
function startOver(){
  patternColor=[];
  BtnUser=[];
  level=0;
  started=false;
}
//////sound & animate///////
function playSound(music){
  var audio=new Audio("sounds/"+music+".mp4");
  audio.play();
}
function animationBtn(fade){
  $("#"+fade).fadeIn(100).fadeOut(100).fadeIn(100);
}
function animatePress(pressed){
  $("#"+pressed).addClass("pressed");
  setTimeout(function(){
    $("#"+pressed).removeClass("pressed");
  },100);
}
