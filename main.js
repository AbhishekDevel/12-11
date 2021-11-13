var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");

var click = 1
var click2 = 0

function boxSlide() {
  if (click < 4 && click2 == 0) {
    click += 1;
    changeBox();
    if (click == 4) {
      click2 = 1;
    }
  } else if (click2 == 1) {
    click = click - 1;
    changeBox();
    if (click == 1) {
      click2 = 0;
    }
  }
}

function changeBox() {
  if (click == 1) {
    card1.style.transform = "translateX(0px)";
    card2.style.transform = "translateX(-100px)";
    card3.style.transform = "none";
    card4.style.transform = "none";

  } else if (click == 2) {
    card1.style.transform = "translateX(-220px)";
    card2.style.transform = "translateX(-320px)";
    card3.style.transform = "translateX(-320px)";
    card4.style.transform = "none";

  } else if (click == 3) {
    card1.style.transform = "translateX(-440px)";
    card2.style.transform = "translateX(-540px)";
    card3.style.transform = "translateX(-540px)";
    card4.style.transform = "translateX(-540px)";

  } else if (click == 4) {
    card1.style.transform = "translateX(-660px)";
    card2.style.transform = "translateX(-760px)";
    card3.style.transform = "translateX(-760px)";
    card4.style.transform = "translateX(-760px)";
  }
};