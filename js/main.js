window.onscroll = function() {progressoScroll()};

function progressoScroll() {
  var scrollJanela = document.body.scrollTop || document.documentElement.scrollTop;
  var altura = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var progresso = (scrollJanela / altura) * 100;
  document.getElementById("barraProg").style.width = progresso + "%";
} 

function menuResponsivo() {
  var x = document.getElementById("menuSuperior");
  if (x.className === "menusuperior") {
    x.className += " responsive";
  } else {
    x.className = "menusuperior";
  }
} 