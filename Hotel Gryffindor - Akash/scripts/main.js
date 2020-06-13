// For Navigation hamBurger

function openNav() {
    document.getElementById("topnav").style.display = "block";
    document.getElementById("main-nav").style.zIndex = "-1";
  }
  
  function closeNav() {
    document.getElementById("topnav").style.display = "none";
    document.getElementById("main-nav").style.zIndex = "1";
  }

// End of Navigation